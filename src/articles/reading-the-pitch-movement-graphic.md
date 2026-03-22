---
layout: article.njk
title: "Paul Skenes and Logan Webb: What Their Movement Charts Reveal About How Pitchers Win"
subtitle: "Baseball Savant's most overlooked chart shows the design of an arsenal before a single traditional stat is calculated. Skenes and Webb show how different that design can be."
category: Stat Explainer
date: 2026-03-22
excerpt: "On every Baseball Savant pitcher page, there is a chart labeled Pitch Movement. Most fans scroll past it. Paul Skenes posted a 1.97 ERA in 2025 and struck out 29.5 percent of batters. Logan Webb posted a 3.22 ERA and generated ground balls at the 91st percentile of the league. Their movement charts look almost nothing alike, and that difference tells you more about how each pitcher wins than their ERA ever could."
description: "How to read Baseball Savant's Pitch Movement graphic, explained through Paul Skenes and Logan Webb."
permalink: /articles/reading-the-pitch-movement-graphic.html
draft: true
---

On every Baseball Savant pitcher page, there is a chart labeled Pitch Movement. It sits below the arsenal summary and above the game log, a scatter plot on a circular grid measured in inches, dots of different colors in no obvious arrangement, axes that require a second read. Most fans scroll past it. Even serious fans. They look at the velocity numbers, they check the strikeout rates, they close the tab.

That's the single biggest analytical mistake you can make on that page. The movement chart is the best picture available of how a pitcher actually attacks hitters. It shows you the geometry of the arsenal, the theory of the attack, before you have looked at a single traditional stat.

Two pitchers make the clearest possible case for why the chart matters. Paul Skenes of the Pittsburgh Pirates and Logan Webb of the San Francisco Giants both pitched at an elite level in 2025. Skenes posted a 1.97 ERA with a strikeout rate near 30 percent. Webb posted a 3.22 ERA, walked almost nobody, and generated ground balls at a rate that placed him in the top ten percent of the league. Different numbers from different kinds of pitchers. Their movement charts look like they were built by people with completely different philosophies about what pitching is for.

<figure class="viz">
<p class="viz__title">Logan Webb — Pitch Movement (2025)</p>
<img src="/images/webb-savant-full.png" alt="Logan Webb's Baseball Savant pitch movement chart, showing his sinker and sweeper spread horizontally across the chart" style="width:100%;border-radius:4px;">
<p class="viz__caption">Webb's chart from Baseball Savant. The sinker plots arm-side right; the sweeper plots far glove-side left. The horizontal spread defines the shape of the arsenal.</p>
</figure>

## The Catcher's View

The chart plots each pitch by how much it moves, compared to a theoretical baseline, in two directions: horizontally (left-right) and vertically (up-down). Each axis is measured in inches. The grid underneath is circular, with rings marking 12 and 24 inches from the center.

Before any of the numbers make sense, one thing has to be established. The chart shows everything from the catcher's perspective, behind the plate, not the pitcher's. For a right-handed pitcher: arm-side movement, the ball running toward a right-handed batter's hip, plots to the RIGHT of center on the chart. Glove-side movement, the ball breaking away from a right-handed batter, plots to the LEFT.

This is the single most common point of confusion about the chart, and it's worth getting right before going further. When you see a dot far to the left on a right-handed pitcher's chart, that pitch breaks away from a right-handed batter. Far to the right, it runs in on him.

