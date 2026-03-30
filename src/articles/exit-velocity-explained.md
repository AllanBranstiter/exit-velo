---
layout: article.njk
title: Exit Velocity Is the Most Honest Statistic in Baseball
subtitle: "Statcast measures how hard a hitter actually hit the ball, independent of luck, and that number predicts the next season better than batting average does."
category: Stat Explainer
level: Beginner
date: 2026-03-26T12:00:00
excerpt: "Roman Anthony hit it at 113 miles per hour. The ball left his bat in a high arc toward center field, where the wall at Fenway Park sits 420 feet from home plate. The center fielder drifted back to the warning track and caught it. In most parks, that ball clears the fence. Box score: 0-for-1."
description: "Exit velocity measures the speed of the ball off the bat and why that number tells you more about a hitter's true ability than batting average or the box score."
permalink: /articles/exit-velocity-explained.html
author: Allan Branstiter
draft: false
---

The ball sounded like a bomb the moment Roman Anthony of the Boston Red Sox made contact.

The crowd gasped as it rocketed in a high arc towards deep center field, where the wall at Fenway Park sits 420 feet from home plate. The center fielder drifted back, attempting to judge the ball's trajectory and his distance from the outfield wall. At the last moment, the fielder settled at the warning track, raised his glove, and caught the ball.

The crowd groaned. In most parks, that ball would have cleared the fence. But thanks to Fenway's eccentric layout, it was loud, but relatively routine, fly out.

Later that afternoon, Caleb Durbin of the New York Yankees bounced a soft grounder down the first-base line. Durbin is a right-handed batter who tends to pull the ball towards third, so the first baseman was shaded toward second. This left the first base line open. Despite being gently hit, the ball rolled under the first baseman's glove into shallow right for a hit.

<figure class="diagram" style="margin: 2rem 0; text-align: center;">
<svg viewBox="95 47 370 240" width="100%" style="max-width: 540px; display: inline-block;" xmlns="http://www.w3.org/2000/svg">
  <!-- Fair territory fill (Fenway-shaped) -->
  <!-- Wall points derived from Wikipedia Fenway SVG, scaled 0.5x, home at (280,262)   -->
  <!-- LF pole (177,159) → Green Monster (254,83)→(260,83) → CF (318,67)              -->
  <!-- RF bullpen corner (324,85) → RF curve (383,113) → Pesky pole area (382,161)    -->
  <path d="M 280,262 L 177,159 L 254,83 L 260,83 L 318,67 L 324,85 L 383,113 C 395,119 395,128 393,133 L 382,161 Z" fill="#f8fafc"/>
  <!-- Outfield wall -->
  <path d="M 177,159 L 254,83 L 260,83 L 318,67 L 324,85 L 383,113 C 395,119 395,128 393,133 L 382,161" stroke="#cbd5e1" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Foul lines -->
  <line x1="280" y1="262" x2="177" y2="159" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="280" y1="262" x2="382" y2="161" stroke="#cbd5e1" stroke-width="1.5"/>
  <!-- Infield diamond -->
  <polygon points="280,262 310,232 280,202 250,232" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Pitcher's mound -->
  <circle cx="280" cy="233" r="4" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Home plate -->
  <circle cx="280" cy="262" r="5" fill="#1e293b"/>
  <!-- Trajectory 1: 113 mph fly ball to the sharp CF wall angle (OUT) -->
  <line x1="280" y1="262" x2="316" y2="82" stroke="#d97706" stroke-width="1.5" stroke-linecap="round"/>
  <rect x="292" y="71" width="48" height="22" rx="3" fill="#dc2626" fill-opacity="0.25" stroke="#dc2626" stroke-width="1"/>
  <text x="316" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="#7f1d1d" font-family="system-ui,-apple-system,sans-serif">OUT</text>
  <text x="248" y="190" text-anchor="middle" font-size="11" fill="#d97706" font-family="system-ui,-apple-system,sans-serif">Anthony</text>
  <text x="248" y="202" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">fly ball</text>
  <!-- Trajectory 2: 64 mph grounder down the first-base line (HIT) -->
  <line x1="280" y1="262" x2="340" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="6,3" stroke-linecap="round"/>
  <rect x="316" y="189" width="48" height="22" rx="3" fill="#16a34a" fill-opacity="0.25" stroke="#16a34a" stroke-width="1"/>
  <text x="340" y="204" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d" font-family="system-ui,-apple-system,sans-serif">HIT</text>
  <text x="368" y="232" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">Durbin</text>
  <text x="368" y="244" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">slow roller</text>
