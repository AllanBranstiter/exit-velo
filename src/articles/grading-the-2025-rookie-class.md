---
layout: article.njk
title: Grading the Entire 2025 Rookie Class
subtitle: "Five Statcast process metrics that stabilize in under 150 plate appearances already separate the genuine breakouts from the players surviving on luck."
category: Fantasy Baseball
level: Intermediate
date: 2026-03-29T12:00:00
excerpt: "Jac Caglianone has a 46 wRC+ and an xwOBA of .321. Those numbers shouldn't be in the same sentence. His xwOBA tells us that he's making contact with the ball like a major league slugger, but his wRC+ says he's been deeply unproductive."
description: "Five Statcast process metrics that stabilize at 150 plate appearances grade the entire 2025 rookie class, sorting the genuine breakouts from the players running on luck before the box score catches up."
permalink: /articles/grading-the-2025-rookie-class.html
author: Allan Branstiter
draft: false
---

Jac Caglianone has a 46 <span class="term" data-term="wrc+">wRC+</span> and an <span class="term" data-term="xwoba">xwOBA</span> of .321. Those numbers shouldn't be in the same sentence.

His <span class="term" data-term="xwoba">xwOBA</span> tells us that he's making contact with the ball like a major league slugger, but his <span class="term" data-term="wrc+">wRC+</span> says he's been deeply unproductive. Both are accurate; they're just measuring different things.

Some stats don't give a clear picture right away because they need a big enough sample before they stabilize and tell us about a player's <span class="term" data-term="true talent">true talent</span>. Stats like batting average, xwOBA, <span class="term" data-term="woba">wOBA</span>, and <span class="term" data-term="wrc+">wRC+</span> can take 600 or more <span class="term" data-term="plate appearance">plate appearances</span> to stabilize. Caglianone's wRC+ and xwOBA don't agree because he has only 233 major league plate appearances.

So how do we assess the true talent of new players with few plate appearances? Fortunately, there are several Statcast metrics that require as little as 150 to stabilize.

## The Rookie Scorecard

All of the stats I used are publicly available on <span class="term" data-term="baseball savant">Baseball Savant</span> and FanGraphs, and they all carry meaningful signal by the time a player has 150 PA, well before other stats stabilize. I combined these stats to create what I'm calling The Rookie Scorecard.

**<span class="term" data-term="luck index">The Luck Index</span> (xwOBA minus <span class="term" data-term="woba">wOBA</span>):** A positive gap means a hitter is making quality contact, but the ball keeps finding fielders. A negative gap means their results are better than their contact quality warrants. In the long term, you'd rather make good contact than be lucky because luck (good or bad) always runs out. Contact quality sticks. Luck doesn't. We want young hitters who are at or above 0 here.

**<span class="term" data-term="consistency gap">The Consistency Gap</span> (90th percentile <span class="term" data-term="exit velocity">Exit Velocity</span> minus Average Exit Velocity (EV)):** Exit velocity measures how hard a hitter makes contact. But a single 112-mph blast doesn't automatically make someone a power hitter. The gap between the hardest 10% of contact and the typical contact tells you whether the elite exit velocities are normal for a hitter, or if they're the exception. A wide gap means the hard hits are outliers. A narrow gap means the hard contact is the baseline, not the exception.

**<span class="term" data-term="barrel rate (batter)">Barrel Rate</span>:** A <span class="term" data-term="barrel">barrel</span> requires exit velocity of at least 98 mph and a <span class="term" data-term="launch angle">launch angle</span> in the ideal range. Both have to align simultaneously, which makes barrels hard to fake. They stabilize quickly and are the clearest signal of reliable power production.

**Swinging Strike Rate (<span class="term" data-term="swstr%">SwStr%</span>):** This is the percentage of all pitches a batter sees that produce a swinging strike. If this number is consistently high, the hitter is struggling to make contact against major league pitching. SwStr% is the fastest-stabilizing contact quality indicator in the game. By 50 plate appearances, it's already telling a reliable story. If a young hitter can't make contact against major league pitching within that window and can't make the necessary adjustments to compensate by 150, it's a red flag. 

**Outside Pitch Swing Rate (<span class="term" data-term="o-swing%">O-Swing%</span>):** This is the percentage of pitches outside the strike zone that a batter swings at, also called chase rate. Chasing isn't always a bad thing. Many elite batters make good contact on pitches outside the zone. However, it's harder to sustain as pitchers adjust. O-Swing% reveals whether a prospect has the plate recognition to survive when pitchers find their weaknesses.

