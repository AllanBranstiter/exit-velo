---
layout: article.njk
title: "Nick Kurtz's Slump Isn't What It Looks Like"
subtitle: "He's hitting the ball harder than during his 170 wRC+ rookie year. The problem isn't his swing. It's when he commits to it."
category: Player Profile
level: Intermediate
date: 2026-04-10T12:00:00
excerpt: "Nick Kurtz looked like Oakland's franchise cornerstone after his rookie season. He hit .290 with 36 home runs and a 170 wRC+ as a 22-year-old in 2025, the kind of debut that earns a $130 million extension offer. Through 50 plate appearances in 2026, the box score tells a different story. It looks like a sophomore collapse. It isn't."
description: "Nick Kurtz is hitting the ball harder in 2026 than during his elite 2025 rookie season but has zero home runs and a 40% strikeout rate. A deep look at his Statcast data, platoon splits, and historical comps explains why, and what to expect the rest of the year."
permalink: /articles/nick-kurtz-slump-isnt-what-it-looks-like.html
author: Allan Branstiter
article_image: /images/nick-kurtz-savant.png
article_image_alt: "Nick Kurtz's Baseball Savant page showing his 2026 MLB Percentile Rankings, career batting stats, spray chart, and rolling xwOBA"
draft: false
keywords:
  - "Nick Kurtz"
  - "sophomore slump"
  - "exit velocity"
  - "strikeout rate"
  - "platoon splits"
  - "Oakland Athletics"
  - "barrel rate"
---

<figure style="margin:0 0 2rem;">
  <img src="/images/nick-kurtz-savant.png" alt="Nick Kurtz's Baseball Savant page showing his 2026 MLB Percentile Rankings, career batting stats, spray chart, and rolling xwOBA" style="width:100%;border-radius:0.5rem;">
</figure>

<details style="margin:0 0 2rem;background:#fce8eb;border-left:4px solid #C6011F;border-radius:0.25rem;padding:0;width:100%;box-sizing:border-box;">
<summary style="cursor:pointer;padding:0.75rem 1rem;font-weight:600;font-size:0.9rem;color:#8B0015;list-style:none;display:flex;align-items:center;gap:0.5rem;">
<span class="disclosure-arrow">&#9654;</span> TLDR
</summary>
<div class="disclosure-content" style="padding:0.75rem 1rem 1rem;font-size:0.88rem;line-height:1.6;color:#5a1a1a;">

<p>Nick Kurtz's 2026 looks ugly on the surface: no home runs, a .220 average, and a 40 percent <span class="term" data-term="k% (batter)">strikeout rate</span> through 50 plate appearances. But the underlying data runs in the opposite direction. His <span class="term" data-term="exit velocity">exit velocity</span> jumped 4.3 mph from his rookie season, his <span class="term" data-term="hard-hit rate (batter)">hard-hit rate</span> climbed from 51 to 57 percent, and his <span class="term" data-term="xwoba">xwOBA</span> is still well above league average, meaning the contact he's making is legitimately dangerous. The problem is decisional, not mechanical: bat tracking shows his <span class="term" data-term="fast-swing rate">fast-swing rate</span> cratered 10 points, meaning he's swinging too tentatively on edge pitches while letting too many hittable pitches go by called. The open question is whether he can recalibrate his timing on <span class="term" data-term="sinker">sinkers</span>, <span class="term" data-term="cutter">cutters</span>, and <span class="term" data-term="curveball">curveballs</span> before those pitch values harden, and whether his pre-existing weakness against left-handed pitching is actually worse than last year's overall numbers let on.</p>

<p style="margin-top:1rem;"><strong>Key number to watch:</strong> Shadow contact rate — 61.2% now, needs to reach 68-70% by June.</p>

<p style="margin-top:1rem;"><strong>If you're new to baseball:</strong> When a hitter waits too long to commit to a swing, the bat can't get through the zone in time, and pitches that move late, breaking down or cutting sideways, are already past the sweet spot before the swing arrives. Think of it like trying to catch a ball someone threw off-line: you can still reach it, but you can't catch it cleanly. That's what's happening to Kurtz right now on edge pitches, and the strikeouts and soft contact are the result.</p>

