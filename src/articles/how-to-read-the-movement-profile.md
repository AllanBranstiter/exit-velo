---
layout: article.njk
title: "How to Read Baseball Savant's Movement Profile"
subtitle: "Using two elite pitchers to decode the scatter plot that explains how modern pitchers win."
category: Stat Explainer
date: 2026-03-24T12:00:00
excerpt: "On every Baseball Savant pitcher page, there is a chart called the Movement Profile. It's right there, impossible to miss — a scatter plot on a circular grid, dots of different colors, no obvious pattern. Most fans look at it, get nothing from it, and move on to the numbers they recognize. Paul Skenes posted a 1.97 ERA in 2025 and struck out 29.5 percent of batters. Logan Webb posted a 3.22 ERA and generated ground balls at the 91st percentile of the league. Their Movement Profiles look almost nothing alike, and that difference tells you more about how each pitcher wins than their ERA ever could."
description: "How to read Baseball Savant's Movement Profile chart, explained through Paul Skenes and Logan Webb."
permalink: /articles/how-to-read-the-movement-profile.html
author: Allan Branstiter
level: Intermediate
image: /images/skenes-savant-top-row.png
image_alt: "Paul Skenes's Baseball Savant page showing his player card, 2025 MLB percentile rankings, and Movement Profile chart"
draft: false
---

Near the top-right corner of every <span class="term" data-term="baseball savant">Baseball Savant</span> pitcher page, there is a scatter plot labeled "Movement Profile (Induced Break)." It's a circular grid measured in inches, with different colored dots scattered around it in bunches. Tons of folks see it, but get nothing from it before moving on to the numbers they recognize. And who can blame them? It can be pretty tough to interpret even if you've been watching baseball for years.

<figure class="viz" style="max-width:700px;margin:2rem auto;">
<p class="viz__title">Paul Skenes — Baseball Savant Pitcher Page (2025)</p>
<img src="/images/skenes-savant-top-row.png" alt="The top section of Paul Skenes's Baseball Savant page, showing his player card and basic stats on the left, percentile rankings in the middle, and the Movement Profile on the right" style="width:100%;border-radius:4px;">
<p class="viz__caption">The top of Skenes's Savant page. Left: player card with basic stats and pitch usage. Center: 2025 percentile rankings across pitching categories. Right: the Movement Profile.</p>
</figure>

The <span class="term" data-term="movement profile">Movement Profile</span> chart is the best visual representation of how a pitcher actually attacks the strike zone. It shows you the geometry of their arsenal: which pitches go where, how they move, and how they relate to each other. That's the theory of the attack, laid out visually, and it's how pitchers fool and overpower batters.

Two pitchers make the clearest possible case for why the chart matters. Paul Skenes of the Pittsburgh Pirates and Logan Webb of the San Francisco Giants both pitched at an elite level in 2025.

On the surface, many of their 2025 stats are pretty similar. Skenes walked about 5.7 percent of batters while Webb walked 5.4 percent. Both guys had a <span class="term" data-term="siera">SIERA</span> in the 3.10s, and both have excellent <span class="term" data-term="stuff+">Stuff+</span> and <span class="term" data-term="location+">Location+</span> numbers. Maybe the most obvious difference lay with their <span class="term" data-term="era">ERA</span>: Skenes maintained a spectacular 1.97 ERA, while Webb's ERA was 3.22.

Fans of the game know that Skenes and Webb are different pitchers with different tools and different approaches. The Movement Profiles help show exactly how different: they reveal the geometry behind how each pitcher wins.

## The Origin

