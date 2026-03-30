---
layout: article.njk
title: Why the Best Contact Quality at First Base Doesn't Always Mean the Most Home Runs
subtitle: "Attack angle explains the gap between what first basemen should be doing and what they actually do, and most fantasy drafters aren't pricing it."
category: Fantasy Baseball
date: 2026-03-19T12:00:00
excerpt: "Vladimir Guerrero Jr. hit the ball harder than almost anyone in baseball last season. His maximum exit velocity was 120.4 miles per hour, a career high. He hit 23 home runs, roughly 15 fewer than his contact quality said he deserved. The reason is attack angle, and it changes how you should be drafting first base in 2026."
description: "What Statcast reveals about first base and what it means for your fantasy draft."
permalink: /articles/the-flat-bat.html
author: Allan Branstiter
level: Intermediate
draft: false
---

There is a player in Major League Baseball who hits the ball harder than almost anyone alive. In 2025, he made contact at an average <span class="term" data-term="exit velocity">exit velocity</span> of 92 miles per hour. His maximum exit velocity, the hardest single ball he put in play all season, was 120.4 miles per hour, a career high. Baseball's tracking systems said he should have <span class="term" data-term="slugging percentage">slugged</span> over .500 for the year, meaning at least one extra base per every two at-bats. He is 26 years old, plays for the Toronto Blue Jays, and is paid, as of this writing, roughly half a billion dollars to hit a baseball.

He hit 23 <span class="term" data-term="home run">home runs</span>, roughly 15 fewer than his contact quality said he deserved.

His name is Vladimir Guerrero Jr. He is the consensus best first baseman in baseball. And somewhere in the gap between what the cameras say he should be doing and what the <span class="term" data-term="box score">box score</span> says he actually does, there is a story worth understanding, not just about him, but about how the fantasy draft market prices players when it's working from incomplete information.

The number at the center of that gap is called <span class="term" data-term="attack angle">attack angle</span>. Which first basemen in 2026 are being priced correctly, and which are being over- or under-valued because the market hasn't caught up to what the cameras already know?

You don't need a statistics degree for any of this. A feel for geometry is enough.

## What the Cameras See

If you wanted to know how good a hitter was for most of baseball's history, you counted: <span class="term" data-term="batting average">batting average</span>, home runs, <span class="term" data-term="rbis">RBIs</span>. These are called traditional statistics, and they tell you what happened. They are, in their way, perfectly accurate. What they cannot tell you is whether what happened was likely to happen again.

In 2015, Major League Baseball installed a system called <span class="term" data-term="statcast">Statcast</span> in every stadium. It uses radar and high-speed cameras to track, in real time, every ball in play. It knows how fast the ball came off the bat, exit velocity measured in miles per hour, and at what vertical angle it left, called <span class="term" data-term="launch angle">launch angle</span>. From these two numbers, and a few others, it can calculate what *should* have happened, separate from what actually did.

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
<figcaption style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">The home run sweet spot sits between 10 and 30 degrees of launch angle. Many balls hit below 10 degrees are hit into the ground. Guerrero Jr.'s average contact in 2025 came in at 7.8 degrees.</figcaption>
</figure>

Think of exit velocity as the strength of the hit and launch angle as the direction. Exit velocity alone doesn't win you anything. If you hit a ball at 110 miles per hour directly into the ground, it's a routine grounder, maybe a single if you're fast. But hit that same ball at 15 degrees off the ground and it clears the fence. The difference between those two outcomes is not power. It's angle.

When a ball is hit with both sufficient speed and the right launch angle, roughly between 10 and 30 degrees, hard enough that the outfielder can't reach it, Statcast calls it a <span class="term" data-term="barrel">barrel</span>. Barrels almost always become extra-base hits. Every hitter in baseball has a <span class="term" data-term="barrel rate (batter)">barrel rate</span>, and the best hover around 15 to 20 percent: one in every five or six balls they put in play is essentially guaranteed to do damage.

Hold those numbers. We'll need them.

## The Geometry of Vladimir Guerrero Jr.

Here is what the cameras see when Vladimir Guerrero Jr. swings a baseball bat.

His exit velocity is excellent: 92.0 mph on average, which ranks among the game's better hitters. His <span class="term" data-term="hard-hit rate (batter)">hard-hit rate</span>, the percentage of balls he strikes at 95 mph or harder, is 50.7%, meaning half his contact is genuinely hard. His barrel rate is 12.2%. These are the numbers of a legitimate power threat.

His attack angle is 1.2 degrees.

Attack angle measures the path of the bat through the hitting zone, not where the ball goes, but the slope of the swing itself. Zero degrees is a perfectly flat bat, traveling parallel to the ground. A steep uppercut is 15 to 20 degrees. Vladimir Guerrero Jr. swings at 1.2 degrees. He is skimming the bat through the zone, barely tilted off the horizontal, like a man trying to brush crumbs off a table rather than swing a bat. The result is what geometry predicts: balls that go hard and low. Ground balls. Line drives that skip off the infield turf. The occasional rocket that finds a gap, but not the arcing fly balls that clear fences in right-center.