<p style="margin-top:1.5rem;padding-top:0.75rem;border-top:1px solid #e5e7eb;font-size:0.8rem;color:#6b7280;line-height:1.6;"><span style="font-weight:600;color:#374151;">A note on SwStr% and O-Swing%</span>: These stats are central to a batter's plate approach and can be improved over time. When you hear someone say that a player is "making adjustments to their plate approach," they're often addressing behaviors that affect their SwStr% and O-Swing%. An incremental improvement to SwStr% and O-Swing% is the signal to look for.</p>

## Top of the Class Studs

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
<p class="viz__title" style="margin-bottom:0;">2025 Rookie Class — A &amp; B</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="cls-ab-btn-raw" onclick="tableToggle('cls-ab','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="cls-ab-btn-pct" onclick="tableToggle('cls-ab','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Grade</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="luck index">Luck Idx</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="consistency gap">Cons. Gap</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="barrel rate (batter)">Barrel%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="swstr%">SwStr%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="o-swing%">O-Swing%</span></th>
    </tr>
  </thead>
      <tbody id="cls-ab-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Roman Anthony</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">303</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.004</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">15.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">22.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Max Muncy</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">220</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.008</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">23.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Luke Keaschall</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">207</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.038</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">6.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">22.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jakob Marsee</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">234</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.016</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">7.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">24.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Drake Baldwin</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">446</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.003</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">8.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Isaac Collins</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">441</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.022</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">20.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Edgar Quero</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">403</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.017</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">11.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">23.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Kurtz</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">489</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.047</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">18.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">26.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kyle Teel</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">297</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">26.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chase Meidroth</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">505</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.006</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">4.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">25.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Liam Hicks</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">390</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.003</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">4.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">20.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Caleb Durbin</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">506</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">5.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cole Young</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">257</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.023</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alejandro Osuna</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">176</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.066</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">6.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carlos Narváez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">446</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.022</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Javier Sanoja</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">342</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">14.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">5.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dalton Rushing</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">155</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.027</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">14.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">24.8%</td>
    </tr>
  </tbody>
  <tbody id="cls-ab-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Roman Anthony</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">303</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">37th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">90th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">96th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">94th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Max Muncy</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">220</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">91st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Luke Keaschall</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">207</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">7th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">37th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">93rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jakob Marsee</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">234</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">23rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">46th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">62nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">90th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Drake Baldwin</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">446</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">50th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">82nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">87th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Isaac Collins</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">441</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">83rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">98th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Edgar Quero</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">403</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">21st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">96th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">86th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">90th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Kurtz</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">489</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">44th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">99th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">83rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kyle Teel</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">297</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">49th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">84th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chase Meidroth</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">505</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">86th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">7th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">99th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">86th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Liam Hicks</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">390</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">38th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">24th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">99th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Caleb Durbin</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">506</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">54th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">96th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cole Young</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">257</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">82nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">81st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alejandro Osuna</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">176</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">92nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carlos Narváez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">446</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">71st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">49th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Javier Sanoja</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">342</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">81st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">8th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dalton Rushing</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">155</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">92nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">87th</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.5rem;font-size:0.75rem;color:#9ca3af;line-height:1.5;padding:0 0.25rem;"><span style="color:#16a34a;font-weight:600;">Green</span> = top quintile among batters with 50+ AB &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:600;">Red</span> = bottom quintile</p>
</div>

**Nick Kurtz** is the talk of this rookie class after his AL Rookie of the Year performance during is inaugural campaign. Oakland's first overall pick in 2023, he was a 55+ FV prospect on every major list before he ever took a major league at-bat — which means the Rookie Scorecard isn't discovering anything new here, it's confirming what scouts already saw. His Barrel Rate is elite, his power is reliable and consistent, and his discipline numbers don't have a red flag anywhere on the board. The only thing I'm even vaguely concerned about it that he's been "luckier" than average, but I think that has to do with playing in Sacramento and hitting the ball extremely hard than anythign else. OOPSY projects him for 35 <span class="term" data-term="home run">home runs</span>, 138 <span class="term" data-term="wrc+">wRC+</span>, and 3.6 WAR. Regression is always possible, but I think he's the real deal.

**Roman Anthony** comes in right behind him with a nearly identical process grade and 3.6 projected WAR. Anthony entered 2025 as a top-5 prospect on every credible list — the rare kind of hype that makes the data feel like a formality rather than a discovery. It mostly was. I actually like his approach better than Kurtz's, and I think he'll be less prone to streakiness.

There's less helium in **Drake Baldwin's** profile, but I think the 2025 NL Rookie of the Year is going to be a top catcher for several seasons to come. I'll take a catcher who can hit 20+ home runs while maintaining clean contact metrics and a solid discipline profile any day of the week.

**Jakob Marsee** is the best sleeper here. He has a 133 <span class="term" data-term="wrc+">wRC+</span>, four clean green signals across the model, and a Luck Index of minus .016 (which is basically neutral). His <span class="term" data-term="swstr%">SwStr%</span> and <span class="term" data-term="o-swing% (batter)">O-Swing%</span> are both in the 90th percentile among all players in the league, so he's got a great plate approach. He's only had 234 PA so far, so we'll see how he adapts as pitchers change how they throw to him. OOPSY projects 38 <span class="term" data-term="stolen base">stolen bases</span> for him in 2026, so he's also a speed threat. The market is pricing him as a decent bat with moderate upside, but his speed is being discounted. It shouldn't be.

**Dalton Rushing** is the other sleeper worth mentioning. His Barrel Rate is 14.0% (one of the strongest marks in the class), and he's shown better discipline than most of his class. I think playing time is the main reasons he's been overlooked. He's in the Dodgers system playing behind Will Smith at catcher. He could see more playing time at other positions, but that's tough to do in a roster that's as stacked as the Dodgers. On the other hand, the Dodgers aren't getting any younger, and I think if Rushing starts getting more starts the numbers will follow. One honest caveat: he's not on the 2026 FanGraphs Top 100, which means the prospect community isn't carrying the same enthusiasm the Scorecard suggests. That's not disqualifying, but it's worth knowing before you spend draft capital on the premise. Buy low and hold.

**Caleb Durbin** projects 26 steals and his on-base skills and speed give him real value in categories leagues. The power isn't there, but he's a grade B player priced like a roster filler. I'm not sure why Milwaukee traded him away, but I think Boston fans will be happy with him.

**Luke Keaschall's** discipline and speed (26 projected steals) are legitimate. His Luck Index was −.038 in 2025, but I think that's mostly due to the fact that he has only 207 AB. He lost a lot of time due to a broken arm, but that was from getting hit by a pitch — I'm not too worried about his injury profile. The rest of the profile looks clean, and he's got the speed and hustle to be electric. I think he'll be a favorite with Twins fans who are desperate for a reason to be optimistic. He's a buy.



## Big League Dudes

<div class="viz">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
<p class="viz__title" style="margin-bottom:0;">2025 Rookie Class — C</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="cls-c-btn-raw" onclick="tableToggle('cls-c','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="cls-c-btn-pct" onclick="tableToggle('cls-c','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Grade</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="luck index">Luck Idx</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="consistency gap">Cons. Gap</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="barrel rate (batter)">Barrel%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="swstr%">SwStr%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="o-swing%">O-Swing%</span></th>
    </tr>
  </thead>
      <tbody id="cls-c-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Eric Wagaman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">514</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.022</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Heriberto Hernández</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">294</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Daylen Lile</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">351</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">John Rave</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">175</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.035</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">25.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chandler Simpson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">441</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.001</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">4.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kristian Campbell</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">263</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.003</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">25.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nacho Alvarez Jr.</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">208</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.009</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jacob Wilson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">523</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.044</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">4.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Matt Shaw</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">437</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.002</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tim Tawa</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">225</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.016</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Graham Pauley</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.001</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Robert Hassell III</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">206</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.021</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Thomas Saggese</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">295</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.002</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">36.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Coby Mayo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">294</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.016</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Crews</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">322</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.027</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kyle Karros</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">156</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Otto Kemp</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">218</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.001</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Denzel Clarke</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">159</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.028</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jasson Domínguez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">429</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.010</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">7.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Agustín Ramírez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">585</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.030</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Colson Montgomery</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">284</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.014</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">14.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Christian Moore</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.006</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Trey Sweeney</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">326</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.000</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cam Smith</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">493</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.1%</td>
    </tr>
  </tbody>
  <tbody id="cls-c-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Eric Wagaman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">514</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">67th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Heriberto Hernández</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">294</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">81st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Daylen Lile</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">351</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">62nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">64th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">John Rave</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">175</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">84th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">41st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">40th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">84th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Chandler Simpson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">441</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">98th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kristian Campbell</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">263</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">39th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nacho Alvarez Jr.</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">208</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jacob Wilson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">523</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">100th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Matt Shaw</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">437</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">49th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">39th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tim Tawa</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">225</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">64th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">49th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Graham Pauley</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">42nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">41st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Robert Hassell III</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">206</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">63rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">37th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">62nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Thomas Saggese</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">295</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">41st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">93rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">44th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Coby Mayo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">294</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">24th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">44th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Crews</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">322</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">22nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">41st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kyle Karros</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">156</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">67th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Otto Kemp</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">218</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">47th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">9th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">37th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Denzel Clarke</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">159</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">10th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jasson Domínguez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">429</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">37th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Agustín Ramírez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">585</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">7th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">83rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">54th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Colson Montgomery</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">284</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">93rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Christian Moore</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">23rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">10th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Trey Sweeney</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">326</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">47th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">42nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">40th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cam Smith</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">493</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">42nd</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.5rem;font-size:0.75rem;color:#9ca3af;line-height:1.5;padding:0 0.25rem;"><span style="color:#16a34a;font-weight:600;">Green</span> = top quintile among batters with 50+ AB &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:600;">Red</span> = bottom quintile</p>
</div>

Players in this category don't have as high a ceiling as the most elite players, but they have either a high enough floor or a specific enough toolkit to hold onto a MLB roster spot. Some will carve out useful roles and stick around for years. They might even make an All-Star roster on occasion. None of them are going to be perennial top-tier options.

**Chandler Simpson's** star is his legs. His process grade is fair to average, and his bat's limitations are real. But OOPSY projects 46 stolen bases, and he should get more consistent plate appearances as long as he can keep his <span class="term" data-term="walk rate (batter)">walk rate</span> from collapsing. For now, he's strictly a role player.

**Dylan Crews** is underrated, especially after his demotion to AAA this spring led to a ton of people ringing the Bust alarm. His process profile is clean across the board, but his 77 <span class="term" data-term="wrc+">wRC+</span> in 2025 doesn't was underwhelming. When the Nationals sent him to minors right before Opening Day, I think were making a roster construction call, not a talent evaluation. Even his biggest fans think he could use more time in the minors to develop. When he gets the call, the his better-than-average profile will still be there.

**Jacob Wilson** has become one of the more compelling contact stories in this rookie class, and the attention is earned. His <span class="term" data-term="k% (batter)">strikeout rate</span> of 7.5% is historically elite. His <span class="term" data-term="swstr%">SwStr%</span> of 4.1% is almost comically low. Major league pitchers struggled to get him to swing and miss last season. That part is real and it's not going away. The problem is that his Barrel Rate is well below the floor for most everyday players. His .348 wOBA is being carried by a <span class="term" data-term="babip (batter)">BABIP</span> that suggests he's turning soft-to-medium contact into singles. This paints the picture of a contact hitter who's gotten lucky. The profile exists in baseball history: Luis Arraez has sustained a career above .300 by putting the ball precisely where defenders aren't, making soft contact at an elite rate. But big-league defenses have adjusted to Arraez, and he's struggled in recent years.

The same might happen to Wilson. Once pitchers start working the edges, the balls Wilson puts in play get easier to defend. His contact doesn't have to get worse for his production to drop. At ADP 192, the market is pricing continued production. Watch the <span class="term" data-term="luck index">Luck Index</span> through April and May. If it's still minus .040 or wider, the regression is probably already in progress and the box score just hasn't caught up yet.

**Agustín Ramírez** is projected to hit up to 23 home runs in 2026, and he's projected to see plenty of playing time despite poor defense. But he was being drafted like an top-tier C or DH, but I see him more as a league average hitter.

## Fringe Guys

<div class="viz">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
<p class="viz__title" style="margin-bottom:0;">2025 Rookie Class — D</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="cls-d-btn-raw" onclick="tableToggle('cls-d','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="cls-d-btn-pct" onclick="tableToggle('cls-d','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Grade</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="luck index">Luck Idx</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="consistency gap">Cons. Gap</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="barrel rate (batter)">Barrel%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="swstr%">SwStr%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="o-swing%">O-Swing%</span></th>
    </tr>
  </thead>
      <tbody id="cls-d-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ben Williamson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">295</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.000</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jeremiah Jackson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">183</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.040</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">7.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">37.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jake Mangum</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">428</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.031</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">47.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hyeseong Kim</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">170</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.055</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">37.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Luisangel Acuña</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">193</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.5%</td>
    </tr>
    <tr style="">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jac Caglianone</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">232</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.082</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">41.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kameron Misner</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">217</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.025</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ronny Mauricio</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.005</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">41.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alan Roden</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">153</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.022</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.0%</td>
    </tr>
  </tbody>
  <tbody id="cls-d-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ben Williamson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">295</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">44th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">40th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">22nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">76th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jeremiah Jackson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">183</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jake Mangum</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">428</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">10th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hyeseong Kim</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">170</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">94th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Luisangel Acuña</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">193</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">24th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
    </tr>
    <tr style="">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jac Caglianone</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">232</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">100th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">7th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Kameron Misner</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">217</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">39th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">44th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ronny Mauricio</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">184</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">67th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">12th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">8th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alan Roden</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">153</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">9th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">67th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33rd</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.5rem;font-size:0.75rem;color:#9ca3af;line-height:1.5;padding:0 0.25rem;"><span style="color:#16a34a;font-weight:600;">Green</span> = top quintile among batters with 50+ AB &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:600;">Red</span> = bottom quintile</p>
</div>

These guys fall into two categories: guys with enough in their toolkit to stay on the roster until a team has a better option, and unproven who's poor debut performances raised more questions than answers.

**Jac Caglianone** fits the second category. He's a big left-handed hitter with a massive frame and levers that generate a terrifying amount of power. His <span class="term" data-term="barrel rate (batter)">Barrel Rate</span> is 12.0%, which would be respectable for an established power hitter. When he squares one up, the exit velocity is not an accident. He also carries the highest <span class="term" data-term="luck index">Luck Index</span> in the class at plus .082.

Other have pointed out that Cags has been very "unlucky" (his Luck Index agrees at plus .082), but I think he also has a problem with his approach. His <span class="term" data-term="o-swing% (batter)">O-Swing%</span> was 38.5% and his <span class="term" data-term="swstr%">SwStr%</span> was 12.9%. Pitchers quickly learned that he couldn't lay off stuff outside the zone, and they were happy to exploit that weakness. This led to weaker contact and more strike outs. I also think he started pressing a little. He started trying to hit the ball further in front, which is a recipe for more power when successful or more fly outs when not.

If he tightens the zone even slightly, the underlying contact metrics suggest a significant jump in production. Track his <span class="term" data-term="barrel rate (batter)">Barrel Rate</span> through April. If it holds above 10% and and <span class="term" data-term="o-swing% (batter)">O-Swing%</span> declines, expect positive results to follow. One thing working against the optimistic read: Caglianone is no longer on the 2026 FanGraphs Top 100. He used up his prospect eligibility in 2025, so the prospect shine is gone. Whatever he becomes, he has to prove it now.

**Jake Mangum** is the cautionary tale with the largest sample. His 428 plate appearances confirmed what the underlying metrics said: <span class="term" data-term="o-swing% (batter)">O-Swing%</span> of 43.6% (the worst mark in the entire class by a significant margin), a low <span class="term" data-term="barrel rate (batter)">Barrel Rate</span> of 2.6%, <span class="term" data-term="luck index">Luck Index</span> of minus .031. He is swinging at nearly half the pitches he sees outside the strike zone, making weak contact when he connects, and surviving because some of those balls were lucky enough to find gaps. There's no mechanism in his profile for that to continue. Some hitters with ugly discipline numbers compensate with elite raw power that changes how opponents pitch to them. Mangum's Barrel Rate eliminates that possibility. He's not making anyone pay for mistakes. He projects for 81 wRC+ at ADP 647. The grade and the price agree.

**Alan Roden** is a contact-first guy that I endlessly fascinated by, but he hasn't hit the ball hard enough to prove he belongs. He's only got 153 big league under his belt, but multiple years of +.900 <span class="term" data-term="ops">OPS</span> seasons in AAA and an interesting bio helps hope spring eternal.

## Trivia Answers

<div class="viz">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
<p class="viz__title" style="margin-bottom:0;">2025 Rookie Class — F</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="cls-f-btn-raw" onclick="tableToggle('cls-f','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="cls-f-btn-pct" onclick="tableToggle('cls-f','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Grade</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="luck index">Luck Idx</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="consistency gap">Cons. Gap</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="barrel rate (batter)">Barrel%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="swstr%">SwStr%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="o-swing%">O-Swing%</span></th>
    </tr>
  </thead>
      <tbody id="cls-f-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Yohel Pozo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">168</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.001</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">49.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Christian Koss</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">191</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.014</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">38.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brady House</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">274</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.036</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">39.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ryan Ritter</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">207</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.032</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Bryce Teodosio</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">150</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.021</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">21.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">41.6%</td>
    </tr>
  </tbody>
  <tbody id="cls-f-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Yohel Pozo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">168</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">48th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">50th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Christian Koss</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">191</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">46th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">23rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">13th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brady House</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">274</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ryan Ritter</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">207</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">9th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">6th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">6th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">24th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Bryce Teodosio</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">150</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">21st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.5rem;font-size:0.75rem;color:#9ca3af;line-height:1.5;padding:0 0.25rem;"><span style="color:#16a34a;font-weight:600;">Green</span> = top quintile among batters with 50+ AB &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:600;">Red</span> = bottom quintile</p>
</div>

Five players, but only one of them has a number worth talking about.

**Brady House** projects for 16 home runs. That's decent power, and his raw contact metrics aren't embarrassing for a player at this grade level. The model puts him here because the rest of the game hasn't caught up to the pop, and the discipline numbers don't suggest it's coming soon. He also has a very handsy swing, which doesn't inspire a lot of confidence. House has an ADP of 725, so the market is already skeptical. That skepticism is earned.

The other four are ADP 999, meaning no meaningful draft capital is attached to them. The market has already done the work here. None of them project for significant fantasy or real-life production, and the underlying metrics confirm it.

## Smaller Samples

These players had fewer than 150 plate appearances in 2025. The same model, the same class-wide thresholds, but every number here is less stable. A player's discipline metrics can look completely different after 200 more plate appearances. Treat these as early signals.

The table runs from most to least optimistic. Florida Man **Sal Stewart** leads the list and is one of the most interesting names here. He'd grade up with the Top of the Class if he had enough at bats. I'm not too concerned with his elevated <span class="term" data-term="o-swing% (batter)">O-Swing%</span> because he had good enough production to make me think he might be able to live outside the zone in the short-term.

**Carter Jensen** would also grade with the Top of the Class. He's playing backup to a future Hall of Famer in Salvador Perez, so playing time is still a question. But he's only 22 years old, so he has plenty of time to develop into Sal's heir. Put a big green up-arrow next to his name.

**Dylan Beavers's** projections are conservative because the sample is small, but 107 <span class="term" data-term="wrc+">wRC+</span> and 1.4 WAR with an A grade is a favorable combination. If he locks down a starting role, the upside is real at that price.

The prospect hype around **Marcelo Mayer** was significant when he was promoted to Boston's main roster, but it seems to have deflated a bit since. My model says there's still something real, and I think he'll be a above-average everyday player. He just hasn't had enough plate appearances for the signal to be definitive.

**Samuel Basallo** 2025 numbers are rough: an <span class="term" data-term="o-swing% (batter)">O-Swing%</span> of 41.8% and a <span class="term" data-term="swstr%">SwStr%</span> of 14.0% are red flags that typically suggest a hitter getting exposed by major league pitching. The question is whether those numbers reflect his actual approach or a 20-year-old catcher getting a cup of coffee and getting eaten alive before he was ready. The scouts who graded him 65 FV have seen him at his best; the Scorecard saw him at his worst. Both data points are real. He's a genuine wildcard for Baltimore's offense — the most interesting small-sample name on this entire list.

**Carson Williams** is a similar story with a slightly different shape. Tampa's 22-year-old shortstop is another Topp 100 prospect, and his 2025 debut was bad in ways that matter: a <span class="term" data-term="swstr%">SwStr%</span> of 18.1% is genuinely concerning, and the Consistency Gap flags suggest he's not squaring the ball up consistently either. Unlike Basallo, there's no single box to check here that makes the bad numbers explainable. Watch the <span class="term" data-term="k% (batter)">strikeout rate</span>. If it's still north of 25% by May, the debut wasn't an aberration.

<div class="viz">
<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
<p class="viz__title" style="margin-bottom:0;">2025 Rookie Class — Small Sample</p>
<div style="display:inline-flex;border-radius:0.375rem;overflow:hidden;border:1px solid #e5e7eb;" role="group" aria-label="View toggle">
  <button id="cls-sm-btn-raw" onclick="tableToggle('cls-sm','raw')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;border-right:1px solid #e5e7eb;cursor:pointer;background:#16a34a;color:white;line-height:1.5;">Raw Numbers</button>
  <button id="cls-sm-btn-pct" onclick="tableToggle('cls-sm','pct')" style="padding:0.2rem 0.625rem;font-size:0.72rem;font-weight:600;font-family:system-ui,-apple-system,sans-serif;border:none;cursor:pointer;background:white;color:#6b7280;line-height:1.5;">Percentile Ranks</button>
</div>
</div>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Grade</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="luck index">Luck Idx</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="consistency gap">Cons. Gap</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="barrel rate (batter)">Barrel%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="swstr%">SwStr%</span></th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;"><span class="term" data-term="o-swing%">O-Swing%</span></th>
    </tr>
  </thead>
      <tbody id="cls-sm-raw">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Beavers</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">137</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.003</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">7.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">19.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carter Jensen</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.044</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">20.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Maximo Acosta</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.047</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">11.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alex Freeland</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">97</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.015</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">10.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">21.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">J.C. Escarra</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">98</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.020</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">7.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">23.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Zach Dezenzo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">109</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.011</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">16.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">24.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ryan Fitzgerald</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.015</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Blake Dunn</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.032</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carlos Cortes</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">99</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.047</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Sal Stewart</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.044</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">17.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">39.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Anthony Seigler</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.066</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">11.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">21.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Blaine Crim</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">15.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Gustavo Campero</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.048</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Marcelo Mayer</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">136</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.027</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jorbit Vivas</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.063</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">22.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Mickey Gasper</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">110</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.006</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">6.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">23.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tristan Gray</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">86</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.051</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ronny Simon</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">88</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.036</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">7.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hunter Feduccia</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">105</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.049</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Drew Gilbert</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">109</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.010</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Griffin Conine</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">86</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.020</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">14.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Moisés Ballesteros</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.035</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">DaShawn Keirsey Jr.</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">88</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.031</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Zach Cole</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.068</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">14.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Troy Johnston</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">121</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.013</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">37.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jace Jung</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.059</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cody Freeman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">121</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.008</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">5.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.9%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Willie MacIver</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">111</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.000</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Wagner</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">149</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.039</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">CJ Kayfus</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">138</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.017</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Adael Amador</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">128</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.031</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brandon Lockridge</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">148</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.012</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Johnathan Rodríguez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.010</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Adrian Del Castillo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">131</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.026</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Michael Helman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">110</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.070</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">37.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tyler Tolbert</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Braxton Fulford</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">120</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.003</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">5.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30.2%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jordan Lawlar</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.009</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nathan Church</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.016</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">11.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">38.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Everson Pereira</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.031</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">7.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27.5%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jorge Barrosa</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.021</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">12.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">12.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Andrés Chaparro</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.026</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">11.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">13.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">36.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tim Elko</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.015</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">36.7%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Yorke</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.001</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Colby Thomas</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">132</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.010</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">45.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Yanquiel Fernández</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">147</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.025</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">38.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jacob Melton</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.041</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">4.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Williams</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">106</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.012</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.0%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Samuel Basallo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">118</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.040</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">8.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">14.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">41.8%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Matthew Lugo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.038</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">40.3%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tyler Locklear</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">116</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">+.007</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">17.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">6.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Warming Bernabel</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">146</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.027</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">10.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">41.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hayden Senger</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.069</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">43.6%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Robertson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+.040</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">16.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">9.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">40.1%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Wilson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">91</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">−.017</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">13.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">38.4%</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Bob Seymour</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">83</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">−.002</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">15.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">44.1%</td>
    </tr>
  </tbody>
  <tbody id="cls-sm-pct" style="display:none;">
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Dylan Beavers</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">137</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">38th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">76th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">88th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">100th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carter Jensen</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">92nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">100th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Maximo Acosta</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">92nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">90th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">82nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Alex Freeland</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">97</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">100th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">68th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">96th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">J.C. Escarra</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">98</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">84th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">43rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">92nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Zach Dezenzo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">109</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">62nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">40th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">88th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ryan Fitzgerald</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;font-weight:700;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">67th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">87th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">47th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">54th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Blake Dunn</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">83rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">76th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">50th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">80th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carlos Cortes</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">99</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Sal Stewart</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">58</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">90th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">88th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">98th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">12th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Anthony Seigler</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">98th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">99th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">13th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">63rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Blaine Crim</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">87th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">24th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Gustavo Campero</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">93rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">54th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">80th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">48th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Marcelo Mayer</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">136</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">13th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jorbit Vivas</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">96th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">63rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Mickey Gasper</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">110</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">54th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">94th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">93rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tristan Gray</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">86</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">86th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">21st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">71st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Ronny Simon</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#16a34a;">B</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">88</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">85th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">68th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">48th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">46th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hunter Feduccia</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">105</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">94th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">64th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">53rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">79th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Drew Gilbert</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">109</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">48th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">64th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Griffin Conine</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">86</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Moisés Ballesteros</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">8th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">61st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">DaShawn Keirsey Jr.</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">88</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">82nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">79th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">63rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Zach Cole</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">8th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Troy Johnston</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">121</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">64th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">80th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jace Jung</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">21st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Cody Freeman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">121</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">26th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Willie MacIver</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">111</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">45th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">82nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">38th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Wagner</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">149</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">86th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">39th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">59th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">CJ Kayfus</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">138</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">71st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">42nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">13th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">47th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Adael Amador</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">128</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">81st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">35th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">23rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">81st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">50th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Brandon Lockridge</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#6b7280;">C</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">148</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">63rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">71st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Johnathan Rodríguez</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">47th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">60th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Adrian Del Castillo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">131</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">41st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Michael Helman</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">110</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">66th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">48th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tyler Tolbert</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">57</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">91st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">23rd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Braxton Fulford</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">120</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">52nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">38th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">39th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jordan Lawlar</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">59th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">38th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">68th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nathan Church</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">98th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Everson Pereira</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">80th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">16th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">60th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">1st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">76th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jorge Barrosa</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">77</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">74th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">95th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">46th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Andrés Chaparro</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">73</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">76th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">0th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">84th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">21st</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tim Elko</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">68th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">80th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">22nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">22nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Nick Yorke</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">46th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">8th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">9th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">71st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">36th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Colby Thomas</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;">D</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">132</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">30th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">27th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Yanquiel Fernández</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">147</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">31st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">65th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">19th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Jacob Melton</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">12th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">20th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">56th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Carson Williams</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">106</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">29th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">13th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">69th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">32nd</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Samuel Basallo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">118</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">88th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">68th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">34th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Matthew Lugo</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">6th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">6th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">7th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">9th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Tyler Locklear</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">116</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">14th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">51st</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Warming Bernabel</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">146</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">12th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">28th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">18th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">62nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">6th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Hayden Senger</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">78</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">99th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">83rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">25th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">11th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Robertson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">75</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">87th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">33rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">70th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">10th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Will Wilson</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">91</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">22nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">89th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">12th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">4th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">15th</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Bob Seymour</td>
      <td style="display:none;text-align:center;padding:0.5rem 0.75rem;color:#dc2626;font-weight:700;">F</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">83</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">40th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">55th</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">2nd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3rd</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">3rd</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.5rem;font-size:0.75rem;color:#9ca3af;line-height:1.5;padding:0 0.25rem;"><span style="color:#16a34a;font-weight:600;">Green</span> = top quintile among batters with 50+ AB &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:600;">Red</span> = bottom quintile</p>
</div>
</figure>

The 2025 rookie class isn't finished yet. A wave of Fangraphs Top-100 Prospects with ETA 2026 are waiting in the wings: **Konnor Griffin** (#1 overall, PIT), **Kevin McGonigle** (#5, DET), **Colt Emerson** (#11, SEA), **JJ Wetherholt** (#12, STL), and **Aidan Miller** (#13, PHI) are all capable of making their full-time debuts before the All-Star break. Once any of them reaches 150 plate appearances, the Scorecard applies. Griffin in particular is worth watching — he's the consensus top prospect in baseball, a 19-year-old shortstop the Pirates have been fast-tracking through AA. The moment he gets to Pittsburgh, the question isn't whether he's talented. It's whether the discipline holds up once major league pitchers find his weaknesses. That's always the question.

<figure style="margin:3rem auto 0;">
  <img src="/images/velo-celebrate.png" alt="Velo celebrating" style="display:block;margin:0 auto;width:25%;max-width:25%;">
</figure>
