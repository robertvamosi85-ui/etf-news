---
name: "etf-news"
description: "Weekly update: ranks best/worst ETFs (etf_data.js), S&P 500 stock movers (movers.js), AND Mag7 scorecard (mag7.js) via Chrome MCP + WebSearch"
---

# Weekly ETF + Stock Movers + Mag7 Pipeline

This skill produces THREE files in a single run:

1. **`etf_data.js`** — Lightyear ETF universe best/worst performers (EUR yardstick)
2. **`movers.js`** — S&P 500 individual stock movers for the Stocks tab (USD)
3. **`mag7.js`** — Magnificent Seven scorecard with verdicts (USD)

All live in `~/Documents/ETFNews`. The app is at `https://robertvamosi85-ui.github.io/investment-brief`.

---

## STEP 1 — Build etf_data.js (ETF performers)

### The universe is the Excel list — this is the whole point

The ranking universe is the funds in `Lightyear_ETF_List.xlsx` in this folder.
NOT justETF's global screener. A fund that is not in that file must never
appear in any table.

1. Open `Lightyear_ETF_List.xlsx`, sheet **"Unique Funds"** (272 funds). This
   is the authoritative universe and the de-dup key — one row per distinct ETF.
   Columns: Provider · ETF Name · Category · # Currency Listings ·
   Available Tickers · Acc/Dist.
2. Include ALL 272 funds regardless of listing currency. Do NOT drop the
   GBP/USD-only funds — they include core holdings (S&P 500, MSCI World) a
   euro investor can still buy on Lightyear.
3. Match each justETF fund to the list by **base ticker** (strip any €/£/$
   currency prefix, e.g. `€EQQQ` → `EQQQ`), falling back to **ETF Name** when
   the ticker is ambiguous. Discard any justETF fund with no match.

### Measure every return in EUR — one setting, no FX math

Before reading any figure, set justETF's **display / reference currency to
EUR**. Every return then comes back EUR-denominated with each fund's FX effect
already applied. Do not fetch, store, or apply exchange rates yourself — justETF
does the conversion server-side. This is what makes "Lightyear EUR Universe"
honest: all 272 funds ranked on the same euro yardstick.

### Rank the Lightyear universe, then take the extremes — not the other way round

Rank ONLY the matched Lightyear funds by EUR performance, then take best/worst.
Do NOT take justETF's global top/bottom board and try to filter it afterwards —
that was the original bug (11 of 12 funds were non-Lightyear crypto ETPs).
Pull justETF's performance-sorted board deep enough from each end that every
Lightyear fund at the extremes is captured, intersect with the list, then rank
the survivors.

### Per period (1M, 6M, YTD)

- justETF counts back from *yesterday's* close: 1M = trailing calendar month,
  6M = trailing 6 calendar months, YTD = from prior 31 Dec close. Verify the
  screener's live "as of" date before trusting any figure — cached pages have
  shown stale data.
- ⚠️ **Best Performers:** top 10 Lightyear funds by EUR return. No liquidity
  pre-filter (asymmetric by design).
- ⚠️ **Worst Performers:** pre-filter to the top 75 Lightyear funds by AUM
  first, THEN take the bottom 10 by EUR return. (Keeps thin, illiquid names out
  of the Worst table.)

### Fields to write per fund (match etf_data.js schema exactly)

- `tier`: "researched" (top 3 rows each table) or lighter tier (rows 4–10).
- `holds`, `vsCategory`, `returnRisk`, `week52`, `aumFlow` — all rows.
- `whyItMoved`, `topHoldings` — researched tier only.
- ⚠️ `aumEurM`: capture the fund's size in EUR millions (raw number) for
  **every** fund, best/worst and portfolio alike. Rendered via `fmtAum()`;
  silently omitted downstream if absent, so never fabricate it.
- `badges`: e.g. `["Thin liquidity"]` (AUM < €50M), `["reversal watch"]`.

### Research "why it moved" (ETFs)

Write live commentary for the top 2 rows in each of the 6 tables, plus all 7
Portfolio tickers: SEC0, AIFS, XAIX, IQQH, EQQQ, IQQK, WTE.
(Note: WTE — WisdomTree Physical Palladium — is NOT in the Lightyear Excel; it
stays a fixed Portfolio holding regardless. Portfolio is a fixed 7-ticker list,
independent of the universe filter.)

### ETF Meta

- `fundsTracked`: read the count from the universe (272 unique funds), NOT from
  justETF's screener count.
