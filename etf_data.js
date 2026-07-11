// etf_data.js
// ETF News — weekly data file.
// Replaced every Saturday during the live pipeline run. index.html reads this
// and never needs to change. Bump the ?v= query param on the <script> tag in
// index.html if a same-week re-patch needs to bypass GitHub Pages' CDN cache.
//
// SAMPLE DATA — placeholder values for the initial build. Replace all of this
// during the first real Saturday run.
//
// Field notes per fund entry:
//   tier          "researched" or "screener" — controls which fields render.
//   holds         plain-English description of what the fund holds.
//   whyItMoved    RESEARCHED tier only. Omit for screener-tier funds.
//   vsCategory    category comparison sentence.
//   returnRisk    Return/Risk figure + category avg, as a sentence.
//   week52        52-week range position, as a sentence.
//   aumFlow       AUM change sentence.
//   topHoldings   RESEARCHED tier only. Omit for screener-tier funds.
//   badges        optional array, e.g. ["Thin liquidity"], ["reversal watch"]

const LEDGER_DATA = {

  meta: {
    asOf: "11 Jul 2026, 06:14",
    fundsTracked: 236
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "URNU", name: "Global Uranium & Nuclear Miners UCITS ETF",
          category: "Nuclear / Uranium", pct: 18.4,
          holds: "Uranium miners and enrichment names — Cameco, Kazatomprom-linked exposure.",
          whyItMoved: "Two European utilities said this week they'll keep older nuclear plants running for longer instead of retiring them. That signals utilities expect nuclear demand to stay high for years, which feeds straight into demand for the uranium this fund's holdings mine and process. The market read it as confirmation of a supply squeeze that's been building for a while, not a one-off headline.",
          vsCategory: "Outperformed the Natural Resources category average (+3.1%) by 15.3pts.",
          returnRisk: "2.1 (category avg 0.9).",
          week52: "91% of 52-week range — near the high.",
          aumFlow: "AUM +14% this month — inflows confirm the move, not just price drift.",
          topHoldings: "Top 3 positions = 47% of fund — a concentrated bet on a handful of miners."
        },
        {
          tier: "researched", ticker: "SEC0", name: "Semiconductor & Chips UCITS ETF",
          category: "Semiconductors", pct: 14.2,
          holds: "Chip designers and equipment makers — NVDA, TSM, ASML-weighted.",
          whyItMoved: "Hyperscaler capex commentary ahead of earnings reinforced near-term demand for leading-edge capacity.",
          vsCategory: "Outperformed the Technology category average (+5.6%) by 8.6pts.",
          returnRisk: "1.6 (category avg 1.0).",
          week52: "84% of 52-week range.",
          aumFlow: "AUM +6% this month — flows lag price slightly, worth watching next week.",
          topHoldings: "Top 3 positions = 38% of fund."
        },
        {
          tier: "screener", ticker: "GDXE", name: "Global Gold Miners UCITS ETF",
          category: "Gold / Precious Metals", pct: 9.7,
          holds: "Gold mining equities — a leveraged proxy for the gold price, not physical bullion.",
          vsCategory: "Outperformed the Commodities category average (+2.4%) by 7.3pts.",
          returnRisk: "1.1 (category avg 0.8).",
          week52: "77% of 52-week range.",
          aumFlow: "AUM +2% this month."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "BIOX", name: "Global Biotech Innovation UCITS ETF",
          category: "Biotech", pct: -11.3,
          holds: "Small and mid-cap clinical-stage biotech — high binary trial-outcome risk.",
          whyItMoved: "A closely-watched Phase 3 trial missed its main goal, and one of the fund's top-5 holdings dropped more than 40% in a single session as a result.",
          vsCategory: "Underperformed the Healthcare category average (-2.0%) by 9.3pts.",
          returnRisk: "-0.9 (category avg 0.3).",
          week52: "18% of 52-week range — near the low.",
          aumFlow: "AUM -7% this month — redemptions accelerating alongside price.",
          topHoldings: "Top 3 positions = 29% of fund."
        },
        {
          tier: "researched", ticker: "SHIP", name: "Global Shipping & Tankers UCITS ETF",
          category: "Shipping / Tankers", pct: -8.6,
          holds: "Product tankers and container lines — INSW, TEN, GSL-weighted.",
          whyItMoved: "Spot tanker rates cooled off after a seasonal peak. Nothing here points to a change in the longer trade-fragmentation story — this reads as normal give-back, not a reversal.",
          vsCategory: "Underperformed the Industrials category average (-1.1%) by 7.5pts.",
          returnRisk: "0.4 (category avg 0.6).",
          week52: "54% of 52-week range — mid-range, not a breakdown.",
          aumFlow: "AUM roughly flat — no panic redemptions.",
          topHoldings: "Top 3 positions = 44% of fund.",
          badges: ["reversal watch"]
        }
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "DEFN", name: "Europe Defense & Aerospace UCITS ETF",
          category: "European Defense", pct: 34.2,
          holds: "Rheinmetall, Safran, Thales-weighted European defense basket.",
          whyItMoved: "European governments kept raising defense budgets through the spring, and several set a concrete timeline for reaching NATO spending targets — a sustained driver over the 6 months, not a single headline.",
          vsCategory: "Outperformed the Industrials category average (+11.2%) by 23pts over 6M.",
          returnRisk: "1.8 (category avg 0.9).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +11% over 6M.",
          topHoldings: "Top 3 positions = 41% of fund.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "SEC0", name: "Semiconductor & Chips UCITS ETF",
          category: "Semiconductors", pct: 28.7,
          holds: "Chip designers and equipment makers — NVDA, TSM, ASML-weighted.",
          whyItMoved: "Chip demand held up across the whole window as hyperscalers kept raising, not cutting, their spending plans — a sustained trend rather than a single quarter's news.",
          vsCategory: "Outperformed the Technology category average (+16.4%) by 12.3pts over 6M.",
          returnRisk: "1.5 (category avg 1.0).",
          week52: "88% of 52-week range.",
          aumFlow: "AUM +9% over 6M.",
          topHoldings: "Top 3 positions = 38% of fund."
        },
        {
          tier: "screener", ticker: "URNU", name: "Global Uranium & Nuclear Miners UCITS ETF",
          category: "Nuclear / Uranium", pct: 21.5,
          holds: "Uranium miners and enrichment names — Cameco, Kazatomprom-linked exposure.",
          vsCategory: "Outperformed the Natural Resources category average (+8.2%) by 13.3pts over 6M.",
          returnRisk: "1.4 (category avg 0.9).",
          week52: "88% of 52-week range.",
          aumFlow: "AUM +18% over 6M."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "BIOX", name: "Global Biotech Innovation UCITS ETF",
          category: "Biotech", pct: -19.8,
          holds: "Small and mid-cap clinical-stage biotech — high binary trial-outcome risk.",
          whyItMoved: "A string of disappointing trial results across several holdings, not just one company, pulled this fund down steadily over the 6 months — a sector-wide re-rating rather than an isolated event.",
          vsCategory: "Underperformed the Healthcare category average (-4.1%) by 15.7pts over 6M.",
          returnRisk: "-1.1 (category avg 0.2).",
          week52: "9% of 52-week range — near the low.",
          aumFlow: "AUM -14% over 6M.",
          topHoldings: "Top 3 positions = 31% of fund."
        },
        {
          tier: "researched", ticker: "EMSC", name: "Emerging Markets Small Cap UCITS ETF",
          category: "EM Equity", pct: -14.2,
          holds: "Broad EM small-cap basket — carry-trade and local-currency sensitive.",
          whyItMoved: "A stronger dollar for most of the window made EM small caps less attractive to euro-based investors, on top of softer local growth data.",
          vsCategory: "Underperformed the EM Equity category average (-2.8%) by 11.4pts over 6M.",
          returnRisk: "-0.6 (category avg 0.4).",
          week52: "22% of 52-week range.",
          aumFlow: "AUM -5% over 6M.",
          topHoldings: "Top 3 positions = 19% of fund."
        },
        {
          tier: "screener", ticker: "SHIP", name: "Global Shipping & Tankers UCITS ETF",
          category: "Shipping / Tankers", pct: -12.6,
          holds: "Product tankers and container lines — INSW, TEN, GSL-weighted.",
          vsCategory: "Underperformed the Industrials category average (-1.1%) by 11.5pts over 6M.",
          returnRisk: "-0.2 (category avg 0.6).",
          week52: "41% of 52-week range.",
          aumFlow: "AUM roughly flat over 6M."
        }
      ]
    },

    "ytd": {
      best: [
        {
          tier: "researched", ticker: "SEC0", name: "Semiconductor & Chips UCITS ETF",
          category: "Semiconductors", pct: 41.3,
          holds: "Chip designers and equipment makers — NVDA, TSM, ASML-weighted.",
          whyItMoved: "The same AI and chip demand story that's driven the 6-month number has been the dominant theme all year — the most consistent winner in the whole universe YTD.",
          vsCategory: "Outperformed the Technology category average (+24.1%) by 17.2pts YTD.",
          returnRisk: "1.7 (category avg 1.0).",
          week52: "94% of 52-week range.",
          aumFlow: "AUM +19% YTD.",
          topHoldings: "Top 3 positions = 38% of fund."
        },
        {
          tier: "researched", ticker: "AIFS", name: "Physical AI Infrastructure Buildout ETF",
          category: "AI Infrastructure", pct: 33.9,
          holds: "Data center REITs, power equipment, and cooling infrastructure — equal-weighted.",
          whyItMoved: "Physical AI infrastructure — data centers, power, cooling — kept attracting capital all year as hyperscaler capex plans proved durable rather than a one-quarter spike.",
          vsCategory: "Outperformed the Infrastructure category average (+14.9%) by 19pts YTD.",
          returnRisk: "1.4 (category avg 1.0).",
          week52: "81% of 52-week range.",
          aumFlow: "AUM +15% YTD.",
          topHoldings: "Top 3 positions = 31% of fund."
        },
        {
          tier: "screener", ticker: "DEFN", name: "Europe Defense & Aerospace UCITS ETF",
          category: "European Defense", pct: 29.1,
          holds: "Rheinmetall, Safran, Thales-weighted European defense basket.",
          vsCategory: "Outperformed the Industrials category average (+9.8%) by 19.3pts YTD.",
          returnRisk: "1.6 (category avg 0.9).",
          week52: "99% of 52-week range — new highs.",
          aumFlow: "AUM +21% YTD.",
          badges: ["Thin liquidity"]
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "EMSC", name: "Emerging Markets Small Cap UCITS ETF",
          category: "EM Equity", pct: -22.4,
          holds: "Broad EM small-cap basket — carry-trade and local-currency sensitive.",
          whyItMoved: "A firmer dollar for most of the year and softer growth data out of several emerging markets have weighed on this fund consistently since January, not just recently.",
          vsCategory: "Underperformed the EM Equity category average (-4.6%) by 17.8pts YTD.",
          returnRisk: "-0.8 (category avg 0.3).",
          week52: "11% of 52-week range — near the low.",
          aumFlow: "AUM -18% YTD.",
          topHoldings: "Top 3 positions = 19% of fund."
        },
        {
          tier: "researched", ticker: "BIOX", name: "Global Biotech Innovation UCITS ETF",
          category: "Biotech", pct: -18.7,
          holds: "Small and mid-cap clinical-stage biotech — high binary trial-outcome risk.",
          whyItMoved: "Biotech had a rough year overall — repeated trial disappointments across several holdings, not a single stock, explain the drawdown.",
          vsCategory: "Underperformed the Healthcare category average (-3.8%) by 14.9pts YTD.",
          returnRisk: "-1.0 (category avg 0.3).",
          week52: "14% of 52-week range.",
          aumFlow: "AUM -16% YTD.",
          topHoldings: "Top 3 positions = 29% of fund."
        },
        {
          tier: "screener", ticker: "XAIX", name: "Broad AI Ecosystem UCITS ETF",
          category: "AI Ecosystem", pct: -9.2,
          holds: "Broad AI value-chain basket — the highest EM/carry-trade tilt of the four AI ETFs.",
          vsCategory: "Underperformed the Technology category average (+24.1%) by 33.3pts YTD.",
          returnRisk: "-0.3 (category avg 1.0).",
          week52: "37% of 52-week range."
        }
      ]
    }
  },

  // Fixed 7-ticker portfolio — always full richness, no tier gating.
  portfolio: [
    {
      ticker: "SEC0", name: "Semiconductor & Chips",
      pct1m: 14.2, pct6m: 28.7, pctYtd: 41.3,
      holds: "Chip designers and equipment makers — NVDA, TSM, ASML-weighted.",
      whyItMoved: "Hyperscaler capex commentary ahead of earnings reinforced near-term demand for leading-edge capacity — the dominant driver across all three windows, not just this month.",
      vsCategory: "Outperformed the Technology category average (+5.6%) by 8.6pts over 1M.",
      returnRisk: "1.6 (category avg 1.0).",
      week52: "84% of 52-week range.",
      aumFlow: "AUM +6% this month.",
      topHoldings: "Top 3 positions = 38% of fund."
    },
    {
      ticker: "AIFS", name: "Physical AI Infrastructure",
      pct1m: 8.1, pct6m: 18.9, pctYtd: 33.9,
      holds: "Data center REITs, power equipment, and cooling infrastructure — equal-weighted.",
      whyItMoved: "Continued capex guidance from hyperscalers kept the physical build-out story intact through the month.",
      vsCategory: "In line with the Infrastructure category average (+7.8%) over 1M.",
      returnRisk: "1.3 (category avg 1.0).",
      week52: "68% of 52-week range.",
      aumFlow: "AUM +5% this month.",
      topHoldings: "Top 3 positions = 31% of fund."
    },
    {
      ticker: "XAIX", name: "Broad AI Ecosystem",
      pct1m: -4.8, pct6m: 2.1, pctYtd: -9.2,
      holds: "Broad AI value-chain basket — the highest EM/carry-trade tilt of the four AI ETFs.",
      whyItMoved: "This fund carries more emerging-market and carry-trade exposure than the other three AI ETFs, so dollar strength has hit it harder all year.",
      vsCategory: "Underperformed the Technology category average (+5.6%) by 10.4pts over 1M.",
      returnRisk: "-0.4 (category avg 1.0).",
      week52: "37% of 52-week range.",
      aumFlow: "AUM -3% this month.",
      topHoldings: "Top 3 positions = 27% of fund."
    },
    {
      ticker: "IQQH", name: "Power & Clean Energy",
      pct1m: -3.5, pct6m: 4.4, pctYtd: 11.7,
      holds: "Debt-financed renewable and utility names — Bloom Energy, First Solar, Vestas-weighted.",
      whyItMoved: "Rate-sensitive names came under pressure this month even though the longer power-demand story stays intact — a financing-cost wobble, not a thesis break.",
      vsCategory: "Roughly in line with the Utilities category average (-3.1%) over 1M.",
      returnRisk: "0.3 (category avg 0.6).",
      week52: "58% of 52-week range.",
      aumFlow: "AUM +1% this month.",
      topHoldings: "Top 3 positions = 33% of fund."
    },
    {
      ticker: "EQQQ", name: "Nasdaq-100 UCITS ETF",
      pct1m: 5.4, pct6m: -2.1, pctYtd: 16.8,
      holds: "Nasdaq-100 tracker — Mag7-heavy, standard replication.",
      whyItMoved: "Money rotated out of mega-cap growth names and into industrials over the 6-month window, which is why this fund shows a rare negative 6M figure despite a positive 1M and YTD.",
      vsCategory: "In line with the Technology category average (+5.6%) over 1M.",
      returnRisk: "1.0 (category avg 1.0).",
      week52: "79% of 52-week range.",
      aumFlow: "AUM +3% this month.",
      topHoldings: "Top 3 positions = 46% of fund."
    },
    {
      ticker: "IQQK", name: "MSCI Korea UCITS ETF",
      pct1m: 6.9, pct6m: 15.3, pctYtd: 24.6,
      holds: "Broad South Korean equity index — Samsung Electronics and SK Hynix-weighted.",
      whyItMoved: "Continued strength in memory-chip pricing has flowed straight through to Korea's two largest listed companies, which dominate this fund.",
      vsCategory: "Outperformed the EM Equity category average (+1.2%) by 5.7pts over 1M.",
      returnRisk: "1.2 (category avg 0.4).",
      week52: "89% of 52-week range.",
      aumFlow: "AUM +7% this month.",
      topHoldings: "Top 3 positions = 42% of fund."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: -1.8, pct6m: 6.2, pctYtd: 3.4,
      holds: "Physical palladium bullion — a direct commodity holding, not miner equities.",
      whyItMoved: "Palladium eased this month on softer auto-catalyst demand forecasts, though the 6M and YTD trend stays positive.",
      vsCategory: "Underperformed the Commodities category average (+2.4%) by 4.2pts over 1M.",
      returnRisk: "0.1 (category avg 0.8).",
      week52: "62% of 52-week range.",
      aumFlow: "AUM roughly flat this month.",
      topHoldings: "Single physical holding — no concentration risk in the usual sense."
    }
  ]

};
