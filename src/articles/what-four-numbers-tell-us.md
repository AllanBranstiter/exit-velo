---
layout: article.njk
title: "Examining the Swings of the 2026 Rookie Class"
subtitle: "Early production numbers mean almost nothing on their own — but read them against bat speed, exit velocity, and swing length, and they start to tell you something."
category: Fantasy Baseball
level: Beginner
date: 2026-03-30T12:00:00
excerpt: "Sal Stewart hit .700 against Boston in his first major league series. His OPS was 2.069. His wRC+, a stat that adjusts for park and league and says 100 is average, was 444. He also has the second-longest swing in this rookie class."
description: "The 2026 rookie class just broke records. Here's how to use bat speed, max exit velocity, and swing length to figure out which hot starts are real and which ones won't last."
permalink: /articles/examining-the-swings-of-the-2026-rookie-class.html
author: Allan Branstiter
draft: false
keywords:
  - "2026 rookies"
  - "bat speed"
  - "swing length"
  - "max exit velocity"
  - "sprint speed"
  - "Sal Stewart"
  - "Owen Caissie"
---

<details style="margin:0 0 2rem;background:#fdf2ed;border-left:4px solid #c2703e;border-radius:0.25rem;padding:0;width:100%;box-sizing:border-box;">
<summary style="cursor:pointer;padding:0.75rem 1rem;font-weight:600;font-size:0.9rem;color:#7c4a2a;list-style:none;display:flex;align-items:center;gap:0.5rem;">
<span style="transition:transform 0.2s;display:inline-block;">&#9654;</span> TLDR
</summary>
<div style="padding:0.75rem 1rem 1rem;font-size:0.88rem;line-height:1.6;color:#5a3a24;">

<p>The 2026 rookie class opened the season with record-breaking numbers, but the article's argument is that early box scores are almost meaningless on their own. The real signal lives in four physical metrics that stabilize fast and describe the tool under the performance: <span class="term" data-term="bat speed">bat speed</span>, <span class="term" data-term="max exit velocity">max exit velocity</span>, <span class="term" data-term="swing length">swing length</span>, and <span class="term" data-term="sprint speed">sprint speed</span>. Owen Caissie and Carter Jensen have nearly identical physical profiles, yet one had a monster first series and the other struggled, which is exactly the point: the tools underneath are what matter, not the results from 10 plate appearances. Sal Stewart's .700 average and 2.069 OPS are genuinely exciting, but his bat path travels nearly eight feet through the zone, and that's the number that will follow him all season.</p>

<p style="margin-top:1rem;"><strong>If you're new to baseball:</strong> Think of these four numbers as a physical scouting report on a hitter's body, not a scoreboard. A short, fast swing is like a quick jab that's hard to dodge; a long, powerful swing is like a big haymaker that a smart opponent can time and exploit. The early stats tell you who got lucky in round one. The physical metrics tell you who actually belongs in the ring.</p>

<p style="margin-top:1rem;"><strong>If you manage a fantasy team:</strong> Caissie is the clearest buy in this class: elite bat speed, elite max exit velocity, and a compact swing length in the 18th percentile. The first-series production confirmed what the tools already said. Stewart is the hardest call: the raw power is real, but a 93rd-percentile swing length is a legitimate red flag for strikeouts and streakiness, so roster him as a boom-or-bust starter, not an anchor. Moisés Ballesteros's ugly early <span class="term" data-term="wrc+">wRC+</span> is almost certainly noise given his 80th-percentile max exit velocity and compact swing, making him a low-cost stash with real upside.</p>

</div>
</details>

Sal Stewart hit .700 against Boston in his first major league series. His <span class="term" data-term="wrc+">wRC+</span> (at the time of this writing) is 444, and his OPS was 2.069.

He also has the second-longest swing in this rookie class. His bat path travels 7.84 feet through the zone, 93rd percentile among 2025 MLB qualifiers. That number won't appear in any headline this week, but it's the one most likely to define what Stewart's career actually looks like.

Rookies as a group have opened 2026 doing something that hasn't happened since the sport started keeping records. Through the first three games of the season, first-year players were collectively batting .309, compared to only .226 for veterans. Collectively they've got 15 home runs, a .622 slugging percentage, a 1.008 OPS — all records since 1900 through any team's first three games. It's an extraordinary opening week.

