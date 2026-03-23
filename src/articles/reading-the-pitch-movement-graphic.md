---
layout: article.njk
title: "Paul Skenes and Logan Webb: What Their Movement Profiles Reveal About How Pitchers Win"
subtitle: "Baseball Savant puts the Movement Profile front and center on every pitcher page. Most fans have no idea what they're looking at. Skenes and Webb show you how to read it."
category: Stat Explainer
date: 2026-03-22
excerpt: "On every Baseball Savant pitcher page, there is a chart called the Movement Profile. It's right there, impossible to miss — a scatter plot on a circular grid, dots of different colors, no obvious pattern. Most fans look at it, get nothing from it, and move on to the numbers they recognize. Paul Skenes posted a 1.97 ERA in 2025 and struck out 29.5 percent of batters. Logan Webb posted a 3.22 ERA and generated ground balls at the 91st percentile of the league. Their Movement Profiles look almost nothing alike, and that difference tells you more about how each pitcher wins than their ERA ever could."
description: "How to read Baseball Savant's Movement Profile chart, explained through Paul Skenes and Logan Webb."
permalink: /articles/reading-the-pitch-movement-graphic.html
draft: true
---

Near the top-right of every Baseball Savant pitcher page, there is a scatter plot labeled "Movement Profile (Induced Break)." It's a circular grid measured in inches, with different colors in no obvious arrangement, and axes that require a second read. Tons of folks see it, but get nothing from it before moving on to the numbers they recognize. And who can blame them? It's kinda tough to interpret.

<figure class="viz" style="max-width:700px;margin:2rem auto;">
<p class="viz__title">Paul Skenes — Baseball Savant Pitcher Page (2025)</p>
<img src="/images/skenes-savant-top-row.png" alt="The top section of Paul Skenes's Baseball Savant page, showing his player card and basic stats on the left, percentile rankings in the middle, and the Movement Profile on the right" style="width:100%;border-radius:4px;">
<p class="viz__caption">The top of Skenes's Savant page. Left: player card with basic stats and pitch usage. Center: 2025 percentile rankings across pitching categories. Right: the Movement Profile.</p>
</figure>

That chart is the best picture available of how a pitcher actually attacks hitters. It shows you the geometry of their arsenal — which pitches go where, how they move, how they relate to each other. That's the theory of the attack, laid out visually.

Two pitchers make the clearest possible case for why the chart matters. Paul Skenes of the Pittsburgh Pirates and Logan Webb of the San Francisco Giants both pitched at an elite level in 2025.

On the surface, several of their stats are pretty similar. Skenes walked about 5.7 percent of batters while Webb walked 5.4 percent. Both had a <span class="term" data-term="siera">SIERA</span> in the 3.10s, and both have excellent <span class="term" data-term="stuff+">Stuff+</span> and <span class="term" data-term="location+">Location+</span> numbers. Maybe the most obvious difference lay with <span class="term" data-term="era">ERA</span>: Skenes maintained a spectacular 1.97 ERA, while Webb's ERA was 3.22.

Here's where the similarities end, and we can see just how different these guys' approaches are. Skenes has a wide arsenal of hard and breaking pitches that generate a strikeout rate of near 30 percent. Webb throws in the low-90s and relies heavily on movement and accuracy to generate ground ball outs at a rate that placed him in the top ten percent of the league. 

It's one thing to know Skenes and Webb are different kinds of pitchers, but it's another to understand exactly why. That's what their Movement Profiles show — the geometry behind how each of them wins, and just how hard it is to do what they do with a baseball.

<figure class="viz" style="max-width:460px;margin:2rem auto;">
<p class="viz__title">Logan Webb — Movement Profile (2025)</p>
<img src="/images/webb-savant-full.png" alt="Logan Webb's Baseball Savant Movement Profile, showing his sinker and sweeper spread horizontally across the chart" style="width:100%;border-radius:4px;">
<p class="viz__caption">Webb's chart from Baseball Savant. The sinker (SI) plots arm-side right; the sweeper (ST) plots far glove-side left. Also visible: changeup (CH), cutter (FC), and four-seam fastball (FF). The horizontal spread defines the shape of the arsenal.</p>
</figure>