<p style="margin-top:1rem;"><strong>If you manage a fantasy team:</strong> Hold him, and consider buying if his price has dropped in your league. His <span class="term" data-term="barrel rate (batter)">barrel rate</span> is close to his elite 2025 level, his <span class="term" data-term="bb% (batter)">walk rate</span> is up to 18 percent, and all four projection systems still have him around 34 home runs and a 132 <span class="term" data-term="wrc+">wRC+</span> for the year. The home runs haven't shown up yet because of bad luck on batted balls, not bad contact. The timeline for results is May through June.</p>

</div>
</details>

Nick Kurtz looked like Oakland's franchise cornerstone after his rookie season. He hit .290 with 36 home runs and a 170 <span class="term" data-term="wrc+">wRC+</span> as a 22-year-old in 2025, the kind of debut that earns a $130 million extension offer.

Through 50 plate appearances in 2026, the box score tells a different story: a .220 batting average, zero home runs, and a 40 percent <span class="term" data-term="k% (batter)">strikeout rate</span>. It looks like a sophomore collapse.

It isn't. His <span class="term" data-term="exit velocity">exit velocity</span> jumped 4.3 mph, his <span class="term" data-term="hard-hit rate (batter)">hard-hit rate</span> climbed from 51 to 57 percent, and his <span class="term" data-term="xwoba">xwOBA</span> is still well above league average. He's hitting the ball harder than he did during his best season. The results just haven't caught up.

I dug into his pitch-type data, his zone profile, his bat tracking numbers, his platoon splits, and the trajectories of every recent left-handed hitter who went through a similar sophomore strikeout spike. What I found is a story about a changed approach at the plate, a pre-existing platoon weakness that his 2025 overall line hid from view, and one number that separates the hitters who recover from the ones who don't.

To understand the 2026 version of Kurtz, you have to start with what made the 2025 version so good.

## The 2025 Baseline

Last year Kurtz looked like the kind of hitter the Oakland Athletics hadn't had since the Moneyball era. He slashed .290/.383/.619 with 36 home runs in 117 games. His <span class="term" data-term="iso">ISO</span>, slugging minus batting average and the cleanest measure of extra-base power, was .329. His xwOBA of .372 confirmed the production wasn't a mirage.

The most unusual thing about his 2025 season wasn't the power. It was the coverage.

FanGraphs tracks pitch values by type, measuring how well a hitter performs against each pitch on a per-100 basis. **Kurtz had a positive value against every single pitch type.** Fastballs, <span class="term" data-term="sinker">sinkers</span>, <span class="term" data-term="slider">sliders</span>, <span class="term" data-term="cutter">cutters</span>, <span class="term" data-term="changeup">changeups</span>, <span class="term" data-term="curveball">curveballs</span>. All positive.

That's rare for any hitter, and it's especially rare for a 22-year-old who struck out 30.9 percent of the time. He overcame the strikeouts because when he made contact, the ball was destroyed.

That balance between contact rate and contact quality is what made the early 2026 numbers so jarring.

## What the 2026 Box Score Says

Through 11 games, Kurtz's surface numbers are alarming. He's hitting .220 with a .268 slugging percentage. His <span class="term" data-term="ops">OPS</span> is .628. He has two doubles and zero home runs in 41 at-bats.

His ISO is .049, down from .329. His wRC+ is 96.5, roughly league average, which for a first baseman is not a viable offensive profile.

**It looks like a collapse. But the underlying data tells a completely different story.**

## What Statcast Says

Here's where the story splits from the box score. His <span class="term" data-term="xslg">expected slugging</span> is .395, about half again as high as his actual .268, because the batted balls he's producing should be going for extra bases at a much higher rate than they are.

He's hit three <span class="term" data-term="barrel rate (batter)">barrels</span> in 21 batted ball events, a 14.3 percent rate that's close to his elite 18.3 percent from 2025. Those three barrels produced zero home runs. In a full season, that doesn't happen.

His xwOBA is .356. League average is around .310. Even with the 40 percent strikeout rate, his underlying offensive value is above average.