<figure class="viz">
<p class="viz__title">The Movement Grid — Orientation</p>
<svg viewBox="0 0 540 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer ring (24") -->
  <circle cx="270" cy="230" r="144" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Inner ring (12") -->
  <circle cx="270" cy="230" r="72" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Crosshairs -->
  <line x1="55" y1="230" x2="485" y2="230" stroke="#d1d5db" stroke-width="1.5"/>
  <line x1="270" y1="35" x2="270" y2="425" stroke="#d1d5db" stroke-width="1.5"/>
  <!-- Ring distance labels -->
  <text x="278" y="161" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">12"</text>
  <text x="278" y="90" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">24"</text>
  <!-- MORE RISE / MORE DROP -->
  <text x="270" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="13" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <!-- Arm-side label -->
  <text x="488" y="224" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">ARM-SIDE</text>
  <text x="488" y="239" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">(RHP →)</text>
  <!-- Glove-side label -->
  <text x="52" y="224" text-anchor="end" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">GLOVE-SIDE</text>
  <text x="52" y="239" text-anchor="end" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">(← RHP)</text>
  <!-- Center origin dot -->
  <circle cx="270" cy="230" r="4" fill="#d1d5db"/>
  <text x="280" y="225" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">(0, 0)</text>
  <!-- Catcher note at bottom -->
  <text x="270" y="462" text-anchor="middle" font-size="11" fill="#9ca3af" font-style="italic" font-family="system-ui,-apple-system,sans-serif">Everything shown from the catcher's point of view, behind the plate</text>
</svg>
<p class="viz__caption">The movement grid. For a right-handed pitcher, the arm side is right, the glove side is left. The center (0,0) represents a theoretical spinless ball: not no movement, but no spin-induced movement.</p>
</figure>

The X-axis is straightforward once the perspective is right. A sinker running in toward a right-handed batter's hands plots right of center. A sweeper breaking off the outside edge of the plate plots left of center. The further from the vertical midline, the more horizontal movement.

The Y-axis is where the chart gets more interesting and requires a small correction to the word "rise." What the vertical axis measures is called <span class="term" data-term="ivb">induced vertical break</span>, IVB, and it is not how far the ball physically rises. It is the vertical movement caused by spin, calculated by comparing the pitch's actual vertical path to that of a theoretical spinless ball traveling at the same speed on the same initial trajectory. Gravity is removed from the equation. What remains is the Magnus effect, the force generated by spin, pushing the ball up or pulling it down.

A four-seam fastball with an IVB of +20 inches does not climb 20 inches. No pitch rises. What it does is fall 20 inches less than gravity alone would produce. A fastball thrown at 98 miles per hour arrives higher in the zone than the hitter's brain predicts, because the brain is accounting for gravity that the backspin has partially cancelled. That's the optical illusion hitters call a "rising fastball." A curveball with an IVB of -12 inches falls harder than gravity alone would produce, the topspin pulling the ball downward through the zone.

<figure class="viz">
<p class="viz__title">The Origin — What (0,0) Actually Means</p>
<svg viewBox="0 0 540 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer ring -->
  <circle cx="270" cy="230" r="144" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Inner ring -->
  <circle cx="270" cy="230" r="72" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Crosshairs -->
  <line x1="55" y1="230" x2="485" y2="230" stroke="#d1d5db" stroke-width="1.5"/>
  <line x1="270" y1="35" x2="270" y2="425" stroke="#d1d5db" stroke-width="1.5"/>
  <!-- Faint example dots (typical pitch locations, for context) -->
  <!-- FF (high arm-side) -->
  <circle cx="306" cy="110" r="10" fill="#e05c1a" opacity="0.2"/>
  <!-- CU (low glove-side) -->
  <circle cx="234" cy="314" r="9" fill="#3b82f6" opacity="0.2"/>
  <!-- SI (arm-side center) -->
  <circle cx="354" cy="194" r="9" fill="#f59e0b" opacity="0.2"/>
  <!-- Origin highlight -->
  <circle cx="270" cy="230" r="12" fill="none" stroke="#e05c1a" stroke-width="2"/>
  <circle cx="270" cy="230" r="4" fill="#e05c1a"/>
  <!-- Arrow pointing to origin -->
  <line x1="340" y1="180" x2="282" y2="224" stroke="#e05c1a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Origin annotation -->
  <rect x="344" y="155" width="168" height="44" rx="4" fill="#fff7f4" stroke="#e05c1a" stroke-width="1"/>
  <text x="428" y="174" text-anchor="middle" font-size="12" font-weight="700" fill="#e05c1a" font-family="system-ui,-apple-system,sans-serif">(0, 0) = No spin</text>
  <text x="428" y="190" text-anchor="middle" font-size="11" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">Not no movement: no spin</text>
  <!-- Direction labels -->
  <text x="270" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <text x="488" y="233" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">ARM →</text>
  <text x="52" y="233" text-anchor="end" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">← GLOVE</text>
  <!-- Faint pitch labels -->
  <text x="316" y="104" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">4-seam</text>
  <text x="244" y="330" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">Curveball</text>
  <text x="364" y="190" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">Sinker</text>
</svg>
<p class="viz__caption">No real pitch lives at (0,0). Every pitch has spin; spin creates movement. The origin is the theoretical reference: a spinless ball, acted on only by gravity, going nowhere it wasn't aimed. Faint dots show where typical pitch types actually plot.</p>
</figure>

The (0,0) origin doesn't mean a pitch has no movement. It means a pitch has no spin-induced movement. No real pitch lives at the origin. Gravity still acts on every pitch, and every pitcher imparts at least some spin to the ball. What the origin represents is the theoretical baseline: a ball with zero spin, going only where gravity takes it. Real pitches cluster above it, below it, to either side, and the distance from center tells you how hard the spin is working.

One last toggle before reading any chart. The default view shows every pitch at the same dot size regardless of usage. Click "Proportional to Usage" in the Savant interface and the dots scale to reflect how often the pitcher actually throws each pitch. The biggest dot is the pitch the pitcher lives on. Leave that setting on. It changes what the chart tells you.

## Paul Skenes

<figure class="viz">
<p class="viz__title">Paul Skenes — Pitch Movement (2025)</p>
<img src="/images/skenes-savant-full.png" alt="Paul Skenes's Baseball Savant pitch movement chart, showing his four-seam fastball high on the vertical axis and his splinker well below center" style="width:100%;border-radius:4px;">
<p class="viz__caption">Skenes's chart. The four-seam fastball (orange cluster) sits near the top of the vertical axis. The splinker (teal) sits near the bottom. The sweeper plots far glove-side. The shape of the arsenal is predominantly vertical.</p>
</figure>

Paul Skenes's chart looks like someone stacked two pitches directly on top of each other.

His four-seam fastball, the dominant orange cluster when proportional mode is on, plots near the top of the vertical axis: roughly 20 inches of induced vertical break, with modest arm-side run. His splinker, a hybrid pitch that behaves somewhere between a splitter and a fastball, dives below center, negative IVB, landing in the lower portion of the chart in approximately the same horizontal column as the fastball. The two primary pitches sit almost directly above and below each other. The shape of the chart is tall.

<figure class="viz">
<p class="viz__title">Paul Skenes — Primary Arsenal (Simplified)</p>
<svg viewBox="0 0 540 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer ring -->
  <circle cx="270" cy="230" r="144" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Inner ring -->
  <circle cx="270" cy="230" r="72" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Crosshairs -->
  <line x1="55" y1="230" x2="485" y2="230" stroke="#e5e7eb" stroke-width="1.5"/>
  <line x1="270" y1="35" x2="270" y2="425" stroke="#e5e7eb" stroke-width="1.5"/>
  <!-- Direction labels -->
  <text x="270" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <text x="488" y="233" font-size="11" font-weight="700" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">ARM →</text>
  <text x="52" y="233" text-anchor="end" font-size="11" font-weight="700" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">← GLOVE</text>
  <!-- Vertical bracket between FF and FS -->
  <!-- Bracket line -->
  <line x1="320" y1="110" x2="320" y2="278" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Bracket caps -->
  <line x1="312" y1="110" x2="328" y2="110" stroke="#6b7280" stroke-width="2"/>
  <line x1="312" y1="278" x2="328" y2="278" stroke="#6b7280" stroke-width="2"/>
  <!-- Gap label -->
  <text x="336" y="192" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">~28"</text>
  <text x="336" y="207" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">vertical gap</text>
  <!-- FF dot (four-seam: +6" arm-side, +20" rise) -->
  <!-- svg_x = 270 + 6*6 = 306, svg_y = 230 - 20*6 = 110 -->
  <circle cx="306" cy="110" r="18" fill="#e05c1a" opacity="0.9"/>
  <text x="306" y="115" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FF</text>
  <!-- FF label -->
  <text x="175" y="106" text-anchor="end" font-size="13" font-weight="700" fill="#e05c1a" font-family="system-ui,-apple-system,sans-serif">4-Seam Fastball</text>
  <text x="175" y="121" text-anchor="end" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">98.2 mph · +20" IVB</text>
  <line x1="178" y1="110" x2="286" y2="110" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- FS dot (splinker: +4" arm-side, -8" drop) -->
  <!-- svg_x = 270 + 4*6 = 294, svg_y = 230 + 8*6 = 278 -->
  <circle cx="294" cy="278" r="14" fill="#0ea5e9" opacity="0.9"/>
  <text x="294" y="283" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FS</text>
  <!-- FS label -->
  <text x="175" y="274" text-anchor="end" font-size="13" font-weight="700" fill="#0ea5e9" font-family="system-ui,-apple-system,sans-serif">Splinker</text>
  <text x="175" y="289" text-anchor="end" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">93.7 mph · −8" IVB</text>
  <line x1="178" y1="278" x2="278" y2="278" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
</svg>
<p class="viz__caption">Skenes simplified: four-seam fastball and splinker only. Both pitches travel in roughly the same horizontal column. The vertical gap between them is approximately 28 inches. The sweeper (not shown) adds a horizontal wrinkle to prevent hitters from sitting entirely on the vertical game.</p>
</figure>

What this looks like to a hitter: both pitches leave Skenes's hand on approximately the same release plane, from the same arm slot, at similar initial trajectories. The 4-seam fastball arrives at the letters. The splinker ends up at the ankles. The hitter has less than 400 milliseconds from the moment the ball leaves the hand to decide whether to swing. He cannot wait to see where it's going. He has to commit to a vertical half of the zone on the way in, and Skenes throws pitches that live at both ends of that zone.

The 2025 numbers confirm exactly what the shape predicts. <span class="term" data-term="strikeout rate">K%</span> at 29.5 percent, 89th percentile. <span class="term" data-term="whiff%">Whiff rate</span> at 30.1 percent, 83rd percentile. <span class="term" data-term="barrel rate">Barrel rate</span> suppressed to the 86th percentile, hitters consistently making contact in the wrong part of the zone, rolling over pitches they thought were up or getting under pitches that dove.

The sweeper is worth noting separately, though it doesn't define the chart's shape. At Stuff+ 131, it is arguably his single best pitch by raw grade. But it serves a specific purpose: it gives hitters something to think about on the horizontal axis, preventing them from committing entirely to the vertical game. Against a hitter who has decided the fastball is up and the splinker is in the dirt, the sweeper breaks sideways and punishes the assumption. It's not the architect of the arsenal. It's the thing that keeps the architect from being predictable.

The fastball's 20 inches of IVB is elite but not unprecedented in the modern game. Several pitchers have thrown four-seamers in that range. What makes the chart look the way it does is the separation: the distance between where the fastball ends up and where the splinker ends up is one of the more extreme top-to-bottom ranges in the league. Skenes was 23 years old in 2025. He had, at that age, one of the most clearly differentiated movement profiles in baseball.

## Logan Webb

<figure class="viz">
<p class="viz__title">Logan Webb — Pitch Movement (2025)</p>
<img src="/images/webb-savant-full.png" alt="Logan Webb's Baseball Savant pitch movement chart showing his sinker arm-side right and sweeper far glove-side left" style="width:100%;border-radius:4px;">
<p class="viz__caption">Webb's chart. The sinker plots right of center, arm-side. The sweeper plots far left, well past the glove-side boundary. The shape is wide rather than tall.</p>
</figure>

Logan Webb's four-seam fastball velocity is 92.6 miles per hour. That's the 23rd percentile. He is not overpowering anyone. If you pull up his chart before understanding what you're looking at, the fact that he's an average-velocity pitcher colors your impression of the dots. They're not dramatic. There's no towering cluster near the top of the vertical axis.

The story is on the X-axis.

<figure class="viz">
<p class="viz__title">Logan Webb — Primary Arsenal (Simplified)</p>
<svg viewBox="0 0 540 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer ring -->
  <circle cx="270" cy="230" r="144" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Inner ring -->
  <circle cx="270" cy="230" r="72" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Crosshairs -->
  <line x1="55" y1="230" x2="485" y2="230" stroke="#e5e7eb" stroke-width="1.5"/>
  <line x1="270" y1="35" x2="270" y2="425" stroke="#e5e7eb" stroke-width="1.5"/>
  <!-- Direction labels -->
  <text x="270" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <text x="488" y="233" font-size="11" font-weight="700" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">ARM →</text>
  <text x="52" y="233" text-anchor="end" font-size="11" font-weight="700" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">← GLOVE</text>
  <!-- Horizontal bracket between SI and ST -->
  <!-- SI at svg: (354, 194), ST at svg: (162, 218) — bracket at midpoint y=206 -->
  <line x1="162" y1="255" x2="354" y2="255" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="162" y1="247" x2="162" y2="263" stroke="#6b7280" stroke-width="2"/>
  <line x1="354" y1="247" x2="354" y2="263" stroke="#6b7280" stroke-width="2"/>
  <!-- Spread label -->
  <text x="258" y="274" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">~32" horizontal spread</text>
  <!-- SI dot (sinker: +14" arm-side, +6" rise) -->
  <!-- svg_x = 270 + 14*6 = 354, svg_y = 230 - 6*6 = 194 -->
  <circle cx="354" cy="194" r="18" fill="#f59e0b" opacity="0.9"/>
  <text x="354" y="199" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">SI</text>
  <!-- SI label -->
  <text x="400" y="182" font-size="13" font-weight="700" fill="#f59e0b" font-family="system-ui,-apple-system,sans-serif">Sinker</text>
  <text x="400" y="197" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">92.6 mph · +6" IVB</text>
  <!-- ST dot (sweeper: -18" glove-side, +2" rise) -->
  <!-- svg_x = 270 - 18*6 = 162, svg_y = 230 - 2*6 = 218 -->
  <circle cx="162" cy="218" r="14" fill="#84cc16" opacity="0.9"/>
  <text x="162" y="223" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- ST label -->
  <text x="115" y="205" text-anchor="end" font-size="13" font-weight="700" fill="#84cc16" font-family="system-ui,-apple-system,sans-serif">Sweeper</text>
  <text x="115" y="220" text-anchor="end" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">84.6 mph · −2" IVB</text>
</svg>
<p class="viz__caption">Webb simplified: sinker and sweeper only. The sinker runs arm-side; the sweeper breaks far glove-side. The horizontal spread between them is roughly 32 inches. The changeup (not shown) occupies a third distinct zone to prevent hitters from camping on either extreme.</p>
</figure>

Webb's sinker plots well to the right on the chart, arm-side, running in toward a right-handed batter's hands at 92.6 miles per hour. His sweeper plots far to the left, well past the glove-side boundary, breaking off the outside edge of the plate. When you look at the two dots, they sit at nearly opposite ends of the horizontal range. The shape of the chart is wide.

What this looks like to a hitter: both pitches come out of Webb's hand in approximately the same delivery window. One ends up running in at the handle, off the label of the bat. One ends up breaking off the plate, a foot outside the strike zone. The hitter who is sitting on the sinker gets the sweeper. The hitter who is sitting on the sweeper gets the sinker. Either way, he's covering the wrong side.

His <span class="term" data-term="ground ball rate">ground ball rate</span> is the direct result of this design. In 2025, 54.2 percent of balls put in play against Webb went on the ground, 91st percentile of the league. A hitter who gets jammed by a sinker running in tends to hit the top of the ball. A hitter who reaches for a sweeper breaking away tends to roll over. Both outcomes produce ground balls. The chart predicts the statistic before a pitch is thrown.

Webb's changeup serves the same purpose as Skenes's sweeper: it solves the problem created by having only two pitches in play. Without it, you could theoretically look for the extremes and wait. The changeup drops vertically at a different speed than either breaking pitch, occupying a third territory on the chart, at a different depth. The result is that three primary pitches cover three distinct zones: arm-side, glove-side, and down.

His <span class="term" data-term="xera">xERA</span> in 2025 was 3.58 against an actual ERA of 3.22. His xFIP was 2.78. His <span class="term" data-term="babip">BABIP</span> was .346, roughly 45 points above average, suggesting that some of his well-placed contact found gaps rather than gloves. The xFIP says he pitched better than his ERA indicates. The movement chart says the underlying arsenal is legitimate. The .346 BABIP is the anomaly, not the pitch design.

He works at 92 miles per hour. He is one of the cleaner examples in modern baseball of a pitcher who never needed velocity to be elite. The chart explains why.

## Two Shapes

<figure class="viz">
<p class="viz__title">Skenes vs. Webb — Two Arsenal Shapes</p>
<svg viewBox="0 0 560 340" width="100%" style="max-width:560px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <!-- Panel divider -->
  <line x1="280" y1="10" x2="280" y2="330" stroke="#e5e7eb" stroke-width="1"/>

  <!-- LEFT PANEL: Skenes -->
  <!-- Outer ring (72px @ 3px/inch = 24") -->
  <circle cx="140" cy="170" r="72" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Inner ring (36px = 12") -->
  <circle cx="140" cy="170" r="36" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Crosshairs -->
  <line x1="40" y1="170" x2="240" y2="170" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="140" y1="70" x2="140" y2="270" stroke="#e5e7eb" stroke-width="1"/>
  <!-- Panel label -->
  <text x="140" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1a1a1a" font-family="system-ui,-apple-system,sans-serif">PAUL SKENES</text>
  <text x="140" y="36" text-anchor="middle" font-size="11" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">Vertical shape</text>
  <!-- FF dot: +6" right, +20" up → (140+18, 170-60) = (158, 110) -->
  <circle cx="158" cy="110" r="12" fill="#e05c1a" opacity="0.9"/>
  <text x="158" y="115" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FF</text>
  <!-- FS dot: +4" right, -8" down → (140+12, 170+24) = (152, 194) -->
  <circle cx="152" cy="194" r="9" fill="#0ea5e9" opacity="0.9"/>
  <text x="152" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FS</text>
  <!-- Vertical bracket -->
  <line x1="180" y1="110" x2="180" y2="194" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="175" y1="110" x2="185" y2="110" stroke="#6b7280" stroke-width="1.5"/>
  <line x1="175" y1="194" x2="185" y2="194" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Vertical arrow label -->
  <text x="197" y="155" font-size="10" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">↕ gap</text>
  <!-- Direction labels left panel -->
  <text x="140" y="62" text-anchor="middle" font-size="9" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">RISE</text>
  <text x="140" y="286" text-anchor="middle" font-size="9" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">DROP</text>

  <!-- RIGHT PANEL: Webb -->
  <!-- Outer ring -->
  <circle cx="420" cy="170" r="72" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Inner ring -->
  <circle cx="420" cy="170" r="36" fill="none" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Crosshairs -->
  <line x1="320" y1="170" x2="520" y2="170" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="420" y1="70" x2="420" y2="270" stroke="#e5e7eb" stroke-width="1"/>
  <!-- Panel label -->
  <text x="420" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#1a1a1a" font-family="system-ui,-apple-system,sans-serif">LOGAN WEBB</text>
  <text x="420" y="36" text-anchor="middle" font-size="11" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">Horizontal shape</text>
  <!-- SI dot: +14" arm-side, +6" rise → (420+42, 170-18) = (462, 152) -->
  <circle cx="462" cy="152" r="12" fill="#f59e0b" opacity="0.9"/>
  <text x="462" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">SI</text>
  <!-- ST dot: -18" glove-side, +2" rise → (420-54, 170-6) = (366, 164) -->
  <circle cx="366" cy="164" r="9" fill="#84cc16" opacity="0.9"/>
  <text x="366" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- Horizontal bracket -->
  <line x1="366" y1="192" x2="462" y2="192" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="366" y1="187" x2="366" y2="197" stroke="#6b7280" stroke-width="1.5"/>
  <line x1="462" y1="187" x2="462" y2="197" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Horizontal arrow label -->
  <text x="414" y="210" text-anchor="middle" font-size="10" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">↔ spread</text>
  <!-- Direction labels right panel -->
  <text x="524" y="173" font-size="9" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">ARM →</text>
  <text x="316" y="173" text-anchor="end" font-size="9" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">← GLOVE</text>
</svg>
<p class="viz__caption">Two shapes. Skenes (left): the vertical gap between fastball and splinker forces hitters to guess a height. Webb (right): the horizontal spread between sinker and sweeper forces hitters to guess a side. Both shapes produce elite results. They produce them differently.</p>
</figure>

Put the two charts side by side and the difference is immediate.

Skenes is tall. The dominant axis of his arsenal is vertical. He wins by making hitters unsure about height: two pitches from the same release window, one going to the letters and one going to the ankles. The chart is an oval aligned top-to-bottom. His 2025 profile reflects this directly: the strikeout rate, the whiff rate, the barrel suppression all trace back to hitters guessing wrong in the vertical direction.

Webb is wide. The dominant axis of his arsenal is horizontal. He wins by making hitters unsure about side: two pitches that leave the same delivery window, one running into the hands and one breaking off the far edge of the plate. The chart is an oval aligned left-to-right. His profile reflects this just as directly: the ground ball rate, the contact suppression, the ERA sustainability all trace back to hitters guessing wrong in the horizontal direction.

Neither shape is superior to the other. They work on different principles and, in many respects, produce different statistical profiles. Skenes is a strikeout pitcher because his vertical gap creates swings at pitches not in the zone, or contact in the wrong part of the zone. Webb is a ground ball pitcher because his horizontal spread creates rolled-over contact and weak grounders. A lineup that grinds counts and lays off breaking balls outside the zone can survive against Webb better than against Skenes; a lineup that pulls hard gets eaten up by the sinker. The shapes say different things about what kinds of lineups will and won't succeed against each pitcher.

Both of them were elite in 2025. The chart explained why before a single traditional stat was calculated.

## Reading Any Arsenal

The next time you open a Baseball Savant pitcher page, start with the movement chart. How much separation exists between the pitch clusters?

Clusters that plot tightly together, pitches within a few inches of each other on both axes, are the concern. A pitcher whose entire arsenal occupies a small area of the chart is giving hitters a narrow window to track. He may still be difficult if the velocity is high or the command is exceptional. But he isn't working with the kind of geometric deception that the Skenes and Webb charts show.

Vertical separation predicts strikeout upside. The further apart a pitcher's highest and lowest dots, the more ground the hitter has to cover in the vertical zone. This is the Skenes profile: elite IVB on the fastball, significant negative movement on the splinker, a gap that hitters cannot narrow by tracking the release point.

Horizontal separation predicts ground ball rate and, with it, ERA sustainability. The wider a pitcher's dots are on the X-axis, the more he is forcing hitters to choose a side of the plate. This is the Webb profile: an arsenal that doesn't overwhelm with velocity but consistently produces weak, pulled contact. Pitchers with this shape tend to have stable ERAs over full seasons, because they're not depending on sequencing or batted ball fortune to suppress runs.

Pitches that cluster near the origin, close to (0,0) regardless of velocity, are the red flag. A pitch with limited induced movement behaves predictably. It falls roughly where gravity says it should. Hitters can time it and get under it or through it without committing to a guess about height or side. High velocity can partially compensate for this, but the chart is telling you something the radar gun isn't.

A chart with dominant vertical separation points toward strikeout rate upside, the profile you pay for in formats that reward punch-outs. A chart with dominant horizontal separation points toward ERA sustainability and ratios that hold up across a 162-game season, even without a dominant strikeout number. A chart where all pitches cluster tightly near center, with no real shape, is the one to approach carefully regardless of what the headline ERA says.

The chart doesn't tell you whether a pitcher will stay healthy, or how he'll adjust when opposing teams have three months of film, or whether the command holds in August. It shows you the theory of the attack, the geometry the pitcher has built to solve the problem of getting hitters out.

Skenes's theory: I will make you choose a vertical half of the zone, and you will be wrong.

Webb's theory: I will make you choose a side of the plate, and you will be wrong.

In 2025, both of them were right most of the time. The chart told you why.