## The Catcher's View

The chart plots each pitch by how much it moves, compared to a theoretical baseline, in two directions: horizontally (left-right) and vertically (up-down). Each axis is measured in inches. The grid underneath is circular, with rings marking 12 and 24 inches from the center.

Before any of this makes sense, though, there's one thing you need to know. The chart shows everything from the catcher's perspective, behind the plate, not the pitcher's. For a right-handed pitcher: arm-side movement, the ball running toward a right-handed batter's hip, plots to the RIGHT of center on the chart. Glove-side movement, the ball breaking away from a right-handed batter, plots to the LEFT.

This is the thing that trips people up most often, so get it locked in before going further. When you see a dot far to the left on a right-handed pitcher's chart, that pitch breaks away from a right-handed batter. Far to the right, it runs in on him.

<figure class="viz">
<p class="viz__title">The Movement Grid — Orientation</p>
<svg viewBox="-40 0 620 478" width="100%" style="max-width:580px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
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
  <text x="270" y="470" text-anchor="middle" font-size="11" fill="#9ca3af" font-style="italic" font-family="system-ui,-apple-system,sans-serif">Everything shown from the catcher's point of view, behind the plate</text>
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
  <line x1="208" y1="178" x2="260" y2="224" stroke="#e05c1a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Origin annotation -->
  <rect x="22" y="138" width="183" height="46" rx="4" fill="#fff7f4" stroke="#e05c1a" stroke-width="1"/>
  <text x="113" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">THE ORIGIN</text>
  <text x="113" y="173" text-anchor="middle" font-size="12" font-weight="700" fill="#e05c1a" font-family="system-ui,-apple-system,sans-serif">(0, 0) = No spin</text>
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
<p class="viz__caption">No real pitch actually lives at the origin, because every pitch has spin and spin creates movement. The origin is simply a theoretical reference: a spinless ball, acted on only by gravity, going exactly where it was aimed. The colored circles show where typical pitch types actually plot in reference to the origin. Fun fact: sinkers still plot above center, because they have backspin like a four-seamer and still "rise" relative to a spinless ball. The "sink" is that they rise less than a four-seamer does — so compared to what a hitter expects from a fastball, the ball arrives lower than predicted.</p>
</figure>

The (0,0) origin doesn't mean a pitch has no movement. It means a pitch has no spin-induced movement. No real pitch lives at the origin. Gravity still acts on every pitch, and every pitcher imparts at least some spin to the ball. What the origin represents is the theoretical baseline: a ball with zero spin, going only where gravity takes it. Real pitches cluster above it, below it, to either side, and the distance from center tells you how hard the spin is working.

One last toggle before reading any chart. The default view shows every pitch at the same dot size regardless of usage. Click "Proportional to Usage" in the Savant interface and the dots scale to reflect how often the pitcher actually throws each pitch. The biggest dot is the pitch the pitcher lives on. Leave that setting on. It changes what the chart tells you.

## Paul Skenes

<figure class="viz" style="max-width:460px;margin:2rem auto;">
<p class="viz__title">Paul Skenes — Movement Profile (2025)</p>
<img src="/images/skenes-savant-full.png" alt="Paul Skenes's Baseball Savant Movement Profile, showing his four-seam fastball high on the vertical axis and his splinker well below center" style="width:100%;border-radius:4px;">
<p class="viz__caption">Skenes's chart. The four-seam fastball (FF) plots in the upper-right quadrant; the splinker (FS) plots near the horizontal midline, arm-side. The sweeper (ST) plots far glove-side. Also visible: sinker (SI), changeup (CH), slider (SL), and curveball (CU). The shape of the arsenal is predominantly vertical.</p>
</figure>

