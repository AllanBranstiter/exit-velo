# Article Plan: Reading the Pitch Movement Graphic
**File:** `src/articles/reading-the-pitch-movement-graphic.md` (to be created)
**Status:** Outlining complete. Ready to write.

---

## Concept
A reader-first walkthrough of Baseball Savant's Pitch Movement (Induced Break) graphic, using Paul Skenes and Logan Webb as contrasting examples. No length restriction. Targets new baseball and fantasy fans who see the chart but don't know how to use it.

---

## Screenshots Needed
Copy from temp to `src/images/` with these names:

| Source (temp) | Destination |
|---|---|
| Screenshot 2026-03-21 at 9.51.30 PM.png | `src/images/webb-savant-full.png` |
| Screenshot 2026-03-21 at 9.51.50 PM.png | `src/images/webb-savant-proportional.png` |
| Screenshot 2026-03-21 at 9.52.13 PM.png | `src/images/skenes-savant-full.png` |
| Screenshot 2026-03-21 at 9.52.29 PM.png | `src/images/skenes-savant-proportional.png` |

Temp folder: `/var/folders/md/_0sz0n5j1xb91gwm9nx32pc80000gn/T/TemporaryItems/`

Add to `eleventy.config.cjs`:
```js
eleventyConfig.addPassthroughCopy("src/images");
```

---

## Key Stats (from FanGraphs 2025 data + Savant screenshots)

### Paul Skenes
- ERA: 1.97 | xERA: 2.65 (97th pct) | FIP: 2.36 | xFIP: 3.03
- K%: 29.5% (89th) | BB%: 5.7% (87th) | Whiff%: 30.1% (83rd)
- Fastball Velo: 98.1 mph (95th) | GB%: 44.6% (64th) | Barrel%: 5.8% (86th)
- Pitching Run Value: 100th | Fastball Run Value: 99th | Offspeed Run Value: 99th
- Stuff+: 106.9 | Location+: 111.4 | Pitching+: 115.7
- Stuff+ by pitch: FF 97.7, SI 114.4, FS 89.6, SL 131.3, CU 118.0, CH 102.2

**Pitch usage (2025):** FF 39%, ST 16%, FS 14%, CH 11%, SI 10%, SL 6%, CU 5%
**Pitch speeds:** FF 98.2, SI 97.6, FS 93.7, CH 88.7, ST 84.5, SL 85.3, CU 83.9