That's partly because his <span class="term" data-term="bb% (batter)">walk rate</span> has jumped from 12.9 percent to 18 percent, which is elite. He's not chasing. His <span class="term" data-term="chase rate (batter)">chase rate</span> is around 26 percent, roughly where it was in 2025. His discipline is intact or better.

**So: harder contact, better plate discipline, worse results. Something specific is happening between the ears and the bat.**

<div class="viz">
<p class="viz__title">Nick Kurtz — 2025 vs. 2026</p>
<div style="overflow-x:auto;">
<table>
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Metric</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">2025</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">2026</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Direction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">AVG</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.290</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.220</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">▼</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">HR</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">36</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">0</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">▼</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">K%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">30.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">40.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">▼</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Exit Velocity</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">92.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">97.0 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">▲ +4.3</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Hard-Hit%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">50.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">57.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">▲ +6.2</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">BB%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">12.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">18.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">▲ +5.1</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">xwOBA</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.372</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.356</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">≈</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Barrel%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">18.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">≈</td>
    </tr>
    <tr>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">SwStr%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">≈</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">2025: 489 PA, 273 batted ball events. 2026: 50 PA, 21 batted ball events. Green rows highlight metrics that improved. Source: FanGraphs.</p>
</div>

## What's Actually Happening at the Plate

The easy explanation for a 40 percent strikeout rate is "he can't catch up to pitches in the zone." The data says that's not it.

His swinging strike rate, the percentage of total pitches he swings at and misses, is 14.7 percent. In 2025 it was 14.2 percent. That's essentially unchanged. He's not whiffing more than last year.

**What he's doing is *taking* more.** His swing rate on pitches in the zone dropped nearly six points from 2025, meaning he's letting more hittable pitches go by. Some of those takes become walks (the BB% jumped). Some become called third strikes (the K% jumped).

His in-zone contact rate, by <span class="term" data-term="statcast">Statcast</span> classification, actually improved from 76.6 percent to 82.3 percent.

He's striking out more while making better contact in the zone. That's a paradox worth unpacking.

FanGraphs divides the strike zone into four regions: the Heart (center of the plate), the Shadow (the two inches on either edge), the Chase (just outside), and the Waste (way outside). Here's where Kurtz's trouble lives:

His Heart contact rate is 81.8 percent. Fine.

His Shadow contact rate is 61.2 percent. Not fine.

**Pitchers are throwing 40 percent of their pitches to the Shadow, and he's making contact on barely six out of ten of them.** He's also swinging more at Shadow pitches than he did in 2025 (54 percent vs. 47 percent) while making less contact there.

He's caught in a bad middle ground: too passive on pitches over the middle of the plate, too aggressive on pitches near the edges.

The three pitch types he's struggling with tell the rest of the story. In 2025, his pitch value against sinkers was +2.50 runs per 100 pitches. In 2026, it's -6.15. Against cutters: +1.62 to -5.57. Against curveballs: +1.63 to -5.17.

**In plain terms: sinkers, cutters, and curveballs, pitches he used to punish, are now beating him badly.**

Those three pitches are the ones that move down or laterally across the Shadow zone, and they've flipped from strengths to severe weaknesses. Fastballs and sliders, which arrive on straighter planes with less late movement, remain positive.

I should be transparent here: these pitch-value numbers are based on roughly 15 to 40 pitches per type. The sample is small enough that any single pitch-type value could move substantially in either direction. They're hypotheses, not verdicts.

But the pattern they describe, where the vulnerable pitches are exactly the ones that punish a hitter who waits too long to commit, is consistent enough to take seriously.

<div class="viz">
<p class="viz__title">Kurtz's Pitch Values — 2025 vs. 2026 (runs per 100 pitches)</p>
<div style="overflow-x:auto;">
<table>
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Pitch</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">2025</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">2026</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Swing</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">4-Seam FB</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+3.07</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+1.14</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">-1.93</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Slider</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+2.23</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+1.64</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">-0.59</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#fef2f2;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Sinker</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+2.50</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-6.15</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-8.65</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#fef2f2;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Cutter</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+1.62</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-5.57</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-7.19</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#fef2f2;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Curveball</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+1.63</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-5.17</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-6.80</td>
    </tr>
    <tr>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Changeup</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+1.32</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-1.60</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">-2.92</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">Red rows: pitches that flipped from positive to severely negative. Positive values = runs above average for the hitter. 2026 values based on 15-40 pitches per type. Source: FanGraphs (Statcast classification).</p>