</svg>
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">Anthony's hard-hit fly ball reached the warning track and resulted in an out. Durbin's softly hit grounder barely left the infield grass but produced a hit.</figcaption>
</figure>

If you read the official scorebook, the story seems pretty simple: Anthony was an out, Durbin hit a single. What it doesn't record is that Anthony struck the ball better than Durbin did: he hit the ball nearly twice as hard, and his overall contact was better. That it fell for an out was only due to where a wall was built in 1912.

The thing about the scorebook is that it's great at telling you what happened. But it's not as good at predicting how a batter will perform over the long term.

One of the numbers that fill that gap is called <span class="term" data-term="exit velocity">exit velocity</span>: the speed of the ball off the bat, measured in miles per hour, recorded for every ball put in play in every major league stadium. EV doesn't care whether the result was an out or a hit. It records the quality of the contact, and contact quality turns out to be the best predictor we have of how a hitter will perform going forward, more reliable than batting average, more stable than any single result. It's arguably the most honest statistic in baseball.

## The Cameras in the Rafters

In 2015, Major League Baseball installed a tracking system called <span class="term" data-term="statcast">Statcast</span> in all thirty stadiums. Radar and high-speed cameras, more than a dozen per park, run continuously during games. They track pitches, fielders, baserunners, and every ball put in play. Most of what they see has always happened in baseball, it's just never been recorded as consistently as it is now.

Exit velocity is measured from the instant the bat makes contact to a fraction of a second after. League average sits around 88 to 89 miles per hour. The best contact hitters in baseball average 92 to 95 mph or above across a full season. The hardest individual balls in play, the ones that make a full stadium inhale before they know why, come off bats at 115, 118, 120 miles per hour.

<figure class="diagram" style="margin: 2rem 0; text-align: center;">
<svg viewBox="0 0 800 145" width="100%" style="max-width: 780px; display: inline-block;" xmlns="http://www.w3.org/2000/svg">
  <!-- Zone fills (bar y=44, height=28) — bar x=40 to x=760, width=720 -->
  <rect x="40" y="44" width="258" height="28" fill="#f1f5f9"/>
  <rect x="298" y="44" width="154" height="28" fill="#e2e8f0"/>
  <rect x="452" y="44" width="184" height="28" fill="#fef3c7"/>
  <rect x="636" y="44" width="124" height="28" fill="#fde68a"/>
  <!-- Bar outline -->
  <rect x="40" y="44" width="720" height="28" fill="none" stroke="#cbd5e1" stroke-width="1"/>
  <!-- Zone dividers -->
  <line x1="298" y1="44" x2="298" y2="72" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="452" y1="44" x2="452" y2="72" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="636" y1="44" x2="636" y2="72" stroke="#d97706" stroke-width="1"/>
  <!-- Zone labels -->
  <text x="169" y="62" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">weak contact</text>
  <text x="375" y="62" text-anchor="middle" font-size="9.5" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">average</text>
  <text x="544" y="62" text-anchor="middle" font-size="9.5" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">hard hit</text>
  <text x="698" y="62" text-anchor="middle" font-size="9.5" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">elite</text>
  <!-- 64 mph -->
  <line x1="132" y1="72" x2="132" y2="87" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="132" cy="72" r="3" fill="#64748b"/>
  <text x="132" y="99" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">64</text>
  <text x="132" y="112" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">Durbin's slow roller</text>
  <!-- 88-89 mph -->
  <line x1="384" y1="72" x2="384" y2="87" stroke="#475569" stroke-width="1.5"/>
  <circle cx="384" cy="72" r="3" fill="#475569"/>
  <text x="384" y="99" text-anchor="middle" font-size="11" font-weight="600" fill="#475569" font-family="system-ui,-apple-system,sans-serif">88–89</text>
  <text x="384" y="112" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">league avg</text>
  <!-- 95 mph (hard-hit threshold — dashed line above bar) -->
  <line x1="452" y1="38" x2="452" y2="44" stroke="#d97706" stroke-width="1.5"/>
  <line x1="452" y1="72" x2="452" y2="87" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="452" cy="72" r="3" fill="#d97706"/>
  <text x="452" y="99" text-anchor="middle" font-size="11" font-weight="600" fill="#d97706" font-family="system-ui,-apple-system,sans-serif">95</text>
  <text x="452" y="112" text-anchor="middle" font-size="9.5" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">hard-hit line</text>
  <!-- 113 mph -->
  <line x1="636" y1="72" x2="636" y2="87" stroke="#d97706" stroke-width="1.5"/>
  <circle cx="636" cy="72" r="3" fill="#d97706"/>
  <text x="636" y="99" text-anchor="middle" font-size="11" font-weight="600" fill="#d97706" font-family="system-ui,-apple-system,sans-serif">113</text>
  <text x="636" y="112" text-anchor="middle" font-size="9.5" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">Anthony's fly out</text>
  <!-- Axis label -->
  <text x="400" y="134" text-anchor="middle" font-size="10.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">Exit velocity (mph)</text>