**Movement profile shape:** Vertically dominant. 4-seamer plots high (elite IVB ~20"), splinker (FS) dives below center. Near-vertical stacking of two primary pitches.

### Logan Webb
- ERA: 3.22 | xERA: 3.58 (70th pct) | FIP: 2.60 | xFIP: 2.78
- K%: 26.2% (76th) | BB%: 5.4% (91st) | Whiff%: 24.7% (47th)
- Fastball Velo: 92.6 mph (23rd — below average) | GB%: 54.2% (91st) | Barrel%: 8.3% (50th)
- Pitching Run Value: 84th | Fastball Run Value: 64th | Offspeed Run Value: 98th
- BABIP: .346 (elevated — some bad luck in 2025)
- Stuff+: 104.7 | Location+: 107.3 | Pitching+: 110.8
- Stuff+ by pitch: SI 114.0, CH 111.2, FA 103.4, SL/CU 92.6, FC 86.4

**Pitch usage (2025):** SI 34%/43% (vs LHH/RHH), ST 25%/28%, CH 30%/18%, FC 12%/4%, FF 9%/7%
**Pitch speeds:** FF 92.8, SI 92.6, FC 91.1, CH 86.5, ST 84.6

**Movement profile shape:** Horizontally dominant. Sinker plots arm-side center, sweeper plots far glove-side. Wide horizontal spread, moderate vertical separation.

---

## Visualization Plan

Each simplified diagram is an **inline SVG** in the article markdown. No external image files needed for diagrams.

| # | Diagram | Purpose | Location in article |
|---|---|---|---|
| 1 | Full Savant screenshot (Webb or Skenes) | "Here's what you're looking at" | Opening |
| 2 | Axes-only diagram | Explain catcher's POV, X and Y axis labels | Section II |
| 3 | Origin diagram | Show (0,0) = spinless, not motionless | Section II |
| 4 | Skenes full screenshot | Real chart before simplification | Section III |
| 5 | Skenes simplified — FF + FS only | Vertical separation annotated | Section III |
| 6 | Webb full screenshot | Real chart before simplification | Section IV |
| 7 | Webb simplified — SI + ST only | Horizontal spread annotated | Section IV |
| 8 | Side-by-side comparison SVG | Both simplified charts together | Section V |

---

## Article Outline

### I. The chart nobody clicks on
- Every Savant page has it. Most new fans skip it.
- It's the single best picture of *how* a pitcher attacks hitters.
- Introduce Skenes and Webb as the two examples. Two charts that look almost nothing alike.

### II. How to read the graphic
**A. Catcher's POV**
- Everything is from behind the plate, not the mound.
- For a right-handed pitcher: arm-side movement plots to the RIGHT of center on the chart.
- This is the single most common point of confusion. Establish it clearly, early.
- → **Diagram 2: Axes-only with catcher's POV labeled**

**B. The X-axis: horizontal break**
- Left = glove-side movement. Right = arm-side movement (for RHP).
- A sweeper breaking away from a right-handed batter plots far to the left.
- A sinker running in on a right-handed batter plots to the right.

**C. The Y-axis: what "induced" actually means**
- NOT total vertical drop. NOT how far the ball falls.
- Compared to a theoretical spinless pitch traveling the same speed on the same initial path.
- Gravity is removed. You're seeing only the Magnus effect — spin-induced movement.
- A 4-seamer at +20" IVB doesn't rise. It just falls less than your brain expects.
- A curveball at -12" IVB falls *more* than gravity alone would produce.
- → **Diagram 3: Origin diagram — spinless baseline annotated**

**D. The (0,0) origin**
- Doesn't mean "no movement." Means "no spin."
- No real pitch lives at the origin.

**E. Dot size**
- Default: all dots the same size.
- Toggle "Proportional to Usage" on: dot size reflects how often the pitcher throws that pitch.
- Recommend turning it on — it shows you what the pitcher actually lives on.

### III. Paul Skenes — the vertical arsenal
- → **Diagram 4: Skenes full Savant screenshot**
- Walk through the chart cluster by cluster.
- 4-seamer (FF): 98.2 mph, elite IVB, plots high on the chart.
- Splinker (FS): 93.7 mph, low/negative IVB, dives below center.
- These two pitches are almost directly stacked above and below each other.
- → **Diagram 5: Skenes simplified — FF and FS only, vertical gap annotated**
- What this looks like to a hitter: both pitches leave his hand on the same plane. One ends up at the letters. One ends up at the ankles.
- The result in the numbers: Whiff% 83rd percentile, K% 89th, Barrel% suppression 86th.
- Brief mention of the sweeper (131 Stuff+) as the horizontal wrinkle that prevents sitting on the vertical game.

### IV. Logan Webb — the horizontal arsenal
- → **Diagram 6: Webb full Savant screenshot**
- 92.6 mph fastball — 23rd percentile. He is not overpowering anyone.
- Walk through the chart: sinker clusters arm-side, sweeper clusters far glove-side.
- → **Diagram 7: Webb simplified — SI and ST only, horizontal spread annotated**
- What this looks like to a hitter: both pitches start in the same window, end up on opposite edges of the plate.
- Changeup (98th percentile Offspeed Run Value) is the third pitch that prevents hitters from sitting on either side.
- The result in the numbers: GB% 91st percentile (54.2%). When contact happens, it's rolled over.
- Note: his chart doesn't have a dramatic visual spike. The story is in the spread.
- Note: BABIP .346 in 2025 — elevated. xFIP 2.78 says he's better than his ERA suggests.

### V. Two charts, two theories
- → **Diagram 8: Side-by-side simplified comparison**
- Skenes: tall, vertical shape. Wins by confusing hitters about height.
- Webb: wide, horizontal shape. Wins by confusing hitters about side.
- Both are elite. The chart told us why before we looked at a single traditional stat.

### VI. What to look for on any pitcher's chart
- Separation between clusters = good. Tight clustering = red flag.
- Vertical separation → strikeout profile.
- Horizontal separation → ground ball / weak contact profile, ERA sustainability.
- Pitches that cluster near the origin → easy to time, limited movement to exploit.
- **Fantasy takeaway:** Skenes-type chart = K% upside. Webb-type chart = ERA sustainability, but more BABIP variance. A chart with tight clustering and pitches near center = proceed with caution.

---

## Glossary Terms to Link
- `induced vertical break` (may need to add to glossary)
- `exit velocity`
- `barrel rate`
- `ground ball rate`
- `strikeout rate` / `k%`
- `whiff rate` (may need to add)
- `xera` (may need to add)
- `babip`
- `wrc+`

### Terms to add to glossary before publishing:
- `xera` — Expected ERA based on quality of contact allowed
- `whiff rate` / `whiff%` — Percentage of swings that miss completely
- `induced vertical break` / `ivb` — The Y-axis of the movement graphic

---

## Progress Tracker

- [x] Concept approved
- [x] Outline approved
- [x] Visualization plan approved
- [x] Stats gathered (FanGraphs + Savant screenshots)
- [x] Screenshots copied to `src/images/`
- [x] `src/images` passthrough added to `eleventy.config.cjs`
- [x] New glossary terms added to `src/data/glossary.json`
- [x] Article written (`src/articles/reading-the-pitch-movement-graphic.md`)
- [x] SVG diagrams created (inline in article)
- [ ] Article reviewed and published