- `asOf`: the live justETF "as of" timestamp.

### Write etf_data.js

Write everything into `etf_data.js` in this folder, matching the existing
schema exactly. New fields must degrade silently when absent — never break an
older data file. Use `build_etf_data.py` as the builder script if one exists,
or create a new one hardcoding all collected data.

---

## STEP 2 — Build movers.js (S&P 500 stock movers)

### Universe: S&P 500 (all constituents)

Source: `https://stockanalysis.com/list/sp-500-stocks/`

Scrape all ~502 S&P 500 constituents with their 1M, 6M, and YTD returns (USD).
All stock returns are in USD — no currency conversion. Store the EUR/USD spot
rate in meta for reference only.

### Data collection via Chrome MCP

The sandbox cannot reach stockanalysis.com or Yahoo Finance directly. All data
must be scraped via Chrome MCP tools:

1. **Returns**: Navigate to stockanalysis.com S&P 500 list, sort by each
   period's return column, extract all tickers with returns into
   `window.__sp500`. Use JS execution to scrape the table data.
2. **Industries**: Navigate to the Profile tab view of the list page, extract
   ticker → industry mapping into `window.__allIndustry`.
3. **Rankings**: From the full return dataset, rank best 5 / worst 5 per period
   (1M, 6M, YTD). This gives 23 unique tickers (some appear in multiple periods).
4. **Sector averages**: Cross-reference `__sp500` returns with `__allIndustry`
   to compute industry-average returns for vsSector comparisons.
5. **52-week ranges**: Use stockanalysis.com chart API
   (`/api/charts/s/{ticker}/1Y/l`) to fetch 1-year price data for each of the
   23 unique tickers. Compute high, low, current price, and % of range.
6. **EUR/USD rate**: WebSearch for the rate on the as-of date.

### Per period (1M, 6M, YTD)

- **Best 5 / Worst 5** by USD return. No AUM pre-filter (stocks are liquid).
- **Tier**: top 2 each side = "researched"; rows 3–5 = "screener".
- Tier is per-period: the same stock can be researched in one period and
  screener in another.

### Fields per stock entry (match movers.js / index.html schema)

- `tier`: "researched" or "screener"
- `ticker`, `name`, `category` (industry from stockanalysis)
- `pct`: return for that period (USD)
- `does`: one-sentence company description
- `whyItMoved`: sourced commentary (researched tier only)
- `drivers`: array of 2–3 driver strings (researched tier only)
- `vsSector`: formatted string, e.g. "+28.4 pp above IT Services avg (+14.5%)"
- `week52`: position in 52-week range, e.g. "Mid-range — 51% of range ($40.69 – $2,335.00)"
- `volume`: null (optional; omit unless easily available)
- `badges`: e.g. `["reversal"]` if stock appears in both best and worst across
  periods; `["52w low"]` / `["52w high"]` if at extremes.

### Research "why it moved" (Stocks)

WebSearch for the top 2 each side per period — 12 entries max but fewer unique
stocks (typically 8–10 due to overlap). Write sourced commentary explaining
what drove the stock in that specific period. Use period-appropriate context:
a stock can be YTD best (+400%) and 1M worst (−45%) — different narratives.

### Reversal watch

Flag any stock appearing in BOTH best and worst tables across different periods
with a `"reversal"` badge.

### Stock Meta

```js
meta: {
  asOf: "31 Jul 2026, close",
  universe: "S&P 500",
  sourceStatus: "researched",
  fxRate: "EUR/USD 1.1519",
  stocksTracked: 502
}
```

### Write movers.js

Output schema:
```js
const MOVERS = {
  meta: { ... },
  stocks: {
    "1m": { best: [...], worst: [...] },
    "6m": { best: [...], worst: [...] },
    "ytd": { best: [...], worst: [...] }
  }
};
```

Use `build_movers.py` as the builder script — create or update it with all
hardcoded data, then run it to generate `movers.js`.

---

## STEP 2.5 — Build mag7.js (Magnificent Seven scorecard)

### Universe: fixed 7 stocks

AAPL, MSFT, AMZN, GOOGL, META, NVDA, TSLA — hardcoded, no discovery step.

### Provenance rule

Never state a number you didn't read this session. Prefix estimates with `~`
and say why. If a figure can't be sourced, write `"n/a — not sourced this week"`
rather than a plausible value.

### Data collection

All via Chrome MCP + WebSearch (sandbox blocked from finance sites):