</svg>
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">The slow roller and the flyout sit 49 miles per hour apart on this scale. The hard-hit line is at 95.</figcaption>
</figure>

There is something slightly absurd about the fact that radar guns have been in baseball for decades, but only pointing at pitchers. We have always known, to the tenth of a mile per hour, how fast a curveball travels. We measured exit velocity league-wide for the first time in 2015. The hitter's side of the equation waited forty years for the same treatment.

## Exit Velo and Long-term Success

Maximizing exit velocity is great, but it does not guarantee success.

This happens every game. On any given <span class="term" data-term="at-bat">at-bat</span>, the outcome depends on the speed of the contact, the angle the ball left the bat, where the fielders happen to be standing, and whether the ball falls in front of someone, sails over their head, or lands directly in their glove. A ball hit at 113 mph directly at a sprinting outfielder is an out. A ball hit at 64 mph through a gap that three fielders all guessed wrong is a hit. Some of that is skill. Some of it, genuinely, is luck.

But here's the thing: a hitter who consistently makes hard contact is more likely to succeed than one who does not. Let's say you were to examine 500 balls that hitter put into play. Statistically, the ones that were struck harder (and therefore have a higher exit velo) have much more likely to fall for hits than the ones that were hit softly. And by extension, a player who consistently produces higher exit velo numbers is more likely to be more productive than a soft-hitting player over the long-term.

(There are exceptions to this because some soft-hitting players excel in other aspects of the hitting. But generally the rule stands — harder hits lead to more power, and more power leads to more productivity on the field and in fantasy baseball.)

## Hard-Hit Rate

Statcast draws a practical line at 95 miles per hour: any ball struck at that speed or above is a hard-hit ball. The percentage of a batter's balls in play that cross that threshold is called his <span class="term" data-term="hard-hit rate (batter)">"hard-hit rate""</span>, and it is one of the more reliable measures of contact quality available to us.

League average hard-hit rate runs around 36 to 38 percent. The elite hitters in baseball (the ones whose production holds up year after year despite fluctuations in <span class="term" data-term="batting average">batting average</span>) typically sustain 45 to 55 percent. Nearly half of their balls in play are hit hard enough to make it past fielders and fall for hits.

