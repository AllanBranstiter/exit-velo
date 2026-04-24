const CACHE_TTL = 15 * 60 * 1000;
const NL_CENTRAL_ID = 205;
const ROTOWIRE_REDS = "https://www.rotowire.com/baseball/news.php?team=CIN";

const cache = { standings: null, news: null };

const SHORT_NAMES = {
  "Cincinnati Reds": "Reds",
  "Chicago Cubs": "Cubs",
  "Milwaukee Brewers": "Brewers",
  "Pittsburgh Pirates": "Pirates",
  "St. Louis Cardinals": "Cardinals",
};

function standingsUrl() {
  const year = new Date().getFullYear();
  return `https://statsapi.mlb.com/api/v1/standings?leagueId=104&season=${year}&standingsTypes=regularSeason`;
}

function transactionsUrl() {
  const now = new Date();
  const fmt = d => `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
  const start = new Date(now - 30 * 24 * 60 * 60 * 1000);
  return `https://statsapi.mlb.com/api/v1/transactions?teamId=113&startDate=${fmt(start)}&endDate=${fmt(now)}`;
}

async function fetchJSON(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.text();
}

function isFresh(entry) {
  return entry && Date.now() - entry.timestamp < CACHE_TTL;
}

function scrapeRotoWire(html) {
  const pattern = /<a[^>]*class="news-update__player-link"[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>.*?<a[^>]*class="news-update__headline"[^>]*>([^<]+)<\/a>.*?<div class="news-update__timestamp">([^<]+)<\/div>/gs;
  const items = [];
  let match;
  while ((match = pattern.exec(html)) !== null) {
    items.push({
      description: `${match[2].trim()}: ${match[3].trim()}`,
      date: match[4].trim(),
      link: `https://www.rotowire.com${match[1].trim()}`,
      type: "news",
    });
  }
  return items;
}

async function fetchTransactions() {
  const json = await fetchJSON(transactionsUrl());
  const seen = new Set();
  return (json.transactions || [])
    .filter(t => {
      if (!t.description || seen.has(t.description)) return false;
      if (t.description.includes("changed number to")) return false;
      seen.add(t.description);
      return true;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
    .map(t => ({
      description: t.description,
      date: t.date,
      type: t.typeDesc || "",
    }));
}

export async function getStandings() {
  if (isFresh(cache.standings)) return cache.standings.data;

  try {
    const json = await fetchJSON(standingsUrl());
    const central = json.records.find(r => r.division?.id === NL_CENTRAL_ID);
    if (!central) return [];

    const teams = central.teamRecords.map(t => ({
      name: SHORT_NAMES[t.team.name] || t.team.name,
      wins: t.wins,
      losses: t.losses,
      pct: t.winningPercentage,
      gamesBack: t.gamesBack,
      streak: t.streak?.streakCode || "",
      isReds: t.team.id === 113,
    }));

    cache.standings = { data: teams, timestamp: Date.now() };
    return teams;
  } catch {
    return cache.standings?.data || [];
  }
}

export async function getRedsNews() {
  if (isFresh(cache.news)) return cache.news.data;

  try {
    const html = await fetchText(ROTOWIRE_REDS);
    const items = scrapeRotoWire(html).slice(0, 10);

    if (items.length > 0) {
      cache.news = { data: items, timestamp: Date.now() };
      return items;
    }

    const fallback = await fetchTransactions();
    cache.news = { data: fallback, timestamp: Date.now() };
    return fallback;
  } catch {
    try {
      const fallback = await fetchTransactions();
      cache.news = { data: fallback, timestamp: Date.now() };
      return fallback;
    } catch {
      return cache.news?.data || [];
    }
  }
}