<div class="viz">
<p class="viz__title">Paul Skenes — 2025 Pitch Arsenal</p>
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Pitch</th>
      <th style="text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Abbrev.</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Velocity</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Horizontal</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Vertical</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#dc2626;margin-right:6px;vertical-align:middle;"></span>4-Seam Fastball</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">FF</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">98.2 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+14.0" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+11.6" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#f97316;margin-right:6px;vertical-align:middle;"></span>Sinker</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">SI</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">97.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+17.5" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+6.4" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#0ea5e9;margin-right:6px;vertical-align:middle;"></span>Splinker</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">FS</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">93.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+13.4" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">0.0"</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#22c55e;margin-right:6px;vertical-align:middle;"></span>Changeup</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">CH</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">88.7 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+16.6" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+5.4" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#eab308;margin-right:6px;vertical-align:middle;"></span>Slider</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">SL</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">85.3 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−3.3" glove</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+7.6" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ca8a04;margin-right:6px;vertical-align:middle;"></span>Sweeper</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">ST</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">84.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−11.4" glove</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+5.7" rise</td>
    </tr>
    <tr>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#3b82f6;margin-right:6px;vertical-align:middle;"></span>Curveball</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">CU</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">83.9 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−6.1" glove</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−2.6" drop</td>
    </tr>
  </tbody>
</table>
<p class="viz__caption">Dot colors match the chart above. Horizontal: arm = moves toward a right-handed batter, glove = breaks away. Vertical: rise = falls less than a spinless ball would, drop = falls more.</p>
</div>

Paul Skenes's chart looks like someone stacked two pitches directly on top of each other.

His four-seam fastball, the dominant red cluster when proportional mode is on, plots in the upper-right quadrant: 11.6 inches of induced vertical break, with 14 inches of arm-side run. His splinker plots almost exactly on the horizontal midline, at zero induced vertical break, with 13.4 inches of arm-side run. The two pitches travel on nearly identical horizontal paths and arrive 11.6 inches apart vertically. The shape of the chart is tall.

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
  <line x1="400" y1="160" x2="400" y2="230" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="392" y1="160" x2="408" y2="160" stroke="#6b7280" stroke-width="2"/>
  <line x1="392" y1="230" x2="408" y2="230" stroke="#6b7280" stroke-width="2"/>
  <!-- Gap label -->
  <text x="416" y="193" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">~12"</text>
  <text x="416" y="208" font-size="11" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">vertical gap</text>
  <!-- FF dot (four-seam: +14" arm-side, +11.6" rise) -->
  <!-- svg_x = 270 + 14*6 = 354, svg_y = 230 - 11.6*6 = 160 -->
  <circle cx="354" cy="160" r="18" fill="#dc2626" opacity="0.9"/>
  <text x="354" y="165" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FF</text>
  <!-- FF label above dot -->
  <text x="354" y="108" text-anchor="middle" font-size="13" font-weight="700" fill="#dc2626" font-family="system-ui,-apple-system,sans-serif">4-Seam Fastball</text>
  <text x="354" y="123" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">98.2 mph · +11.6" IVB</text>
  <line x1="354" y1="126" x2="354" y2="142" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- FS dot (splinker: +13.4" arm-side, 0.0" IVB) -->
  <!-- svg_x = 270 + 13.4*6 = 350, svg_y = 230 -->
  <circle cx="350" cy="230" r="14" fill="#0ea5e9" opacity="0.9"/>
  <text x="350" y="235" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FS</text>
  <!-- FS label below dot -->
  <text x="350" y="263" text-anchor="middle" font-size="13" font-weight="700" fill="#0ea5e9" font-family="system-ui,-apple-system,sans-serif">Splinker</text>
  <text x="350" y="278" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">93.7 mph · 0.0" IVB</text>
  <line x1="350" y1="244" x2="350" y2="257" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- ST dot (sweeper: -11.4" glove-side, +5.7" rise) -->
  <!-- svg_x = 270 - 11.4*6 = 202, svg_y = 230 - 5.7*6 = 196 -->
  <circle cx="202" cy="196" r="14" fill="#ca8a04" opacity="0.9"/>
  <text x="202" y="201" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- ST label left of dot -->
  <text x="175" y="188" text-anchor="end" font-size="13" font-weight="700" fill="#ca8a04" font-family="system-ui,-apple-system,sans-serif">Sweeper</text>
  <text x="175" y="203" text-anchor="end" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">84.5 mph · +5.7" IVB</text>
  <line x1="178" y1="196" x2="188" y2="196" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