From the third-base seats, the swing looks almost effortless: controlled, level, the barrel arriving flat through the zone. It doesn't look like a problem. That's part of why it has persisted for five seasons.

His average launch angle across all 2025 contact was 7.8 degrees. The barrel sweet spot begins at 10. He spends most of his swings below the range where home runs live.

Statcast can calculate, from the quality of Guerrero's contact alone, what his slugging percentage *should* have been in 2025. That number, called <span class="term" data-term="expected slugging">expected slugging</span> or xSLG, is .506. His actual slugging percentage was .467, a 39-point gap. He should have been slugging .500. He slugged .467. And this has happened every year for five consecutive seasons. He has, for half a decade, been one of the best contact-quality hitters in baseball while hitting for less power than that contact deserves. The flat swing defeats him every time.

For the fantasy player, this creates a specific problem. Guerrero will be drafted in the top 20 picks of most 2026 drafts, with projections around 28 to 29 home runs. But his underlying mechanics, the attack angle that hasn't moved in five years and the launch angle that keeps missing the sweet spot, say he's been a 23-home-run hitter with the raw tools for 30. Until that angle changes, and there is no evidence it's about to, the projection is hope dressed up as math.

His father, Vladimir Guerrero Sr., swung like someone was trying to take the bat away from him. The elder Guerrero had a violent, lurching uppercut. He would offer at pitches in the dirt, off the plate, occasionally above his shoulders, and he made it work for nearly two decades. Whether the son's controlled, level approach is a deliberate correction built up through years of coaching, or simply how he moves through the zone, nobody in the Blue Jays organization is saying publicly. The cameras see what they see.

## Nick Kurtz Is Not Vladimir Guerrero Jr.

Nobody outside Oakland knew who Nick Kurtz was before the 2025 season. He was 22 years old, the Athletics' first-round pick from two years prior, promoted in early May with a brief minor league resume and no name recognition. By the end of September, he had played 117 games, hit 36 home runs, and won the American League Rookie of the Year award.

His attack angle is 14.3 degrees.

Where Guerrero skims, Kurtz drives upward through the ball. His <span class="term" data-term="bat speed">bat speed</span>, 77.2 miles per hour at contact, is the fastest of any first baseman. His barrel rate is 18.3 percent, meaning nearly one in five balls he puts in play is struck at precisely the right combination of speed and angle to become damage. The 36 home runs in 117 games project, over a full 162-game season, to a number that would place him among the half-dozen most dangerous power hitters in baseball.

His average draft position in 2026 fantasy drafts is nearly identical to Guerrero's. In the draft room, they carry the same price tag. The <span class="term" data-term="projection systems">projection systems</span> and the underlying contact data do not see them as equivalent: Kurtz projects for nearly nine more home runs. Same cost, nine more home runs. That is what a market inefficiency looks like.

There is a cost to the steep attack angle. Swinging sharply upward through the zone means pitches at the bottom of the strike zone, particularly <span class="term" data-term="breaking ball">breaking balls</span> diving away, become hard to square up. Kurtz struck out 30.9 percent of the time in 2025. That's a real tax, and he'll pay it in batting average. But in most modern fantasy formats, where home runs carry more weight than batting average, this is a favorable tradeoff. His 2026 <span class="term" data-term="spring training">spring training</span> reinforces the profile: a 15.8 percent <span class="term" data-term="walk rate (batter)">walk rate</span> showing he's patient enough to avoid the pitches he can't handle. His <span class="term" data-term="iso">isolated power</span>, <span class="term" data-term="slugging percentage">slugging percentage</span> minus batting average, remains strong at .255.

Guerrero is the safer, more famous name. Kurtz is the one the cameras like.

## The Alonso Problem

Most baseball people will tell you to ignore spring training statistics. They're mostly right. A .450 batting average in March against a mix of regulars and minor-league call-ups means almost nothing. But there is a specific category of spring training data worth paying attention to: batted ball rates. Where a player is hitting the ball, on the ground versus in the air, reflects the mechanics of his swing, not the quality of the competition. Mechanics don't change based on who's pitching.

Pete Alonso is the case study.

In 2025, Alonso led all first basemen in exit velocity (93.5 mph), hard-hit rate (54.4%), and barrel rate (18.9%). His expected slugging was .572, the highest at his position. He hit 38 home runs and drove in 126 runs. By underlying contact metrics, he may have been the most dangerous right-handed power hitter at first base.

In spring training 2026, playing for his new team in Baltimore, his <span class="term" data-term="ground ball rate (batter)">ground ball rate</span> jumped from 38 percent to 55.3 percent.

In 2025, four in ten balls he put in play went on the ground. In 2026 spring, more than five in ten do. Something has changed. Possibly an adjustment to a new team's hitting approach, possibly something mechanical, possibly noise in a small sample. The honest answer is we don't yet know.

