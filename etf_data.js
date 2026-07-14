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
    asOf: "13 Jul 2026, 17:35",
    fundsTracked: 3519
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "COCO", name: "WisdomTree Cocoa ETC",
          category: "Commodities / Soft", pct: 51.20, aumEurM: 350,
          holds: "Physically-backed cocoa futures — tracks Bloomberg Cocoa Subindex, rolling front-month contracts.",
          whyItMoved: "Cocoa spiked to $5,842/tonne (highest since January) on fears the 2026/27 Ivory Coast main crop will decline 18% to ~1.8 MMT due to El Niño-linked flooding and poor pod development. Farmers report excessive soil moisture and insufficient sunshine. Despite abundant current supply — port arrivals +21% YoY at 2.09 MMT — the market is forward-pricing next season's deficit. ICCO trimmed its surplus forecast. The rally is supply-fear driven, not demand.",
          vsCategory: "Outperformed the Commodities category average (+1.5%) by ~50pts over 1M.",
          returnRisk: "Extreme — single-commodity ETC, no diversification.",
          week52: "85% of 52-week range — below January highs but rebounding.",
          aumFlow: "AUM ~EUR 350M — speculative inflows on weather fears.",
          topHoldings: "Single commodity — cocoa futures contracts.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GAVE", name: "Global X Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 50.15, aumEurM: 3,
          holds: "Physical Aave (AAVE) token — single-asset crypto ETP backed by custodied tokens.",
          whyItMoved: "Aave protocol TVL hit $12.2B as DeFi's largest lending platform. Stable Vaults launched July 9, enabling fixed-rate borrowing — a first for DeFi blue chips. Biggest wallet-creation day since 2021. Standard Chartered forecast AAVE at $3,500 by 2030. Institutional adoption accelerated across multiple new chains.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~38pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "83% of 52-week range.",
          aumFlow: "AUM stable — micro-cap product with thin secondary market.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AAVE", name: "21Shares Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 48.87, aumEurM: 10,
          holds: "Physical Aave (AAVE) token — 21Shares' single-asset ETP, the larger European Aave product.",
          whyItMoved: "Same DeFi breakout — Stable Vaults launch and record wallet creation drove renewed interest. Investors rotated into DeFi blue-chips as the fee-switch and revenue-sharing narrative gained traction. 21Shares' product is the largest European Aave ETP by AUM.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~37pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM +8% this month.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GUNI", name: "Global X Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 42.14, aumEurM: 3,
          holds: "Physical Uniswap (UNI) token — Global X's single-asset ETP.",
          whyItMoved: "Uniswap benefited from the broader DeFi rally — DEX volumes surged as Robinhood Chain integration drove mainstream crossover. Fee-switch governance approval gave UNI holders direct protocol revenue. Global X's product tracked closely with CoinShares' version.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~30pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "76% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AUNI", name: "21Shares Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 41.07, aumEurM: 8,
          holds: "Physical Uniswap (UNI) token — 21Shares' single-asset ETP, the largest European UNI product.",
          whyItMoved: "Largest European UNI ETP by AUM. Same DeFi tailwind — Robinhood integration, fee-switch approval, $100B+ DeFi TVL. Slight underperformance vs Global X reflects TER difference.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~29pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "75% of 52-week range.",
          aumFlow: "AUM +5% this month.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "CUNI", name: "CoinShares Physical Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 38.10, aumEurM: 5,
          holds: "Physical Uniswap (UNI) token — CoinShares' single-asset ETP backed by custodied tokens.",
          whyItMoved: "Same Uniswap rally as GUNI/AUNI. DEX volumes surged 40% MoM on Robinhood Chain launch and fee-switch governance vote. CoinShares version underperformed peers slightly on spread and custody costs.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~26pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "73% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "COFF", name: "WisdomTree Coffee ETC",
          category: "Commodities / Soft", pct: 31.25, aumEurM: 200,
          holds: "Coffee futures — tracks Bloomberg Coffee Subindex, rolling front-month arabica contracts.",
          whyItMoved: "Brazil's 2026 harvest running 2-3 weeks late with disappointing early yields. ICE arabica futures above $3.50/lb as the market prices a potential global deficit. El Niño forecasts added supply risk for Colombian and Vietnamese robusta crops. Monitored warehouse inventories fell to 18-month lows.",
          vsCategory: "Outperformed the Commodities category average (+1.5%) by ~30pts over 1M.",
          returnRisk: "High — single-commodity ETC with weather-driven volatility.",
          week52: "90% of 52-week range — near the high.",
          aumFlow: "AUM ~EUR 200M — speculative inflows.",
          topHoldings: "Single commodity — coffee futures contracts."
        },
        {
          tier: "researched", ticker: "PYTH", name: "21Shares Pyth Network ETP",
          category: "Cryptocurrency / Infrastructure", pct: 27.34, aumEurM: 5,
          holds: "Physical Pyth Network (PYTH) token — Solana-based oracle network providing real-time price feeds to DeFi protocols.",
          whyItMoved: "Pyth rallied alongside the broader DeFi infrastructure theme as TVL topped $100B, increasing demand for on-chain oracle services. New chain integrations and all-time-high data feed requests drove speculative buying. Low float amplified the move.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~15pts over 1M.",
          returnRisk: "Extreme — single-token, low-float crypto ETP.",
          week52: "68% of 52-week range.",
          aumFlow: "AUM stable — niche product.",
          topHoldings: "Single token — Pyth Network (PYTH).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "VCEL", name: "VanEck Celestia ETN",
          category: "Cryptocurrency / Infrastructure", pct: 25.68, aumEurM: 3,
          holds: "Physical Celestia (TIA) token — modular blockchain data-availability layer enabling Ethereum rollups.",
          whyItMoved: "Celestia rallied on renewed interest in modular blockchain architecture as Ethereum's rollup-centric roadmap drove demand for data-availability solutions. TIA bounced from multi-month lows around $0.30 to ~$0.40. Speculative rotation into infrastructure tokens with low float amplified the move. VanEck's ETN is one of few European-listed Celestia products.",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~14pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETN, TIA down ~90% from ATH.",
          week52: "25% of 52-week range — still near lows despite the bounce.",
          aumFlow: "AUM ~EUR 3M — micro-cap, new product.",
          topHoldings: "Single token — Celestia (TIA).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "BCEL", name: "Bitwise Celestia Staking ETP",
          category: "Cryptocurrency / Infrastructure", pct: 25.00, aumEurM: 3,
          holds: "Physical Celestia (TIA) token with staking yield — modular blockchain data-availability layer.",
          whyItMoved: "Same Celestia bounce — modular blockchain narrative gained traction as Ethereum's rollup roadmap accelerated. Staking yields around 10-15% APY attracted income-focused crypto investors. Bitwise's product offers embedded staking rewards, explaining the slight underperformance vs VanEck (staking lockup creates tracking difference).",
          vsCategory: "Outperformed the Cryptocurrency category average (+12%) by ~13pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "24% of 52-week range — near lows.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Celestia (TIA) with staking.",
          badges: ["Thin liquidity"]
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -4.94, aumEurM: 6170,
          holds: "Global defense and aerospace companies — Rheinmetall, BAE Systems, Thales, Lockheed Martin. 40 holdings.",
          whyItMoved: "Defense selloff deepened in June-July with a -11.9% June alone. Rheinmetall Q2 earnings miss triggered sector-wide profit-taking after a 280% post-Ukraine-invasion rally. EU procurement timelines stretched beyond projections, and some NATO spending pledges shifted to later years. AUM dropped from EUR 7,100M to EUR 6,170M on accelerating outflows. The correction is consolidation, not a fundamental deterioration — order books remain strong.",
          vsCategory: "Underperformed the Industrials category average (+2.5%) by ~7.4pts over 1M.",
          returnRisk: "1.0 (category avg 0.8).",
          week52: "62% of 52-week range — pulled back sharply from highs.",
          aumFlow: "AUM EUR 6,170M — down from EUR 7,100M last week on outflows.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9%, Lockheed Martin ~8% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.66, aumEurM: 30082,
          holds: "Physical gold bullion — backed by allocated gold bars in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Gold fell to ~$4,140, now down 26% from January's record $5,598/oz. ETF outflows hit $5.3B in June — the largest monthly redemption of 2026. Approximately 298 tonnes of ETF-held gold is priced below holders' average cost basis, creating latent selling pressure. Central banks remain buyers (244 tonnes in Q1, PBOC added 14.93 tonnes in June alone), but can't offset speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-0.5%) by ~2.2pts over 1M.",
          returnRisk: "0.2 (category avg 0.4).",
          week52: "55% of 52-week range — mid-range.",
          aumFlow: "AUM EUR 30,082M — Europe's largest gold ETC, net outflows accelerating.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.66, aumEurM: 23329,
          holds: "Physical gold bullion — backed by London vault holdings. Second-largest gold ETC in Europe.",
          whyItMoved: "Identical gold exposure to IGLN, same pullback narrative. Gold now $4,140 vs $5,598 January ATH. ECB confirmed gold has surpassed US Treasuries as the world's largest reserve asset (27% of global central bank holdings vs 22% Treasuries), but this structural shift hasn't prevented the speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-0.5%) by ~2.2pts over 1M.",
          returnRisk: "0.2 (category avg 0.4).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -2.65, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC, third-largest in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (-0.5%) by ~2.2pts over 1M.",
          returnRisk: "0.2 (category avg 0.4).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -1.50, aumEurM: 19892,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          vsCategory: "Underperformed the Precious Metals category average (-0.5%) by ~1pt over 1M.",
          returnRisk: "0.2 (category avg 0.4).",
          week52: "58% of 52-week range.",
          aumFlow: "AUM ~EUR 19,892M — largest EUR-denominated gold ETC.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "EIMI", name: "iShares Core MSCI EM IMI UCITS ETF",
          category: "Emerging Markets / Broad", pct: -1.00, aumEurM: 36843,
          holds: "Broad emerging market equities — MSCI EM Investable Market Index. ~2,800 holdings across China, Taiwan, India, Korea, Brazil.",
          vsCategory: "Underperformed the EM Equity category average (+0.5%) by ~1.5pts over 1M.",
          returnRisk: "0.5 (category avg 0.5).",
          week52: "72% of 52-week range.",
          aumFlow: "AUM EUR 36,843M — Europe's largest EM equity ETF.",
          topHoldings: "TSMC ~7%, Samsung ~4%, Tencent ~3% — broadly diversified."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 0.18, aumEurM: 21538,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap. De facto cash proxy for EUR investors.",
          vsCategory: "In line with the Money Market EUR category average.",
          returnRisk: "Minimal — money market proxy, near-zero volatility.",
          week52: "100% of 52-week range — incremental gains every month.",
          aumFlow: "AUM EUR 21,538M — one of Europe's largest money market ETFs.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 0.20, aumEurM: 5000,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap. Amundi's cash-proxy ETF.",
          vsCategory: "In line with the Money Market EUR category average.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.30, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — Bloomberg EUR Corporate Bond index. ~3,800 holdings.",
          vsCategory: "Slightly below the EUR Bond category average.",
          returnRisk: "0.1 (category avg 0.2) — rate sensitivity weighed on returns.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "IB01", name: "iShares USD Treasury Bond 0-1yr UCITS ETF",
          category: "USD Government Bonds / Short", pct: 1.20, aumEurM: 14000,
          holds: "Ultra-short US Treasury bills — 0-1 year maturity. De facto USD cash proxy.",
          vsCategory: "In line with the USD Money Market category average.",
          returnRisk: "Minimal — near-cash instrument.",
          week52: "100% of 52-week range — incremental yield accrual.",
          aumFlow: "AUM ~EUR 14,000M.",
          topHoldings: "US Treasury bills — pure duration and credit-risk-free."
        }
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "HYPE", name: "21Shares Hyperliquid ETP",
          category: "Cryptocurrency / DeFi", pct: 165.26, aumEurM: 27,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "HYPE maintained its position near all-time highs as Hyperliquid cemented its dominance in on-chain perpetuals, capturing over 60% of DEX perps volume. A $645M token unlock in late June was absorbed without selling pressure, signalling strong holder conviction. Substantial fee revenue gives the token a rare fundamental valuation case in crypto.",
          vsCategory: "Outperformed the Cryptocurrency category average (+38%) by ~127pts over 6M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "93% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 27M — growing from a small base.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 109.30, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD surged on the semiconductor supercycle with data-center GPU revenue accelerating. The options-based ETP amplified the move — high implied volatility generated outsized premium. AMD's MI300X gained inference market share. The July chip selloff trimmed returns from 120% last week but the 6M gain remains triple-digit.",
          vsCategory: "Outperformed the Derivatives category average (+6%) by ~103pts over 6M.",
          returnRisk: "Very high — leveraged single-stock exposure via options.",
          week52: "82% of 52-week range — pulled back from highs in July.",
          aumFlow: "AUM ~EUR 4M — micro-cap product.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 98.62, aumEurM: 15,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil futures nearly doubled as OPEC+ production cuts tightened the middle-distillate market while European refining capacity remained constrained. The crack spread (refining margin) widened to multi-year highs. Seasonal restocking and geopolitical risk premiums on Russian-origin product sustained the rally.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~94pts over 6M.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "87% of 52-week range.",
          aumFlow: "AUM ~EUR 15M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 81.77, aumEurM: 300,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas prices surged as European storage refill targets fell behind schedule amid higher-than-expected summer cooling demand and reduced LNG spot cargo availability. Russian pipeline flows remained near zero. The EU's dependency on LNG imports leaves prices structurally higher than pre-2022.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~77pts over 6M.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM ~EUR 300M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "GXAI", name: "Global X AI & Semiconductor UCITS ETF",
          category: "Semiconductors / AI", pct: 75.57, aumEurM: 500,
          holds: "AI-focused semiconductor names — memory, GPU, and quantum computing exposure alongside traditional chipmakers.",
          whyItMoved: "AI chip demand drove semiconductor revenue past $120B/month in May (+104% YoY). The July correction trimmed 6M returns from 83% to 75% as SK Hynix had its largest-ever single-day drop (-15%) and Micron lost $138B in one session. Valuation concerns and Fed hawkishness triggered the 'mid-cycle reset.' Fundamentals remain intact — hyperscaler capex guidance keeps rising.",
          vsCategory: "Outperformed the Technology category average (+16%) by ~60pts over 6M.",
          returnRisk: "3.8 (category avg 1.1).",
          week52: "88% of 52-week range — pulled back from near-ATH in July.",
          aumFlow: "AUM +35% over 6M — inflows slowed in July on selloff.",
          topHoldings: "SK Hynix 7.80%, Micron 6.20%, AMD 5.15%, Samsung 4.94% — top 10 = ~48%."
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 74.50, aumEurM: 5182,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "Same AI-driven semiconductor supercycle but the July selloff hit hard: SEC0's July return is -11.5% so far (heatmap). Intel down 21%, Broadcom's Q3 guidance missed estimates ($16B vs $17.2B expected). SK Hynix slowed HBM production expansion plans. The 6M return fell from 82% to 74% in one week. Analysts call it a 'mid-cycle reset' — not a trend reversal.",
          vsCategory: "Outperformed the Technology category average (+16%) by ~59pts over 6M.",
          returnRisk: "3.5 (category avg 1.1).",
          week52: "85% of 52-week range — off July highs.",
          aumFlow: "AUM EUR 5,182M — up from EUR 4,962M despite July volatility.",
          topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21% — top 10 = 59.37%."
        },
        {
          tier: "researched", ticker: "HNSS", name: "HSBC Nasdaq Global Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 70.66, aumEurM: 249,
          holds: "Nasdaq-listed semiconductor companies — US-heavy chip exposure via Nasdaq Global Semiconductor index.",
          whyItMoved: "US semiconductor leaders led both the H1 rally and the July correction. NVIDIA, Broadcom, and AMD powered the fund but Broadcom's guidance miss and AMD's 7% drop in the selloff trimmed 6M returns from 79% to 71%. CHIPS Act subsidies and domestic fab timelines remain supportive longer-term.",
          vsCategory: "Outperformed the Technology category average (+16%) by ~55pts over 6M.",
          returnRisk: "3.3 (category avg 1.1).",
          week52: "84% of 52-week range.",
          aumFlow: "AUM +30% over 6M.",
          topHoldings: "NVIDIA ~14%, Broadcom ~10%, AMD ~8% — US-heavy tilt."
        },
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 68.25, aumEurM: 7982,
          holds: "US-listed semiconductor companies — tracks MVIS US Listed Semiconductor 25 Index. 25 holdings, concentrated in AI chip leaders.",
          whyItMoved: "VanEck's chip ETF soared 82% in H1 2026 but the July correction trimmed 6M returns. At EUR 7,982M AUM, it's one of Europe's largest semiconductor products. The fund's US-listed focus captures NVIDIA, Broadcom, AMD, and Qualcomm. SMH (VanEck's US equivalent) pulled in $6.9B in single-day net inflows on 18 Jun before the July reversal.",
          vsCategory: "Outperformed the Technology category average (+16%) by ~52pts over 6M.",
          returnRisk: "3.2 (category avg 1.1).",
          week52: "82% of 52-week range — correcting from all-time high.",
          aumFlow: "AUM EUR 7,982M — massive for a sector ETF.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%. Highly concentrated."
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 67.07, aumEurM: 3764,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "Korean equities gave back gains sharply in July as the KOSPI crashed ~25% from its June peak. SK Hynix's record single-day selloff (-15%) rippled across all Korea ETFs. Samsung and SK Hynix still dominate at 46% of the fund. The 6M return fell from 80% to 67% in one week. The selloff reflects SK Hynix slowing HBM expansion and broader chip valuation fears.",
          vsCategory: "Outperformed the EM Equity category average (+7%) by ~60pts over 6M.",
          returnRisk: "3.0 (category avg 0.5).",
          week52: "78% of 52-week range — sharp pullback from highs.",
          aumFlow: "AUM EUR 3,764M.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18% — top 2 = ~46% of fund."
        },
        {
          tier: "researched", ticker: "OD72", name: "WisdomTree Petroleum ETC",
          category: "Commodities / Energy", pct: 62.17, aumEurM: 7,
          holds: "Petroleum futures — tracks Bloomberg Petroleum Subindex, a basket of crude oil and refined products futures.",
          whyItMoved: "Petroleum futures rallied as OPEC+ production cuts tightened global supply while demand remained robust on Asian economic recovery and summer driving season. The broad petroleum subindex captured gains across both crude and refined products, outperforming single-commodity crude ETCs. Refining margins stayed elevated on constrained European capacity.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~57pts over 6M.",
          returnRisk: "High — commodity basket with geopolitical and seasonal volatility.",
          week52: "75% of 52-week range.",
          aumFlow: "AUM ~EUR 7M — micro-cap product.",
          topHoldings: "Petroleum futures basket — crude oil and refined products.",
          badges: ["Thin liquidity"]
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -18.75, aumEurM: 6170,
          holds: "Global defense and aerospace companies — Rheinmetall, BAE Systems, Thales, Lockheed Martin. 40 holdings.",
          whyItMoved: "Defense sector correction deepened — June alone was -11.9%. Rheinmetall's Q2 earnings miss catalysed a broader de-rating as investors questioned whether order-book growth translates to near-term revenue. EU procurement timelines stretched, NATO spending pledges shifted to later years. AUM fell from EUR 7,100M to EUR 6,170M — accelerating outflows despite unchanged fundamentals. The sharpest defence correction since the sector's 2022 re-rating.",
          vsCategory: "Underperformed the Industrials category average (+7%) by ~26pts over 6M.",
          returnRisk: "Negative risk-adjusted return — the rally gave back nearly 20% in 6 months.",
          week52: "62% of 52-week range — well off highs.",
          aumFlow: "AUM EUR 6,170M — outflows accelerating, down ~13% from peak.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -11.50, aumEurM: 19892,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold's pullback from its January $5,598 ATH to ~$4,140 hit EUR-denominated products hardest. The EUR appreciated modestly vs USD, creating a currency drag on top of gold's price decline. ETF outflows of $5.3B in June alone accelerated the sell-off. Central-bank buying (244 tonnes Q1) provided a floor but couldn't offset speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~8pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "48% of 52-week range — lower half.",
          aumFlow: "AUM ~EUR 19,892M — outflows from profit-taking.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -11.25, aumEurM: 30082,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Same gold pullback — from $5,598 ATH to ~$4,140. IGLN is USD-denominated, so the loss is slightly less than EUR-based 4GLD. JPMorgan still targets $4,500 by Q4, Goldman $4,900 by year-end. The structural case (fiscal deficits, central-bank accumulation, de-dollarization) persists but H1 pricing reflected hawkish rate repricing and speculative position unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 30,082M — still Europe's largest despite net outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -11.25, aumEurM: 23329,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -11.24, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "DBXD", name: "Xtrackers DAX UCITS ETF",
          category: "Germany / DAX", pct: -1.50, aumEurM: 5200,
          holds: "DAX 40 index — Germany's 40 largest listed companies. Industrials and auto-heavy.",
          vsCategory: "Underperformed the Europe Equity category average (+4%) by ~5.5pts over 6M.",
          returnRisk: "0.0 (category avg 0.5) — weak risk-adjusted return.",
          week52: "50% of 52-week range — mid-range.",
          aumFlow: "AUM ~EUR 5,200M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: -1.20, aumEurM: 6000,
          holds: "DAX 40 index — iShares' version of the German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+4%) by ~5.2pts over 6M.",
          returnRisk: "0.0 (category avg 0.5).",
          week52: "51% of 52-week range.",
          aumFlow: "AUM ~EUR 6,000M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.50, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average over 6M.",
          returnRisk: "0.1 (category avg 0.1) — minimal for bonds.",
          week52: "48% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 1.10, aumEurM: 21538,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average over 6M.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM EUR 21,538M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 1.25, aumEurM: 5000,
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
          category: "Cryptocurrency / DeFi", pct: 153.08, aumEurM: 27,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "Hyperliquid became the dominant on-chain perpetuals exchange in 2026, capturing over 60% of DEX perps volume. The token rallied from ~$25 to ~$68-71 as platform fee revenue validated a fundamental valuation thesis rare in crypto. The July tech selloff trimmed YTD from 166% to 153% but the platform's revenue-generating model provides a floor that most crypto tokens lack.",
          vsCategory: "Outperformed the Cryptocurrency category average (+50%) by ~103pts YTD.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "93% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 27M — grew from ~EUR 10M at year start.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 124.94, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD's data-center GPU revenue tripled YoY as MI300X gained inference market share. The options-based ETP amplified the move via high implied volatility. Despite the July chip selloff, YTD remains above 124% — higher than last week as AMD held up better than peers (its valuation was less stretched).",
          vsCategory: "Outperformed the Derivatives category average (+8%) by ~117pts YTD.",
          returnRisk: "Very high — leveraged single-stock via options.",
          week52: "85% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 112.21, aumEurM: 15,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil doubled YTD as OPEC+ cuts, European refining constraints, and seasonal restocking drove middle-distillate prices to multi-year highs. The crack spread widened as refinery margins expanded. Geopolitical risk premiums on Russian-origin product kept the rally alive. Energy commodities are one of few sectors immune to the July tech selloff.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~105pts YTD.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "89% of 52-week range.",
          aumFlow: "AUM ~EUR 15M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 101.17, aumEurM: 300,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas surged past triple-digit YTD returns as European storage refill fell behind schedule. Summer cooling demand exceeded forecasts, LNG spot cargo availability tightened, and Russian pipeline flows stayed near zero. The EU's structural LNG dependency keeps prices elevated. Natural gas entered the YTD top 10 as the July tech correction pushed chip stocks lower.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~94pts YTD.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM ~EUR 300M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 95.35, aumEurM: 5182,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The dominant AI chip story of 2026 — but July brought a sharp correction. Monthly semiconductor sales hit $120.6B in May (+104% YoY), and the industry remains on track for $1T annually. But the July selloff wiped over $1T in chip market cap: Intel -21%, Micron -13%, SK Hynix -15% in single sessions. Broadcom's Q3 guidance miss ($16B vs $17.2B) triggered 'sell-the-news.' YTD fell from 101% to 95%. Analysts view it as a mid-cycle reset, not a trend reversal.",
          vsCategory: "Outperformed the Technology category average (+20%) by ~75pts YTD.",
          returnRisk: "3.5 (category avg 1.1).",
          week52: "85% of 52-week range — off July highs.",
          aumFlow: "AUM EUR 5,182M — +45% YTD despite July volatility.",
          topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21% — top 10 = 59.37%."
        },
        {
          tier: "researched", ticker: "HNSS", name: "HSBC Nasdaq Global Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 90.68, aumEurM: 249,
          holds: "Nasdaq-listed semiconductor companies — US-heavy chip exposure via Nasdaq Global Semiconductor index.",
          whyItMoved: "US semiconductor leaders powered the fund but the July correction trimmed YTD from 97% to 91%. CHIPS Act subsidies and domestic fab construction remain supportive. TSMC Arizona fab reached volume production. The US-heavy tilt meant less exposure to the Korean chip crash but Broadcom and Intel declines still weighed heavily.",
          vsCategory: "Outperformed the Technology category average (+20%) by ~71pts YTD.",
          returnRisk: "3.3 (category avg 1.1).",
          week52: "84% of 52-week range.",
          aumFlow: "AUM +38% YTD.",
          topHoldings: "NVIDIA ~14%, Broadcom ~10%, AMD ~8% — US-heavy tilt."
        },
        {
          tier: "researched", ticker: "GXAI", name: "Global X AI & Semiconductor UCITS ETF",
          category: "Semiconductors / AI", pct: 89.21, aumEurM: 500,
          holds: "AI-focused semiconductor names — memory, GPU, and quantum computing exposure.",
          whyItMoved: "The AI semiconductor supercycle lifted all chip-focused ETFs but the July correction hit hard. Global X's memory-chip tilt (SK Hynix, Micron) amplified both the H1 rally and the July selloff. YTD fell from 95% to 89% as SK Hynix had its largest-ever single-day drop. Fundamentals remain intact — semiconductor revenue on track for $1T+ in 2026.",
          vsCategory: "Outperformed the Technology category average (+20%) by ~69pts YTD.",
          returnRisk: "3.6 (category avg 1.1).",
          week52: "85% of 52-week range.",
          aumFlow: "AUM +40% YTD.",
          topHoldings: "SK Hynix 7.80%, Micron 6.20%, AMD 5.15% — top 10 = ~48%."
        },
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 87.38, aumEurM: 7982,
          holds: "US-listed semiconductor companies — MVIS US Listed Semiconductor 25 Index. 25 concentrated holdings.",
          whyItMoved: "VanEck's semiconductor ETF soared 82% in H1 but the July correction trimmed YTD from ~95% to 87%. At EUR 7,982M AUM, it's Europe's second-largest semiconductor ETF. The fund's concentrated 25-stock portfolio amplifies both upside and downside. The July selloff was triggered by Broadcom's guidance miss, SK Hynix production slowdown reports, and Fed hawkishness.",
          vsCategory: "Outperformed the Technology category average (+20%) by ~67pts YTD.",
          returnRisk: "3.1 (category avg 1.1).",
          week52: "82% of 52-week range.",
          aumFlow: "AUM EUR 7,982M — significant inflows despite July weakness.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%."
        },
        {
          tier: "researched", ticker: "FLXK", name: "Franklin FTSE Korea UCITS ETF",
          category: "South Korea", pct: 85.65, aumEurM: 3764,
          holds: "Broad South Korean equity exposure — Samsung Electronics and SK Hynix-dominated via FTSE Korea index.",
          whyItMoved: "Korean equities crashed hard in July — KOSPI fell ~25% from its June peak as SK Hynix slowed HBM expansion and chip valuations came under pressure. YTD fell from 99% to 86% in one week. Samsung and SK Hynix dominate at 46% of the fund, creating extreme concentration risk. Despite the correction, the Korean semiconductor supercycle thesis remains intact for HBM demand.",
          vsCategory: "Outperformed the EM Equity category average (+10%) by ~76pts YTD.",
          returnRisk: "3.8 (category avg 0.5).",
          week52: "78% of 52-week range — pulled back sharply.",
          aumFlow: "AUM EUR 3,764M.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18% — top 2 = ~46%."
        },
        {
          tier: "researched", ticker: "IKOR", name: "iShares MSCI Korea UCITS ETF USD (Acc)",
          category: "South Korea", pct: 83.34, aumEurM: 500,
          holds: "MSCI Korea index — accumulating share class. Samsung and SK Hynix-dominated, 80 holdings.",
          whyItMoved: "Accumulating share class of the iShares Korea product. Same semiconductor supercycle driving Korean equities, same July crash. YTD fell from 96% to 83% as KOSPI's concentration in chip stocks (40%+ Samsung + SK Hynix) amplified the correction. Fractionally higher return than distributing class (IQQK) due to reinvested dividends.",
          vsCategory: "Outperformed the EM Equity category average (+10%) by ~73pts YTD.",
          returnRisk: "4.0 (category avg 0.5).",
          week52: "76% of 52-week range.",
          aumFlow: "AUM ~EUR 500M.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18%, Samsung Pref ~3% — top 3 = ~49%."
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -5.90, aumEurM: 19892,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold's worst YTD performer among large European ETCs. Double headwind: gold pulling back 26% from $5,598 ATH, PLUS EUR appreciation vs USD creating currency drag. ETF outflows accelerated — $5.3B in June alone, with 298 tonnes of ETF gold now underwater (below holders' cost basis). Central-bank buying (244 tonnes Q1, PBOC 20 consecutive months) provides structural support but can't offset the speculative unwind. ECB confirmed gold surpassed US Treasuries as the world's largest reserve asset.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~4pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "45% of 52-week range — lower half.",
          aumFlow: "AUM ~EUR 19,892M — profit-taking outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.98, aumEurM: 30082,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Gold gave back gains from January ATH of $5,598 to current ~$4,140. The -3.98% is milder than 4GLD's -5.90% due to USD denomination avoiding EUR currency drag. JPMorgan targets $4,500 by Q4, Goldman $4,900 year-end. ETF holdings declined but central banks bought 244 tonnes Q1 — PBOC alone added 14.93 tonnes in June.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~2pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "48% of 52-week range.",
          aumFlow: "AUM EUR 30,082M — net outflows but still Europe's largest.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.98, aumEurM: 23329,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          whyItMoved: "Identical to IGLN — same gold pullback from ATH. Fractional difference reflects TER variation. Structural case for gold (fiscal deficits, central-bank accumulation, geopolitical hedging) remains intact but H1 pricing reflected reduced rate-cut expectations and speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~2pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "48% of 52-week range.",
          aumFlow: "AUM EUR 23,329M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.97, aumEurM: 10500,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~2pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "48% of 52-week range.",
          aumFlow: "AUM ~EUR 10,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "DFNS", name: "VanEck Defense UCITS ETF",
          category: "Defense / Aerospace", pct: -1.97, aumEurM: 6170,
          holds: "Global defense and aerospace companies. 40 holdings.",
          vsCategory: "Underperformed the Industrials category average (+10%) by ~12pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD after strong 2024-2025.",
          week52: "62% of 52-week range.",
          aumFlow: "AUM EUR 6,170M — down from EUR 7,100M, Europe's largest defense ETF.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Thales ~9% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.70, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average YTD.",
          returnRisk: "0.1 (category avg 0.1).",
          week52: "48% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "XEON", name: "Xtrackers EUR Overnight Rate Swap UCITS ETF",
          category: "Money Market / EUR", pct: 1.15, aumEurM: 21538,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average YTD.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM EUR 21,538M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "C3M", name: "Amundi Smart Overnight Return UCITS ETF",
          category: "Money Market / EUR", pct: 1.32, aumEurM: 5000,
          holds: "Synthetic — EUR overnight rate (euro-STR) via swap.",
          vsCategory: "In line with the Money Market EUR category average YTD.",
          returnRisk: "Minimal — money market proxy.",
          week52: "100% of 52-week range.",
          aumFlow: "AUM ~EUR 5,000M.",
          topHoldings: "Swap-based — no individual security holdings."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: 2.00, aumEurM: 6000,
          holds: "DAX 40 index — iShares' German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+7%) by ~5pts YTD.",
          returnRisk: "0.2 (category avg 0.5).",
          week52: "53% of 52-week range.",
          aumFlow: "AUM ~EUR 6,000M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "DBXD", name: "Xtrackers DAX UCITS ETF",
          category: "Germany / DAX", pct: 2.10, aumEurM: 5200,
          holds: "DAX 40 index — Xtrackers' German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+7%) by ~5pts YTD.",
          returnRisk: "0.2 (category avg 0.5).",
          week52: "54% of 52-week range.",
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
      pct1m: -2.48, pct6m: 74.50, pctYtd: 95.35, aumEurM: 5182,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
      whyItMoved: "The July semiconductor selloff ended SEC0's streak of positive monthly returns. Monthly chip sales hit $120.6B in May (+104% YoY) — fundamentals intact — but Broadcom's Q3 AI guidance miss ($16B vs $17.2B), SK Hynix slowing HBM expansion, and Fed hawkishness triggered a $1T+ market-cap wipeout across chip stocks. Intel -21%, Micron -13%, SK Hynix -15% in single sessions. SEC0's July heatmap shows -11.5%. Analysts call it a 'mid-cycle reset' — NVIDIA and Micron still have substantial 12-month price targets.",
      vsCategory: "Underperformed the Technology category average (+1.0%) by ~3.5pts over 1M.",
      returnRisk: "3.5 (category avg 1.1). 1Y return ~+150%.",
      week52: "85% of 52-week range — off July highs but still elevated.",
      aumFlow: "AUM EUR 5,182M — up from EUR 4,962M. Inflows continued despite the selloff.",
      topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21%, SK Hynix 5.22%, Lam Research 4.43%, ASML 4.35% — top 10 = 59.37%."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: -0.41, pct6m: 46.29, pctYtd: 56.22, aumEurM: 1005,
      holds: "AI infrastructure companies — chip designers, cloud platforms, data-center operators, networking equipment. 45 holdings tracking the STOXX Global AI Infrastructure index.",
      whyItMoved: "Data-center capex projected to top $1T in 2026, with Magnificent Seven expected to spend $527B collectively. The July chip selloff dragged AIFS negative for the month (-0.41%) after +6.54% last month. The fund's broader exposure across the AI hardware stack (not just chips) provided partial insulation from the semiconductor-specific selloff. AUM crossed EUR 1B — confirming investor appetite for the AI infrastructure theme.",
      vsCategory: "Roughly in line with the Technology category average (+1.0%) over 1M.",
      returnRisk: "3.8 (category avg 1.1). Volatility 1Y: ~20%.",
      week52: "80% of 52-week range.",
      aumFlow: "AUM EUR 1,005M — crossed EUR 1B, massive for a fund less than 18 months old.",
      topHoldings: "AMD 4.80%, Applied Materials 4.73%, Cisco 4.66%, Amazon 4.64%, Apple 4.63% — top 10 = 45.91%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: -0.53, pct6m: 27.80, pctYtd: 31.39, aumEurM: 7731,
      holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
      whyItMoved: "Europe's largest AI-themed ETF at EUR 7.7B. The diversified approach normally provides ballast but Samsung and SK Hynix (~16% combined) amplified the July correction — the fund flipped negative for the month (-0.53% vs +4.51% last week). The Korean memory-chip names that drove outperformance in H1 became the drag in July. Broad AI still trails pure-play chip funds by 60+ pts YTD.",
      vsCategory: "Roughly in line with the Technology category average (+1.0%) over 1M.",
      returnRisk: "2.0 (category avg 1.1). Volatility 1Y: ~20%.",
      week52: "80% of 52-week range.",
      aumFlow: "AUM EUR 7,731M — Europe's largest AI-themed ETF.",
      topHoldings: "Micron 8.97%, Samsung 8.38%, SK Hynix 7.70%, Intel 5.42%, Cisco 4.26% — top 10 = 54.11%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -7.91, pct6m: 10.19, pctYtd: 18.81, aumEurM: 3010,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. 105 holdings including Bloom Energy, First Solar, Enphase. Tracks S&P Global Clean Energy Transition index.",
      whyItMoved: "Clean energy was the portfolio's second-worst performer this month at -7.91%. June heatmap shows -10.6% and July -7.9% already — a sharp two-month drawdown. Rate-sensitive renewable names remain vulnerable to financing-cost swings as the Fed stays hawkish. Hydrogen subsector weakness (Bloom Energy short-seller report, FuelCell profit-taking) compounded the selloff. Despite the drawdown, YTD is still +18.8% — the AI data-center energy demand thesis and geopolitical energy-security tailwinds remain supportive.",
      vsCategory: "Underperformed the Utilities category average (-1.5%) by ~6.4pts over 1M.",
      returnRisk: "1.5 (category avg 0.6). Volatility 1Y: ~25%.",
      week52: "55% of 52-week range — mid-range after pullback.",
      aumFlow: "AUM EUR 3,010M. Dividend yield ~0.94%.",
      topHoldings: "Bloom Energy 12.13%, First Solar 9.55%, NextEra 8.39%, Enphase 5.91%, China Yangtze Power 5.31% — top 10 = 55.04%."
    },
    {
      ticker: "EQQQ", name: "Invesco EQQQ Nasdaq-100 UCITS ETF",
      pct1m: 0.99, pct6m: 17.27, pctYtd: 20.54, aumEurM: 11925,
      holds: "Nasdaq-100 tracker — Mag7-heavy, 101 non-financial stocks listed on Nasdaq. TER 0.30%.",
      whyItMoved: "The Nasdaq-100 held up relatively well in the July tech selloff (+0.99% 1M) — the only positive portfolio ticker this month. Mega-cap tech diversification beyond semiconductors (Apple, Alphabet, Amazon) cushioned the chip-specific correction. The tension between AI capex supercycle (no slowdown in hyperscaler spending) and Fed hawkishness defines the market. YTD +20.5% is solid but trails pure AI/chip plays by 60-70pts.",
      vsCategory: "Roughly in line with the Technology category average (+1.0%) over 1M.",
      returnRisk: "1.7 (category avg 1.0). 1Y return ~+30%.",
      week52: "82% of 52-week range.",
      aumFlow: "AUM EUR 11,925M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA 7.72%, Apple 7.31%, Alphabet 6.35% — top 10 = ~50%."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: -10.43, pct6m: 60.96, pctYtd: 79.23, aumEurM: 1012,
      holds: "Broad South Korean equity index — 78 holdings. Samsung Electronics 28% and SK Hynix 18% dominate.",
      whyItMoved: "The portfolio's worst performer this month at -10.43%, with July heatmap showing -13.3%. The KOSPI crashed ~25% from its June peak as SK Hynix recorded its largest-ever single-day drop (-15%) on reports it was slowing HBM production expansion. Samsung fell in sympathy. Together they comprise 46% of this fund, making IQQK effectively a leveraged AI memory-chip bet. The correction is severe but the structural HBM demand thesis remains intact. YTD still +79%.",
      vsCategory: "Underperformed the EM Equity category average (-0.5%) by ~10pts over 1M.",
      returnRisk: "4.5 (category avg 0.5). Volatility 1Y: ~42%.",
      week52: "72% of 52-week range — pulled back from near-ATH.",
      aumFlow: "AUM EUR 1,012M. Dividend yield ~0.47%. 52w range 42.56-134.52.",
      topHoldings: "Samsung Electronics 28.05%, SK Hynix 17.86%, Samsung (pref) 3.29%, Hyundai Motor 2.69%, KB Financial 2.33% — top 10 = 63.21%."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: -0.46, pct6m: -31.75, pctYtd: -17.32, aumEurM: 139,
      holds: "Physical palladium bullion — a direct commodity holding backed by metal in HSBC vaults, not miner equities. TER 0.49%.",
      whyItMoved: "Palladium's structural bear case deepened — the EV transition continues eroding catalytic-converter demand, with each 1M EVs sold eliminating 2-7 metric tonnes of annual palladium consumption. The 6M return collapsed to -31.75% (from -29.03% last week) as the structural headwinds accelerated. The -0.46% 1M is a modest stabilisation vs last month's +4.27% bounce, which proved fleeting. Fewer combustion engines means less palladium — no catalyst for reversal.",
      vsCategory: "Underperformed the Commodities category average (+1.5%) by ~2pts over 1M.",
      returnRisk: "1.1 (category avg 0.8). Volatility 1Y: ~42%. 52w range 85.54-161.19.",
      week52: "30% of 52-week range — lower third after steep decline.",
      aumFlow: "AUM EUR 139M — niche product, thin compared to gold ETCs.",
      topHoldings: "Single physical holding — no concentration risk in the usual sense.",
      badges: ["reversal watch"]
    }
  ]

};
