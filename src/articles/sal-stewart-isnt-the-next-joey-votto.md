---
layout: article.njk
title: "Fun with Small Samples: Sal Stewart Isn't the Next Joey Votto"
subtitle: "A weighted similarity algorithm returns Juan Soto's 2024 season as his closest Statcast comp. Twice."
category: Player Profile
level: Intermediate
date: 2026-04-16T12:00:00
excerpt: "Baseball America says Sal Stewart 'could fix what has been a hole at first base since Joey Votto retired.' He was drafted as a third baseman, but his arm pushed him to first, and through 72 plate appearances in 2026, the Votto narrative has taken hold. But when you run his Statcast profile through a similarity algorithm, the closest match isn't Votto. It's Juan Soto. Twice."
description: "Sal Stewart's Statcast profile matches Juan Soto's 2024 season more closely than any Joey Votto season. A deep look at his discipline, contact quality, mechanical changes, and what the Reds actually found."
permalink: /articles/sal-stewart-isnt-the-next-joey-votto.html
author: Allan Branstiter
image: /images/sal-stewart-statcast.png
image_alt: "Sal Stewart's Exit Velo player card showing percentile rankings, two-season stat line, and advanced metrics through 130 plate appearances"
draft: false
---

<figure style="margin:0 0 2rem;">
  <img src="/images/sal-stewart-statcast.png" alt="Sal Stewart's Exit Velo player card showing percentile rankings, two-season stat line, and advanced metrics through 130 plate appearances" style="width:100%;border-radius:0.5rem;">
</figure>

<details style="margin:0 0 2rem;background:#fdf2ed;border-left:4px solid #c2703e;border-radius:0.25rem;padding:0;width:100%;box-sizing:border-box;">
<summary style="cursor:pointer;padding:0.75rem 1rem;font-weight:600;font-size:0.9rem;color:#7c4a2a;list-style:none;display:flex;align-items:center;gap:0.5rem;">
<span style="transition:transform 0.2s;display:inline-block;">&#9654;</span> TLDR
</summary>
<div style="padding:0.75rem 1rem 1rem;font-size:0.88rem;line-height:1.6;color:#5a3a24;">

<p style="margin-top:0;">Sal Stewart was drafted as a third baseman. His arm couldn't hold the position, and now he's filling the Votto-shaped hole at first base in Cincinnati with a .310/.431/.638 line and a 185 wRC+ through 72 <span class="term" data-term="plate appearance">plate appearances</span> in 2026. But his <span class="term" data-term="statcast">Statcast</span> profile doesn't resemble Votto's. Built on below-average <span class="term" data-term="bat speed">bat speed</span> and an opposite-field approach that's unique among his statistical peers, Stewart's profile returns Juan Soto's 2024 and 2025 seasons as its closest comps in a weighted similarity algorithm, with identical <span class="term" data-term="walk rate (batter)">walk rate</span> and <span class="term" data-term="strikeout rate (batter)">strikeout rate</span> to one decimal place. The open question is whether those discipline numbers hold through 200 plate appearances or settle closer to his career minor league rate of 12 to 13 percent, which would still be well above average for a 22-year-old with his barrel rate.</p>

<p style="margin-top:1rem;"><strong>If you're new to baseball:</strong> Most power hitters hit the ball hard by swinging fast and trying to pull it toward the fence. Stewart does something different: he has a slower-than-average swing but makes contact with the center of the bat more often than almost anyone, and he drives the ball to all parts of the field. Think of it as the difference between a haymaker and a well-placed jab. The jab doesn't look as impressive, but it lands more often and it still hurts.</p>

<p style="margin-top:1rem;"><strong>If you manage a fantasy team:</strong> Must-roster in all formats. His expected stats closely match his actuals (<span class="term" data-term="xwoba">xwOBA</span> .442 vs. .457 actual), meaning there's very little luck to regress, and his <span class="term" data-term="barrel rate (batter)">barrel rate</span> (21.3 percent) and <span class="term" data-term="exit velocity">exit velocity</span> are elite. ATC projects a conservative 110 <span class="term" data-term="wrc+">wRC+</span> for the rest of the season, but the Statcast profile and full career data suggest a higher ceiling than ATC's forecast. He's a first baseman long-term, and Great American Ball Park's 119 <span class="term" data-term="home run">home run</span> <span class="term" data-term="park factor">park factor</span> helps.</p>

