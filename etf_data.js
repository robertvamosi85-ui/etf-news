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
          whyItMoved: "A surge in AI computing demand drove a broad rally across China's semiconductor supply chain. The PBOC signalled continued accommodative policy, and reports that Chinese AI companies would gain limited access to NVIDIA H200 chips fuelled optimism. The STAR 50 posted a record quarterly gain of 64%, rivalling the Philadelphia Semiconductor Index — a sustained re-rating, not a one-off headline.",
          vsCategory: "Outperformed the China Equity category average (+4.2%) by 22.6pts.",
          returnRisk: "2.8 (category avg 0.6).",
          week52: "94% of 52-week range — near the high.",
          aumFlow: "AUM +18% this month — strong inflows on AI momentum.",
          topHoldings: "Top 10 concentrated in Chinese chip design, wafer fab, and AI names — STAR Market's most liquid tech stocks."
        },
        {
          tier: "researched", ticker: "ARKG", name: "ARK Genomic Revolution UCITS ETF",
          category: "Biotech / Genomics", pct: 24.81,
          holds: "Clinical-stage genomics and biotech names — CRISPR therapeutics, gene editing, multiomics platforms.",
          whyItMoved: "Biotech M&A is on track for its best year since pre-COVID, with several major acquisitions boosting the sector. CRISPR-based in vivo editing trials are expanding and FDA fast-track pathways are accelerating rare disease treatments. This is a cyclical rebound after prolonged weakness in small-cap biotech — a broad sector re-rating driven by both deal flow and clinical milestones.",
          vsCategory: "Outperformed the Healthcare category average (+2.1%) by 22.7pts.",
          returnRisk: "3.1 (category avg 0.4).",
          week52: "88% of 52-week range.",
          aumFlow: "AUM +12% this month — growth biotech finally attracting inflows again.",
          topHoldings: "Top 5 positions = ~35% of fund — concentrated in gene editing and precision medicine names."
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
          whyItMoved: "MicroStrategy fell roughly 75% over the past year as Bitcoin declined ~44% to around $61,500. The launch of Bitcoin ETF options in late 2024 removed MSTR's monopoly on amplified crypto exposure. Leveraged 2x MSTR ETFs lost 95%+ of their value, while weekly distributions from options-based products trended steadily lower. A structural de-rating, not a temporary dip.",
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
          whyItMoved: "Weak downstream demand and the accelerating shift to battery EVs reduced the near-term addressable market for hydrogen in transport. The sector returned -9.7% in March alone, earning an F grade while its category averaged +13.6%. Technical indicators turned negative in June, reinforcing bearish sentiment. Roughly 61% of recent sentiment readings lean defensive.",
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
          whyItMoved: "Unrelenting global demand for AI chips drove semiconductor revenue to $298.5B in Q1 2026, up 25% QoQ. The semiconductor market is on track to top $1T this year. NVIDIA reported fiscal 2026 revenue of $215.9B (+65% YoY). VanEck's SMH pulled in $6.9B in single-day net inflows on 18 Jun as investors rushed into AI chip exposure. Micron surged 314% YTD on the memory-chip shortage from AI data center buildout.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by 64.7pts over 6M.",
          returnRisk: "4.2 (category avg 1.1).",
          week52: "97% of 52-week range — near all-time high.",
          aumFlow: "AUM +41% over 6M — massive inflows as investors pile into AI hardware.",
          topHoldings: "Top 3 positions = ~42% of fund — heavily concentrated in GPU and memory names."
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 82.47,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The same AI-driven semiconductor supercycle: the iShares Semiconductor ETF soared 112.8% in H1 2026. Hyperscaler capex guidance kept rising throughout the window — not a single quarter's news but a sustained demand trend. Data center capital expenditure is projected to top $1T in 2026 as cloud providers race to build AI infrastructure.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by 64.1pts over 6M.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +35% over 6M.",
          topHoldings: "Top 3 positions = ~30% of fund — NVIDIA, TSMC, Broadcom-weighted."
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
          tier: "researched", ticker: "HIDR", name: "HSBC MSCI Indonesia UCITS ETF",
          category: "Indonesia", pct: -36.91,
          holds: "Broad Indonesian equity index — banks, telcos, consumer staples.",
          whyItMoved: "MSCI warned Indonesia on 28 Jan 2026 of a potential downgrade from emerging to frontier market, citing transparency and free-float concerns. The Jakarta Composite fell 28% YTD as foreign investors pulled $3.4B. Goldman Sachs estimates $2.2-13B in passive outflows if the downgrade proceeds. MSCI's June review found conditions had worsened, extending the decision to November 2026.",
          vsCategory: "Underperformed the EM Equity category average (+8.6%) by 45.5pts over 6M.",
          returnRisk: "-2.1 (category avg 0.5).",
          week52: "4% of 52-week range — at the low.",
          aumFlow: "AUM -31% over 6M — heavy redemptions.",
          topHoldings: "Top 5 positions = ~40% of fund — dominated by Indonesian banks and telcos."
        },
        {
          tier: "researched", ticker: "XMIN", name: "Xtrackers MSCI Indonesia Swap UCITS ETF",
          category: "Indonesia", pct: -36.65,
          holds: "Swap-based Indonesian equity exposure — same MSCI Indonesia index, synthetic replication.",
          whyItMoved: "Same Indonesia MSCI frontier-downgrade crisis. Roughly $80B in market cap evaporated over just two trading days after the January warning. The key risk date is November 2026, when MSCI makes its final decision. June review flagged deteriorating conditions, not improvement.",
          vsCategory: "Underperformed the EM Equity category average (+8.6%) by 45.3pts over 6M.",
          returnRisk: "-2.0 (category avg 0.5).",
          week52: "5% of 52-week range — at the low.",
          aumFlow: "AUM -28% over 6M.",
          topHoldings: "Swap-based — mirrors MSCI Indonesia index composition."
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
          whyItMoved: "The dominant AI and chip-demand story has been the most consistent winner all year. The iShares Semiconductor ETF soared 112.8% in H1 2026 alone. Q1 semiconductor revenue hit $298.5B — up 25% QoQ — and the industry is on track to top $1T annually for the first time. NVIDIA's fiscal 2026 revenue reached $215.9B (+65% YoY), underscoring the scale of the demand cycle.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by 79.1pts YTD.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "98% of 52-week range — near all-time high.",
          aumFlow: "AUM +52% YTD — among the top-inflow ETFs in Europe this year.",
          topHoldings: "Top 3 positions = ~30% of fund — NVIDIA, TSMC, Broadcom-weighted."
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 98.64,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "SK Hynix hit a $1T valuation in May as AI-driven memory demand surged — shares up nearly 900% over the past year. Samsung and SK Hynix now account for over 40% of the KOSPI, which nearly doubled YTD. The Asian Development Bank raised Korea's 2026 growth forecast from 1.9% to 2.6%, citing robust semiconductor exports as the key driver.",
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
          whyItMoved: "Indonesia's worst-performing year in decades: the JCI fell 28% as MSCI threatened a downgrade to frontier status. Foreign investors pulled $3.4B since January, and Goldman estimates $2.2-13B in further passive outflows if the reclassification proceeds in November. The June MSCI review found conditions had worsened, not improved — extending the review but not removing the threat.",
          vsCategory: "Underperformed the EM Equity category average (+12.1%) by 48.4pts YTD.",
          returnRisk: "-2.1 (category avg 0.5).",
          week52: "3% of 52-week range — at the annual low.",
          aumFlow: "AUM -34% YTD.",
          topHoldings: "Top 5 positions = ~40% of fund — Indonesian banks and telcos."
        },
        {
          tier: "researched", ticker: "INDO", name: "Amundi MSCI Indonesia UCITS ETF",
          category: "Indonesia", pct: -36.03,
          holds: "Swap-based Indonesian equity exposure — tracking the same MSCI Indonesia index via Amundi's platform.",
          whyItMoved: "Same MSCI frontier-downgrade crisis hitting all Indonesia-tracking funds. Market capitalisation evaporated and foreign capital continues to flee on uncertainty over Indonesia's emerging-market classification. The November 2026 MSCI review is the key risk date.",
          vsCategory: "Underperformed the EM Equity category average (+12.1%) by 48.1pts YTD.",
          returnRisk: "-2.0 (category avg 0.5).",
          week52: "4% of 52-week range — at the low.",
          aumFlow: "AUM -30% YTD.",
          topHoldings: "Swap-based — mirrors MSCI Indonesia index composition."
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
      pct1m: 14.0, pct6m: 82.47, pctYtd: 101.37,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
      whyItMoved: "The AI-driven semiconductor supercycle is the dominant market story of 2026. Q1 semiconductor revenue hit $298.5B (+25% QoQ), and the industry is on track to cross $1T annually. NVIDIA's fiscal 2026 revenue reached $215.9B (+65% YoY). Hyperscaler data center capex is projected to top $1T as cloud providers race to build AI infrastructure. Micron surged 314% YTD on memory-chip shortages.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by ~8pts over 1M.",
      returnRisk: "3.9 (category avg 1.1). 1Y return +162.7%.",
      week52: "96% of 52-week range — near all-time high.",
      aumFlow: "AUM +52% YTD — among the top-inflow ETFs in Europe.",
      topHoldings: "NVIDIA ~12%, TSMC ~10%, Broadcom ~8% — top 3 = ~30% of fund."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: 17.48, pct6m: 40.46, pctYtd: 36.83,
      holds: "AI infrastructure companies — chip designers, cloud platforms, data center operators, networking equipment. 45 holdings tracking the STOXX Global AI Infrastructure index.",
      whyItMoved: "Global data center capex is projected to top $1T in 2026 as hyperscalers race to build AI infrastructure. The fund's strong monthly gain reflects surging demand across the AI hardware stack. Launched only in Dec 2024, it has already attracted EUR 912M in AUM, confirming strong investor appetite for the physical AI build-out theme.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by 11.7pts over 1M.",
      returnRisk: "4.14 (category avg 1.1). Volatility 1Y: 20.43%.",
      week52: "85% of 52-week range.",
      aumFlow: "AUM EUR 912M — massive for a fund less than 8 months old.",
      topHoldings: "AMD 4.80%, Applied Materials 4.73%, Cisco 4.66%, Amazon 4.64%, Apple 4.63% — top 10 = 45.91%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: -1.60, pct6m: 26.01, pctYtd: 29.12,
      holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
      whyItMoved: "Despite the AI tailwind, this fund's broader diversification diluted the pure-play chip rally. The -1.6% 1M contrasts with the sector's strength, suggesting profit-taking in broader AI names while focused semis continued to rally. YTD +29% is solid but trails concentrated semiconductor funds by 70+ points.",
      vsCategory: "Roughly in line with the Technology category average (+5.8%) over 1M — lagging pure semi peers.",
      returnRisk: "2.17 (category avg 1.1). Volatility 1Y: 20.46%.",
      week52: "82% of 52-week range.",
      aumFlow: "AUM EUR 7,653M — the largest AI-themed ETF in Europe.",
      topHoldings: "Micron 8.97%, Samsung 8.38%, SK Hynix 7.70%, Intel 5.42%, Cisco 4.26% — top 10 = 54.11%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -2.72, pct6m: 13.02, pctYtd: 20.18,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. 105 holdings including Bloom Energy 12.1%, First Solar 9.6%, Enphase 5.9%.",
      whyItMoved: "Clean energy climbed over 20% YTD, recovering from a multi-year slump as AI data center energy demand and geopolitical energy-security concerns drove investment. The -2.7% 1M reflects cooling from 2026 highs as oil prices stabilised. The fund attracted $507M in inflows YTD, but rate-sensitive renewable names remain vulnerable to financing-cost swings.",
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
      whyItMoved: "The Nasdaq-100 gained 27.6% annualised from 2023-2026 as tech stocks soared on AI enthusiasm. The +5.4% 1M shows continued momentum, though the index trails pure-play semiconductor funds. Mega-cap tech earnings remain strong but the index's gains are more measured than the concentrated chip plays dominating this year's leader boards.",
      vsCategory: "In line with the Technology category average (+5.8%) over 1M.",
      returnRisk: "1.90 (category avg 1.0).",
      week52: "83% of 52-week range.",
      aumFlow: "AUM EUR 11,708M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA 8.31%, Apple 7.32%, Microsoft 5.07% — top 3 = 20.7% of fund."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: 26.29, pct6m: 102.92, pctYtd: 86.58,
      holds: "Broad South Korean equity index — 80 holdings. Samsung Electronics 28% and SK Hynix 18% dominate.",
      whyItMoved: "SK Hynix hit a $1T valuation in May 2026 — shares up nearly 900% over the past year — as the worldwide memory-chip shortage from AI data center buildout drove record revenue (97T won, +47% YoY) and doubled net profit. Samsung and SK Hynix together account for 46% of this fund and over 40% of the KOSPI, which nearly doubled YTD. The Asian Development Bank raised Korea's 2026 growth forecast from 1.9% to 2.6%.",
      vsCategory: "Outperformed the EM Equity category average (+4.1%) by 22.2pts over 1M.",
      returnRisk: "4.92 (category avg 0.5). Volatility 1Y: 42.53%.",
      week52: "93% of 52-week range — near the high.",
      aumFlow: "AUM EUR 1,067M. Dividend yield 0.47%.",
      topHoldings: "Samsung Electronics 28.05%, SK Hynix 17.86%, Samsung (pref) 3.29%, Hyundai Motor 2.69%, KB Financial 2.33% — top 10 = 63.21%."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: 6.42, pct6m: 3.09, pctYtd: -4.04,
      holds: "Physical palladium bullion — a direct commodity holding backed by metal in HSBC vaults, not miner equities. TER 0.49%.",
      whyItMoved: "Palladium declined 25% from its peak this year as the EV transition reduces catalytic-converter demand, auto sales softened, and increased recycling rates created oversupply. The strong US dollar and high bond yields added headwinds. The +6.4% 1M bounce reflects short-term supply tightness (Russia is a major producer), but the structural bear case — fewer ICE vehicles needing palladium — remains intact.",
      vsCategory: "Outperformed the Commodities category average (+1.2%) by 5.2pts over 1M.",
      returnRisk: "1.27 (category avg 0.8). Volatility 1Y: 41.93% — highest in the portfolio.",
      week52: "48% of 52-week range — mid-range after a volatile year.",
      aumFlow: "AUM EUR 158M — niche product, thin compared to gold ETCs.",
      topHoldings: "Single physical holding — no concentration risk in the usual sense."
    }
  ]

};
