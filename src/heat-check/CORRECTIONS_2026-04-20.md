# Heat Check Corrections — CIN @ TB, April 20-22, 2026

Apply all corrections below to both files:
- `/Users/allanbranstiter/Documents/GitHub/exit-velo/src/heat-check/CIN_heat_check.html`
- `/Users/allanbranstiter/Documents/GitHub/exit-velo/src/heat-check/OPPONENT_heat_check.html`

---

## 1. WRONG HANDEDNESS LABELS (Critical — 4 fixes)

These pitchers are labeled `RHP` but throw left-handed. Change to `LHP`:

| File | Player | Current | Fix |
|------|--------|---------|-----|
| CIN | Brandon Williamson | `RHP · @ TB` | `LHP · @ TB` |
| CIN | Sam Moll | `RHP · @ TB` | `LHP · @ TB` |
| CIN | Brock Burke | `RHP · @ TB` | `LHP · @ TB` |
| OPPONENT | Steven Matz | `RHP · vs CIN` | `LHP · vs CIN` |

**How to verify:** Check the `Throws` column in `Stats/Stats/fangraphs/pitching/2026-pitching.csv`. All four show `L`.

---

## 2. MATZ FASTBALL VELOCITY (CIN page, line ~150)

Steven Matz's fastball velocity displays `0.0`. The FanGraphs CSV has his 2026 `vFA (sc)` at **93.1 mph** and his 2025 at **94.5 mph**.

**Current HTML:**
```html
<div class="stat-value">0.0 <span style="font-size:0.65rem;color:#EF5350">(94.2 in 2025)</span></div>
```

**Replace with:**
```html
<div class="stat-value">93.1 <span style="font-size:0.65rem;color:#EF5350">(94.5 in 2025)</span></div>
```

Also update the trend arrow: velo dropped 1.4 mph, so keep the red down arrow.

---

## 3. WILLIAMSON NARRATIVE CLAIM (CIN page, Williamson card note)

**Current:** "adding a sinker and slider that are both grading as plus pitches"

**Problem:** Per `2026-pitching-plus.csv`, the slider Stuff+ is **129** (plus), but the sinker Stuff+ is **90** (below average). "Both grading as plus" is wrong.

**Replace the bolded phrase with:** "adding a sinker and a slider, with the slider grading as a genuine plus pitch"

---

## 4. BURNS HARD-HIT RATE (CIN page, Burns card)

**Current:** Hard-Hit Rate Allowed: `24.6%` (34.3% in 2025)

**CSV value:** `2026-pitching.csv` shows Hard% = **40.4%** for Burns in 2026, and **45.7%** in 2025.

If these CSV values are correct, the card note claim "hitters aren't squaring him up or hitting the ball hard against him" is wrong. Investigate whether the article sourced HH% from Savant per-series data or FanGraphs. If FanGraphs is authoritative:
- Update the stat value to `40.4%`
- Update the 2025 comparison to `45.7%`
- The trend arrow direction stays the same (improvement, green down)
- **Revise the card note** to remove the bolded claim. Replace with something like: "hitters are making decent contact, but less damaging contact than they did last year"

**NOTE:** This same HardHit% source discrepancy appears across nearly every player on both pages. The article values are systematically different from the FanGraphs CSV. Before correcting individual values, determine which source was used and whether the FanGraphs CSV or the per-series Statcast export is the intended authoritative source. If the per-series CSVs are authoritative for the CIN page (as the skill specifies), the values may be correct for that page but wrong for the opponent page (which should use `2026-batting.csv`).

---

## 5. BURKE FASTBALL VELOCITY (CIN page, Burke card)

**Current:** `96.4`
**CSV:** `95.4`

Update to `95.4`.

---

## 6. FORMATTING INCONSISTENCY (Both pages)

The CIN page uses no leading zeros on slash lines and xwOBA (`.261 / .336 / .522`, `.393 xwOBA`). The OPPONENT page uses leading zeros (`0.250 / 0.340 / 0.464`, `0.342 xwOBA`).

**Fix:** Standardize the OPPONENT page to match CIN's convention (no leading zeros). This is standard baseball formatting.

**Search-and-replace targets on OPPONENT page:**
- All `<div class="stat-value">0.XXX` patterns in slash lines → `.XXX`
- All `<div class="meter-xwoba">0.XXX` → `.XXX`
- All xwOBA annotation values `0.XXX xwOBA` → `.XXX xwOBA`
- All OPS values displayed as `0.XXX` → `.XXX`