</div>
</details>

Joey Votto retired and left a hole at first base in Cincinnati, not just in the lineup but in the way the organization thought about hitting. For fifteen years, Votto had been the franchise's proof that discipline and bat-to-ball skills could anchor an offense. He led the league in <span class="term" data-term="on-base percentage">on-base percentage</span> seven times. He won an MVP in 2010, and in multiple later seasons walked more than he struck out. When the Reds drafted Sal Stewart in 2022, Baseball America he "could fix what has been a hole at first base since Joey Votto retired." The Reds clearly agreed.

Stewart was a deliberate choice, but not the one the Votto narrative implies. After years of drafting high-strikeout power bats like Rece Hinds and Austin Hendrick, players who swung for the fences and accepted the whiffs that came with it, the Reds went the other direction in the 2022 Draft. They took Stewart 32nd overall out of Westminster Christian High School in Miami as a third baseman. He showed up in A-ball as a 6-foot-3, 240-pound right-handed hitter, then promptly posted a 17 percent <span class="term" data-term="walk rate (batter)">walk rate</span>, a 16 percent <span class="term" data-term="strikeout rate (batter)">strikeout rate</span>, and a <span class="term" data-term="hit tool">hit tool</span> that scouts graded as his best attribute. Baseball America called him a "course correction."

The Reds wanted a bat-first corner infielder who punished mistakes without giving away at-bats. That he'd end up at first base, filling the Votto vacancy, wasn't the plan. His arm made it the plan: his fastest throw from third was 78.4 mph, seven miles per hour below the major league average, and by his 2025 call-up he was playing 11 of 17 defensive appearances at a position he'd manned for only two minor league games. That's fair — Joey was drafted as a catcher, after all. Why shouldn't it work for Sal?

Through 72 <span class="term" data-term="plate appearance">plate appearances</span> in 2026, the plan appears to be working. **Stewart is hitting .310/.431/.638 with five <span class="term" data-term="home run">home runs</span> and a 185 <span class="term" data-term="wrc+">wRC+</span>.** He walks more than he strikes out. He just hit two three-run homers against the Giants for a career-high six RBIs, and Barry Larkin went on the broadcast and said, "This is what he does." Effusive praise from Lark to a player who doesn't play shortstop.

Knock on wood, but the Rookie of the Year conversation has started.

The Votto narrative is satisfying enough that I bought it for months. Hell, I even made the comparison on social media on multiple occasions. "Baby Votto this" and "Cuban Votto that." The comparison is an easy one to make.

But Stewart's <span class="term" data-term="statcast">Statcast</span> profile doesn't really line up with that comparison. I ran it through a weighted similarity algorithm (a fancy formula that measures how statistically similar two hitter profiles are by comparing key metrics including <span class="term" data-term="exit velocity">exit velocity</span>, <span class="term" data-term="barrel rate (batter)">barrel rate</span>, and <span class="term" data-term="xwoba">xwOBA</span> against every 300-plus PA season from 2024 to 2025). The comparison pool doesn't include Votto's prime years, since bat tracking and many Statcast metrics only go back so far, so the algorithm can't directly reject a prime-Votto match. What it can do is show which recent full seasons most closely resemble Stewart's current profile.

**Against the 2024-2025 comparison pool, the closest match was Juan Soto's 2024,** (that's right, I said it) and the hitter the Reds got is something different from the franchise successor the narrative has made him.

## The Votto Comparison