</svg>
<p class="viz__caption">Skenes simplified: four-seam fastball, splinker, and sweeper. The FF and FS travel on nearly identical arm-side paths and arrive 11.6 inches apart vertically. The ST breaks glove-side, adding a horizontal wrinkle that prevents hitters from committing entirely to the vertical game.</p>
</figure>

What this looks like to a hitter: both pitches leave Skenes's hand on approximately the same release plane, from the same arm slot, at similar initial trajectories. The 4-seam fastball arrives at the letters. The splinker ends up at the ankles. The hitter has less than 400 milliseconds from the moment the ball leaves the hand to decide whether to swing. He cannot wait to see where it's going. He has to commit to a vertical half of the zone on the way in, and Skenes throws pitches that live at both ends of that zone.

The 2025 numbers confirm exactly what the shape predicts. <span class="term" data-term="strikeout rate">K%</span> at 29.5 percent, 89th percentile. <span class="term" data-term="whiff%">Whiff rate</span> at 30.1 percent, 83rd percentile. <span class="term" data-term="barrel rate">Barrel rate</span> suppressed to the 86th percentile, hitters consistently making contact in the wrong part of the zone, rolling over pitches they thought were up or getting under pitches that dove.

The sweeper is worth noting separately, though it doesn't define the chart's shape. At Stuff+ 131, it is arguably his single best pitch by raw grade. But it serves a specific purpose: it gives hitters something to think about on the horizontal axis, preventing them from committing entirely to the vertical game. Against a hitter who has decided the fastball is up and the splinker is in the dirt, the sweeper breaks sideways and punishes the assumption. It's not the architect of the arsenal. It's the thing that keeps the architect from being predictable.

What makes the chart look the way it does is the separation: two pitches with nearly identical arm-side run landing at different heights. The fastball arrives above the midline; the splinker arrives right at it. Skenes was 23 years old in 2025. He had, at that age, one of the most clearly differentiated movement profiles in baseball.

## Logan Webb

<figure class="viz" style="max-width:460px;margin:2rem auto;">
<p class="viz__title">Logan Webb — Movement Profile (2025)</p>
<img src="/images/webb-savant-full.png" alt="Logan Webb's Baseball Savant Movement Profile showing his sinker arm-side right and sweeper far glove-side left" style="width:100%;border-radius:4px;">
<p class="viz__caption">Webb's chart. The sinker plots right of center, arm-side. The sweeper plots far left, well past the glove-side boundary. The shape is wide rather than tall.</p>
</figure>

<div class="viz">
<p class="viz__title">Logan Webb — 2025 Pitch Arsenal</p>
<table style="width:100%;border-collapse:collapse;font-family:system-ui,-apple-system,sans-serif;font-size:0.85rem;">
  <thead>
    <tr style="border-bottom:2px solid #e5e7eb;">
      <th style="text-align:left;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Pitch</th>
      <th style="text-align:center;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Abbrev.</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Velocity</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Horizontal</th>
      <th style="text-align:right;padding:0.5rem 0.75rem;color:#6b7280;font-weight:600;font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;">Vertical</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#dc2626;margin-right:6px;vertical-align:middle;"></span>4-Seam Fastball</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">FF</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">92.8 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+9.0" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+10.7" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#f97316;margin-right:6px;vertical-align:middle;"></span>Sinker</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">SI</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">92.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+15.7" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+0.5" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#92400e;margin-right:6px;vertical-align:middle;"></span>Cutter</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">FC</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">91.1 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+2.0" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+7.7" rise</td>
    </tr>
    <tr style="border-bottom:1px solid #f3f4f6;">
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#22c55e;margin-right:6px;vertical-align:middle;"></span>Changeup</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">CH</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">86.5 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">+8.5" arm</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−5.6" drop</td>
    </tr>
    <tr>
      <td style="padding:0.5rem 0.75rem;color:#1a1a1a;"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ca8a04;margin-right:6px;vertical-align:middle;"></span>Sweeper</td>
      <td style="text-align:center;padding:0.5rem 0.75rem;color:#374151;font-weight:600;">ST</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">84.6 mph</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−14.6" glove</td>
      <td style="text-align:right;padding:0.5rem 0.75rem;color:#374151;">−0.5" drop</td>
    </tr>
  </tbody>