The Movement Profile chart plots each pitch by how much it moves, compared to a theoretical baseline, in two directions: horizontally (left-right) and vertically (up-down). Each axis is measured in inches. The chart's underlying grid is circular, with dotted rings marking 12 and 24 inches from the center.

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
  <!-- Vertical Movement Labels -->
   <text x="488" y="233" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">3RD BASE →</text>
  <text x="52" y="233" text-anchor="end" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">← 1ST BASE</text>
  <!-- Origin highlight -->
  <circle cx="270" cy="230" r="12" fill="none" stroke="#e05c1a" stroke-width="2"/>
  <circle cx="270" cy="230" r="4" fill="#e05c1a"/>
  <!-- Arrow pointing to origin -->
  <line x1="208" y1="178" x2="260" y2="224" stroke="#e05c1a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Origin annotation -->
  <rect x="22" y="138" width="183" height="46" rx="4" fill="#fff7f4" stroke="#e05c1a" stroke-width="1"/>
  <text x="113" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#9ca3af" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">THE ORIGIN</text>
  <text x="113" y="173" text-anchor="middle" font-size="12" font-weight="700" fill="#e05c1a" font-family="system-ui,-apple-system,sans-serif">(0, 0) = No spin</text>
  <!-- Catcher note at bottom -->
  <text x="270" y="470" text-anchor="middle" font-size="11" fill="#9ca3af" font-style="italic" font-family="system-ui,-apple-system,sans-serif">Everything shown from the pitcher's perspective, facing home plate</text>
</svg>
<p class="viz__caption">The movement grid. For a right-handed pitcher, the <span class="term" data-term="arm-side">arm side</span> is right, the glove side is left. The center (0,0) represents a theoretical spinless ball: not no movement, but no spin-induced movement.</p>
</figure>

**The chart shows everything from the pitcher's perspective.** A lot of people get tripped up because they assume it's drawn from the catcher's view. Imagine you're watching a game on TV with the camera behind the pitcher. Pitch movement starts to make a lot more sense from there.

The center of the Movement Profile is called the origin. The (0,0) origin doesn't mean a pitch has no movement. It means a pitch has no spin-induced movement. No real pitch lives at the origin. Gravity still acts on every pitch, and every pitcher imparts at least some spin to the ball. The distance from center tells you how hard that spin is working.

## Horizontal and Vertical Movement

The horizontal axis of the chart is pretty straightforward. The farther a pitch breaks toward the arm side or glove side, the farther its dot sits from the vertical center line.

The vertical axis is where the chart requires a small correction to the word "rise." Contrary to legend, a pitcher can't throw a ball so hard that it actually moves up. But they can throw a ball so hard that it appears to rise by not dropping as much as other pitches. This is called <span class="term" data-term="ivb">induced vertical break</span>, or IVB.

<figure class="viz">
<p class="viz__title">How Movement Appears on the Chart</p>
<svg viewBox="-40 0 620 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
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
  <!-- Direction labels -->
  <text x="270" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <!-- Vertical Movement Labels -->
   <text x="488" y="233" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">3RD BASE →</text>
  <text x="52" y="233" text-anchor="end" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">← 1ST BASE</text>
  <!-- Faint pitch labels -->
  <text x="316" y="104" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">4-seam</text>
  <text x="244" y="330" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">Curveball</text>
  <text x="364" y="190" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">Sinker</text>
</svg>
<p class="viz__caption">The colored circles show where typical pitch types actually plot: four-seam fastball in the upper arm-side quadrant, sinker at the midline arm-side, curveball in the lower glove-side quadrant. The concentric rings mark 12 and 24 inches from center.</p>
</figure>

IVB is the vertical movement caused by spin, calculated by comparing the pitch's actual vertical path to that of a theoretical spinless ball traveling at the same speed on the same initial trajectory. Gravity is removed from the equation. What remains is the <span class="term" data-term="magnus effect">Magnus effect</span>, the force generated by spin, pushing the ball up or pulling it down.

A <span class="term" data-term="four-seam fastball">four-seam fastball</span> with an IVB of +20 inches does not actually climb 20 inches. It simply falls 20 inches less than gravity alone would produce. A fastball thrown at 98 miles per hour arrives higher in the zone than the hitter's brain predicts, because the brain naturally accounts for gravity that the ball's backspin has partially cancelled. That's the optical illusion hitters call a "rising fastball."

On the other hand, a <span class="term" data-term="curveball">curveball</span> with an IVB of -12 inches falls harder than gravity alone would produce because it has topspin that pulls the ball downward through the zone. As a result, curveballs appear below the horizontal axis.