Both are hitters for the Cincinnati Reds whose offensive profiles are built on discipline rather than raw power, Votto from the left side and Stewart from the right. Stewart was drafted as a third baseman, but his defensive limitations pushed him to first, and now the comparison has become unavoidable. Votto's career walk rate was 15.7 percent with a 20.4 percent strikeout rate. Stewart's combined professional walk rate across 1,207 plate appearances is approximately 12 to 13 percent, with a strikeout rate that's been 14 to 18 percent at every level he's played. The at-bats have a similar personality: selective, patient, punishing when the pitcher makes a mistake and willing to take the base when he doesn't.

Same position, same team, same discipline, same philosophy. When you watch him work a count, waiting back on a slider, laying off a sinker that nips the bottom edge, then driving a fastball the other way on 3-1, it feels like the kind of at-bat the Reds haven't had since Votto was in his prime. The narrative writes itself.

The data I ran complicated it. The discipline match itself is genuine: Votto's 2017, his best discipline year, featured a 19.0 percent walk rate and an astonishing 11.7 percent strikeout rate across 707 plate appearances, and Stewart's 2026 rates (18.1 and 16.7) are in the same tier.

Even Votto's best Statcast-tracked seasons, from 2015 onward and past his offensive peak, showed exit velocity of 87.5 to 90.2 mph with barrel rates around 9 to 11 percent. Stewart's exit velocity is 93.4 with a 21.3 percent barrel rate, roughly double Votto's best mark. It's easy to image prime Votto of the early 2010s sported similar numbers.

I know it's a small sample size for Sal, but there are differences. Votto pulled 40 to 50 percent of his batted balls across his career, but Stewart pulls 27.7 percent. Votto's best xwOBA in the Statcast era was .416 to .422. Stewart's is .442 on 72 plate appearances. **Votto produced 160-to-170 wRC+ seasons with below-average exit velocity because his pitch selection, plate coverage, and spray-chart intelligence were extraordinary. Stewart's production is driven more directly by the raw quality of his contact.** Same approach DNA, completely different physical profiles.

## Every Statistical Neighbor Is an MVP Candidate

The similarity algorithm doesn't return mid-tier hitters. **Stewart's two closest full-season Statcast comps are both Juan Soto seasons.** His walk rate and strikeout rate are identical to Soto's 2024 rates to one decimal place, 18.1 percent and 16.7 percent. That match is partly an artifact of rounding on 72 plate appearances, and both rates will move with more data, but the algorithm doesn't care about the coincidence. It's measuring the full profile, and the full profile keeps landing on Soto.

I compared Stewart's 2026 profile against every 300-plus PA hitter season from 2024 and 2025, weighting exit velocity, barrel rate, strikeout rate, walk rate, xwOBA, <span class="term" data-term="xslg">expected slugging</span>, <span class="term" data-term="pull rate">pull rate</span>, and <span class="term" data-term="bat speed">bat speed</span>. The algorithm doesn't know player names, team histories, or franchise narratives. It measures the statistical distance between profiles and returns the closest matches.

<div class="viz">
<p class="viz__title">Stewart's Closest Full-Season Statcast Comps (2024–2025)</p>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Player</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Year</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Age</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">EV</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Brl%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">K%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">BB%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">xwOBA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">wRC+</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;background:#fdf8f0;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:700;white-space:nowrap;">Sal Stewart</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">2026</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">22</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">93.4</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">21.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">16.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">18.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">.442</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:700;">185</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Juan Soto</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2024</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">25</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">713</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">94.2</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">19.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">16.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">18.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.464</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">181</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Juan Soto</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2025</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">26</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">715</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">93.8</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">18.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">19.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">17.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.429</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">156</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Yordan Alvarez</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2024</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">27</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">635</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">93.1</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">10.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.415</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">167</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Corey Seager</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2025</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">31</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">445</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">92.9</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">19.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">13.0%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.400</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">138</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Aaron Judge</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2025</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">33</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">679</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">95.4</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">24.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">23.6%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">18.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.459</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">204</td>
    </tr>
    <tr>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;white-space:nowrap;">Shohei Ohtani</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">2024</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">29</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">731</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">95.8</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">21.4%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">22.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">11.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">.444</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">180</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">Similarity weighted by EV, barrel rate, K%, BB%, xwOBA, xSLG, pull rate, and bat speed. Stewart's 72 PA compared against 300+ PA seasons. Soto's 2024 K% and BB% match Stewart's 2026 to one decimal place (green). Source: Statcast via FanGraphs.</p>
