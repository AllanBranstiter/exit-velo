---
title: "You're Probably Underrating Dylan Lee"
source: "Ben Clemens, FanGraphs"
date: 2026-05-14
ingested: 2026-05-14
url: https://blogs.fangraphs.com/youre-probably-underrating-dylan-lee/
topics: [relievers, stuff-plus, analytical-framework, pitch-design, writing-craft]
type: analytical-framework
---

## Core Argument

Dylan Lee is one of the best relievers in baseball by ERA, FIP, and strikeout rate, yet he flies almost entirely under the radar because his stuff doesn't pass the eye test or grade well in pitch models. His gyro slider moves barely an inch in either direction—almost no horizontal break, minimal vertical break—and sits in the mid-80s, which looks lazy on video. But it generates whiffs at a rate comparable to the best sliders in the game, including on pitches thrown right down the middle of the zone. The lesson: results and process can diverge significantly for pitchers with truly unusual pitch shapes, and models trained on population-level patterns will miss edge cases like Lee.

The article is also a case study in how sustained reliever excellence can go unnoticed when a pitcher pitches in low-leverage situations. Lee has the 10th-best ERA among all relievers since his 2021 debut but enters in lower leverage than 72 of his peers. Role and prestige are not the same as quality.

Clemens's framing device—"you've heard of him, but you haven't really seen him"—is a useful structural model for profiling underrated players who have track records but lack mainstream recognition.

## Key Frameworks

### The Model-Defying Pitch Shape

Pitch models (PitchingBot, Stuff+) are trained on large samples of pitchers with conventional movement profiles. When a pitch has a highly unusual shape—Lee's slider moves the "wrong way," toward his arm side, with minimal break—the model lacks good comps and assigns it a near-average grade. This doesn't mean the pitch is average; it means the model has no reference class for it. Look for large gaps between model grades and actual whiff/contact outcomes as a signal that something genuinely weird and effective is happening.

**When to apply:** Whenever a pitcher's stuff grades and results diverge significantly. If Stuff+ says "average slider" but the pitch is generating elite SwStr%, the shape is unusual enough that the model is extrapolating rather than classifying.

### Middle-Middle Contact Suppression as a Signal

Most pitchers allow hard contact when they miss over the heart of the plate. Lee is in the 12th percentile for hard-hit contact on sliders thrown to the heart of the zone—meaning 88% of pitchers allow harder contact than he does on the same location. Over three years and 337 such pitches, he's drawing whiffs at 24.1% when batters swing, the second-best mark in baseball. A pitcher who can suppress contact even on bad location is demonstrating genuine pitch quality independent of command.

**When to apply:** Use this to distinguish luck from skill in contact management. A pitcher with good results despite chronic middle-middle location is showing true quality. A pitcher with good results only on perfect location may be more vulnerable.

### Command as Multi-Method Confirmation

Clemens stacks three independent command measures to triangulate Lee's command level: (1) PitchingBot Command (model-based, 10th-best 2026, 15th over three years), (2) Location+ (19th in 2026, 55th over three years), and (3) walk rate (2.9% in 2026, 5.8% career—top 6 among relievers since debut). When multiple methods agree, the conclusion is robust.

**When to apply:** Don't rely on a single command metric. When writing about pitcher command, triangulate: model-based grades + BB% + edge% + bad-miss rate. Convergence = confidence.

### Arsenal Built for Contrast, Not Independent Quality

Lee's fastball and changeup aren't meant to grade out on their own — they exist to diverge maximally from the slider. The fastball plays north/south to contrast the slider's horizontal (non-)movement. The changeup fades away from righties, moving in the opposite direction of the slider. The design goal is that each secondary pitch looks as different from the slider as possible, so that when the slider comes, hitters have no visual reference for it.

**When to apply:** When evaluating a pitcher whose secondary grades look unimpressive, ask whether they're designed as contrasts rather than standalone weapons. If the arsenal is organized around a dominant primary pitch, the secondaries may not need to be good independently — they need to be different enough to make the primary work harder.

### The Gyro Slider Archetype

The gyro slider thrown from a mid-slot lefty is a distinct, underexplored pitch type: mid-80s, minimal horizontal movement (sometimes arm-side, sometimes glove-side by a single inch), minimal induced vertical break. The key comps as of 2026: Robbie Ray, Brock Burke, Steven Okert, Tatsuya Imai. Most gyro sliders come from extreme low-slot or high-slot arms, where they complement heavy horizontal or north/south movement respectively. Mid-slot lefties with this pitch occupy an unusual niche where the pitch can't be read against other pitches from similar arm angles.

**When to apply:** When profiling a lefty reliever with a slow, low-movement breaking ball that's outperforming its stuff grades, check whether the arm slot is mid-slot and whether the comps cluster around this archetype.