</table>
<p class="viz__caption">Dot colors match the chart above. Horizontal: arm = moves toward a right-handed batter, glove = breaks away. Vertical: rise = falls less than a spinless ball would, drop = falls more.</p>
</div>

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
  <!-- SI at svg: (364, 227), ST at svg: (182, 233) -->
  <line x1="182" y1="258" x2="364" y2="258" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="182" y1="250" x2="182" y2="266" stroke="#6b7280" stroke-width="2"/>
  <line x1="364" y1="250" x2="364" y2="266" stroke="#6b7280" stroke-width="2"/>
  <!-- Spread label -->
  <text x="273" y="277" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">~30" horizontal spread</text>
  <!-- SI dot (sinker: +15.7" arm-side, +0.5" rise) -->
  <!-- svg_x = 270 + 15.7*6 = 364, svg_y = 230 - 0.5*6 = 227 -->
  <circle cx="364" cy="227" r="18" fill="#f97316" opacity="0.9"/>
  <text x="364" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">SI</text>
  <!-- SI label above dot -->
  <text x="364" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#f97316" font-family="system-ui,-apple-system,sans-serif">Sinker</text>
  <text x="364" y="183" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">92.6 mph · +0.5" IVB</text>
  <line x1="364" y1="186" x2="364" y2="209" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- ST dot (sweeper: -14.6" glove-side, -0.5" drop) -->
  <!-- svg_x = 270 - 14.6*6 = 182, svg_y = 230 + 0.5*6 = 233 -->
  <circle cx="182" cy="233" r="14" fill="#ca8a04" opacity="0.9"/>
  <text x="182" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- ST label above dot -->
  <text x="182" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#ca8a04" font-family="system-ui,-apple-system,sans-serif">Sweeper</text>
  <text x="182" y="183" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">84.6 mph · −0.5" IVB</text>
  <line x1="182" y1="186" x2="182" y2="219" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
</svg>
<p class="viz__caption">Webb simplified: sinker and sweeper only. The sinker runs arm-side; the sweeper breaks far glove-side. The horizontal spread between them is roughly 30 inches. The changeup (not shown) occupies a third distinct zone to prevent hitters from camping on either extreme.</p>
</figure>

Webb's sinker plots well to the right on the chart, arm-side, running in toward a right-handed batter's hands at 92.6 miles per hour. His sweeper plots far to the left, well past the glove-side boundary, breaking off the outside edge of the plate. When you look at the two dots, they sit at nearly opposite ends of the horizontal range. The shape of the chart is wide.

What this looks like to a hitter: both pitches come out of Webb's hand in approximately the same delivery window. One ends up running in at the handle, off the label of the bat. One ends up breaking off the plate, a foot outside the strike zone. The hitter who is sitting on the sinker gets the sweeper. The hitter who is sitting on the sweeper gets the sinker. Either way, he's covering the wrong side.

His <span class="term" data-term="ground ball rate">ground ball rate</span> is the direct result of this design. In 2025, 54.2 percent of balls put in play against Webb went on the ground, 91st percentile of the league. A hitter who gets jammed by a sinker running in tends to hit the top of the ball. A hitter who reaches for a sweeper breaking away tends to roll over. Both outcomes produce ground balls. The chart predicts the statistic before a pitch is thrown.

Webb's changeup serves the same purpose as Skenes's sweeper: it solves the problem created by having only two pitches in play. Without it, you could theoretically look for the extremes and wait. The changeup drops vertically at a different speed than either breaking pitch, occupying a third territory on the chart, at a different depth. The result is that three primary pitches cover three distinct zones: arm-side, glove-side, and down.