<figure class="diagram" style="margin: 2rem 0; text-align: center;">
<svg viewBox="0 0 560 125" width="100%" style="max-width: 540px; display: inline-block;" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="280" y="16" text-anchor="middle" font-size="11" font-weight="600" fill="#475569" font-family="system-ui,-apple-system,sans-serif">Hard-hit rate (balls in play at 95+ mph)</text>
  <!-- Row labels -->
  <text x="148" y="42" text-anchor="end" font-size="11" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">League avg</text>
  <text x="148" y="88" text-anchor="end" font-size="11" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">Aaron Judge</text>
  <!-- Scale: x=155 to x=525 (370px = 100%) -->
  <!-- League avg background -->
  <rect x="155" y="25" width="370" height="24" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
  <!-- League avg hard-hit (37% = 137px) -->
  <rect x="155" y="25" width="137" height="24" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <text x="284" y="42" text-anchor="end" font-size="9.5" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">hard hit</text>
  <text x="304" y="42" font-size="10" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">37%</text>
  <!-- Judge background -->
  <rect x="155" y="71" width="370" height="24" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Judge hard-hit (55% = 204px) -->
  <rect x="155" y="71" width="204" height="24" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
  <text x="351" y="88" text-anchor="end" font-size="9.5" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">hard hit</text>
  <text x="371" y="88" font-size="10" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">55%</text>
  <!-- Axis -->
  <line x1="155" y1="101" x2="525" y2="101" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="155" y1="98" x2="155" y2="104" stroke="#94a3b8" stroke-width="1"/>
  <text x="155" y="115" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">0%</text>
  <line x1="340" y1="98" x2="340" y2="104" stroke="#94a3b8" stroke-width="1"/>
  <text x="340" y="115" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">50%</text>
  <line x1="525" y1="98" x2="525" y2="104" stroke="#94a3b8" stroke-width="1"/>
  <text x="525" y="115" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">100%</text>
</svg>
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">More than half of Judge's balls in play qualify as hard hit. League average is 37 percent.</figcaption>
</figure>

Aaron Judge of the New York Yankees is the clearest case. His average exit velocity sits above 95 mph. The hard-hit threshold is a floor for his typical contact, not a ceiling. His hard-hit rate is near 55 percent.

Like many power hitters, Judge's batting average dips occasionally because it's more sensitive to luck (just like Roman Anthony when he unfortunately hit a bomb to the deepest part of Fenway). Meanwhile, his hard-hit numbers power numbers are consistent because exit velocity doesn't fluctuate the same way. As long as his hard-hit metrics remain consistent, they serve as a floor and you can expect him to hit productively. If these numbers every start to drop, one of three things have happened: he's injured, something broke his swing mechanics, or he's naturally declining due to age.

## Expected Slugging

When you combine exit velocity with <span class="term" data-term="launch angle">launch angle</span> (the vertical angle at which the ball left the bat), Statcast can estimate what a hitter's statistics should have been, independent of whether balls happened to find outfielders or grass. The batting-average version of this is called <span class="term" data-term="expected batting average">expected batting average</span>, or xBA. The power version is called <span class="term" data-term="expected slugging">expected slugging</span>, or xSLG, meaning the <span class="term" data-term="slugging percentage">slugging percentage</span> a hitter's contact quality deserved.

xSLG takes every ball a hitter put in play and asks: given how hard this was hit and at what angle, what does a ball like this typically do? A <span class="term" data-term="line drive">line drive</span> at 107 mph becomes an extra-base hit at a very high rate. A ground ball at 78 mph is usually an out. The model does not know where the shortstop was standing. But it knows what 107-mph line drives do, on average, across thousands of balls in play.

When a hitter's actual slugging falls well below his expected slugging, the most common explanation is bad luck on balls in play (or <span class="term" data-term="babip (batter)">BABIP</span>). In these cases the contact quality was there but the luck (and results) weren't. That gap tends to close over time, and the player who was unlucky in one month often outperforms the next.

The reverse is also true. A player whose slugging significantly outpaces his xSLG has been getting away with weaker contact than his numbers suggest. Statistically, these players are on a hot steak and over-performing their true talent. You should expect these players to regress back towards their true talent in the future.