Do NOT change values that are genuinely zero (e.g., `0.0%` barrel rate).

---

## 7. SERIES-BY-SERIES TRAJECTORY CONTEXT (Card note revisions)

The following card notes should be revised to incorporate within-season trajectory from the per-series Statcast CSVs in `HeatCheck/`. The current notes treat 22 games as a static aggregate without mentioning how players are trending entering this series.

### Sal Stewart — "Mashing" tag may need softening

His series-by-series EV trend: 99.3 → 90.0 → 90.0 → 95.1 → 89.4 → 86.5 → 85.7. His xwOBA fell from .721 (opening series vs Rangers) to .389 (most recent). The aggregate (.427) is inflated by his opening explosion.

**Current note ends with:** "But with this kind of patience, good things keep happening."

**Suggested revision:** After the current text, add a sentence acknowledging the cooling trend. Something like: "His contact quality has been quieter over the last couple of series compared to the damage he did against Texas and the Dodgers, so whether this level of production holds depends on whether the approach keeps putting him in good counts."

### Matt McLain — "Patient" tag understates contact decline

His Barrel% has been 0.000 for five of six recent series. His EV collapsed from 94.0 (opening series) to the low-80s in recent series.

**Current note says:** "When it clicks, and it should, expect a burst."

**Suggested revision:** Temper the certainty. The approach is genuinely better (walks, chase rate), but the bat hasn't been catching up. Something like: "The approach has never looked better, but the contact quality hasn't followed yet. He's putting the ball in play softly, and that gap between his discipline and his damage is something to watch this series."

### Tyler Stephenson — "About to Pop" note should cite trajectory

The series data shows he's been one of the hottest hitters since the third series (HardHit% 80%+ in four of five recent series). The note correctly identifies him as due, but the strongest evidence is the recent trajectory, not just the aggregate.

**Suggested addition:** A sentence noting that his contact has been building, especially over the last few series: "Every series since the trip to Texas, his at-bats have gotten louder."

### Ke'Bryan Hayes — "Snakebit" note needs qualification

His xwOBA has declined from .547 (second series) to .117 (most recent). The "it should correct itself" framing is undermined by the trajectory accelerating downward.

**Suggested revision:** Add a qualifier: "The disconnect usually corrects itself, though his most recent at-bats haven't been as authoritative as his numbers earlier in the month. If the contact starts softening further, the story changes from unlucky to struggling."

---

## 8. ASHCRAFT FASTBALL VELOCITY (CIN page)

Shows `0.0` for fastball velocity. This is a data gap, not an error — Ashcraft is a sinker-first pitcher and FanGraphs leaves the four-seam fastball column blank. The fix is to either:
- Replace the stat row label with "Sinker Velocity" and show his sinker velo (check `Stats/savant/pitch-arsenal/2026-pitch-arsenal.csv` for SI velocity)
- Or remove the velocity row and replace with a more relevant stat (e.g., GB%, which is 51.9% and tells his story better)

---

## 9. MINOR STAT DISCREPANCIES TO INVESTIGATE

These are smaller mismatches between the article and CSVs. Some may be timing differences (data pulled at different points). Verify and correct if the CSV is authoritative:

| Player | Stat | Article | CSV |
|--------|------|---------|-----|
| Friedl | OBP | .260 | .267 |
| Stephenson | Barrel% | 8.9% | 12.1% |
| Suarez | Barrel% | 5.7% | 9.4% |
| Benson | Games | 17 | 18 |
| De La Cruz | xwOBA | .393 | .377 |
| Suarez | xwOBA | .268 | .299 |
| Myers | xwOBA | .484 | .432 |
| Higgins | xwOBA | .407 | .345 |

---

## Priority Order for Corrections

1. Fix the 4 handedness labels (factual errors visible to any reader)
2. Fix Matz velocity (0.0 is obviously wrong)
3. Standardize formatting (no leading zeros on OPPONENT page)
4. Fix Williamson "both plus" claim
5. Investigate and resolve HardHit% source discrepancy across all players
6. Add series-by-series trajectory context to Stewart, McLain, Stephenson, Hayes notes
7. Fix Ashcraft velocity display
8. Correct Burke velocity
9. Investigate minor stat discrepancies