</div>

The Soto 2024 match is the one that made me stop scrolling. That year, Soto posted a walk rate of 18.1 percent and a strikeout rate of 16.7 percent, identical to Stewart's 2026 rates. His xwOBA was .464 with a 181 wRC+. After Soto, the next tier is Alvarez, Seager, Judge, and Ohtani. Seager's 2025 is the most grounded comp in the set, a 138 wRC+ season that represents a realistic production ceiling, while Judge and Ohtani represent the aspirational one. **Every match is an elite hitter with at least four times Stewart's current sample, which is the first reason to hold the comparison loosely.** The algorithm keeps landing on them because the specific combination of discipline, contact quality, and expected production that Stewart is showing only appears in elite seasons.

**Through April 15, only four hitters combine a walk-to-strikeout ratio above 1.0 with a barrel rate above 15 percent: Yordan Alvarez, Sal Stewart, Bryce Harper, and Vladimir Guerrero Jr.** Stewart is the youngest by five years. That club will look different by May, but the profile it describes is real.

## The Thirteenth-Best Fastball Hitter in Baseball

The reason the algorithm returns Soto instead of Votto is the mechanical pathway. Stewart arrives at elite production through an approach that doesn't resemble Votto's, or Soto's, or anyone else in his comp tier.

The FanGraphs scouting report says Stewart "tends to be late on fastballs and is rarely on time to pull them in the air." Scouts framed this as a limitation. But Sal's proven them wrong so far in his MLB career.

Through 72 plate appearances, Stewart ranks 13th in MLB in <span class="term" data-term="four-seam fastball">four-seam fastball</span> <span class="term" data-term="run value">run value</span> per 100 pitches (+5.36), a number that will move as the season develops but whose direction matches the underlying contact quality. He's also positive against <span class="term" data-term="sinker">sinkers</span> (+3.73), and his combined value against hard stuff ranks fourth among hitters who generate positive value against both pitch types. He posted a 1.042 <span class="term" data-term="ops">OPS</span> against pitches 94 mph and above in a 225-pitch 2025 sample. "Can't pull fastballs" is technically accurate about his timing but misleading about his results.

His pull rate is 27.7 percent, among the lowest for any productive power hitter in the game. Alvarez, for comparison, pulls at 53.8 percent. **Stewart drives fastballs to the opposite field and generates more value doing it than the vast majority of hitters generate pulling.** Since he stopped trying to pull, his four-seam value has climbed, though the 72-PA sample can't isolate the cause. In 2025 (50 percent pull rate), it was +1.96 per 100. In 2026 (27.7 percent pull rate), it's +5.36.

His bat speed is 70.7 mph, below the league average of 72.0, and his <span class="term" data-term="fast-swing rate">fast swing rate</span>, the percentage of swings at high effort, is 17.6 percent compared to the league's 26.1. By conventional measures of swing speed, he's a below-average athlete at the plate.

But watch him square up a four-seam fastball on the outer half. The ball doesn't care how fast the bat was traveling if the barrel meets it flush, and Stewart meets it flush more often than almost anyone. His <span class="term" data-term="blast rate">blast rate</span>, the percentage of contact that registers in Statcast's hardest-hit category, is 17.0 percent against a league average of 11.9. Freddie Freeman does this too at 69.8 mph in recent seasons, and he's been one of the best hitters in baseball for a decade, so the concept isn't new. What's new is a 22-year-old who figured it out this early.

The FanGraphs prospect writers explain how this works really well. When Stewart identifies an elevated fastball, he stops closing his stride and plants his front foot toward third base, driving through the ball on the opposite-field path rather than trying to rotate and pull. The scouting report calls this ability to "ID pitches and adjust his footwork accordingly" something "pretty special." **He's reading the pitch type, adjusting his body's alignment mid-swing, and still making barrel contact hard enough to rank in the 97th percentile for xwOBA. That's an elite skill.**