1. **Prices + weekly change**: stockanalysis.com chart API
   (`/api/charts/s/{ticker}/1Y/l`) — last close price and 1-week return.
2. **P/E ratios (TTM)**: Navigate to each stock's page on stockanalysis.com
   via Chrome, or WebSearch for "[ticker] PE ratio TTM". Mark with `~` if
   approximate. Write both `pe` ("~25x") and `pe_plain` ("paying ~25 years
   of annual earnings").
3. **Earnings dates**: WebSearch for "[ticker] next earnings date 2026".
   Determine `earnings_proximity`: imminent (this week), soon (within 6 weeks),
   upcoming (within quarter), far (beyond quarter).
4. **Recent news / earnings results**: WebSearch for each stock's latest
   quarter results. Write 2–3 sentence `news` with mechanism (who pays whom,
   condition, falsifier). Include revenue, EPS, beat/miss, key segment data.
5. **Analyst consensus targets**: WebSearch or Chrome. If not found, use
   `"n/a — not sourced this week"` per provenance rule.
6. **EUR/USD rate**: reuse from STEP 2 if same session.

### Fields per stock (match mag7.js schema)

```js
{
  name: "Apple",
  ticker: "AAPL",
  price: "$308.91",
  change: "-7.24%",
  pe: "~35x",
  pe_plain: "paying ~35 years of annual earnings",
  target: "$600–$750",       // or "n/a — not sourced this week"
  theme: "Services plateau, AI features nascent",
  news: "Q3 FY2026 revenue beat at $109.4B (+16%)...",
  earnings: "~late Oct 2026",
  earnings_proximity: "far", // imminent | soon | upcoming | far
  verdict: "HOLD",           // BUY | HOLD | WATCH | CAUTION
  verdict_reason: "One sentence — condition or falsifier, not analyst boilerplate."
}
```

### Verdict guidelines

- **BUY**: Growth justifies or exceeds multiple; clear catalyst visible.
- **HOLD**: Solid business but multiple is fair or near-term risks balance upside.
- **WATCH**: Interesting but unresolved tension (e.g. growth vs cash burn).
- **CAUTION**: Fundamentals don't support the price; thesis depends on unproven revenue.

Verdict is the builder's editorial call based on sourced data. It is NOT
financial advice — the app footer says "BUSINESS LITERACY TOOL, NOT INVESTMENT
ADVICE."

### Write mag7.js

Output schema:
```js
const MAG7 = {
  meta: { asOf: "[date]", universe: "Mag7", fxRate: "EUR/USD [rate]" },
  stocks: [ ... ]
};
```

Use `build_mag7.py` as the builder script — hardcode all collected data, run
to generate `mag7.js`. Validate with `node --check mag7.js`.

---

## STEP 3 — Validate and hand off

1. Run `node --check etf_data.js`, `node --check movers.js`, `node --check mag7.js`.
2. Verify entry counts: ETFs = 10 best + 10 worst × 3 periods + 7 portfolio;
   Stocks = 5 best + 5 worst × 3 periods = 30; Mag7 = 7 stocks.
3. Verify all researched entries have `whyItMoved` and `drivers` (ETF + Stocks).
4. Verify all Mag7 entries have `verdict`, `verdict_reason`, `news`, `pe`.
5. Do NOT touch git — stop once all three files are written and validated.

End the session by providing the manual push command for Terminal:

```
cd ~/Documents/ETFNews && rm -f .git/index.lock .git/HEAD.lock .git/packed-refs.lock && git add etf_data.js movers.js mag7.js && git commit -m "Weekly ETF + stock + Mag7 data update — [date]" && git push
```

---

## Important operational notes

- **Sandbox is blocked** from justETF and stockanalysis.com. All scraping must
  go through Chrome MCP (`mcp__claude-in-chrome__*` tools). Navigate in Chrome
  tabs, execute JS to extract data, store in window variables.
- **Builder scripts** (`build_etf_data.py`, `build_movers.py`, `build_mag7.py`):
  hardcode all Chrome-collected data into Python dicts, generate the JS files.
  This is more reliable than trying to run the full pipeline programmatically.
- **AUM history**: update `aum_history.json` with a new snapshot containing AUM
  for all ETF finalists + portfolio funds.
- **As-of date**: use the last completed trading day before the run date
  (typically Friday if running on Sunday).
- **mag7.js is independent** from the Investment Brief's `content.js`. Do not
  cross-reference or merge data between them.

