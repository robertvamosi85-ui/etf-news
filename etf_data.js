// etf_data.js
// ETF News — weekly data file.
// Replaced every Saturday during the live pipeline run. index.html reads this
// and never needs to change. Bump the ?v= query param on the <script> tag in
// index.html if a same-week re-patch needs to bypass GitHub Pages' CDN cache.
//
// Field notes per fund entry:
//   tier          "researched" or "lighter" — controls which fields render.
//   holds         plain-English description of what the fund holds.
//   whyItMoved    RESEARCHED tier only. Omit for lighter-tier funds.
//   vsCategory    category comparison sentence.
//   returnRisk    Return/Risk figure + category avg, as a sentence.
//   week52        52-week range position, as a sentence.
//   aumFlow       AUM change sentence.
//   topHoldings   RESEARCHED and LIGHTER tiers. Present on both.
//   badges        optional array, e.g. ["Thin liquidity"], ["reversal watch"]
//   aumEurM       AUM in EUR millions (raw number).

const LEDGER_DATA = {

  meta: {
    asOf: "11 Jul 2026, 17:35",
    fundsTracked: 3500
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "COCO", name: "WisdomTree Cocoa ETC",
          category: "Commodities / Soft", pct: 62.04, aumEurM: 350,
          holds: "Physically-backed cocoa futures — tracks Bloomberg Cocoa Subindex, rolling front-month contracts.",
          whyItMoved: "Cocoa prices surged past $12,000/tonne as Ivory Coast slashed its 2024/25 harvest forecast to 1.8M tonnes from 2.0M, confirming a third consecutive global deficit. El Nino conditions threaten West African pod development through Q4. Bean arrivals at Abidjan ports fell 22% YoY. Supply-side shock, not demand-driven — consumption is flat.",
          vsCategory: "Outperformed the Commodities category average (+1.2%) by ~61pts over 1M.",
          returnRisk: "Extreme — single-commodity ETC, no diversification.",
          week52: "99% of 52-week range — at the all-time high.",
          aumFlow: "AUM +15% this month — commodity traders and hedgers piling in.",
          topHoldings: "Single commodity — cocoa futures contracts.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GAVE", name: "Global X Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 53.97, aumEurM: 3,
          holds: "Physical Aave (AAVE) token — single-asset crypto ETP backed by custodied tokens.",
          whyItMoved: "Aave recorded its largest single-day wallet creation since 2021 as DeFi TVL surpassed $100B. Institutional adoption accelerated with lending pools on multiple new chains. Regulatory clarity expectations and Robinhood Chain integration fuelled the broader DeFi rally.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~39pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "85% of 52-week range.",
          aumFlow: "AUM stable — micro-cap product with thin secondary market.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AAVE", name: "21Shares Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 53.77, aumEurM: 10,
          holds: "Physical Aave (AAVE) token — 21Shares' single-asset ETP, the larger European Aave product.",
          whyItMoved: "Same DeFi breakout — Aave protocol fees and total value locked both hit multi-year highs. Investors rotated into DeFi blue-chips after months of underperformance vs L1 tokens. The fee switch and revenue-sharing narrative boosted governance token valuations across the sector.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~39pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "84% of 52-week range.",
          aumFlow: "AUM +10% this month.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "CUNI", name: "CoinShares Physical Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 45.00, aumEurM: 5,
          holds: "Physical Uniswap (UNI) token — CoinShares' single-asset ETP backed by custodied tokens.",
          whyItMoved: "Uniswap launched on Robinhood Chain, confirming DeFi's crossover into mainstream fintech. DEX volumes surged 40% MoM. Uniswap governance approved a fee-switch proposal, giving token holders direct protocol revenue for the first time.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~30pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "78% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GUNI", name: "Global X Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 44.87, aumEurM: 3,
          holds: "Physical Uniswap (UNI) token — Global X's single-asset ETP.",
          whyItMoved: "Same DeFi narrative — Robinhood Chain integration and fee-switch governance vote drove UNI higher. Closely tracked CoinShares' return, differing only by TER and custodian spread.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~30pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "77% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AUNI", name: "21Shares Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 44.51, aumEurM: 8,
          holds: "Physical Uniswap (UNI) token — 21Shares' single-asset ETP, the largest European UNI product.",
          whyItMoved: "Largest European UNI ETP by AUM. Same DeFi tailwind — Robinhood integration, fee-switch approval, $100B+ DeFi TVL. Slight underperformance vs CoinShares reflects TER difference.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~30pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "76% of 52-week range.",
          aumFlow: "AUM +5% this month.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "COFF", name: "WisdomTree Coffee ETC",
          category: "Commodities / Soft", pct: 38.86, aumEurM: 200,
          holds: "Coffee futures — tracks Bloomberg Coffee Subindex, rolling front-month arabica contracts.",
          whyItMoved: "Brazil's 2026 harvest started 2-3 weeks late due to erratic rainfall, and early yields disappointed. ICE arabica futures surged above $3.50/lb as the market priced in a potential global deficit. El Nino forecasts added supply risk for Colombian and Vietnamese robusta crops. Monitored warehouse inventories fell to 18-month lows.",
          vsCategory: "Outperformed the Commodities category average (+1.2%) by ~38pts over 1M.",
          returnRisk: "High — single-commodity ETC with weather-driven volatility.",
          week52: "92% of 52-week range — near the high.",
          aumFlow: "AUM +12% this month — speculative inflows.",
          topHoldings: "Single commodity — coffee futures contracts."
        },
        {
          tier: "researched", ticker: "PYTH", name: "21Shares Pyth Network ETP",
          category: "Cryptocurrency / Infrastructure", pct: 37.29, aumEurM: 5,
          holds: "Physical Pyth Network (PYTH) token — Solana-based oracle network providing real-time price feeds to DeFi protocols.",
          whyItMoved: "Pyth rallied alongside the broader DeFi infrastructure theme as TVL topped $100B, increasing demand for on-chain oracle services. Pyth secured integrations with multiple new chains and data feed requests hit all-time highs. Low float amplified the move.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~22pts over 1M.",
          returnRisk: "Extreme — single-token, low-float crypto ETP.",
          week52: "70% of 52-week range.",
          aumFlow: "AUM stable — niche product.",
          topHoldings: "Single token — Pyth Network (PYTH).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "BCEL", name: "Bitwise Celestia Staking ETP",
          category: "Cryptocurrency / Infrastructure", pct: 26.77, aumEurM: 3,
          holds: "Physical Celestia (TIA) token with staking yield — modular blockchain data-availability layer.",
          whyItMoved: "Modular blockchain narrative gained traction as Ethereum's rollup-centric roadmap drove demand for data-availability solutions. Staking yields around 10-15% APY attracted income-focused crypto investors. One of few European products offering embedded staking rewards.",
          vsCategory: "Outperformed the Cryptocurrency category average (+15%) by ~12pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "55% of 52-week range — mid-range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Celestia (TIA) with staking.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "KSTR", name: "KraneShares SSE STAR Market 50 Index UCITS ETF",
          category: "China A-Shares / STAR Market", pct: 26.76, aumEurM: 120,
          holds: "China's STAR Market tech and biotech names — semiconductor supply-chain and AI heavyweights listed on Shanghai's Nasdaq-style board.",
          whyItMoved: "STAR 50 extended its rally as AI computing demand surged across China's semiconductor supply chain. PBOC maintained accommodative policy, and reports that Chinese AI companies would gain limited NVIDIA H200 access fuelled renewed optimism. Domestic HBM and DRAM buildout accelerated, benefiting Cambricon and Montage Technology.",
          vsCategory: "Outperformed the China Equity category average (+4.2%) by ~23pts over 1M.",
          returnRisk: "2.8 (category avg 0.6).",
          week52: "94% of 52-week range — near the high.",
          aumFlow: "AUM +18% this month — strong inflows on AI momentum.",
          topHoldings: "Cambricon 9.55%, Montage Technology 8.72%, AMEC 7.88% — top 10 in Chinese chip design and AI."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -2.37, aumEurM: 7100,
          holds: "Global defense and aerospace companies — Rheinmetall, BAE Systems, Thales, Lockheed Martin. 28 holdings.",
          whyItMoved: "Rheinmetall Q2 earnings missed estimates, triggering sector-wide profit-taking after a 280% post-Ukraine-invasion rally. Order books remain strong but delivery timelines stretch beyond projections. EU defense spending commitments are firm but procurement bureaucracy slows disbursement. Consolidation, not fundamental deterioration.",
          vsCategory: "Underperformed the Industrials category average (+3.2%) by ~5.6pts over 1M.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "72% of 52-week range — pulled back from highs.",
          aumFlow: "AUM EUR 7,100M — Europe's largest defense ETF.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9%, Lockheed Martin ~8% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -0.74, aumEurM: 30082,
          holds: "Physical gold bullion — backed by allocated gold bars in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Gold tested $4,000/oz support as markets priced in fewer rate cuts and the dollar strengthened. ETF outflows accelerated in late June despite continued central-bank physical buying from China and India. The pullback reflects struggle at all-time-high levels — the macro case (fiscal deficits, de-dollarization) remains intact.",
          vsCategory: "Underperformed the Precious Metals category average (+0.5%) by ~1.2pts over 1M.",
          returnRisk: "0.3 (category avg 0.5).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM EUR 30,082M — Europe's largest gold ETC, net outflows this month.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -0.73, aumEurM: 23329,
          holds: "Physical gold bullion — backed by London vault holdings. Second-largest gold ETC in Europe.",
          whyItMoved: "Identical gold exposure to IGLN, same pullback narrative. The fractional difference reflects TER and bid-ask spread variation. Near-term headwind is hawkish rate repricing, but structural demand from central-bank accumulation and geopolitical hedging persists.",
          vsCategory: "Underperformed the Precious Metals category average (+0.5%) by ~1.2pts over 1M.",
          returnRisk: "0.3 (category avg 0.5).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -0.73, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC, third-largest in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (+0.5%) by ~1.2pts over 1M.",
          returnRisk: "0.3 (category avg 0.5).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 0.20, aumEurM: 21521,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap. De facto cash proxy for EUR investors.",
          vsCategory: "In line with the Money Market EUR category average.",
          returnRisk: "Minimal — money market proxy, near-zero volatility.",
          week52: "100% of 52-week range — incremental gains every month.",
          aumFlow: "AUM EUR 21,521M — one of Europe's largest money market ETFs.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 0.22, aumEurM: 5000,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap. Amundi's cash-proxy ETF.",
          vsCategory: "In line with the Money Market EUR category average.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: 0.49, aumEurM: 17000,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          vsCategory: "In line with the Precious Metals category average over 1M.",
          returnRisk: "0.4 (category avg 0.5).",
          week52: "68% of 52-week range.",
          aumFlow: "AUM ~EUR 17,000M — largest EUR-denominated gold ETC.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.62, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — Bloomberg EUR Corporate Bond index. ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average.",
          returnRisk: "0.2 (category avg 0.2) — typical for investment-grade bonds.",
          week52: "55% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "IB01", name: "iShares USD Treasury Bond 0-1yr UCITS ETF",
          category: "USD Government Bonds / Short", pct: 1.35, aumEurM: 14000,
          holds: "Ultra-short US Treasury bills — 0-1 year maturity. De facto USD cash proxy.",
          vsCategory: "In line with the USD Money Market category average.",
          returnRisk: "Minimal — near-cash instrument.",
          week52: "100% of 52-week range — incremental yield accrual.",
          aumFlow: "AUM ~EUR 14,000M.",
          topHoldings: "US Treasury bills — pure duration and credit-risk-free."
        },
        {
          tier: "lighter", ticker: "IBTG", name: "iShares USD Treasury Bond 1-3yr UCITS ETF",
          category: "USD Government Bonds / Short", pct: 1.36, aumEurM: 5000,
          holds: "Short-duration US Treasuries — 1-3 year maturity.",
          vsCategory: "In line with the USD Short Bond category average.",
          returnRisk: "Low — short-duration government bonds.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "US Treasury bonds — 1-3yr maturity bucket."
        }
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "HYPE", name: "21Shares Hyperliquid ETP",
          category: "Cryptocurrency / DeFi", pct: 165.51, aumEurM: 27,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "HYPE surged to ~$68-71 near its all-time high as the Hyperliquid platform became the dominant on-chain perpetuals exchange. A $645M token unlock in late June was absorbed without selling pressure, signalling strong holder conviction. The platform generates substantial fee revenue, giving the token a fundamental valuation case unlike most crypto assets.",
          vsCategory: "Outperformed the Cryptocurrency category average (+40%) by ~126pts over 6M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "95% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 27M — growing rapidly from a small base.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 120.62, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD surged on the semiconductor supercycle, with data-center GPU revenue accelerating as customers sought alternatives to NVIDIA for AI training. The options-based ETP amplified the move — high implied volatility on AMD options generated outsized premium income on top of the underlying rally. AMD's MI300X gained market share in the inference market.",
          vsCategory: "Outperformed the Derivatives category average (+8%) by ~113pts over 6M.",
          returnRisk: "Very high — leveraged single-stock exposure via options.",
          week52: "90% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap product.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 95.69, aumEurM: 15,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil futures nearly doubled as OPEC+ production cuts tightened the middle-distillate market while European refining capacity remained constrained. Cold-weather forecasts for Northern Europe and seasonal restocking drove speculative buying. The crack spread (refining margin) widened to multi-year highs.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~91pts over 6M.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "88% of 52-week range.",
          aumFlow: "AUM ~EUR 15M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 88.81, aumEurM: 300,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas prices surged as European storage refill targets fell behind schedule amid higher-than-expected summer cooling demand and reduced LNG spot cargo availability. Russian pipeline flows remained near zero. The EU's dependency on LNG imports leaves prices structurally higher than pre-2022.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~84pts over 6M.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM ~EUR 300M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "GXAI", name: "Global X AI & Semiconductor UCITS ETF",
          category: "Semiconductors / AI", pct: 83.13, aumEurM: 500,
          holds: "AI-focused semiconductor names — memory, GPU, and quantum computing exposure alongside traditional chipmakers.",
          whyItMoved: "Unrelenting AI chip demand drove semiconductor revenue to $298.5B in Q1 2026, up 25% QoQ. The market is on track to top $1T this year. NVIDIA reported Q1 FY2027 revenue of $81.6B — a new record. VanEck's SMH pulled in $6.9B in single-day net inflows on 18 Jun. SK Hynix and Micron surged on memory-chip shortages from AI data-center buildout.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by ~65pts over 6M.",
          returnRisk: "4.2 (category avg 1.1).",
          week52: "97% of 52-week range — near all-time high.",
          aumFlow: "AUM +41% over 6M — massive inflows into AI hardware.",
          topHoldings: "SK Hynix 7.80%, Micron 6.20%, AMD 5.15%, Samsung 4.94% — top 10 = ~48%."
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 82.47, aumEurM: 4962,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "Same AI-driven semiconductor supercycle: the iShares Semiconductor ETF soared 112.8% in H1 2026. Hyperscaler capex guidance kept rising — Meta $135B, Google $185B planned for 2026. Data-center capital expenditure projected to top $1T in 2026. Sustained demand trend, not a single quarter's news.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by ~64pts over 6M.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +35% over 6M.",
          topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21% — top 10 = 59.37%."
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 79.77, aumEurM: 3764,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "SK Hynix hit a $1T valuation in May on insatiable HBM chip demand — shares up over 340% this year. Samsung also crossed $1T. Together they account for 40%+ of the KOSPI, which broke 7,000 for the first time in May. Recent volatility (5.35% single-day crash, then 5.8% rebound) reflects concentration risk but the trend is firmly up.",
          vsCategory: "Outperformed the EM Equity category average (+8.6%) by ~71pts over 6M.",
          returnRisk: "3.5 (category avg 0.5).",
          week52: "95% of 52-week range — near the high.",
          aumFlow: "AUM +28% over 6M.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18% — top 2 = ~46% of fund."
        },
        {
          tier: "researched", ticker: "HNSS", name: "HSBC Nasdaq Global Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 79.37, aumEurM: 249,
          holds: "Nasdaq-listed semiconductor companies — US-heavy chip exposure via Nasdaq Global Semiconductor index.",
          whyItMoved: "NVIDIA, Broadcom, and AMD led the Nasdaq semiconductor cohort higher as AI inference demand added a second growth leg to the training-driven rally. US-listed chipmakers benefited from CHIPS Act subsidies and domestic fab construction timelines firming up. TSMC's Arizona fab reached volume production.",
          vsCategory: "Outperformed the Technology category average (+18.4%) by ~61pts over 6M.",
          returnRisk: "3.7 (category avg 1.1).",
          week52: "94% of 52-week range.",
          aumFlow: "AUM +38% over 6M.",
          topHoldings: "NVIDIA ~14%, Broadcom ~10%, AMD ~8% — US-heavy tilt."
        },
        {
          tier: "researched", ticker: "AMKR", name: "Amundi MSCI Korea UCITS ETF",
          category: "South Korea", pct: 73.50, aumEurM: 600,
          holds: "MSCI Korea index — Samsung Electronics, SK Hynix, Hyundai Motor. 85 holdings.",
          whyItMoved: "Korean semiconductor rally: same SK Hynix / Samsung AI memory theme as FLXK. Amundi's product tracks MSCI Korea (slightly different index composition vs Franklin's FTSE Korea) but the return differential is minimal. SK Hynix ADR was 7x oversubscribed on its US listing, demonstrating global investor demand.",
          vsCategory: "Outperformed the EM Equity category average (+8.6%) by ~65pts over 6M.",
          returnRisk: "3.4 (category avg 0.5).",
          week52: "93% of 52-week range.",
          aumFlow: "AUM +25% over 6M.",
          topHoldings: "Samsung Electronics ~27%, SK Hynix ~17%, Samsung Pref ~3% — top 3 = ~47%."
        },
        {
          tier: "researched", ticker: "HKOR", name: "HSBC MSCI Korea Capped UCITS ETF",
          category: "South Korea", pct: 73.48, aumEurM: 200,
          holds: "MSCI Korea with 25% single-stock cap — reduces Samsung concentration vs uncapped Korea ETFs.",
          whyItMoved: "Same Korean semiconductor supercycle. The capped version slightly underperformed uncapped peers because Samsung's outsized weight (capped at 25% vs natural ~28%) limited upside from Samsung's rally. The cap does provide marginally better diversification during drawdowns.",
          vsCategory: "Outperformed the EM Equity category average (+8.6%) by ~65pts over 6M.",
          returnRisk: "3.3 (category avg 0.5).",
          week52: "93% of 52-week range.",
          aumFlow: "AUM +22% over 6M.",
          topHoldings: "Samsung Electronics 25.00% (capped), SK Hynix ~17%, Hyundai ~3% — top 3 = ~45%."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -16.55, aumEurM: 7100,
          holds: "Global defense and aerospace companies — Rheinmetall, BAE Systems, Thales, Lockheed Martin. 28 holdings.",
          whyItMoved: "European defense stocks gave back a significant portion of their multi-year rally. Rheinmetall's Q2 earnings miss catalysed a broader sector de-rating as investors questioned whether order-book growth would translate to near-term revenue at the pace priced in. EU procurement timelines stretched, and some NATO spending pledges shifted to later years. The -16.6% represents the sharpest defence-sector correction since the sector's re-rating began in 2022.",
          vsCategory: "Underperformed the Industrials category average (+8.5%) by ~25pts over 6M.",
          returnRisk: "0.2 (category avg 0.8) — risk-adjusted return collapsed.",
          week52: "58% of 52-week range — well off highs.",
          aumFlow: "AUM EUR 7,100M — outflows accelerating but still Europe's largest defense ETF.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -7.27, aumEurM: 17000,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold pulled back from its $4,100+ all-time high as rate-cut expectations were pushed out and the dollar strengthened. EUR-denominated gold ETCs underperformed USD-denominated ones over 6M because the EUR appreciated modestly vs USD, creating a currency drag. Physical gold demand from central banks provided a floor but couldn't offset ETF outflows.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~5pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "55% of 52-week range — lower half.",
          aumFlow: "AUM ~EUR 17,000M — outflows from profit-taking.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -7.09, aumEurM: 30082,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Same gold pullback narrative as Xetra-Gold. The -7.09% reflects gold's struggle at elevated price levels amid fewer expected rate cuts. Central bank buying (China, India, Turkey) provided structural support, but speculative positioning unwound and ETF holdings fell. The narrower loss vs 4GLD reflects USD denomination — the EUR strengthened slightly, so EUR-based products fared worse.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~5pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "58% of 52-week range.",
          aumFlow: "AUM EUR 30,082M — still Europe's largest despite net outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -7.09, aumEurM: 23329,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~5pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "58% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -7.08, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~5pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "57% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "DBXD", name: "Xtrackers DAX UCITS ETF",
          category: "Germany / DAX", pct: -1.14, aumEurM: 5200,
          holds: "DAX 40 index — Germany's 40 largest listed companies. Industrials and auto-heavy.",
          vsCategory: "Underperformed the Europe Equity category average (+4.5%) by ~5.6pts over 6M.",
          returnRisk: "0.1 (category avg 0.5) — weak risk-adjusted return.",
          week52: "52% of 52-week range — mid-range.",
          aumFlow: "AUM ~EUR 5,200M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: -0.80, aumEurM: 6000,
          holds: "DAX 40 index — iShares' version of the German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+4.5%) by ~5.3pts over 6M.",
          returnRisk: "0.1 (category avg 0.5).",
          week52: "53% of 52-week range.",
          aumFlow: "AUM ~EUR 6,000M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.71, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average over 6M.",
          returnRisk: "0.1 (category avg 0.1) — minimal for bonds.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 1.02, aumEurM: 21521,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average over 6M.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM EUR 21,521M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 1.19, aumEurM: 5000,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average over 6M.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "Swap-based — no individual security holdings."
        }
      ]
    },

    "ytd": {
      best: [
        {
          tier: "researched", ticker: "HYPE", name: "21Shares Hyperliquid ETP",
          category: "Cryptocurrency / DeFi", pct: 166.41, aumEurM: 27,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "Hyperliquid became the dominant on-chain perpetuals exchange in 2026, capturing over 60% of DEX perps volume. The token rallied from ~$25 to ~$68-71 as platform fee revenue validated a fundamental valuation thesis rare in crypto. A $645M token unlock in late June was absorbed without selling pressure. The protocol's combination of high throughput and low fees attracted institutional flow.",
          vsCategory: "Outperformed the Cryptocurrency category average (+55%) by ~111pts YTD.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "95% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 27M — grew from ~EUR 10M at year start.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 124.46, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD's data-center GPU revenue tripled YoY as MI300X gained market share in AI inference workloads. The options-based ETP amplified the underlying move via high implied volatility generating outsized premium income. AMD benefited from customer demand for NVIDIA alternatives amid supply constraints and pricing pressure.",
          vsCategory: "Outperformed the Derivatives category average (+10%) by ~114pts YTD.",
          returnRisk: "Very high — leveraged single-stock via options.",
          week52: "92% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 101.37, aumEurM: 4962,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The dominant AI chip-demand story — the most consistent winner of 2026. iShares Semiconductor ETF soared 112.8% in H1 alone. Q1 semiconductor revenue hit $298.5B (+25% QoQ), and the industry is on track to top $1T annually. NVIDIA's fiscal 2026 revenue reached $215.9B (+65% YoY), Q1 FY2027 set a record at $81.6B. Hyperscaler capex — Meta $135B, Google $185B — continues to underwrite the cycle.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by ~79pts YTD.",
          returnRisk: "3.9 (category avg 1.1).",
          week52: "98% of 52-week range — near all-time high.",
          aumFlow: "AUM +52% YTD — among Europe's top-inflow ETFs this year.",
          topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21% — top 10 = 59.37%."
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 100.05, aumEurM: 15,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil doubled YTD as OPEC+ production cuts, European refining-capacity constraints, and cold-weather restocking drove middle-distillate prices to multi-year highs. The crack spread widened as refinery margins expanded. Seasonal demand patterns and geopolitical risk premiums on Russian-origin product kept the rally alive through H1.",
          vsCategory: "Outperformed the Commodities category average (+8%) by ~92pts YTD.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "90% of 52-week range.",
          aumFlow: "AUM ~EUR 15M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 98.64, aumEurM: 3764,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "SK Hynix hit $1T valuation in May — shares up 340%+ this year on insatiable HBM demand. Samsung crossed $1T. Together they comprise 40%+ of the KOSPI, which broke 7,000 for the first time and approached 9,000. SK Hynix ADR was 7x oversubscribed on its US listing. Recent 5.35% flash crash and 5.8% recovery highlight concentration risk.",
          vsCategory: "Outperformed the EM Equity category average (+12.1%) by ~87pts YTD.",
          returnRisk: "4.6 (category avg 0.5).",
          week52: "97% of 52-week range.",
          aumFlow: "AUM +38% YTD.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18% — top 2 = ~46%. A concentrated semiconductor bet."
        },
        {
          tier: "researched", ticker: "HNSS", name: "HSBC Nasdaq Global Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 97.43, aumEurM: 249,
          holds: "Nasdaq-listed semiconductor companies — US-heavy chip exposure via Nasdaq Global Semiconductor index.",
          whyItMoved: "US semiconductor leaders NVIDIA, Broadcom, and AMD powered this US-heavy chip ETF to near-triple-digit returns. CHIPS Act subsidies and domestic fab construction timelines solidified. TSMC Arizona fab reached volume production. Inference demand added a second growth leg beyond training.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by ~75pts YTD.",
          returnRisk: "3.7 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +44% YTD.",
          topHoldings: "NVIDIA ~14%, Broadcom ~10%, AMD ~8% — US-heavy tilt."
        },
        {
          tier: "researched", ticker: "IKOR", name: "iShares MSCI Korea UCITS ETF USD (Acc)",
          category: "South Korea", pct: 96.50, aumEurM: 500,
          holds: "MSCI Korea index — accumulating share class. Samsung and SK Hynix-dominated, 80 holdings.",
          whyItMoved: "Accumulating share class of the iShares Korea product (IQQK is distributing). Same semiconductor supercycle driving Korean equities. Fractionally higher return than distributing class due to reinvested dividends. KOSPI remains the most concentrated AI-memory bet among major indices.",
          vsCategory: "Outperformed the EM Equity category average (+12.1%) by ~84pts YTD.",
          returnRisk: "4.5 (category avg 0.5).",
          week52: "94% of 52-week range.",
          aumFlow: "AUM ~EUR 500M.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18%, Samsung Pref ~3% — top 3 = ~49%."
        },
        {
          tier: "researched", ticker: "GXAI", name: "Global X AI & Semiconductor UCITS ETF",
          category: "Semiconductors / AI", pct: 95.25, aumEurM: 500,
          holds: "AI-focused semiconductor names — memory, GPU, and quantum computing exposure.",
          whyItMoved: "The AI semiconductor supercycle lifted all chip-focused ETFs. Global X's product benefited from its memory-chip tilt (SK Hynix, Micron) during the HBM shortage. The fund captured both the training capex buildout and the emerging inference demand wave. Semiconductor revenue on track for $1T+ in 2026.",
          vsCategory: "Outperformed the Technology category average (+22.3%) by ~73pts YTD.",
          returnRisk: "4.0 (category avg 1.1).",
          week52: "96% of 52-week range.",
          aumFlow: "AUM +48% YTD.",
          topHoldings: "SK Hynix 7.80%, Micron 6.20%, AMD 5.15% — top 10 = ~48%."
        },
        {
          tier: "researched", ticker: "AMKR", name: "Amundi MSCI Korea UCITS ETF",
          category: "South Korea", pct: 92.57, aumEurM: 600,
          holds: "MSCI Korea index — Samsung, SK Hynix, Hyundai Motor. 85 holdings.",
          whyItMoved: "Korean semiconductor rally — same HBM/AI memory theme. Amundi tracks MSCI Korea with slightly different methodology vs Franklin's FTSE. SK Hynix ADR 7x oversubscribed on US listing. KOSPI's single-day 5.35% crash was followed by a 5.8% rebound, highlighting the volatile but upward trend.",
          vsCategory: "Outperformed the EM Equity category average (+12.1%) by ~80pts YTD.",
          returnRisk: "3.4 (category avg 0.5).",
          week52: "93% of 52-week range.",
          aumFlow: "AUM +30% YTD.",
          topHoldings: "Samsung Electronics ~27%, SK Hynix ~17% — top 2 = ~44%."
        },
        {
          tier: "researched", ticker: "HKOR", name: "HSBC MSCI Korea Capped UCITS ETF",
          category: "South Korea", pct: 92.49, aumEurM: 200,
          holds: "MSCI Korea with 25% single-stock cap — reduces Samsung concentration.",
          whyItMoved: "Same Korean chip supercycle. Capped version slightly trails uncapped peers because Samsung's natural weight (~28%) is capped at 25%, limiting upside when Samsung rallies. The cap provides marginal downside protection during corrections.",
          vsCategory: "Outperformed the EM Equity category average (+12.1%) by ~80pts YTD.",
          returnRisk: "3.3 (category avg 0.5).",
          week52: "93% of 52-week range.",
          aumFlow: "AUM +25% YTD.",
          topHoldings: "Samsung Electronics 25.00% (capped), SK Hynix ~17% — top 2 = ~42%."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -4.07, aumEurM: 17000,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold's worst YTD performance among large European ETCs. The EUR-denominated product suffered a double headwind: gold pulling back from $4,100+ all-time highs on hawkish rate repricing, PLUS EUR appreciation vs USD creating currency drag. Central-bank buying provided a floor but couldn't offset speculative unwind and ETF outflows. EUR-based investors fared ~2pts worse than USD-based holders.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~3pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "50% of 52-week range — mid-range.",
          aumFlow: "AUM ~EUR 17,000M — profit-taking outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.19, aumEurM: 30082,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Gold gave back gains after testing $4,100+ in Q1. Fewer expected rate cuts and dollar stability reduced gold's appeal. ETF holdings declined steadily through H1 despite record central-bank physical buying. The -2.19% is milder than Xetra-Gold's -4.07% due to USD denomination — EUR appreciation hurt EUR-denominated products more.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~1pt YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 30,082M — net outflows but still Europe's largest.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.18, aumEurM: 23329,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          whyItMoved: "Identical to IGLN — same underlying, same gold pullback from all-time highs. Fractional difference reflects TER variation. The structural case for gold (fiscal deficits, central-bank accumulation, geopolitical hedging) remains intact but H1 pricing reflected reduced rate-cut expectations.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~1pt YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.18, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~1pt YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "55% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -1.37, aumEurM: 7100,
          holds: "Global defense and aerospace companies. 28 holdings.",
          vsCategory: "Underperformed the Industrials category average (+12%) by ~13pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD after strong 2024-2025.",
          week52: "58% of 52-week range.",
          aumFlow: "AUM EUR 7,100M — Europe's largest defense ETF.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.90, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average YTD.",
          returnRisk: "0.1 (category avg 0.1).",
          week52: "52% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 1.07, aumEurM: 21521,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average YTD.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM EUR 21,521M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 1.26, aumEurM: 5000,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average YTD.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: 1.82, aumEurM: 6000,
          holds: "DAX 40 index — iShares' German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+8%) by ~6pts YTD.",
          returnRisk: "0.2 (category avg 0.5).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM ~EUR 6,000M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "DBXD", name: "Xtrackers DAX UCITS ETF",
          category: "Germany / DAX", pct: 1.96, aumEurM: 5200,
          holds: "DAX 40 index — Xtrackers' German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+8%) by ~6pts YTD.",
          returnRisk: "0.2 (category avg 0.5).",
          week52: "56% of 52-week range.",
          aumFlow: "AUM ~EUR 5,200M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        }
      ]
    }
  },

  // Fixed 7-ticker portfolio — always full richness, no tier gating.
  portfolio: [
    {
      ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
      pct1m: 9.17, pct6m: 82.47, pctYtd: 101.37, aumEurM: 4962,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
      whyItMoved: "The AI-driven semiconductor supercycle remains the dominant market story of 2026. Q1 semiconductor revenue hit $298.5B (+25% QoQ), and the industry is on track to cross $1T annually. NVIDIA's Q1 FY2027 revenue reached a record $81.6B. Meta plans $135B and Google $185B in 2026 capex. The semiconductor market is projected to reach $1.5T by mid-decade as AI compute demand accelerates.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by ~3.4pts over 1M.",
      returnRisk: "3.9 (category avg 1.1). 1Y return +162.7%.",
      week52: "96% of 52-week range — near all-time high.",
      aumFlow: "AUM EUR 4,962M. +52% YTD — among Europe's top-inflow ETFs.",
      topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21%, SK Hynix 5.22%, Lam Research 4.43%, ASML 4.35% — top 10 = 59.37%."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: 6.54, pct6m: 48.86, pctYtd: 58.00, aumEurM: 990,
      holds: "AI infrastructure companies — chip designers, cloud platforms, data-center operators, networking equipment. 45 holdings tracking the STOXX Global AI Infrastructure index.",
      whyItMoved: "Global data-center capex is projected to top $1T in 2026, with the Magnificent Seven collectively expected to spend $527B — an increase of $62B above prior estimates. The fund's YTD +58% reflects surging demand across the entire AI hardware stack: semiconductors, networking, power, and cooling. Launched Dec 2024, it has crossed EUR 990M in AUM, confirming investor appetite for the physical AI build-out theme.",
      vsCategory: "Outperformed the Technology category average (+5.8%) by ~0.7pts over 1M.",
      returnRisk: "4.14 (category avg 1.1). Volatility 1Y: 20.43%. 1Y return +95.99%.",
      week52: "85% of 52-week range.",
      aumFlow: "AUM EUR 990M — massive for a fund less than 18 months old.",
      topHoldings: "AMD 4.80%, Applied Materials 4.73%, Cisco 4.66%, Amazon 4.64%, Apple 4.63% — top 10 = 45.91%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: 4.51, pct6m: 29.46, pctYtd: 33.92, aumEurM: 7633,
      holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
      whyItMoved: "The fund's diversified approach captures the broader AI trade: YTD +33.9% is solid but trails pure-play chip funds by 60+ pts. At EUR 7.65B, this is Europe's largest AI-themed ETF — investors treat it as the broad-market AI proxy. The 1M +4.5% shows the broader AI names catching up with the semiconductor leaders.",
      vsCategory: "Roughly in line with the Technology category average (+5.8%) over 1M.",
      returnRisk: "2.17 (category avg 1.1). Volatility 1Y: 20.46%. 1Y return +50.09%.",
      week52: "82% of 52-week range.",
      aumFlow: "AUM EUR 7,633M — Europe's largest AI-themed ETF.",
      topHoldings: "Micron 8.97%, Samsung 8.38%, SK Hynix 7.70%, Intel 5.42%, Cisco 4.26% — top 10 = 54.11%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -2.72, pct6m: 13.02, pctYtd: 20.18, aumEurM: 2989,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. 105 holdings including Bloom Energy, First Solar, Enphase.",
      whyItMoved: "Clean energy ETFs are up over 25% collectively in 2026 — a structural recovery driven by AI data-center energy demand and geopolitical energy-security concerns. The -2.7% 1M reflects cooling from mid-year highs and hydrogen subsector weakness (Bloom Energy short-seller report, FuelCell profit-taking). Rate-sensitive renewable names remain vulnerable to financing-cost swings.",
      vsCategory: "Roughly in line with the Utilities category average (-2.4%) over 1M.",
      returnRisk: "1.84 (category avg 0.6). Volatility 1Y: 25.30%. 1Y return +46.57%.",
      week52: "62% of 52-week range — mid-range.",
      aumFlow: "AUM EUR 2,989M. Dividend yield 0.94%. +$507M inflows YTD.",
      topHoldings: "Bloom Energy 12.13%, First Solar 9.55%, NextEra 8.39%, Enphase 5.91%, China Yangtze Power 5.31% — top 10 = 55.04%."
    },
    {
      ticker: "EQQQ", name: "Invesco EQQQ Nasdaq-100 UCITS ETF",
      pct1m: 5.39, pct6m: 17.77, pctYtd: 21.30, aumEurM: 11708,
      holds: "Nasdaq-100 tracker — Mag7-heavy, 100 non-financial stocks listed on Nasdaq. TER 0.30%.",
      whyItMoved: "The Nasdaq-100 returned 5.4% in H1 vs 7.9% for the S&P 500 — the weakest relative performance since 2022 as combined profit growth slowed to ~18%. Mega-cap dispersion is sharp: Alphabet and NVIDIA are standouts, Microsoft and Tesla lagging. The tension between AI capex supercycle (no slowdown) and less accommodative monetary policy defines the 2026 story.",
      vsCategory: "In line with the Technology category average (+5.8%) over 1M.",
      returnRisk: "1.90 (category avg 1.0). 1Y return +33.86%.",
      week52: "83% of 52-week range.",
      aumFlow: "AUM EUR 11,708M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA 7.72%, Apple 7.31%, Alphabet 6.35% — top 10 = ~50%."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: 0.82, pct6m: 72.69, pctYtd: 91.50, aumEurM: 984,
      holds: "Broad South Korean equity index — 80 holdings. Samsung Electronics 28% and SK Hynix 18% dominate.",
      whyItMoved: "SK Hynix hit a $1T valuation in May — shares up 340%+ this year on insatiable HBM demand. Samsung also crossed $1T. Together they comprise 46% of this fund and 40% of the KOSPI, which broke through 7,000 for the first time. The near-flat 1M (+0.82%) reflects extreme volatility: a 5.35% single-day crash on AI spending fears, followed by a 5.8% rebound. YTD +91.5% — effectively a leveraged AI memory-chip bet.",
      vsCategory: "Roughly in line with the EM Equity category average (+4.1%) over 1M.",
      returnRisk: "4.92 (category avg 0.5). Volatility 1Y: 42.53%.",
      week52: "93% of 52-week range — near the high.",
      aumFlow: "AUM EUR 984M. Dividend yield 0.47%.",
      topHoldings: "Samsung Electronics 28.05%, SK Hynix 17.86%, Samsung (pref) 3.29%, Hyundai Motor 2.69%, KB Financial 2.33% — top 10 = 63.21%."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: 4.27, pct6m: -29.03, pctYtd: -16.23, aumEurM: 139,
      holds: "Physical palladium bullion — a direct commodity holding backed by metal in HSBC vaults, not miner equities. TER 0.49%.",
      whyItMoved: "Palladium's structural bear case persists: the EV transition continues to erode catalytic-converter demand, with each 1M EVs sold eliminating 2-7 metric tonnes of annual palladium consumption. The 6M return collapsed to -29% as long-term headwinds accelerated. The +4.3% 1M bounce reflects short-term supply tightness (Russia sanctions) and WisdomTree analysts noting EV sales slowdowns in some markets may temporarily support ICE demand. Structurally, fewer combustion engines means less palladium.",
      vsCategory: "Outperformed the Commodities category average (+1.2%) by ~3pts over 1M.",
      returnRisk: "1.27 (category avg 0.8). Volatility 1Y: 41.93% — highest in the portfolio. 1Y return +14.27%.",
      week52: "35% of 52-week range — lower third after steep decline.",
      aumFlow: "AUM EUR 139M — niche product, thin compared to gold ETCs.",
      topHoldings: "Single physical holding — no concentration risk in the usual sense.",
      badges: ["reversal watch"]
    }
  ]

};