<figure class="diagram" style="margin: 2rem 0; text-align: center;">
<svg viewBox="0 0 560 135" width="100%" style="max-width: 540px; display: inline-block;" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="280" y="17" text-anchor="middle" font-size="11" font-weight="600" fill="#475569" font-family="system-ui,-apple-system,sans-serif">Vladimir Guerrero Jr. — 2025</text>
  <!-- Row labels -->
  <text x="150" y="59" text-anchor="end" font-size="11" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">Expected (xSLG)</text>
  <text x="150" y="96" text-anchor="end" font-size="11" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">Actual (SLG)</text>
  <!-- Scale: .350 to .550 mapped to x=160–530 (370px), scale = 1850px per 1.0 -->
  <!-- .506 expected: width = (.506-.350)*1850 = 288.6 → 289, ends at x=449 -->
  <!-- .467 actual:   width = (.467-.350)*1850 = 216.5 → 217, ends at x=377 -->
  <!-- Expected bar (amber) -->
  <rect x="160" y="43" width="289" height="24" fill="#fde68a"/>
  <rect x="160" y="43" width="289" height="24" fill="none" stroke="#d97706" stroke-width="1"/>
  <text x="444" y="59" text-anchor="end" font-size="12" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">.506</text>
  <!-- Actual bar (gray) -->
  <rect x="160" y="80" width="217" height="24" fill="#e2e8f0"/>
  <rect x="160" y="80" width="217" height="24" fill="none" stroke="#94a3b8" stroke-width="1"/>
  <text x="372" y="96" text-anchor="end" font-size="12" font-weight="600" fill="#475569" font-family="system-ui,-apple-system,sans-serif">.467</text>
  <!-- Gap measurement: dashed line at x=377 (actual bar end), arrow to x=449 (expected bar end) -->
  <line x1="377" y1="43" x2="377" y2="104" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="377" y1="68" x2="449" y2="68" stroke="#d97706" stroke-width="1.5"/>
  <polygon points="377,68 384,64 384,72" fill="#d97706"/>
  <polygon points="449,68 442,64 442,72" fill="#d97706"/>
  <text x="413" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">39-pt gap</text>
  <!-- Scale axis -->
  <line x1="160" y1="110" x2="530" y2="110" stroke="#e2e8f0" stroke-width="1"/>
  <!-- .400 tick -->
  <line x1="253" y1="107" x2="253" y2="113" stroke="#94a3b8" stroke-width="1"/>
  <text x="253" y="123" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">.400</text>
  <!-- .500 tick -->
  <line x1="438" y1="107" x2="438" y2="113" stroke="#94a3b8" stroke-width="1"/>
  <text x="438" y="123" text-anchor="middle" font-size="9.5" fill="#94a3b8" font-family="system-ui,-apple-system,sans-serif">.500</text>
  <!-- Endpoint labels -->
  <text x="160" y="123" text-anchor="middle" font-size="9.5" fill="#cbd5e1" font-family="system-ui,-apple-system,sans-serif">.350</text>
  <text x="530" y="123" text-anchor="middle" font-size="9.5" fill="#cbd5e1" font-family="system-ui,-apple-system,sans-serif">.550</text>
</svg>
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">Guerrero's contact quality said .506. His actual slugging was .467. When expected and actual diverge by this much, the gap usually closes in the hitter's favor.</figcaption>
</figure>

Vladimir Guerrero Jr. of the Toronto Blue Jays is the clearest example of the gap running the other direction. His contact quality has exceeded .500 every year he's been in the league. His actual slugging hasn't kept up. This might be due to and number or factors — park dimension, how pitchers approach him, etc — but this gap tells us that he has the ability to perform better than he actually is if one of those factors changes. This is kind of a crazy thing to say since he's already of the sport's best players!

## Attack Angle

As we learned, exit velocity does not tell you everything.

A hitter can drive the ball at 110 miles per hour and still produce mostly ground balls and hard line drives rather than home runs, if the path of his bat through the zone is too flat. The exit velocity looks excellent. The <span class="term" data-term="attack angle">attack angle</span>, the slope of the bat as it travels through the hitting zone, is wrong. The outcomes don't match the power the raw contact seems to promise.