The Votto comp breaks here, too. Votto was more pull-oriented, with power generated through a conventional mechanical pathway. Stewart is like if Yandy Díaz's spray chart married Freddie Freeman's bat speed profile, then produced a baby with a better barrel rate. Pretty cute, right?

## 1,207 Plate Appearances

Sal's discipline isn't a 72-PA phenomenon.

<div class="viz">
<p class="viz__title">Stewart's Career K% and BB% by Level</p>
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Year</th>
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Level</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">Age</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">PA</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">K%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">BB%</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;">wRC+</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2022</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">CPX</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">18</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">28</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">17.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.3%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">131</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2023</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">A</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">19</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">387</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">17.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">127</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2023</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">A+</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">19</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">131</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">13.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">13.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">126</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2024</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">A+</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">20</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">338</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">16.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">14.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">143</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2025</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">AA</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">21</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">329</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">8.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">146</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">2025</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;">AAA</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">21</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">165</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">15.8%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">11.5%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;">164</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;background:#fef2f2;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">2025</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">MLB</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:600;">21</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:600;">58</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">25.9%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#dc2626;font-weight:600;">5.2%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:600;">124</td>
    </tr>
    <tr style="background:#f0fdf4;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">2026</td>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;font-weight:600;">MLB</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:600;">22</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;font-weight:600;">72</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">16.7%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">18.1%</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#16a34a;font-weight:600;">185</td>
    </tr>
  </tbody>
</table>
</div>
<p style="margin-top:0.75rem;font-size:0.78rem;color:#6b7280;line-height:1.5;">Red row: the only data point in 1,207 professional PA where K% exceeded 18%. Green row: 2026 MLB, back within career range. wRC+ improved at every level. Source: FanGraphs, Baseball Reference.</p>
</div>

**His strikeout rate has been between 14 and 18 percent at every professional level he's played.** His 2026 MLB rate of 16.7 percent falls dead center in that career range. The 25.9 percent rate in his 58-PA MLB debut last September is the only data point in eight professional stops across five years that cracked 18. That row glows red in the table for a reason. It's the anomaly.

His walk rate tells a similar story with more texture. He walked at 17.1 percent in A-ball at age 19, his largest single-level sample at 387 PA. The rate dipped to 8.2 percent at Double-A, which is a common adjustment pattern when a young hitter faces upper-minors breaking balls for the first time, then recovered to 11.5 at Triple-A. His 2026 MLB rate of 18.1 percent is probably too high. I'd put his true talent at 12 to 14 percent based on the full career, still above average.

I wrote about Stewart last month, when he hit .700 in his first series and I flagged his <span class="term" data-term="swing length">swing length</span> as a concern. His bat path traveled 7.84 feet through the zone, well above average, and I said it was "the number most likely to define what Stewart's career actually looks like." What I didn't know was that he'd already shortened it. His 2026 swing measures 7.41 feet, close to the league average of 7.32. **He traded length for control, and the results followed.**

Stewart's <span class="term" data-term="iso">isolated power</span>, slugging minus batting average and the cleanest measure of raw extra-base power, was .100 to .175 across roughly 1,200 PA from complex ball through Double-A.

In the summer of 2024, he was wading in the ocean during the All-Star break when he slipped and severed a tendon in his right wrist on a shell. Freak accident and a season-ending surgery.

When he came back in 2025, Baseball America reports that he "began to get more aggressive and looked to pull balls for power when he was ahead in counts. From June onward, he pulled 14 homers to left and left-center field." His ISO jumped to .315 at Triple-A and has held at .291 to .328 across 130 MLB plate appearances. That's 295 combined PA of an ISO above .290 across two levels, and whether the power emerged from physical maturation, full recovery from the wrist, or both, it hasn't faded.

In 2026, he found the balance. He dialed back the all-pull approach without losing the power. His barrel rate actually climbed from 17.5 to 21.3 percent on 47 batted ball events while his pull rate dropped from 50 to 27.7 percent. Getting more barrels while pulling less is more consistent with improved timing than a hot streak, though 47 batted ball events can't confirm either explanation on their own.

