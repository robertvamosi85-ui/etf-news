// etf_data.js
// ETF News — weekly data file.
// Replaced every Saturday during the live pipeline run. index.html reads this
// and never needs to change. Bump the ?v= query param on the <script> tag in
// index.html if a same-week re-patch needs to bypass GitHub Pages' CDN cache.
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
    asOf: "11 Jul 2026, 08:15",
    fundsTracked: 236
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "KSTR", name: "KraneShares SSE STAR Market 50 Index UCITS ETF",
          category: "China A-Shares / STAR Market", pct: 26.76,
          holds: "China's STAR Market tech and biotech names — semiconductor supply-chain and AI heavyweights listed on Shanghai's Nasdaq-style board.",
          whyItMoved: "The STAR 50 posted a record quarterly gain of 64% as AI computing demand surged across China's semiconductor supply chain. PBOC signalled continued accommodative policy, while reports that Chinese AI companies would gain limited access to NVIDIA H200 chips fuelled optimism. China's HBM and DRAM buildout accelerated domestically, benefiting Cambricon and Montage Technology. A sustained re-rating, not a one-off headline.",
          vsCategory: "Outperformed the China Equity category average (+4.2%) by 22.6pts.",
          returnRisk: "2.8 (category avg 0.6).",
          week52: "94% of 52-week range — near the high.",
          aumFlow: "AUM +18% this month — strong inflows on AI momentum.",
          topHoldings: "Cambricon 9.55%, Montage Technology 8.72%, AMEC 7.88% — top 10 concentrated in Chinese chip design and AI names."
        },
        {
          tier: "researched", ticker: "ARKG", name: "ARK Genomic Revolution UCITS ETF",
          category: "Biotech / Genomics", pct: 24.81,
          holds: "Clinical-stage genomics and biotech names — CRISPR therapeutics, gene editing, multiomics platforms.",
          whyItMoved: "CRISPR clinical adoption is accelerating, with the genome editing market projected to reach $13B by 2035. Biotech M&A is on track for its best year since pre-COVID, with several major acquisitions boosting the sector. FDA fast-track pathways are speeding rare disease treatments through the pipeline. This is a broad sector re-rating driven by both deal flow and clinical milestones after prolonged weakness in small-cap biotech.",
          vsCategory: "Outperformed the Healthcare category average (+2.1%) by 22.7pts.",
          returnRisk: "3.1 (category avg 0.4).",
          week52: "88% of 52-week range.",
          aumFlow: "AUM +12% this month — growth biotech finally attracting inflows again.",
          topHoldings: "Exact Sciences 7.43%, Teladoc 5.30%, Ionis 5.29%, CRISPR Therapeutics 5.06% — top 5 = ~35% of fund."
        },
        {
          tier: "screener", ticker: "WCBR", name: "WisdomTree Cybersecurity UCITS ETF",
          category: "Cybersecurity", pct: 19.52,
          holds: "Global cybersecurity pure-plays — CrowdStrike, Palo Alto, Fortinet-weighted.",
          vsCategory: "Outperformed the Technology category average (+5.8%) by 13.7pts.",
          returnRisk: "2.4 (category avg 1.1).",
          week52: "91% of 52-week range — near the high.",
          aumFlow: "AUM +8% this month."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "MSTY", name: "IncomeShares MSTR Options ETP",
          category: "Derivatives / Options", pct: -16.13,
          holds: "Synthetic covered-call strategy on MicroStrategy (Strategy Inc.) — options-based, not direct equity.",
          whyItMoved: "MicroStrategy fell roughly 75% over the past year as Bitcoin declined ~44% to around $61,500. The launch of Bitcoin ETF options (IBIT) in late 2024 removed MSTR's monopoly on amplified crypto exposure. Strategy Inc. reported a $12.54B net loss in Q1 2026 and carries $8.2B in total debt. Leveraged 2x MSTR ETFs lost 95%+ of their value, while weekly distributions from options-based products trended steadily lower. A structural de-rating, not a temporary dip.",
          vsCategory: "Underperformed the Alternatives category average (+1.4%) by 17.5pts.",
          returnRisk: "-1.8 (category avg 0.2).",
          week52: "8% of 52-week range — near the low.",
          aumFlow: "AUM -22% this month — redemptions accelerating.",
          topHoldings: "Single synthetic position on MSTR — maximum concentration risk."
        },
        {
          tier: "researched", ticker: "HYDR", name: "Global X Hydrogen UCITS ETF",
          category: "Clean Energy / Hydrogen", pct: -15.81,
          holds: "Global hydrogen economy companies — electrolyser makers, fuel-cell developers, hydrogen infrastructure.",
          whyItMoved: "FuelCell Energy fell 11%, Bloom Energy 8%, and Plug Power 6% in early July alone. A short-seller report targeting Bloom Energy triggered broader sector selling. Profit-taking set in after massive 2026 gains (FCEL +181% YTD, Bloom +174% YTD before the pullback). The accelerating shift to battery EVs continues to reduce the near-term addressable market for hydrogen in transport.",
          vsCategory: "Underperformed the Clean Energy category average (-3.2%) by 12.6pts.",
          returnRisk: "-1.4 (category avg 0.3).",
          week52: "12% of 52-week range — near the low.",
          aumFlow: "AUM -11% this month — steady outflows.",
          topHoldings: "Top 5 positions = ~30% of fund — spread across electrolyser makers and fuel-cell names."
        },
        {
          tier: "screener", ticker: "JEDI", name: "VanEck Space Innovators UCITS ETF",
          category: "Space / Aerospace", pct: -11.87,
          holds: "Space economy companies — satellite operators, launch providers, and space-tech R&D names.",
          vsCategory: "Underperformed the Industrials category average (+1.8%) by 13.7pts.",
          returnRisk: "-0.7 (category avg 0.5).",
          week52: "24% of 52-week range.",
          aumFlow: "AUM -4% this month.",
          badges: ["Thin liquidity"]
        }
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "GXAI", name: "Global X AI & Semiconductor UCITS ETF",
          category: "Semiconductors / AI", pct: 83.13,
          holds: "AI-focused semiconductor names — memory, GPU, and quantum computing exposure alongside traditional chipmakers.",
          whyItMoved: "Unrelenting global demand for AI chips drove semiconductor revenue to $298.5B in Q1 2026, up 25% QoQ. The semiconductor market is on track to top $1T this year. NVIDIA reported fiscal 2026 revenue of $215.9B (+65% YoY) and Q1 FY2027 revenue of $81.6B — a new record. VanEck's SMH pulled in $6.9B in single-day net inflows on 18 Jun as investors rushed into AI chip exposure. Top holdings SK Hynix and Micron surged on memory-chip shortages from AI data center buildout.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by 64.7pts over 6M.",
          returnRisk: "4.2 (category avg 1.1).",
          week52: "97% of 52-week range — near all-time high.",
          aumFlow: "AUM +41% over 6M — massive inflows as investors pile into AI hardware.",
          topHoldings: "SK Hynix 7.80%, Micron 6.20%, AMD 5.15%, Samsung 4.94% — top 10 = ~48% of fund."
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 82.47,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The same AI-driven semiconductor supercycle: the iShares Semiconductor ETF soared 112.8% in H1 2026. Hyperscaler capex guidance kept rising throughout the window — Meta $135B, Google $185B planned for 2026. Data center capital expenditure is projected to top $1T in 2026 as cloud providers race to build AI infrastructure. Not a single quarter's news but a sustained demand trend.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by 64.1pts over 6M.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +35% over 6M.",
          topHoldings: "NVIDIA ~12%, TSMC ~10%, Broadcom ~8% — top 3 = ~30% of fund."
        },
        {
          tier: "screener", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 79.77,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          vsCategory: "Outperformed the EM Equity category average (+8.6%) by 71.2pts over 6M.",
          returnRisk: "3.5 (category avg 0.5).",
          week52: "95% of 52-week range — near the high.",
          aumFlow: "AUM +28% over 6M."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "MSTY", name: "IncomeShares MSTR Options ETP",
          category: "Derivatives / Options", pct: -45.21,
          holds: "Synthetic covered-call strategy on MicroStrategy (Strategy Inc.) — options-based, not direct equity.",
          whyItMoved: "The worst six months for crypto-linked derivatives products in years. MicroStrategy fell roughly 75% as Bitcoin dropped ~44% to ~$61,500 and the launch of IBIT options destroyed MSTR's monopoly on amplified crypto exposure. Strategy Inc. reported a $12.54B Q1 2026 net loss and carries $8.2B in total debt. Weekly option premium distributions trended to near zero, eroding the income thesis that attracted holders.",
          vsCategory: "Underperformed the Alternatives category average (+1.4%) by 46.6pts over 6M.",
          returnRisk: "-2.4 (category avg 0.2).",
          week52: "5% of 52-week range — near the all-time low.",
          aumFlow: "AUM -38% over 6M — sustained redemptions.",
          topHoldings: "Single synthetic position on MSTR — maximum concentration risk."
        },
        {
          tier: "researched", ticker: "HIDR", name: "HSBC MSCI Indonesia UCITS ETF",
          category: "Indonesia", pct: -36.91,
          holds: "Broad Indonesian equity index — banks, telcos, consumer staples.",
          whyItMoved: "MSCI warned Indonesia on 28 Jan 2026 of a potential downgrade from emerging to frontier market, citing transparency and free-float concerns. The Jakarta Composite fell 28% YTD as foreign investors pulled $3.4B. Goldman Sachs estimates $2.2-13B in passive outflows if the downgrade proceeds. MSCI's June review found conditions had worsened, extending the decision to November 2026. The rupiah fell 7% YTD — Asia's worst-performing currency.",
          vsCategory: "Underperformed the EM Equity category average (+8.6%) by 45.5pts over 6M.",
          returnRisk: "-2.1 (category avg 0.5).",
          week52: "4% of 52-week range — at the low.",
          aumFlow: "AUM -31% over 6M — heavy redemptions.",
          topHoldings: "Top 5 positions = ~40% of fund — dominated by Indonesian banks and telcos."
        },
        {
          tier: "screener", ticker: "KWEB", name: "KraneShares CSI China Internet UCITS ETF",
          category: "China Internet", pct: -24.01,
          holds: "Chinese internet and e-commerce giants — Alibaba, Tencent, JD.com, PDD-weighted.",
          vsCategory: "Underperformed the China Equity category average (-2.8%) by 21.2pts over 6M.",
          returnRisk: "-1.2 (category avg 0.6).",
          week52: "18% of 52-week range.",
          aumFlow: "AUM -15% over 6M."
        }
      ]
    },

    "ytd": {
      best: [
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 101.37,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The dominant AI and chip-demand story has been the most consistent winner all year. The iShares Semiconductor ETF soared 112.8% in H1 2026 alone. Q1 semiconductor revenue hit $298.5B — up 25% QoQ — and the industry is on track to top $1T annually for the first time. NVIDIA's fiscal 2026 revenue reached $215.9B (+65% YoY), and Q1 FY2027 set a new record at $81.6B. Hyperscaler capex commitments — Meta $135B, Google $185B — continue to underwrite the cycle.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by 79.1pts YTD.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "98% of 52-week range — near all-time high.",
          aumFlow: "AUM +52% YTD — among the top-inflow ETFs in Europe this year.",
          topHoldings: "NVIDIA ~12%, TSMC ~10%, Broadcom ~8% — top 3 = ~30% of fund."
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 98.64,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "SK Hynix hit a $1T valuation in May as AI-driven memory demand surged — shares up over 340% this year on insatiable global demand for high-bandwidth memory (HBM) chips. Samsung also crossed $1T market cap. Together they account for over 40% of the KOSPI, which broke through 7,000 for the first time in May and approached 9,000 by mid-year. Recent volatility — a 5.35% single-day crash followed by a 5.8% rebound — reflects concentration risk but the trend remains firmly up.",
          vsCategory: "Outperformed the EM Equity category average (+12.1%) by 86.5pts YTD.",
          returnRisk: "4.6 (category avg 0.5).",
          week52: "97% of 52-week range.",
          aumFlow: "AUM +38% YTD.",
          topHoldings: "Samsung Electronics ~28% + SK Hynix ~18% = 46% of fund — a concentrated semiconductor bet."
        },
        {
          tier: "screener", ticker: "HNSS", name: "HSBC Nasdaq Global Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 97.43,
          holds: "Nasdaq-listed semiconductor companies — US-heavy chip exposure via Nasdaq Global Semiconductor index.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by 75.1pts YTD.",
          returnRisk: "3.7 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +44% YTD."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "HIDR", name: "HSBC MSCI Indonesia UCITS ETF",
          category: "Indonesia", pct: -36.29,
          holds: "Broad Indonesian equity index — banks, telcos, consumer staples.",
          whyItMoved: "Indonesia's worst-performing year in decades: the JCI fell 28% as MSCI threatened a downgrade to frontier status. Foreign investors pulled $3.4B since January, and Goldman estimates $2.2-13B in further passive outflows if the reclassification proceeds in November. The rupiah dropped 7% YTD — the worst currency in Asia. The June MSCI review found conditions had worsened, not improved — extending the review but not removing the threat.",
          vsCategory: "Underperformed the EM Equity category average (+12.1%) by 48.4pts YTD.",
          returnRisk: "-2.1 (category avg 0.5).",
          week52: "3% of 52-week range — at the annual low.",
          aumFlow: "AUM -34% YTD.",
          topHoldings: "Top 5 positions = ~40% of fund — Indonesian banks and telcos."
        },
        {
          tier: "researched", ticker: "MSTY", name: "IncomeShares MSTR Options ETP",
          category: "Derivatives / Options", pct: -36.25,
          holds: "Synthetic covered-call strategy on MicroStrategy (Strategy Inc.) — options-based, not direct equity.",
          whyItMoved: "A full year of structural de-rating. MicroStrategy collapsed roughly 75% as Bitcoin fell ~44%, and the launch of Bitcoin ETF options removed MSTR's monopoly on amplified crypto exposure. Strategy Inc. reported a $12.54B Q1 net loss and carries $8.2B in total debt. Leveraged 2x MSTR ETFs lost 95%+ of their value. The income thesis — high weekly distributions from option premiums — eroded to near zero as volatility dried up and the underlying kept falling.",
          vsCategory: "Underperformed the Alternatives category average (+2.1%) by 38.4pts YTD.",
          returnRisk: "-2.2 (category avg 0.2).",
          week52: "5% of 52-week range — near the all-time low.",
          aumFlow: "AUM -40% YTD — sustained capital flight.",
          topHoldings: "Single synthetic position on MSTR — maximum concentration risk."
        },
        {
          tier: "screener", ticker: "KWEB", name: "KraneShares CSI China Internet UCITS ETF",
          category: "China Internet", pct: -20.25,
          holds: "Chinese internet and e-commerce giants — Alibaba, Tencent, JD.com, PDD-weighted.",
          vsCategory: "Underperformed the China Equity category average (-1.4%) by 18.9pts YTD.",
          returnRisk: "-0.9 (category avg 0.6).",
          week52: "15% of 52-week range.",
          aumFlow: "AUM -18% YTD."
        }
      ]
    }
  },

  // Fixed 7-ticker portfolio — always full richness, no tier gating.
  portfolio: [
    {
      ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
      pct1m: 9.17, pct6m: 82.47, pctYtd: 101.37,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
      whyItMoved: "The AI-driven semiconductor supercycle remains the dominant market story of 2026. Q1 semiconductor revenue hit $298.5B (+25% QoQ), and the industry is on track to cross $1T annually. NVIDIA's Q1 FY2027 revenue reached a record $81.6B. Meta plans $135B and Google $185B in 2026 capex. The 1M return moderated to +9.2% from last week's +14% as some profit-taking set in after the massive H1 rally, but the trend remains firmly positive.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by ~3.4pts over 1M.",
      returnRisk: "3.9 (category avg 1.1). 1Y return +162.7%.",
      week52: "96% of 52-week range — near all-time high.",
      aumFlow: "AUM +52% YTD — among the top-inflow ETFs in Europe.",
      topHoldings: "NVIDIA ~12%, TSMC ~10%, Broadcom ~8% — top 3 = ~30% of fund."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: 6.54, pct6m: 48.86, pctYtd: 58.00,
      holds: "AI infrastructure companies — chip designers, cloud platforms, data center operators, networking equipment. 45 holdings tracking the STOXX Global AI Infrastructure index.",
      whyItMoved: "Global data center capex is projected to top $1T in 2026, with the Magnificent Seven collectively expected to spend $527B — an increase of $62B above prior estimates. The fund's strong YTD +58% reflects surging demand across the entire AI hardware stack: semiconductors, networking, power, and cooling. Launched Dec 2024, it has already crossed EUR 900M in AUM, confirming investor appetite for the physical AI build-out theme.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by ~0.7pts over 1M.",
      returnRisk: "4.14 (category avg 1.1). Volatility 1Y: 20.43%.",
      week52: "85% of 52-week range.",
      aumFlow: "AUM EUR 912M — massive for a fund less than 18 months old.",
      topHoldings: "AMD 4.80%, Applied Materials 4.73%, Cisco 4.66%, Amazon 4.64%, Apple 4.63% — top 10 = 45.91%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: 4.51, pct6m: 29.46, pctYtd: 33.92,
      holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
      whyItMoved: "The fund's diversified approach is now paying off — the 1M return turned positive at +4.5% after last week's slight negative, as broader AI names caught up with the concentrated semiconductor rally. YTD +33.9% is solid but still trails pure-play chip funds by 60+ pts. At EUR 7.65B, this is Europe's largest AI-themed ETF — investors treat it as the broad-market AI proxy.",
      vsCategory: "Roughly in line with the Technology category average (+5.8%) over 1M.",
      returnRisk: "2.17 (category avg 1.1). Volatility 1Y: 20.46%.",
      week52: "82% of 52-week range.",
      aumFlow: "AUM EUR 7,653M — the largest AI-themed ETF in Europe.",
      topHoldings: "Micron 8.97%, Samsung 8.38%, SK Hynix 7.70%, Intel 5.42%, Cisco 4.26% — top 10 = 54.11%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -2.72, pct6m: 13.02, pctYtd: 20.18,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. 105 holdings including Bloom Energy, First Solar, Enphase.",
      whyItMoved: "Clean energy ETFs are up over 25% collectively in 2026 — a structural recovery, not a policy-cycle trade. AI data center energy demand and geopolitical energy-security concerns are the primary drivers. The -2.7% 1M reflects cooling from mid-year highs and the hydrogen subsector weakness (Bloom Energy short-seller report, FuelCell profit-taking). The fund attracted $507M in inflows YTD, but rate-sensitive renewable names remain vulnerable to financing-cost swings.",
      vsCategory: "Roughly in line with the Utilities category average (-2.4%) over 1M.",
      returnRisk: "1.84 (category avg 0.6). Volatility 1Y: 25.30%.",
      week52: "62% of 52-week range — mid-range.",
      aumFlow: "AUM EUR 2,989M. Dividend yield 0.94%.",
      topHoldings: "Bloom Energy 12.13%, First Solar 9.55%, NextEra 8.39%, Enphase 5.91%, China Yangtze Power 5.31% — top 10 = 55.04%."
    },
    {
      ticker: "EQQQ", name: "Invesco EQQQ Nasdaq-100 UCITS ETF",
      pct1m: 5.39, pct6m: 17.77, pctYtd: 21.30,
      holds: "Nasdaq-100 tracker — Mag7-heavy, 100 non-financial stocks listed on Nasdaq. TER 0.30%.",
      whyItMoved: "The Nasdaq-100 returned 5.4% in H1 vs 7.9% for the S&P 500 — the weakest relative performance since 2022 as combined profit growth slowed to ~18%. Mega-cap dispersion is sharp: Alphabet and NVIDIA are standouts, Microsoft and Tesla are lagging. The tension between AI capex supercycle (no slowdown) and less accommodative monetary policy defines the 2026 story. BlackRock just launched a competing Nasdaq-100 ETF, underscoring persistent investor demand for the index.",
      vsCategory: "In line with the Technology category average (+5.8%) over 1M.",
      returnRisk: "1.90 (category avg 1.0).",
      week52: "83% of 52-week range.",
      aumFlow: "AUM EUR 11,708M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA 7.72%, Apple 7.31%, Alphabet 6.35% — top 10 = ~50% of fund."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: 0.82, pct6m: 72.69, pctYtd: 91.50,
      holds: "Broad South Korean equity index — 80 holdings. Samsung Electronics 28% and SK Hynix 18% dominate.",
      whyItMoved: "SK Hynix hit a $1T valuation in May — shares up over 340% this year on insatiable demand for HBM chips. Samsung also crossed $1T. Together they comprise 46% of this fund and 40% of the KOSPI, which broke through 7,000 for the first time in May and pushed towards 9,000. The near-flat 1M (+0.82%) reflects extreme recent volatility: a 5.35% single-day crash on AI spending sustainability fears, followed by a 5.8% rebound the next session. YTD +91.5% — effectively a leveraged AI memory-chip bet.",
      vsCategory: "Roughly in line with the EM Equity category average (+4.1%) over 1M.",
      returnRisk: "4.92 (category avg 0.5). Volatility 1Y: 42.53%.",
      week52: "93% of 52-week range — near the high.",
      aumFlow: "AUM EUR 1,067M. Dividend yield 0.47%.",
      topHoldings: "Samsung Electronics 28.05%, SK Hynix 17.86%, Samsung (pref) 3.29%, Hyundai Motor 2.69%, KB Financial 2.33% — top 10 = 63.21%."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: 4.27, pct6m: -29.03, pctYtd: -16.23,
      holds: "Physical palladium bullion — a direct commodity holding backed by metal in HSBC vaults, not miner equities. TER 0.49%.",
      whyItMoved: "Palladium's structural bear case deepened: the EV transition continues to erode catalytic-converter demand, with each 1M EVs sold eliminating 2-7 metric tons of annual palladium consumption. The 6M return collapsed to -29% as the long-term headwind from declining ICE vehicle production accelerated. The +4.3% 1M bounce reflects short-term supply tightness (Russia remains a major producer under sanctions) and a WisdomTree analyst noting that EV sales slowdowns in some markets may temporarily support ICE demand. But structurally, fewer internal combustion engines means less palladium needed.",
      vsCategory: "Outperformed the Commodities category average (+1.2%) by 3.1pts over 1M.",
      returnRisk: "1.27 (category avg 0.8). Volatility 1Y: 41.93% — highest in the portfolio.",
      week52: "35% of 52-week range — lower third after a steep decline.",
      aumFlow: "AUM EUR 158M — niche product, thin compared to gold ETCs.",
      topHoldings: "Single physical holding — no concentration risk in the usual sense.",
      badges: ["reversal watch"]
    }
  ]

};