</div>

## What the Bat Tracking Data Shows

My initial hypothesis was a swing change. The +4.3 mph exit velocity gain between a player's age-22 and age-23 seasons isn't normal year-to-year fluctuation. If Kurtz had steepened his swing plane over the offseason to generate more lift, it would explain the EV jump, the pitch-type flips, and the contact-rate tradeoff.

The bat tracking data says otherwise.

His <span class="term" data-term="attack angle">attack angle</span> dropped from 14.3 degrees to 13.4. His bat tilt flattened from 39.1 to 37.4 degrees. His <span class="term" data-term="bat speed">bat speed</span> dipped slightly, from 77.2 mph to 76.4. A swing retool for more lift should produce a higher attack angle, not a lower one. The swing itself hasn't changed in the direction the hypothesis predicted.

What has changed is *how he's using it*.

His <span class="term" data-term="fast-swing rate">fast-swing rate</span>, the percentage of swings at high speed, cratered from 72.6 percent to 62.3. That's a 10-point drop. He's making more slow, tentative swings, the kind a hitter produces when he's not fully committed to the pitch. His squared-up contact rate fell from 29 percent to 26. His blast contact rate fell from 22 percent to 17.

Meanwhile, his contact point has moved deeper in the box (22.8 inches vs. 23.4) and further from the plate (29.4 inches vs. 27.7). **He's letting the ball travel longer before committing, and when he does commit decisively, the contact is harder than it's ever been. But when he doesn't commit, the swing is slow and the result is poor.**

This isn't a mechanical change. It's a decisional one.

He's waiting longer, being more selective, and punishing the pitches he does jump on. The 97 mph exit velocity is real. It's coming from the subset of swings where he fully commits. The problem is everything else: the tentative swings on the Shadow, the called third strikes on pitches he watched go by, the sinkers and curveballs that have moved two inches further by the time he decides to swing.

The good news is that approach changes are more correctable than mechanical ones. A hitter can recalibrate his timing and decisiveness faster than he can rebuild a swing. The bad news is that 77 competitive swings is a small sample, and the bat tracking numbers could still shift as the season develops.

## The Splits Problem

Here's where the Kurtz story gets more complicated. His 2025 season, the one everyone remembers as elite, already contained a severe weakness hiding inside the overall numbers.

Against right-handed pitching in 2025, Kurtz hit .336/.439/.714 with 27 home runs and a 1.153 OPS. Against left-handed pitching, he hit .197/.261/.423 with 9 home runs and a .684 OPS.

That's a 469-point OPS gap.

The .290 batting average and 36 home runs on the season were a weighted average of an MVP candidate against righties and a below-average hitter against lefties.

<div class="viz">
<p class="viz__title">Kurtz's 2025 Platoon Split</p>
<div style="overflow-x:auto;">
<table>
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Split</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">AVG</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">OBP</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">SLG</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">OPS</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">HR</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">K%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">BB%</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">vs RHP</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">336</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">.336</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">.439</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">.714</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">1.153</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">27</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">28.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.2%</td>
    </tr>
    <tr style="background:#fef2f2;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">vs LHP</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">153</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">.197</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">.261</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">.423</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">.684</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">9</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">35.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">7.8%</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">469-point OPS gap. Source: MLB Stats API.</p>
</div>

In 2026, both sides have deteriorated. His K% against RHP jumped from 28.9 percent to 35.3 percent, a 6.4-point spike. Against LHP, it jumped from 35.3 percent to 50 percent in 16 plate appearances.

The RHP spike is within the normal range for a sophomore adjustment (and consistent with the approach change the bat tracking data suggests). The LHP spike is alarming, though the sample is small enough that I wouldn't build a house on it.

What this means for the overall picture: the "decline" in 2026 isn't a single story. It's two.