Some of it is real. Not all of it is.

The way to tell the difference is to read the early box scores against four physical metrics that stabilize much faster than rate stats: <span class="term" data-term="bat speed">bat speed</span>, <span class="term" data-term="max exit velocity">max exit velocity</span>, <span class="term" data-term="swing length">swing length</span>, and <span class="term" data-term="sprint speed">sprint speed</span>. These numbers describe the tool underneath the performance. They're not immune to small samples, but a 114-mph exit velocity in week one isn't a fluke. Neither is a 75-mph bat speed. And neither is a swing that travels nearly eight feet through the hitting zone.

## Four Numbers, Brief Definitions

Bat speed is the speed of the barrel at contact, measured in miles per hour. The MLB average bat speed is around 72 mph. A rookie with a bat speed of 75 mph or above has rotational athleticism that can't be taught in a batting cage. A high bat speed helps players hit the ball harder, and it helps them cover up mistakes at the plate.

Max exit velocity is the hardest a player has hit the ball. A reading of 112 mph or above means the player is physically capable of 30-plus home run production once his timing and approach develop. It doesn't matter that he struck out three times in his debut. It's the clearest indication of a player's raw power.

Swing length is how far the bat travels from trigger to contact, measured in feet. League average is around 7.3. Under 7.0 is compact: the hitter can wait a fraction of a second longer before committing to a pitch, which is a real advantage against elite velocity and sharp breaking balls. Above 8.0 is long: more raw power in theory, but a bat path that gives pitchers a consistent location to attack. The combination scouts look for is high bat speed with a short swing. The two don't always come together.

Sprint speed in this dataset comes from FanGraphs' Speed Score, a composite 0-to-10 measure. The FG score is directionally reliable: 7-plus is elite, 4 to 6 is above average, 0 to 2 means the player isn't beating out much weak contact. Speed matters at this career stage because it creates a floor. A fast player raises his <span class="term" data-term="babip (batter)">BABIP</span> organically and tends to hold premium defensive positions that buy him organizational runway while his bat develops.

<script>
function tableToggle(prefix, view) {
  var raw = document.getElementById(prefix + '-raw');
  var pct = document.getElementById(prefix + '-pct');
  var btnRaw = document.getElementById(prefix + '-btn-raw');
  var btnPct = document.getElementById(prefix + '-btn-pct');
  if (view === 'raw') {
    raw.style.display = ''; pct.style.display = 'none';
    btnRaw.style.background = '#16a34a'; btnRaw.style.color = 'white';
    btnPct.style.background = 'white';   btnPct.style.color = '#6b7280';
  } else {
    raw.style.display = 'none'; pct.style.display = '';
    btnRaw.style.background = 'white';   btnRaw.style.color = '#6b7280';
    btnPct.style.background = '#16a34a'; btnPct.style.color = 'white';
  }
}
</script>