Here's a fun fact: <span class="term" data-term="sinker">sinkers</span> still plot above center, because they have backspin like a four-seamer and still "rise" relative to a spinless ball thanks to the Magnus effect. The "sink" comes from the fact that they rise less than a four-seamer does, so compared to what a hitter expects from a fastball, the ball arrives lower than predicted. As a result, a sinker will appear above the horizontal axis, but not as high as a four-seam fastball.

<figure class="viz">
<p class="viz__title">Skenes FF vs. MLB Average Four-Seam (2025)</p>
<svg viewBox="-40 0 620 460" width="100%" style="max-width:540px;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch-avg-ff" patternUnits="userSpaceOnUse" width="8" height="8">
      <line x1="0" y1="8" x2="8" y2="0" stroke="#dc2626" stroke-width="1.5"/>
    </pattern>
  </defs>
  <!-- Grid rings -->
  <circle cx="270" cy="230" r="36"  fill="none" stroke="#e5e7eb" stroke-width="1"   stroke-dasharray="4,3"/>
  <circle cx="270" cy="230" r="72"  fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="270" cy="230" r="108" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="270" cy="230" r="144" fill="none" stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Crosshairs -->
  <line x1="55"  y1="230" x2="485" y2="230" stroke="#d1d5db" stroke-width="1.5"/>
  <line x1="270" y1="35"  x2="270" y2="425" stroke="#d1d5db" stroke-width="1.5"/>
  <!-- Distance labels along arm-side axis -->
  <text x="306" y="246" text-anchor="middle" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">6"</text>
  <text x="342" y="246" text-anchor="middle" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">12"</text>
  <text x="378" y="246" text-anchor="middle" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">18"</text>
  <text x="414" y="246" text-anchor="middle" font-size="10" fill="#9ca3af" font-family="system-ui,-apple-system,sans-serif">24"</text>
  <!-- Direction labels -->
  <text x="270" y="24"  text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE RISE</text>
  <text x="270" y="450" text-anchor="middle" font-size="12" font-weight="700" fill="#6b7280" letter-spacing="0.05em" font-family="system-ui,-apple-system,sans-serif">MORE DROP</text>
  <text x="488" y="233" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">3RD BASE →</text>
  <text x="52"  y="233" text-anchor="end" font-size="11" font-weight="700" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">← 1ST BASE</text>
  <!-- MLB AVG FF zone: 8" arm-side, 16.5" rise → center (318, 131) -->
  <g opacity="0.43">
  <ellipse cx="318" cy="131" rx="26" ry="17" fill="url(#hatch-avg-ff)" stroke="#dc2626" stroke-width="1"/>
  <text x="318" y="100" text-anchor="middle" font-size="11" font-weight="600" fill="#dc2626" font-family="system-ui,-apple-system,sans-serif">MLB AVG FF</text>
  </g>
  <!-- Skenes FF cluster: 14" arm-side, 11.6" rise → center (354, 160) -->
  <circle cx="356" cy="157" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="365" cy="152" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="347" cy="154" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="361" cy="166" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="349" cy="167" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="368" cy="162" r="8" fill="#dc2626" opacity="0.85"/>
  <circle cx="343" cy="160" r="8" fill="#dc2626" opacity="0.85"/>
  <text x="390" y="161" font-size="11" font-weight="600" fill="#dc2626" font-family="system-ui,-apple-system,sans-serif">Skenes FF</text>
</svg>
<p class="viz__caption">Skenes's four-seam fastball (solid dots) plotted against the MLB average four-seam zone (hatched). Both clusters sit roughly 18 inches from the center of the chart, but at different angles. The average FF points more toward the top of the grid: more rise, less run. Skenes's FF points more toward the right: more run, less rise. His 14 inches of arm-side run is nearly double the MLB average; his 11.6 inches of IVB is below it.</p>
</figure>

The hatched zones on the chart — the diagonal-striped ovals — mark where the average MLB pitch of each type typically lands. When a pitcher's dots sit outside those zones, that pitch moves more than league average in that direction. Skenes's four-seam fastball is a useful example. His FF generates about 14 inches of arm-side run, well above the MLB average of roughly 8 inches for a four-seamer. His IVB, at 11.6 inches, actually sits below the average for a four-seam fastball. The outlier position of his FF cluster on the chart is driven almost entirely by that exceptional horizontal run, a product of his low 23-degree arm angle, not by unusual rise.