Against right-handers, he's going through an adjustment that the exit velocity data suggests he'll come out the other side of. **Against left-handers, he may have always been a limited hitter, and the 2026 struggles are amplifying something that was already there.**

## The Comps

Sophomore strikeout spikes happen to a lot of young left-handed power hitters. The question is which ones recover.

I looked at every LHH from 2022 to 2025 who had a strong first season followed by a year-two K% jump, and one metric separated the recoveries from the collapses.

It wasn't strikeout rate. It wasn't batting average. It was exit velocity direction.

Nolan Gorman's K% jumped from 31.9 percent to 37.6 percent from 2023 to 2024. His exit velocity dropped 2.5 mph. He never recovered, settling into an 87 to 88 wRC+ range.

Riley Greene's K% jumped 4 points from 2024 to 2025. His EV dipped 1.4 mph. He partially recovered but lost a tier of overall production.

Triston Casas's K% jumped 6.6 points. His EV dipped slightly. Injuries muddied the picture.

Every comp who had a sophomore K% spike also saw their EV decline or hold flat.

<div class="viz">
<p class="viz__title">Sophomore K% Spikes — Exit Velocity Is the Differentiator</p>
<div style="overflow-x:auto;">
<table>
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Yr 1 K%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Yr 2 K%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Yr 1 wRC+</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Yr 2 wRC+</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">EV Change</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Gorman '23–24</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">31.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">37.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">118</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">87</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-2.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;">Never recovered</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Greene '24–25</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">26.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">30.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">134</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">121</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-1.4 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#eab308;">Partial recovery</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Casas '23–24</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">25.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">31.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">131</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">120</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-0.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;">Injuries</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Wood '25–26</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">32.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">30.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">127</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">134</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">-1.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">K% dropped, wRC+ up</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">Kurtz '25–26</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">30.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">40.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">170</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">97</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">+4.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">TBD</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">All players: LHH, age 22-25, K% 25%+ in year 1. Kurtz's 2026 wRC+ and K% are through 50 PA. EV change = average exit velocity year-over-year. Source: FanGraphs.</p>
</div>

Kurtz's EV went up 4.3 mph. His hard-hit rate went up 6 points. He's the only hitter in this comp set whose batted-ball quality improved during the slump.

James Wood, the Washington outfielder who shares Kurtz's age, handedness, and K%/BB% profile, is the closest active comp. Wood maintained elite batted-ball metrics through his adjustment and has a .390 xwOBA through 59 plate appearances in early 2026.

The worst case is the Gorman path, where the K% keeps climbing and the underlying quality deteriorates. Kurtz's 2026 EV and hard-hit data argue against it, because the thing that broke in Gorman (the contact quality) is the thing that's improved in Kurtz.

## What to Expect

The four major projection systems, ATC, Steamer, ZiPS, and OOPSY, have all incorporated the early 2026 data and still project Kurtz for a .256/.344/.510 line with 34 home runs and a 132 wRC+. The 489 plate appearances from 2025 carry about 90 percent of the inferential weight against 50 PA of new data.

These systems are doing exactly what they should: anchoring on the prior, updating incrementally, and not overreacting to April.

**I think those projections are roughly right, with one caveat: the platoon split suggests his overall line will depend heavily on how managers deploy him against lefties.** If he's a full-time player regardless of the opposing pitcher's arm, the LHP matchups will drag the composite numbers down. If he sits against tough lefties, the composite looks better.

The home runs are coming. Three barrels in 21 batted balls doesn't stay at zero home runs. The exit velocity and hard-hit rate say the power is real. The projection systems agree.

**The number I'm watching is his Shadow contact rate. It's 61.2 percent right now, down from 64.9 in 2025. League average is in the low 70s.**

If it climbs toward 68 or 70 percent by June, it means he's recalibrating his timing, learning to commit earlier on edge pitches while keeping the power gains. If it stays in the low 60s, the strikeout rate won't come down as far as the projections expect, and we're looking at a hitter who trades more power for less contact than last year's version.

Either way, the 97 mph exit velocity is real, and it doesn't lie. Fifty plate appearances of box score noise doesn't change what a man can do to a baseball.