For a player whose entire value comes from putting the ball in the air and hitting it hard, that matters. If the ground ball rate is still elevated heading into Opening Day, the 36-home-run projection is a fiction built on 2025 results. If it normalizes, he may be the best value at the position.

## The Player Who Should Have Hit More Home Runs Than He Did

Statistics can lie in two directions. Sometimes a player gets lucky: he hits the ball weakly, but it finds holes. Sometimes he gets unlucky: he hits it hard and true, and right at people. Over time, both kinds of luck tend to even out. The question is where a player sits in that cycle at any given moment.

Ben Rice of the New York Yankees is, by this reasoning, owed something.

Rice hit 26 home runs in 2025, with a .499 slugging percentage, and he gets drafted around the 50th pick in most fantasy formats. Good, not spectacular. What's underneath it: a 55.8 percent hard-hit rate, the highest of any key first baseman in the data. An average exit velocity of 93.2 mph. An expected slugging percentage of .557, 58 points above what actually showed up in the box score.

That gap is significant. Rice hit the ball better, more often, than almost any first baseman in the league. The outcomes didn't reflect it. When a player's expected and actual production diverge that sharply, when the contact quality says .557 but the box score says .499, the expected stats are usually the more reliable signal about what comes next. Projection systems tend to anchor on what a player actually did rather than what the underlying contact says he should have done. That's a reasonable default. It also means that players with large negative gaps between expected and actual production tend to be undervalued by the market.

Rice, at his current draft price, is a reasonable bet that the gap closes.

## When the Numbers Say What You Don't Want to Hear

Not every divergence between box score and contact quality is an opportunity. Sometimes the advanced metrics are delivering a message that's harder to accept.

Freddie Freeman hit .295 with 24 home runs in 2025. He is 36 years old, a future Hall of Famer, and still very good at baseball. Most projections expect something similar from him in 2026, and they're probably right that he'll contribute. But two Statcast numbers are worth knowing before you draft him in the sixth round expecting a power bat.

His bat speed was 69.9 miles per hour, among the lowest at the position, and nearly seven miles per hour slower than Kurtz. His <span class="term" data-term="fast-swing rate">fast-swing rate</span>, the percentage of swings where he generated genuine bat speed, was 8.4 percent. He almost never loads up anymore. He has become a timing and contact hitter, threading pitches through the defense with precision and experience rather than overwhelming them with force. That's not a failure. Plenty of players age this way and remain useful for years. But his expected slugging in 2025 was .467, and his actual slugging was .502. He outperformed what his contact quality deserved. Some of those 24 home runs were fortunate. At 36, with declining bat speed, the conservative projection is the honest one.

Bat speed doesn't stay constant over a career. It declines, usually beginning in a player's early thirties, often gradually enough that it doesn't register in traditional statistics until it's already well underway. Statcast sees it earlier than the box score does. Freeman is still producing. He's just no longer the player who will outperform his metrics, and you shouldn't draft him as though he is.

## How to Use Any of This

<span class="term" data-term="fantasy baseball">Fantasy baseball</span> drafts organize themselves around a concept called <span class="term" data-term="adp">ADP</span>, the average spot where a player gets selected across thousands of mock and real drafts. ADP is a crowd-sourced price. Like most crowd-sourced prices, it responds to reputation, recent results, and name recognition faster than it responds to underlying contact data. That gap, when it exists, is where value hides.

The position has been declining collectively for years, with fewer dominant power hitters and more players who do some things well but don't overwhelm you in any single category. The traditional statistics haven't fully communicated that shift. Guerrero's reputation still commands a top-20 price despite five years of evidence that his contact quality doesn't convert to power. Michael Busch hit 34 home runs in 2025 and is being priced as a repeat performer. His bat speed is 69.6 mph, nearly identical to Freeman's aging profile. His spring <span class="term" data-term="k% (batter)">strikeout rate</span> was 35 percent. That season may have been a high-water mark rather than a baseline.

The players the data actually prefers: Kurtz, whose power comes from mechanics rather than luck and whose spring profile held up; Alonso, conditionally, if the spring ground ball rate resolves before Opening Day; Rice, as the player most likely to outperform his draft price based on the gap between what he deserves and what the market is paying for.

Exit velocity tells you how hard. Launch angle tells you where the ball goes. Attack angle tells you where the swing is headed before contact even happens. Bat speed tells you whether the power is aging in or aging out. Expected slugging tells you whether the box score is lying, and in which direction. None of these numbers is perfect. Together, they're a better picture of a hitter than batting average has ever been.

Baseball has spent the last decade building the tools to see the game more clearly. The cameras are in every stadium. The data is publicly available. All of it is geometry, the same geometry that explains why a 26-year-old with a half-billion-dollar contract and a 92-mile-per-hour exit velocity can leave so many home runs on the field.

His swing is too flat. The cameras know it. The box score has been trying to say so for five years.

<figure style="margin:3rem auto 0;">
  <img src="/images/velo-flat-bat.png" alt="Velo in a batting stance at home plate, bat raised and ready to swing" style="display:block;margin:0 auto;width:25%;max-width:25%;">
</figure>