## Paul Skenes

<figure class="viz" style="max-width:460px;margin:2rem auto;">
<p class="viz__title">Paul Skenes — Movement Profile (2025)</p>
<img src="/images/skenes-savant-full.png" alt="Paul Skenes's Baseball Savant Movement Profile, showing his four-seam fastball high on the vertical axis and his splinker well below center" style="width:100%;border-radius:4px;">
<p class="viz__caption">Skenes's chart from Baseball Savant. The four-seam fastball (FF) plots in the upper-right quadrant; the splinker (FS) plots near the horizontal midline, arm-side. The <span class="term" data-term="sweeper">sweeper</span> (ST) plots far glove-side. Also visible: sinker (SI), changeup (CH), slider (SL), and curveball (CU). The shape of the arsenal is predominantly vertical.</p>
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

His four-seam fastball, the dominant red cluster of dots, plots in the upper-right quadrant: 11.6 inches of induced vertical break, with 14 inches of arm-side run towards third base. His <span class="term" data-term="splinker">splinker</span> plots almost exactly on the horizontal midline, at zero induced vertical break, with 13.4 inches of arm-side run. The two pitches travel on nearly identical horizontal paths and arrive 11.6 inches apart vertically.

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
<p class="viz__caption">Skenes simplified: four-seam fastball, splinker, and sweeper. The fastball and splinker sit on nearly identical arm-side paths, 11.6 inches apart vertically. The sweeper plots glove-side.</p>
</figure>

Here's what it looks like to batters: both pitches leave Skenes's hand on approximately the same release plane, from the same arm slot, at similar initial trajectories. From the moment the ball leaves his hand, both pitches look like a 4-seam fastball coming in hard about chest high. But just before the splinker ball reaches the plate, the ball drops sharply and ends up at the ankles.

Why is this so important? A hitter typically has less than 400 milliseconds from the moment the ball leaves the hand to decide whether to swing. He cannot wait to see where it's going. He has to commit quickly to a vertical half of the zone: is the ball coming in high or low? What makes Skenes so effective is that he throws pitches that live at both ends of that zone.

Skenes' fastball is elite: he can throw it over 100 mph and it has good movement. If the fastball was all Skenes had, many batters would still have trouble hitting it. But when you couple that with a splinker that looks exactly like the fastball but comes in about 5 mph slower _and_ drops 12 inches at the last second, it makes both pitches even more effective. This approach is called <span class="term" data-term="pitch tunneling">pitch tunneling</span>.

The 2025 numbers confirm exactly what the shape predicts. <span class="term" data-term="k% (pitcher)">K%</span> at 29.5 percent, 89th percentile. <span class="term" data-term="whiff%">Whiff rate</span> at 30.1 percent, 83rd percentile. <span class="term" data-term="barrel rate (pitcher)">Barrel rate</span> suppressed to the 86th percentile. All season long, hitters were consistently making contact in the wrong part of the zone, rolling over pitches they thought were up, or getting under pitches that dove. Skenes has five other excellent pitches in his arsenal on top of all that.

His sweeper grades as his single best pitch by raw Stuff+ (131). Against a hitter who has committed to guessing height, it breaks sideways into a different problem entirely.

**What makes the chart look the way it does is the separation.** Two pitches with nearly identical arm-side run landing at different heights, and another moving along another axis to keep the hitter guessing. The fastball arrives above the midline; the splinker arrives right at it; the sweeper arrives on the other side of the plate.

Skenes was 23 years old in 2025. He had, at that age, one of the most clearly differentiated movement profiles in baseball.

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

If you pull up Logan Webb's chart before understanding what you're looking at, the fact that he's an average-velocity pitcher would lead you to underestimate his talent. There's no towering cluster near the top of the vertical axis to suggest he's blowing away guys with his fastball. Plus, his four-seam fastball velocity is 92.6 miles per hour. That's the 23rd percentile. He isn't overpowering anyone. 

The real story is on the X-axis.