His <span class="term" data-term="xera">xERA</span> in 2025 was 3.58 against an actual ERA of 3.22. His <span class="term" data-term="xfip">xFIP</span> was 2.78. His <span class="term" data-term="babip">BABIP</span> was .346, roughly 45 points above average, suggesting that some of his well-placed contact found gaps rather than gloves. The xFIP says he pitched better than his ERA indicates. The Movement Profile says the underlying arsenal is legitimate. The .346 BABIP is the anomaly, not the pitch design.

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
  <!-- FF dot: +14" arm, +11.6" rise → (140+42, 170-35) = (182, 135) -->
  <circle cx="182" cy="135" r="12" fill="#dc2626" opacity="0.9"/>
  <text x="182" y="139" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FF</text>
  <!-- FS dot: +13.4" arm, 0.0" → (140+40, 170) = (180, 170) -->
  <circle cx="180" cy="170" r="9" fill="#0ea5e9" opacity="0.9"/>
  <text x="180" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">FS</text>
  <!-- Vertical bracket -->
  <line x1="205" y1="135" x2="205" y2="170" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="200" y1="135" x2="210" y2="135" stroke="#6b7280" stroke-width="1.5"/>
  <line x1="200" y1="170" x2="210" y2="170" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Vertical arrow label -->
  <text x="220" y="155" font-size="10" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">↕ gap</text>
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
  <!-- SI dot: +15.7" arm, +0.5" rise → (420+47, 170-1) = (467, 169) -->
  <circle cx="467" cy="169" r="12" fill="#f97316" opacity="0.9"/>
  <text x="467" y="173" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">SI</text>
  <!-- ST dot: -14.6" glove, -0.5" drop → (420-44, 170+1) = (376, 171) -->
  <circle cx="376" cy="171" r="9" fill="#ca8a04" opacity="0.9"/>
  <text x="376" y="175" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- Horizontal bracket -->
  <line x1="376" y1="195" x2="467" y2="195" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="376" y1="190" x2="376" y2="200" stroke="#6b7280" stroke-width="1.5"/>
  <line x1="467" y1="190" x2="467" y2="200" stroke="#6b7280" stroke-width="1.5"/>
  <!-- Horizontal arrow label -->
  <text x="421" y="213" text-anchor="middle" font-size="10" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">↔ spread</text>
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

The next time you open a Baseball Savant pitcher page, start with the Movement Profile. How much separation exists between the pitch clusters?

If the pitch clusters are all bunched within a few inches of each other, that's a concern. A pitcher whose entire arsenal occupies a small area of the chart is giving hitters a narrow window to track. He may still be difficult if the velocity is high or the command is exceptional. But he isn't working with the kind of geometric deception that the Skenes and Webb Movement Profiles show.

Vertical separation predicts strikeout upside. The further apart a pitcher's highest and lowest dots, the more ground the hitter has to cover in the vertical zone. This is the Skenes profile: elite IVB on the fastball, significant negative movement on the splinker, a gap that hitters cannot narrow by tracking the release point.

Horizontal separation predicts ground ball rate and, with it, ERA sustainability. The wider a pitcher's dots are on the X-axis, the more he is forcing hitters to choose a side of the plate. This is the Webb profile: an arsenal that doesn't overwhelm with velocity but consistently produces weak, pulled contact. Pitchers with this shape tend to have stable ERAs over full seasons, because they're not depending on sequencing or batted ball fortune to suppress runs.

Pitches that cluster near the origin, close to (0,0) regardless of velocity, are the red flag. A pitch with limited induced movement behaves predictably. It falls roughly where gravity says it should. Hitters can time it and get under it or through it without committing to a guess about height or side. High velocity can partially compensate for this, but the chart is telling you something the radar gun isn't.

Big vertical separation means strikeout upside — the profile you pay for in formats that reward punch-outs. Big horizontal separation means ERA sustainability and ratios that hold up across a full season, even without a big strikeout number. If all the clusters are tight near center with no real shape, be careful, regardless of what the ERA says.

The chart doesn't tell you whether a pitcher will stay healthy, or how he'll adjust when opposing teams have three months of film, or whether the command holds in August. It shows you the theory of the attack, the geometry the pitcher has built to solve the problem of getting hitters out.

Skenes's theory: I will make you choose a vertical half of the zone, and you will be wrong.

Webb's theory: I will make you choose a side of the plate, and you will be wrong.

In 2025, both of them were right most of the time. The chart told you why.