The expected stats confirm the production isn't inflated. **His <span class="term" data-term="xba">expected batting average</span> is .304 against a .310 actual. His expected slugging is .629 against .638. His xwOBA is .442 against .457. His <span class="term" data-term="babip (batter)">BABIP</span> is .310, perfectly normal. There's almost nothing to regress.** Again, knock on wood.

Since September 1, 2025, Stewart ranks fourth in MLB in xwOBA among hitters with at least 50 batted ball events, a low bar that limits the comparison pool and one that spans two seasons with substantially different discipline profiles, behind only Aaron Judge, Yordan Alvarez, and Dominic Canzone.

## The Projection Gap

ATC (a FanGraphs inseason <span class="term" data-term="projection systems">projection system</span>), the only one currently available for Stewart, projects a .263/.326/.448 rest-of-season line with 21 home runs and a 110 wRC+. That's a solid everyday first baseman, and roughly 75 points of wRC+ below his current pace.

**The short version of why I think ATC is too low is the walk rate.** ATC projects 7.7 percent, but Stewart has walked at 11 to 18 percent in most professional samples larger than his 58-PA debut, with a dip to 8.2 at Double-A that rebounded at Triple-A and in the majors. His A-ball rate at age 19 was 17.1 percent across 387 plate appearances. <span class="term" data-term="true talent">True-talent</span> walk rate is probably 12 to 14 percent, and that alone would push his projected line well above ATC's estimate. Where ATC is probably right is that a .310 <span class="term" data-term="batting average">batting average</span> won't hold over a full season. His minor league career average is .285, and that's a more reasonable expectation.

His platoon splits so far are encouraging. Against right-handed pitching, the tougher matchup for a right-handed hitter, he's posted a 146 wRC+ on 51 plate appearances with a 17.6 percent strikeout rate. The discipline holds against same-side pitching. Against lefties, the sample is only 21 PA, but it's consistent with Baseball America's 2024 scouting report noting he "feasts on lefthanders" with a 10 percent strikeout rate and a 26.7 percent walk rate in the minors.

## What Holds and What Doesn't

**The open questions are his bat speed and his defense.** His bat speed dropped from 72.1 mph in 2025 to 70.7 in 2026, and while the shorter swing explains most of that, bat speed is raw material. If it keeps dropping, his barrel rate will follow, and 70.7 is already below average. There's no historical model for a first baseman sustaining a 20-plus percent barrel rate at sub-71 mph bat speed over a full season, and I genuinely don't know whether Stewart is the exception to that pattern or a hitter whose power profile will compress as the league adjusts.

His arm moved him off third base, he's still learning first, and FanGraphs projects -8.9 defensive runs, which caps his overall value. Great American Ball Park's 119 home run <span class="term" data-term="park factor">park factor</span> helps the offensive numbers but makes the road splits worth watching as data accumulates. If you ask me, his defense looks good.

But, you know Votto wasn't a great defensive first basemen early on, either. But he worked hard on it and improved. Everything I've heard about Sal indicates he's more than willing to put that type of work in, and he's got a great group of vets back in Miami (including Manny Machado) to mentor him.

ZiPS, Dan Szymborski's projection system, takes a longer view, projecting Stewart to reach .270/.343/.474 with 26 home runs by age 26, a four-year trajectory that assumes the discipline holds. If the walk rate settles at 13 to 15 percent and the barrel rate normalizes to 16 to 18 percent, the Reds have a perennial All-Star bat at a position that needs one.

ATC says 110 wRC+. The six closest Statcast comps shown above, all from full-season samples, averaged 171, though that number reflects which seasons the algorithm surfaces, not a prediction. The gap between the projection and the profile is what makes Stewart interesting. The walk rate will close it one way or the other.

Anyway, here's to hoping!

---

*Correction, April 16, 2026: An earlier version of this article incorrectly identified Joey Votto as a right-handed hitter. Votto batted left-handed. The text has been updated.*