Webb's sinker plots well to the right on the chart, arm-side, running in toward a right-handed batter's hands at 92.6 miles per hour. His sweeper plots far to the left, well past the glove-side boundary, breaking off the outside edge of the plate. When you look at the two dots, they sit at nearly opposite ends of the horizontal range. Whereas the shape of Skenes' chart is tall, the shape of Webb's chart is wide.

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
<p class="viz__caption">Webb simplified: sinker and sweeper. The sinker runs arm-side; the sweeper breaks far glove-side. The horizontal spread between them is roughly 30 inches.</p>
</figure>

So what does this look like to a hitter? Like Skenes' four-seam/splinker combo, both of Webb's pitches come out of his hand in approximately the same delivery window. The sinker ends up running towards Webb's arm side, while his sweeper ends up breaking off the plate thirty inches to his glove side. If a hitter is sitting on the sinker they get the sweeper. If he's sitting on the sweeper he gets the sinker. Either way, he's covering the wrong half of the plate.

Webb's <span class="term" data-term="ground ball rate (pitcher)">ground ball rate</span> is the direct result of this design. In 2025, 54.2 percent of balls put in play against Webb went on the ground, 91st percentile of the league. A hitter who gets jammed by a sinker running in tends to hit the top of the ball. A hitter who reaches for a sweeper breaking away tends to roll over. Both outcomes produce ground balls. The chart predicts the statistic before a pitch is thrown.

Webb's <span class="term" data-term="changeup">changeup</span> serves the same purpose as Skenes's sweeper: it solves the problem created by having only two pitches in play. Without it, you could theoretically look for the extremes and wait. The changeup drops vertically at a different speed than either breaking pitch, occupying a third territory on the chart, at a different depth. The result is that three primary pitches cover three distinct zones: arm-side, glove-side, and down.

<figure class="viz">
<p class="viz__title">Logan Webb — Three Zones</p>
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
  <!-- Triangle connecting the three zones -->
  <line x1="364" y1="227" x2="182" y2="233" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="364" y1="227" x2="321" y2="264" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="182" y1="233" x2="321" y2="264" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- SI dot (sinker: +15.7" arm-side, +0.5" rise) -->
  <!-- svg_x = 270 + 15.7*6 = 364, svg_y = 230 - 0.5*6 = 227 -->
  <circle cx="364" cy="227" r="18" fill="#f97316" opacity="0.9"/>
  <text x="364" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">SI</text>
  <!-- SI label above dot -->
  <text x="364" y="163" text-anchor="middle" font-size="13" font-weight="700" fill="#f97316" font-family="system-ui,-apple-system,sans-serif">Sinker</text>
  <text x="364" y="178" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">92.6 mph · +0.5" IVB</text>
  <line x1="364" y1="181" x2="364" y2="209" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- SI zone badge -->
  <rect x="314" y="186" width="100" height="18" rx="3" fill="#fff7ed" stroke="#f97316" stroke-width="1"/>
  <text x="364" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#f97316" letter-spacing="0.03em" font-family="system-ui,-apple-system,sans-serif">ZONE 1: ARM-SIDE</text>
  <!-- ST dot (sweeper: -14.6" glove-side, -0.5" drop) -->
  <!-- svg_x = 270 - 14.6*6 = 182, svg_y = 230 + 0.5*6 = 233 -->
  <circle cx="182" cy="233" r="14" fill="#ca8a04" opacity="0.9"/>
  <text x="182" y="238" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">ST</text>
  <!-- ST label above dot -->
  <text x="182" y="163" text-anchor="middle" font-size="13" font-weight="700" fill="#ca8a04" font-family="system-ui,-apple-system,sans-serif">Sweeper</text>
  <text x="182" y="178" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">84.6 mph · −0.5" IVB</text>
  <line x1="182" y1="181" x2="182" y2="219" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- ST zone badge -->
  <rect x="126" y="186" width="112" height="18" rx="3" fill="#fefce8" stroke="#ca8a04" stroke-width="1"/>
  <text x="182" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#ca8a04" letter-spacing="0.03em" font-family="system-ui,-apple-system,sans-serif">ZONE 2: GLOVE-SIDE</text>
  <!-- CH dot (changeup: +8.5" arm-side, -5.6" drop) -->
  <!-- svg_x = 270 + 8.5*6 = 321, svg_y = 230 + 5.6*6 = 264 -->
  <circle cx="321" cy="264" r="14" fill="#22c55e" opacity="0.9"/>
  <text x="321" y="269" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="system-ui,-apple-system,sans-serif">CH</text>
  <!-- CH label below dot -->
  <line x1="321" y1="278" x2="321" y2="293" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="321" y="307" text-anchor="middle" font-size="13" font-weight="700" fill="#22c55e" font-family="system-ui,-apple-system,sans-serif">Changeup</text>
  <text x="321" y="322" text-anchor="middle" font-size="12" fill="#6b7280" font-family="system-ui,-apple-system,sans-serif">86.5 mph · −5.6" IVB</text>
  <!-- CH zone badge -->
  <rect x="281" y="329" width="80" height="18" rx="3" fill="#f0fdf4" stroke="#22c55e" stroke-width="1"/>
  <text x="321" y="342" text-anchor="middle" font-size="10" font-weight="700" fill="#22c55e" letter-spacing="0.03em" font-family="system-ui,-apple-system,sans-serif">ZONE 3: DOWN</text>