### "Slow, Straight, Dominates" — The Deception-Through-Command Paradox

Conventional pitching wisdom holds that deception requires movement — the sharper the break, the harder the pitch is to square up. Lee inverts this: pinpoint command + a pitch shape with no obvious analog in the hitter's mental library can substitute for movement entirely. The pitch doesn't fool anyone with break; it fools them because they've never seen it before and can't calibrate to it. This is a generalizable principle, not just a Lee quirk.

**When to apply:** Any time a pitcher with "flat" stuff is outperforming expectations, consider whether shape uniqueness + command is doing the work that movement normally does.

## Statistical Thresholds

| Metric | Threshold | Meaning |
|--------|-----------|---------|
| SwStr% (slider) | 26%+ | Elite slider tier — Lee at 26.3% is 4th in baseball in 2026 |
| SwStr% on heart-of-zone sliders | 24%+ | Exceptional contact suppression even on poor location |
| BB% (reliever, career) | ≤5.8% | Top 6 relievers since 2021 |
| Location+ | 112+ | Above-average command (league average = 100) |
| PitchingBot Command | 64+ | Top 10–15 among qualified relievers |

## Key Claims

- **Lee's slider is among baseball's best by whiff rate despite near-zero movement:** 4th in SwStr% among all pitchers with 100+ sliders in 2026, but PitchingBot and Stuff+ both grade it only near-average, because its profile has no good population-level comparables.
- **His results hold even on poor location:** On 337 sliders to the heart of the plate over three years, Lee generates elite whiffs and suppresses hard contact better than 88% of pitchers.
- **He ranks 5th in SwStr% among all relievers since 2021:** Ahead of him: Mason Miller, Josh Hader, Edwin Díaz, Andrés Muñoz.
- **Role underrepresents quality:** Lee enters games in lower average leverage than 72 other relievers, giving the impression of a middle reliever while posting ace-reliever numbers.
- **The Braves may be intentionally deploying him below his ceiling:** As a lefty with a dominant breaking ball, keeping him as a flexible third option rather than closer prevents overexposure and maintains platoon flexibility.

## Caveats and Limitations

- Sample is 224 career innings — elite numbers, but not Josh Hader volume.
- Lee is a lefty who relies on a breaking ball, so his platoon neutrality is somewhat surprising and may not be permanent.
- The 2026 0.92 ERA/1.08 FIP won't hold; Clemens explicitly acknowledges "no one is that good in the long run."
- Pitch models may eventually recalibrate if Lee accrues enough comps — the "model miss" framing may have a shelf life.

## Exit Velo Application

### Analysis (stats-analysis)

When evaluating relievers, don't stop at ERA/FIP. Layer in:
- SwStr% by pitch type (especially on slider, if it's primary)
- Contact quality on heart-of-zone pitches (xwOBACON on zone = middle)
- Multiple command signals: Location+, BB%, PitchingBot Command
- Average leverage index — gap between quality and leverage is a story

Watch for pitchers whose model grades (Stuff+, PitchingBot) diverge sharply from their SwStr% and contact suppression numbers. That divergence often signals an unusual pitch shape the model can't classify well. The relevant FanGraphs/Savant columns: SwStr%, CSW%, xwOBACON, BB%, Location+, Stuff+.

### Writing (write/edit)

The Lee profile is a template for the "underrated through strangeness" angle. Structure: acknowledge the weirdness ("the pitch looks like a lazy breaking ball") → show the numbers that contradict the eye test → explain why the model also misses it → conclude that sustained results over a multi-year sample override both the eye and the model.

The "model-defying" frame is a clean Exit Velo angle. Readers who follow Stuff+ and PitchingBot will be primed to understand why a pitcher grades mediocre but dominates. Pitch quirkiness + command + results = the trifecta that earns elite status without elite stuff.

**Closing move for outlier profiles:** Clemens ends with "I might not be able to tell you precisely why Lee is so tough to hit—but I am quite certain that he is tough to hit." This is a structural technique, not just a good line. When a piece profiles a player whose success resists clean explanation, don't fake certainty about the mechanism — acknowledge the mystery, then plant the flag on the conclusion. The reader trusts the honest admission more than a clean causal story would earn.

## Quotable Ideas

- "The models are just doing fancy versions of pattern matching, and Lee's slider doesn't behave much like anyone else's."
- "Lee is fifth among all relievers in swinging strike rate since he debuted. The guys ahead of him are Mason Miller, Josh Hader, Edwin Díaz, and Andrés Muñoz."
- "I might not be able to tell you precisely why Lee is so tough to hit—but I am quite certain that he is tough to hit."
- "Everything is painted. Nothing moves the right way."
- Role vs. quality gap: Lee "has the 10th-best ERA of any reliever since his debut" but ranks 73rd in average leverage when entering games.