<div class="viz">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
<p class="viz__title" style="margin-bottom:0;">2026 Rookie Class — Series 1 Physical Profile</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="s1-btn-raw" onclick="tableToggle('s1','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="s1-btn-pct" onclick="tableToggle('s1','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table>
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Bat Speed</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Max EV</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Swg Lng †</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Spd (FG)</th>
    </tr>
  </thead>
  <tbody id="s1-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Samuel Basallo</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">75.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">112.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.36 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">1.4</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Owen Caissie</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">74.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">114.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">6.92 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">2.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Yorke</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">113.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.39 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">4.1</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Moisés Ballesteros</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">112.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.04 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">4.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carter Jensen</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">74.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">112.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">6.89 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">1.9</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">TJ Rumfield</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">70.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">106.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">7.00 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0.1</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Williams</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">73.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">109.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.59 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">4.0</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tristan Peters</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">68.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">101.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.11 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0.1</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nathan Church</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">69.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">107.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.15 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">5.3</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Sal Stewart</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">112.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">7.84 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">2.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alex Freeland</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">70.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">107.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.19 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">5.9</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Beavers</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">107.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.44 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">4.2</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Justin Crawford</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">71.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">101.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.21 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">1.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chase DeLauter</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">111.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.38 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">2.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brice Matthews</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">73.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">108.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.25 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">5.5</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kevin McGonigle</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">73.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">105.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.11 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">1.6</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">JJ Wetherholt</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">71.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">101.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.41 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">7.5</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Benge</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">69.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">105.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">6.20 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">7.5</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Munetaka Murakami</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">74.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">103.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">7.64 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0.1</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kazuma Okamoto</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">105.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">8.06 ft</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">2.0</td>
    </tr>
  </tbody>
  <tbody id="s1-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Samuel Basallo</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">94th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">72nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">7th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Owen Caissie</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">88th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">18th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">21st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Yorke</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">81st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">53rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Moisés Ballesteros</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">67th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">80th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">63rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carter Jensen</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">13th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">TJ Rumfield</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">31st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">9th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">23rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Williams</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">38th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">51st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tristan Peters</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nathan Church</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">17th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">74th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Sal Stewart</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">77th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">93rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">21st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alex Freeland</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">36th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">12th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">39th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">83rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Beavers</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">16th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">55th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Justin Crawford</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">42nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">41st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">9th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chase DeLauter</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">21st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brice Matthews</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">29th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">77th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kevin McGonigle</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">76th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">9th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">JJ Wetherholt</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">62nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">96th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Benge</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">4th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">1st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">96th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Munetaka Murakami</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;white-space:nowrap;">86th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">82nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">0th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kazuma Okamoto</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;white-space:nowrap;">66th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">97th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;white-space:nowrap;">14th</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">† Swing Length color coding is inverted: <span style="color:#16a34a;font-weight:600;">green</span> = compact (≤7.0 ft), better contact and pitch recognition. <span style="color:#dc2626;font-weight:600;">Red</span> = long (≥7.8 ft), more raw power potential but higher strikeout risk. Spd = FanGraphs Speed Score (0–10 composite), not Statcast Sprint Speed in ft/sec. Percentiles vs. 2025 MLB qualifiers (PA ≥ 50, n=537).</p>
</div>

The most important profiles in this class are **Owen Caissie** of the Cubs and **Carter Jensen** of the Royals, and they illustrate the two things early production can tell you.

Caissie's tool profile is the most encouraging in the class. His max exit velocity is 114.0 mph, 88th percentile among 2025 qualifiers. His bat speed is 74.8 mph, 91st percentile, and he has a compact swing. Elite force generation with a compact, efficient path through the zone — that's the combination coaches work their entire careers trying to build. His first series in 2026 showed why: .500 average, 1.500 OPS, 325 wRC+, walk-off home run to finish a sweep.

Jensen's tool profile is nearly identical, but his production is worse. His bat speed is also 74.8 mph and his max exit velocity is 112.7 mph. His swing is 6.89 feet, which is even shorter than Caissie's. In 10 plate appearances, Jensen hit .125 with a 74 wRC+ and a 40 percent strikeout rate. That 40 percent isn't a signal, yet. It's ten plate appearances against a major league rotation. Jensen has the swing to succeed, even if it hasn't produced yet.

**Sal Stewart**, the NL Player of the Week, is the most difficult read in this class right now, because he's the inverse of Jensen: he's produced fantastic outcomes so far, but his swing suggests he shouldn't.

His max exit velocity is 77th percentile. That's real power. But his swing length is 93rd percentile — nearly eight feet of bat path through the zone. Big league pitchers will inevitably challenge him with fastballs up and in, and with late movement on the outer half of the plate. The week-one production against Boston was stunning. But don't be surprised if he's a little streaky. On the other hand, Sal's showing a veteran's command of the strike zone, so his discipline will help him perform at a high level.

**Chase DeLauter** is in a similar position. His four home runs in four games against Seattle earned him AL Player of the Week, and he deserved it. But his tool profile is the most modest of any player in this class — 60th percentile max exit velocity, average bat speed, average swing length. Nothing in the physical profile predicts four home runs in a week. It happened, it's in the box score, and it will count. It's also not predictive the way Caissie's first week is predictive, because the tools aren't underneath it the same way. I'm also more than a little worried about his injury history. I'd love to be proven wrong, but the guy was healthy enough to play in only 138 minor league games between 2022 and 2025.

**Moisés Ballesteros** has a -10 wRC+ through 11 plate appearances this season, a .100 average, and a 36 percent strikeout rate. He has the 80th-percentile max exit velocity in this class and a swing length at the 26th percentile. The box score looks like a player who is overmatched, but his swing profile looks like a player who is going through a rough first series. His compact swing and above-average speed (63rd percentile) give him tools on multiple sides of the plate once the timing settles.

**Samuel Basallo** is another guy with a sweet swing who's currently struggling. His bat speed is 94th percentile (75.5 mph), the highest in this class. But he has zero home runs and a 44 wRC+ through 12 plate appearances. He also struggled last season, but there's enough in his profile to keep me holding on to him in dynasty leagues.

**Munetaka Murakami** is the most pleasant surprise so far, and his profile deserves highlighting. His bat speed is 86th percentile, but his max exit velocity so far has been below average compared to the rest of the league. This is an unusual disconnect for a player generating that much swing speed. The working theory was that an NPB-to-MLB timing adjustment was suppressing the exit velocity readings, but that doesn't seem to have hindered him much. The big dude's got three home runs and a 1.872 OPS through 13 plate appearances. I'm watching his max exit velocity over the next few weeks. If it climbs toward where his bat speed says it should be, you're looking at one of the more interesting power profiles in this class.

**JJ Wetherholt** hit a home run 425 feet to center field on a fastball that was a full ball's width off the outside corner. He's listed at 5-foot-9. His bat speed is 51st percentile, which isn't too bad for a 5-foot-9 guy with short levers (shorter players tend to have lower bat speed). His max exit velocity is also below average compared to the league. But the guy's a freakish athlete. The pitch he turned into a bomb was an outside pitch that he caught up to and pulled. Most players would have missed it or fouled it off. But that's the kind of thing athleticism will buy you. There's more strength to Wetherholt there than the swing metrics suggest.

**Carson Benge** also hit a dinger to center field — a hanging breaking ball that he sent 385 feet in the sixth inning of his debut. He has a 4th-percentile max exit velocity and a 26th-percentile bat speed, so you wouldn't expect a lot of power out of him. But he's got a beautiful, compact swing (the most compact swing in this class) that can punish mistakes by pitchers. Don't expect him to hit a ton of home runs, but with a swing like his (and speed to boot),  I think he's going to be a reliable bat.

**Kevin McGonigle** went 4-for-5 in his major league debut — the 25th player to get four hits in a first game. His FanGraphs speed score is 9th percentile, which is surprising given the fact that three of his first four hits involved beating out strong throws. His bat speed is 76th percentile, which is legitimate, but I'd keep an eye on his 5th percentile max exit velocity. It's clear that he has quick hands and a compact swing, but I'll need to see more EV before I believe in his power.

**Justin Crawford** hits the ball in the 80-to-87-mph range, which is soft by MLB standards. His value right now is his plus-plus speed, and his first series reflected that. Nothing in his tool profile says this is a power hitter. Everything in it says this is a player who makes contact and runs. We'll need a few more months before his contact stats stabilize. Then we'll know what his bat can do at this level.

The hype around this rookie class is especially loud right now. Records broken, historic numbers, two Player of the Week awards going to first-year players for the first time in a decade. All of that is worth celebrating. Some of these players are genuinely as good as this week suggests.

The tool profile is how you start to tell which ones are real and which ones ain't. Caissie's 114-mph exit velocity and 91st-percentile bat speed don't change because he had a good first series. Ballesteros's 80th-percentile exit velocity and compact swing don't disappear because he hit .100. Stewart's 93rd-percentile swing length is still 93rd percentile whether he's hitting .700 or .220.

The numbers we have now tell us what kind of players we have in this rookie class, but we'll need about 485 more at bats before we really know how good they are.

<figure style="margin:3rem auto 0;">
  <img src="/images/velo-celebrate.png" alt="Velo celebrating" style="display:block;margin:0 auto;width:25%;max-width:25%;">
</figure>