</svg>
<p class="viz__caption">Webb's three primary pitches: sinker (arm-side, horizontal midline), sweeper (glove-side, horizontal midline), changeup (arm-side, below midline). Each dot occupies a distinct zone on the chart.</p>
</figure>

His <span class="term" data-term="xera">xERA</span> in 2025 was 3.58 against an actual ERA of 3.22. His <span class="term" data-term="xfip">xFIP</span> was 2.78. His <span class="term" data-term="babip (pitcher)">BABIP</span> was .346, roughly 45 points above average, suggesting that some of his well-placed contact found gaps rather than gloves. The xFIP says he pitched better than his ERA indicates. The Movement Profile says the underlying arsenal is legitimate. The .346 BABIP is the anomaly, not the pitch design.

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
<p class="viz__caption">Left: Skenes's vertical shape — fastball above the midline, splinker on it, sweeper glove-side. Right: Webb's horizontal shape — sinker arm-side, sweeper far glove-side.</p>
</figure>

Put the two charts side by side and the difference is immediate.

Neither shape is superior to the other. They work on different principles and produce different statistical profiles. Skenes is a strikeout pitcher because his vertical gap creates swings at pitches outside the zone, or contact in the wrong part of it. Webb is a ground ball pitcher because his horizontal spread creates rolled-over contact and weak grounders.

Both of them were elite in 2025. The Movement Profile tells you why before a pitch is thrown.

## Reading Any Arsenal

The next time you open a Baseball Savant pitcher page, start with the Movement Profile. How much separation exists between the pitch clusters?

The first thing to check is whether the clusters are all bunched together. A pitcher whose entire arsenal occupies a small area of the chart is giving hitters a narrow window to track. He may still be difficult to deal with if his velocity is high or his command is exceptional. But he isn't working with the kind of geometric deception that Skenes and Webb show. Pitches that live near the origin — close to (0,0) regardless of velocity — are the specific red flag. A pitch with limited induced movement behaves predictably: it falls roughly where gravity says it should, and hitters can time it without committing to a guess about height or side. High velocity can partially compensate, but the chart is telling you something the radar gun isn't.

Once you see real separation, the direction of it matters. Vertical separation — a tall shape, clusters spread from top to bottom — predicts strikeout upside. The more vertical ground the hitter has to cover, the harder it is to commit to a swing plane. Horizontal separation — a wide shape, clusters spread arm-side to glove-side — predicts <span class="term" data-term="ground ball rate (pitcher)">ground ball rate</span>. The wider the spread, the more a hitter is forced to guess a side of the plate, and a wrong guess tends to produce weak contact in the dirt.

The chart doesn't tell you whether a pitcher will stay healthy, or how he'll adjust when opposing teams have three months of film, or whether the command holds in August. Next time you see a pitcher's numbers and want to know if they're real, open Savant and check the shape. Separation is the signal. The rest is details.

<figure style="margin:3rem auto 0;">
  <img src="/images/velo_reading-the-pitch-movement-graphic.png" alt="Velo in a pitcher's windup, arm extended, releasing a baseball" style="display:block;margin:0 auto;width:25%;max-width:25%;">
</figure>