<figure class="diagram" style="margin: 2rem 0; text-align: center;">
<svg viewBox="0 0 560 270" width="100%" style="max-width: 540px; display: inline-block;" xmlns="http://www.w3.org/2000/svg">
  <!-- Home Run Zone sector fill (10°–30°) -->
  <polygon points="70,230 267,195 263,178 258,162 251,145 243,130" fill="#fef3c7"/>
  <!-- Ground ball line (dashed) -->
  <line x1="70" y1="230" x2="267" y2="264" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Line drive (0°) -->
  <line x1="70" y1="230" x2="270" y2="230" stroke="#94a3b8" stroke-width="2"/>
  <!-- HR Zone lower boundary (10°) -->
  <line x1="70" y1="230" x2="267" y2="195" stroke="#d97706" stroke-width="1.5"/>
  <!-- HR Zone upper boundary (30°) -->
  <line x1="70" y1="230" x2="243" y2="130" stroke="#d97706" stroke-width="1.5"/>
  <!-- Pop-up line (dashed) -->
  <line x1="70" y1="230" x2="196" y2="60" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Contact point -->
  <circle cx="70" cy="230" r="5" fill="#1e293b"/>
  <!-- Contact point label -->
  <text x="60" y="225" font-size="11" fill="#1e293b" font-family="system-ui,-apple-system,sans-serif" text-anchor="end">Contact</text>
  <text x="60" y="238" font-size="11" fill="#1e293b" font-family="system-ui,-apple-system,sans-serif" text-anchor="end">Point</text>
  <!-- Ground ball label -->
  <text x="275" y="267" font-size="13" fill="#64748b" font-family="system-ui,-apple-system,sans-serif">Ground Ball</text>
  <!-- Line drive label -->
  <text x="275" y="233" font-size="13" fill="#475569" font-family="system-ui,-apple-system,sans-serif">Line Drive (0°)</text>
  <!-- HR Zone boundary labels -->
  <text x="272" y="194" font-size="11" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">10°</text>
  <text x="248" y="128" font-size="11" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">30°</text>
  <!-- HR Zone label -->
  <text x="292" y="164" font-size="12" font-weight="600" fill="#92400e" font-family="system-ui,-apple-system,sans-serif">Home Run Zone</text>
  <!-- Pop-up label -->
  <text x="202" y="56" font-size="13" fill="#dc2626" font-family="system-ui,-apple-system,sans-serif">Pop-Up (45°+)</text>
</svg>
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">Assuming the ball is struck at the same contact point and has the same exit velocity, the attack angle determines how far the ball goes. A flat path produces grounders; an upward slope launches pop-ups. Batters seek to hit the ball on a slope between 10 and 20 degrees to produce home runs.</figcaption>
</figure>

Let's look at Vlad Guerrero again. The dude has had elite exit velocity every year he's been in the league, but his attack angle is relatively flat. His expected slugging has exceeded .500 every year. He hit 23 home runs in 2025, a season where his contact quality said 35 or more. Exit velocity is part of the story. The swing mechanics are another.

His flat attack angle could be the key factor preventing him from closing the SLG and xSLG gap we discussed previously. But changing that is easier said than done, and their are drawbacks to adopting a steeper attack angle (primarily an increased number of strikeouts).

## How to Check It Yourself

Search any hitter on <span class="term" data-term="baseball savant">Baseball Savant</span> and look for two numbers: average exit velocity and expected slugging. They're on every player's page, updated daily during the season. Average exit velocity tells you how hard he's hitting the ball. Expected slugging tells you what his contact deserved, independent of whether those balls found grass or gloves.

When a player has a down year, <span class="term" data-term="batting average">batting average</span> down and power gone, those are the first two numbers worth pulling up. If his average exit velocity held steady and his expected slugging is well above what showed up in the box score, the contact quality didn't fail him. The luck did. That's a player the market is probably undervaluing.

<figure style="margin:3rem auto 0;">
  <img src="/images/velo_the-542.png" alt="Velo hugging a bat" style="display:block;margin:0 auto;width:25%;max-width:25%;">
</figure>
