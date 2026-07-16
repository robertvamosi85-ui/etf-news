// etf_data.js
// ETF News — weekly data file.
// Replaced every Saturday during the live pipeline run. index.html reads this
// and never needs to change. index.html auto-busts its own cache on every
// page load (Date.now() query param), so no manual step is needed to make
// a fresh push show up — just push this file and it's live within GitHub
// Pages' ~10-min CDN window.
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
    asOf: "16 Jul 2026, 14:30",
    fundsTracked: 272
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "COCO", name: "WisdomTree Cocoa ETC",
          category: "Commodities / Soft", pct: 50.27, aumEurM: 360,
          holds: "Physically-backed cocoa futures — tracks Bloomberg Cocoa Subindex, rolling front-month contracts.",
          whyItMoved: "Cocoa held near $5,800/tonne on continued 2026/27 Ivory Coast crop concerns. El Niño-linked flooding and poor pod development still dominate the supply outlook — farmers report the main crop could decline 18% to ~1.8 MMT. Despite abundant current port arrivals (+21% YoY), the market is forward-pricing next season's deficit. Slight pullback from last week's 51.2% as profit-taking kicked in after speculative positioning hit extremes.",
          vsCategory: "Outperformed the Commodities category average (+1.5%) by ~49pts over 1M.",
          returnRisk: "Extreme — single-commodity ETC, no diversification.",
          week52: "84% of 52-week range — below January highs but elevated.",
          aumFlow: "AUM ~EUR 360M — speculative inflows on weather fears.",
          topHoldings: "Single commodity — cocoa futures contracts.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GUNI", name: "Global X Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 36.69, aumEurM: 3,
          holds: "Physical Uniswap (UNI) token — Global X's single-asset ETP.",
          whyItMoved: "Uniswap pulled back from last week's 42% as the initial fee-switch governance euphoria faded. DEX volumes remain elevated post-Robinhood Chain integration but UNI retraced from highs. Still a strong 1M on sustained DeFi momentum — $100B+ TVL and rising protocol revenue provide fundamental support.",
          vsCategory: "Outperformed the Cryptocurrency category average (+10%) by ~27pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "72% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AUNI", name: "21Shares Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 36.62, aumEurM: 8,
          holds: "Physical Uniswap (UNI) token — 21Shares' single-asset ETP, the largest European UNI product.",
          whyItMoved: "Largest European UNI ETP by AUM. Same DeFi tailwind as GUNI — Robinhood Chain integration, fee-switch approval, $100B+ DeFi TVL. Pulled back from 41% last week as initial momentum faded but DeFi fundamentals remain strong.",
          vsCategory: "Outperformed the Cryptocurrency category average (+10%) by ~27pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "71% of 52-week range.",
          aumFlow: "AUM +5% this month.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "CUNI", name: "CoinShares Physical Uniswap ETP",
          category: "Cryptocurrency / DeFi", pct: 36.36, aumEurM: 5,
          holds: "Physical Uniswap (UNI) token — CoinShares' single-asset ETP backed by custodied tokens.",
          whyItMoved: "Same Uniswap rally — DEX volumes surged on Robinhood Chain launch and fee-switch governance vote. CoinShares version slightly underperformed peers on spread and custody costs. Pulled back from 38% last week alongside the broader DeFi cooling.",
          vsCategory: "Outperformed the Cryptocurrency category average (+10%) by ~26pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "69% of 52-week range.",
          aumFlow: "AUM stable — micro-cap.",
          topHoldings: "Single token — Uniswap (UNI).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "GAVE", name: "Global X Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 29.47, aumEurM: 3,
          holds: "Physical Aave (AAVE) token — single-asset crypto ETP backed by custodied tokens.",
          whyItMoved: "Aave pulled back sharply from last week's 50% as the Stable Vaults launch euphoria faded. Protocol TVL remains above $12B and institutional adoption continues, but AAVE retraced ~40% of the recent gains as speculative positioning unwound. The fee-switch narrative supports a structural re-rating but near-term momentum has stalled.",
          vsCategory: "Outperformed the Cryptocurrency category average (+10%) by ~19pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "75% of 52-week range.",
          aumFlow: "AUM stable — micro-cap product with thin secondary market.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AAVE", name: "21Shares Aave ETP",
          category: "Cryptocurrency / DeFi", pct: 29.20, aumEurM: 10,
          holds: "Physical Aave (AAVE) token — 21Shares' single-asset ETP, the larger European Aave product.",
          whyItMoved: "Same DeFi retracement — Aave gave back a chunk of the Stable Vaults rally. 21Shares' product remains the largest European Aave ETP by AUM. The pullback from 49% to 29% reflects normal post-catalyst profit-taking rather than a fundamental change.",
          vsCategory: "Outperformed the Cryptocurrency category average (+10%) by ~19pts over 1M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "74% of 52-week range.",
          aumFlow: "AUM +6% this month.",
          topHoldings: "Single token — Aave (AAVE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "COFF", name: "WisdomTree Coffee ETC",
          category: "Commodities / Soft", pct: 29.11, aumEurM: 210,
          holds: "Coffee futures — tracks Bloomberg Coffee Subindex, rolling front-month arabica contracts.",
          whyItMoved: "Brazil's 2026 harvest continues to disappoint — yields running below expectations with the crop 2-3 weeks late. ICE arabica futures above $3.40/lb as the market prices a potential global deficit. El Niño risk to Colombian and Vietnamese crops adds to supply concerns. Monitored warehouse inventories near 18-month lows.",
          vsCategory: "Outperformed the Commodities category average (+1.5%) by ~28pts over 1M.",
          returnRisk: "High — single-commodity ETC with weather-driven volatility.",
          week52: "88% of 52-week range — near the high.",
          aumFlow: "AUM ~EUR 210M — speculative inflows.",
          topHoldings: "Single commodity — coffee futures contracts."
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 27.59, aumEurM: 320,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas entered the 1M top 10 as European storage refill targets fell further behind schedule. Summer cooling demand exceeded forecasts, LNG spot cargo availability tightened, and Russian pipeline flows remained near zero. The EU's structural LNG dependency keeps prices elevated. TTF prices surged past EUR 45/MWh — the highest since winter.",
          vsCategory: "Outperformed the Commodities category average (+1.5%) by ~26pts over 1M.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM ~EUR 320M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "WCBR", name: "WisdomTree Cybersecurity UCITS ETF",
          category: "Thematic / Cybersecurity", pct: 22.07, aumEurM: 394,
          holds: "Global cybersecurity companies — tracks WisdomTree Team8 Cybersecurity index. ~30 holdings spanning network security, endpoint protection, cloud security, and identity management.",
          whyItMoved: "Cybersecurity entered the 1M top 10 for the first time as sector rotation into defensive tech accelerated. Rising AI-powered cyber threats drove enterprise security spending above estimates — Palo Alto Networks and CrowdStrike both beat Q2 guidance. Government mandates for zero-trust architecture and the SEC's new cyber-incident disclosure rules created a regulatory tailwind. The sector benefited from rotation out of overheated AI/semiconductor names into adjacent tech themes.",
          vsCategory: "Outperformed the Technology category average (+1%) by ~21pts over 1M.",
          returnRisk: "1.8 (category avg 1.0) — sector concentration but diversified within cybersecurity.",
          week52: "88% of 52-week range — near YTD highs.",
          aumFlow: "AUM EUR 394M — steady inflows.",
          topHoldings: "CrowdStrike ~8%, Palo Alto Networks ~7%, Fortinet ~6%, Zscaler ~5% — top 10 = ~55%."
        },
      ],
      worst: [
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Semiconductors", pct: -7.90, aumEurM: 7200,
          holds: "US-listed semiconductor companies — tracks MVIS US Listed Semiconductor 25 Index. 25 concentrated holdings in AI chip leaders.",
          whyItMoved: "The July semiconductor selloff made VVSM the worst 1M performer among large European ETFs — a dramatic reversal from its 6M/YTD best-performer status. SK Hynix slowed HBM production expansion, Broadcom's Q3 AI guidance missed ($16B vs $17.2B expected), and Intel dropped 21% on execution concerns. The concentrated 25-stock portfolio amplified the drawdown. Despite the correction, VVSM retains +83% YTD — analysts call it a mid-cycle reset, not a trend reversal.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~9pts over 1M.",
          returnRisk: "3.2 (category avg 1.1) — high concentration, high volatility.",
          week52: "76% of 52-week range — correcting from ATH.",
          aumFlow: "AUM EUR 7,200M — down from EUR 7,982M on combination of NAV decline and some outflows.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%. Highly concentrated."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -5.68, aumEurM: 22500,
          holds: "Physical gold bullion — backed by London vault holdings. Second-largest gold ETC in Europe.",
          whyItMoved: "Gold extended its decline from the January $5,598 ATH to ~$4,060, now down 27%. ETF outflows accelerated to $6.1B in Q2 2026 — the worst quarterly outflow since 2013. Over 300 tonnes of ETF-held gold is now priced below holders' average cost basis, creating ongoing selling pressure. Central-bank buying persists (PBOC added 15 tonnes in June) but can't offset speculative unwind at current pace.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~4.7pts over 1M.",
          returnRisk: "0.1 (category avg 0.3).",
          week52: "48% of 52-week range.",
          aumFlow: "AUM EUR 22,500M — accelerating outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -5.67, aumEurM: 29000,
          holds: "Physical gold bullion — backed by allocated gold bars in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Europe's largest gold ETC continued to bleed as gold fell to ~$4,060. The structural bull case remains — gold has surpassed US Treasuries as the world's largest reserve asset (27% of global central bank holdings), and JPMorgan still targets $4,500 by Q4. But the speculative overshoot from the January ATH continues to unwind. The 1M decline deepened from -2.66% last week to -5.67% as momentum selling accelerated.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~4.7pts over 1M.",
          returnRisk: "0.1 (category avg 0.3).",
          week52: "47% of 52-week range.",
          aumFlow: "AUM EUR 29,000M — still Europe's largest gold ETC despite net outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -5.67, aumEurM: 10200,
          holds: "Physical gold bullion — Amundi's gold ETC, third-largest in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~4.7pts over 1M.",
          returnRisk: "0.1 (category avg 0.3).",
          week52: "47% of 52-week range.",
          aumFlow: "AUM ~EUR 10,200M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -5.66, aumEurM: 19200,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          vsCategory: "Underperformed the Precious Metals category average (-1%) by ~4.7pts over 1M.",
          returnRisk: "0.1 (category avg 0.3).",
          week52: "46% of 52-week range.",
          aumFlow: "AUM ~EUR 19,200M — largest EUR-denominated gold ETC.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
          category: "Artificial Intelligence", pct: -5.08, aumEurM: 7500,
          holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
          vsCategory: "Underperformed the Technology category average (+1%) by ~6pts over 1M.",
          returnRisk: "2.0 (category avg 1.1).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 7,500M — Europe's largest AI-themed ETF.",
          topHoldings: "Micron ~9%, Samsung ~8%, SK Hynix ~8%, Intel ~5% — top 10 = ~54%."
        },
        {
          tier: "lighter", ticker: "EEMA", name: "iShares MSCI EM Asia UCITS ETF",
          category: "Emerging Markets / Asia", pct: -4.56, aumEurM: 4800,
          holds: "Asian emerging market equities — MSCI EM Asia index. China, Taiwan, India, Korea-dominated.",
          vsCategory: "Underperformed the EM Equity category average (-1%) by ~3.6pts over 1M.",
          returnRisk: "0.4 (category avg 0.5).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM ~EUR 4,800M.",
          topHoldings: "TSMC ~9%, Samsung ~5%, Tencent ~4% — broadly diversified across Asian EM."
        },
        {
          tier: "lighter", ticker: "IEEM", name: "iShares MSCI EM UCITS ETF (Dist)",
          category: "Emerging Markets / Broad", pct: -4.03, aumEurM: 8500,
          holds: "Broad emerging market equities — MSCI Emerging Markets index, distributing share class. ~1,400 holdings.",
          vsCategory: "Underperformed the EM Equity category average (-1%) by ~3pts over 1M.",
          returnRisk: "0.4 (category avg 0.5).",
          week52: "66% of 52-week range.",
          aumFlow: "AUM ~EUR 8,500M.",
          topHoldings: "TSMC ~9%, Samsung ~5%, Tencent ~4% — broadly diversified."
        },
        {
          tier: "lighter", ticker: "EMIM", name: "iShares MSCI EM UCITS ETF (Acc)",
          category: "Emerging Markets / Broad", pct: -3.62, aumEurM: 6800,
          holds: "Broad emerging market equities — MSCI Emerging Markets index, accumulating share class. ~1,400 holdings.",
          vsCategory: "Underperformed the EM Equity category average (-1%) by ~2.6pts over 1M.",
          returnRisk: "0.4 (category avg 0.5).",
          week52: "67% of 52-week range.",
          aumFlow: "AUM ~EUR 6,800M.",
          topHoldings: "TSMC ~9%, Samsung ~5%, Tencent ~4% — broadly diversified."
        }
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "HYPE", name: "21Shares Hyperliquid ETP",
          category: "Cryptocurrency / DeFi", pct: 172.94, aumEurM: 30,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "HYPE extended its lead as the top European ETP performer over 6M, rising from 165% to 173%. Hyperliquid cemented dominance in on-chain perpetuals — now over 65% of DEX perps volume. A $645M token unlock in late June was absorbed without selling pressure. Substantial fee revenue provides a rare fundamental valuation case in crypto. The token briefly touched $75 before settling near $72.",
          vsCategory: "Outperformed the Cryptocurrency category average (+40%) by ~133pts over 6M.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "95% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 30M — growing from a small base.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 109.21, aumEurM: 16,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil crossed triple-digit 6M returns as OPEC+ production cuts tightened the middle-distillate market. European refining capacity remained constrained, widening the crack spread to multi-year highs. Seasonal restocking and geopolitical risk premiums on Russian-origin product sustained the rally. The move accelerated from 99% to 109% as summer demand surged.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~104pts over 6M.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "89% of 52-week range.",
          aumFlow: "AUM ~EUR 16M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 89.74, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD's data-center GPU revenue continued to accelerate with MI300X gaining inference market share. The options-based ETP amplified the semiconductor supercycle move via high implied volatility. The July chip selloff trimmed 6M returns from 109% to 90% — the sharpest weekly drop in the product's history. AMD held up better than peers (less stretched valuation) but couldn't escape the sector-wide correction.",
          vsCategory: "Outperformed the Derivatives category average (+6%) by ~84pts over 6M.",
          returnRisk: "Very high — leveraged single-stock exposure via options.",
          week52: "78% of 52-week range — pulled back from highs.",
          aumFlow: "AUM ~EUR 4M — micro-cap product.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 82.81, aumEurM: 320,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas maintained its 6M position as European storage refill fell further behind schedule. Summer cooling demand exceeded forecasts, LNG spot cargo availability tightened, and Russian pipeline flows remained near zero. The EU's structural LNG dependency keeps prices elevated. TTF above EUR 45/MWh.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~78pts over 6M.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM ~EUR 320M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "OD72", name: "WisdomTree Petroleum ETC",
          category: "Commodities / Energy", pct: 72.80, aumEurM: 8,
          holds: "Petroleum futures — tracks Bloomberg Petroleum Subindex, a basket of crude oil and refined products.",
          whyItMoved: "Petroleum futures surged as OPEC+ production cuts tightened global supply while demand remained robust on Asian economic recovery and summer driving season. The broad petroleum subindex captured gains across both crude and refined products. Refining margins stayed elevated on constrained European capacity. Up from 62% last week as energy momentum accelerated.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~68pts over 6M.",
          returnRisk: "High — commodity basket with geopolitical and seasonal volatility.",
          week52: "78% of 52-week range.",
          aumFlow: "AUM ~EUR 8M — micro-cap product.",
          topHoldings: "Petroleum futures basket — crude oil and refined products.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "OD7G", name: "WisdomTree Gasoline ETC",
          category: "Commodities / Energy", pct: 72.53, aumEurM: 4,
          holds: "Gasoline futures — tracks Bloomberg Unleaded Gasoline Subindex, rolling front-month RBOB contracts.",
          whyItMoved: "Gasoline entered the 6M top 10 as summer driving season demand surged. US gasoline consumption hit seasonal highs while refinery maintenance reduced supply. OPEC+ production cuts tightened crude input, keeping gasoline crack spreads wide. The energy commodity complex broadly rallied, with gasoline closely tracking petroleum but outperforming crude benchmarks due to the seasonal demand premium.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~68pts over 6M.",
          returnRisk: "Very high — single refined-product commodity with seasonal volatility.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap product.",
          topHoldings: "Single commodity — unleaded gasoline futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 68.40, aumEurM: 5500,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The July selloff trimmed SEC0's 6M return from 74.5% to 68.4%. Monthly semiconductor sales hit $120.6B in May (+104% YoY), confirming the structural AI demand thesis, but Broadcom's Q3 guidance miss and SK Hynix HBM production slowdown triggered sector-wide selling. SEC0's broader global exposure provided some cushion vs pure-play US chip ETFs. Analysts view the correction as a mid-cycle reset with unchanged 12M price targets for NVIDIA and Micron.",
          vsCategory: "Outperformed the Technology category average (+8%) by ~60pts over 6M.",
          returnRisk: "3.5 (category avg 1.1).",
          week52: "82% of 52-week range — off July highs.",
          aumFlow: "AUM EUR 5,500M — up from 5,182M despite July selloff.",
          topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6% — top 10 = ~59%."
        },
        {
          tier: "researched", ticker: "BNQA", name: "BNPP ICE Brent Oil ETC",
          category: "Commodities / Energy", pct: 62.75, aumEurM: 8,
          holds: "Brent crude oil futures — synthetic ETC tracking ICE 1mth Brent Oil Futures index via swap.",
          whyItMoved: "Brent crude rallied to $88/bbl as OPEC+ production cuts removed 3.6 Mbpd from the market. Summer demand surge and geopolitical risk premiums on Middle East disruption supported prices. The BNP Paribas product provided EUR-denominated access to Brent exposure. Energy commodities broadly outperformed as the sector proved immune to the July tech selloff.",
          vsCategory: "Outperformed the Commodities category average (+5%) by ~58pts over 6M.",
          returnRisk: "High — single-commodity with geopolitical volatility.",
          week52: "75% of 52-week range.",
          aumFlow: "AUM ~EUR 8M — micro-cap product.",
          topHoldings: "Single synthetic position — ICE Brent crude oil futures.",
          badges: ["Thin liquidity"]
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -10.85, aumEurM: 19200,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold's pullback from its January $5,598 ATH to ~$4,060 hit EUR-denominated products hardest. The EUR appreciated modestly vs USD, creating a currency drag on top of gold's price decline. ETF outflows reached $6.1B in Q2 2026 — the worst quarterly outflow since 2013. Central-bank buying (PBOC 15 tonnes in June alone) provides a floor but can't offset the speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "44% of 52-week range — lower half.",
          aumFlow: "AUM ~EUR 19,200M — outflows from profit-taking.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -10.82, aumEurM: 29000,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Same gold pullback — from $5,598 ATH to ~$4,060. IGLN is USD-denominated, so slightly less affected than EUR-based 4GLD. JPMorgan still targets $4,500 by Q4, Goldman $4,900 by year-end. The structural case (fiscal deficits, central-bank accumulation, de-dollarization) persists but H1 pricing reflected hawkish rate repricing and speculative position unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "47% of 52-week range.",
          aumFlow: "AUM EUR 29,000M — still Europe's largest despite net outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -10.82, aumEurM: 22500,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "47% of 52-week range.",
          aumFlow: "AUM EUR 22,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -10.81, aumEurM: 10200,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-4%) by ~7pts over 6M.",
          returnRisk: "Negative risk-adjusted return over 6M.",
          week52: "47% of 52-week range.",
          aumFlow: "AUM ~EUR 10,200M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: -1.75, aumEurM: 6800,
          holds: "DAX 40 index — iShares' version of the German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+4%) by ~5.8pts over 6M.",
          returnRisk: "0.0 (category avg 0.5).",
          week52: "48% of 52-week range.",
          aumFlow: "AUM ~EUR 6,800M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.17, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — Bloomberg EUR Corporate Bond index. ~3,800 holdings.",
          vsCategory: "Slightly below the EUR Bond category average over 6M.",
          returnRisk: "0.0 (category avg 0.1) — rate sensitivity weighed on returns.",
          week52: "46% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
      ]
    },

    "ytd": {
      best: [
        {
          tier: "researched", ticker: "HYPE", name: "21Shares Hyperliquid ETP",
          category: "Cryptocurrency / DeFi", pct: 166.52, aumEurM: 30,
          holds: "Physical Hyperliquid (HYPE) token — perpetual DEX and L1 chain token.",
          whyItMoved: "Hyperliquid maintained its YTD lead at +167%, up from 153% last week. The platform's dominance in on-chain perpetuals (65%+ market share) and substantial fee revenue provide a rare fundamental valuation case. The token rallied from ~$25 at year start to ~$72, largely shrugging off the July tech selloff — DeFi infrastructure proved uncorrelated with semiconductor stocks. AUM grew from ~EUR 10M to ~EUR 30M YTD.",
          vsCategory: "Outperformed the Cryptocurrency category average (+55%) by ~111pts YTD.",
          returnRisk: "Extreme — single-token crypto ETP.",
          week52: "95% of 52-week range — near ATH.",
          aumFlow: "AUM ~EUR 30M — 3x growth YTD.",
          topHoldings: "Single token — Hyperliquid (HYPE).",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "HEAT", name: "WisdomTree Heating Oil ETC",
          category: "Commodities / Energy", pct: 120.97, aumEurM: 16,
          holds: "Heating oil futures — tracks Bloomberg Heating Oil Subindex.",
          whyItMoved: "Heating oil more than doubled YTD as OPEC+ cuts, European refining constraints, and seasonal restocking drove middle-distillate prices to multi-year highs. The crack spread widened as refinery margins expanded. Geopolitical risk premiums on Russian-origin product kept the rally alive. Energy commodities proved immune to the July tech selloff — HEAT's YTD rose from 112% to 121% while chips corrected.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~114pts YTD.",
          returnRisk: "Very high — single-commodity with seasonal and geopolitical drivers.",
          week52: "91% of 52-week range.",
          aumFlow: "AUM ~EUR 16M — niche product.",
          topHoldings: "Single commodity — heating oil futures.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "EGAS", name: "WisdomTree European Natural Gas ETC",
          category: "Commodities / Energy", pct: 113.29, aumEurM: 320,
          holds: "European natural gas futures — tracks ICE Dutch TTF natural gas front-month contracts.",
          whyItMoved: "TTF natural gas surged past +113% YTD as European storage refill fell behind schedule. Summer cooling demand exceeded forecasts, LNG spot cargo availability tightened, and Russian pipeline flows stayed near zero. The EU's structural LNG dependency keeps prices elevated. Natural gas overtook AMDY for the #3 YTD spot as energy commodities rallied while the July tech selloff dragged options-based products lower.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~106pts YTD.",
          returnRisk: "Very high — single-commodity, geopolitically sensitive.",
          week52: "84% of 52-week range.",
          aumFlow: "AUM ~EUR 320M — elevated for a single-commodity ETC.",
          topHoldings: "Single commodity — European natural gas (TTF) futures."
        },
        {
          tier: "researched", ticker: "AMDY", name: "IncomeShares AMD Options ETP",
          category: "Derivatives / Options", pct: 111.74, aumEurM: 4,
          holds: "Synthetic covered-call strategy on AMD — options-based, not direct equity.",
          whyItMoved: "AMD's data-center GPU revenue tripled YoY as MI300X gained inference market share. The options-based ETP amplified the move via high implied volatility. The July chip selloff trimmed YTD from 125% to 112% — still above triple-digit territory as AMD held up better than semiconductor peers due to less stretched valuation.",
          vsCategory: "Outperformed the Derivatives category average (+8%) by ~104pts YTD.",
          returnRisk: "Very high — leveraged single-stock via options.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap.",
          topHoldings: "Single synthetic position on AMD.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Semiconductors", pct: 91.54, aumEurM: 5500,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
          whyItMoved: "The AI chip supercycle story of 2026 — monthly semiconductor sales hit $120.6B in May (+104% YoY), and the industry remains on track for $1T annually. But the July selloff wiped over $1T in chip market cap. YTD fell from 95% to 92% as Broadcom's guidance miss, SK Hynix HBM production slowdown, and Intel's execution concerns triggered sector-wide selling. Analysts view it as a mid-cycle reset — fundamentals unchanged.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~77pts YTD.",
          returnRisk: "3.5 (category avg 1.1).",
          week52: "82% of 52-week range.",
          aumFlow: "AUM EUR 5,500M — +40% YTD despite July volatility.",
          topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6% — top 10 = ~59%."
        },
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Semiconductors", pct: 83.26, aumEurM: 7200,
          holds: "US-listed semiconductor companies — MVIS US Listed Semiconductor 25 Index. 25 concentrated holdings.",
          whyItMoved: "VanEck's chip ETF soared in H1 2026 but the July correction hit it hardest among semiconductor ETFs due to its concentrated 25-stock US-only portfolio. YTD fell from 87% to 83%. Despite being this week's worst 1M performer (-7.90%), VVSM still holds the #7 YTD spot. At EUR 7,200M AUM, it remains one of Europe's largest sector ETFs. The July selloff — triggered by Broadcom's guidance miss, SK Hynix production slowdown, and Fed hawkishness — is viewed as a mid-cycle reset.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~68pts YTD.",
          returnRisk: "3.1 (category avg 1.1) — high concentration amplifies both upside and downside.",
          week52: "76% of 52-week range — correcting from ATH.",
          aumFlow: "AUM EUR 7,200M — down from peak of ~EUR 8,200M.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%."
        },
        {
          tier: "researched", ticker: "OD72", name: "WisdomTree Petroleum ETC",
          category: "Commodities / Energy", pct: 81.74, aumEurM: 8,
          holds: "Petroleum futures — tracks Bloomberg Petroleum Subindex, a basket of crude oil and refined products.",
          whyItMoved: "Petroleum maintained its place in the YTD top 10 as OPEC+ cuts, summer demand, and geopolitical risk premiums drove the energy complex higher. The broad petroleum subindex captured gains across both crude and refined products, outperforming single-commodity crude ETCs. Energy commodities proved uncorrelated with the July tech selloff.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~75pts YTD.",
          returnRisk: "High — commodity basket.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM ~EUR 8M — micro-cap.",
          topHoldings: "Petroleum futures basket — crude oil and refined products.",
          badges: ["Thin liquidity"]
        },
        {
          tier: "researched", ticker: "OD7G", name: "WisdomTree Gasoline ETC",
          category: "Commodities / Energy", pct: 81.46, aumEurM: 4,
          holds: "Gasoline futures — tracks Bloomberg Unleaded Gasoline Subindex.",
          whyItMoved: "Gasoline entered the YTD top 10 as summer driving season demand reached seasonal highs. US gasoline consumption surged while refinery maintenance and OPEC+ crude cuts constrained supply. Gasoline closely tracked petroleum but outperformed crude benchmarks on the seasonal demand premium. Energy commodities dominated the YTD rankings as the sector proved uncorrelated with the July tech correction.",
          vsCategory: "Outperformed the Commodities category average (+7%) by ~74pts YTD.",
          returnRisk: "Very high — single refined-product commodity.",
          week52: "82% of 52-week range.",
          aumFlow: "AUM ~EUR 4M — micro-cap.",
          topHoldings: "Single commodity — unleaded gasoline futures.",
          badges: ["Thin liquidity"]
        }
      ],
      worst: [
        {
          tier: "researched", ticker: "4GLD", name: "Xetra-Gold ETC",
          category: "Precious Metals / Gold", pct: -5.35, aumEurM: 19200,
          holds: "Physical gold — Deutsche Boerse ETC backed by gold bars in Frankfurt vaults. EUR-denominated.",
          whyItMoved: "Gold's worst YTD performer among large European ETCs. Double headwind: gold pulling back 27% from $5,598 ATH to ~$4,060, PLUS EUR appreciation vs USD creating currency drag. ETF outflows accelerated — $6.1B in Q2 alone, with 300+ tonnes of ETF gold now underwater (below holders' cost basis). Central-bank buying continues (PBOC 20+ consecutive months) but can't offset speculative unwind. ECB confirmed gold surpassed US Treasuries as the world's largest reserve asset.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~3.4pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "42% of 52-week range — lower half.",
          aumFlow: "AUM ~EUR 19,200M — profit-taking outflows.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "IGLN", name: "iShares Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.53, aumEurM: 29000,
          holds: "Physical gold bullion in JP Morgan London vaults. Europe's largest gold ETC.",
          whyItMoved: "Gold gave back gains from the January ATH of $5,598 to current ~$4,060. The -3.53% is milder than 4GLD's -5.35% due to USD denomination avoiding EUR currency drag. JPMorgan targets $4,500 by Q4, Goldman $4,900 year-end. ETF holdings declined but central banks bought strongly — PBOC alone added 15 tonnes in June. The structural bull case remains intact.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~1.5pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "45% of 52-week range.",
          aumFlow: "AUM EUR 29,000M — net outflows but still Europe's largest.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "researched", ticker: "SGLD", name: "Invesco Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.52, aumEurM: 22500,
          holds: "Physical gold bullion. Second-largest gold ETC in Europe.",
          whyItMoved: "Identical to IGLN — same gold pullback from ATH. Fractional difference reflects TER variation. Structural case for gold (fiscal deficits, central-bank accumulation, geopolitical hedging) remains intact but H1 pricing reflected reduced rate-cut expectations and speculative unwind.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~1.5pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "45% of 52-week range.",
          aumFlow: "AUM EUR 22,500M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "GOLD", name: "Amundi Physical Gold ETC",
          category: "Precious Metals / Gold", pct: -3.52, aumEurM: 10200,
          holds: "Physical gold bullion — Amundi's gold ETC.",
          vsCategory: "Underperformed the Precious Metals category average (-2%) by ~1.5pts YTD.",
          returnRisk: "Negative risk-adjusted return YTD.",
          week52: "45% of 52-week range.",
          aumFlow: "AUM ~EUR 10,200M.",
          topHoldings: "Single holding — physical gold bullion."
        },
        {
          tier: "lighter", ticker: "IEAC", name: "iShares Core EUR Corporate Bond UCITS ETF",
          category: "EUR Corporate Bonds", pct: 0.54, aumEurM: 10000,
          holds: "Investment-grade EUR corporate bonds — ~3,800 holdings.",
          vsCategory: "In line with the EUR Bond category average YTD.",
          returnRisk: "0.0 (category avg 0.1).",
          week52: "45% of 52-week range.",
          aumFlow: "AUM ~EUR 10,000M.",
          topHoldings: "Diversified across ~3,800 bonds — no single issuer >1%."
        },
        {
          tier: "lighter", ticker: "EXS1", name: "iShares Core DAX UCITS ETF",
          category: "Germany / DAX", pct: 1.55, aumEurM: 6800,
          holds: "DAX 40 index — iShares' German blue-chip tracker.",
          vsCategory: "Underperformed the Europe Equity category average (+7%) by ~5.5pts YTD.",
          returnRisk: "0.1 (category avg 0.5).",
          week52: "49% of 52-week range.",
          aumFlow: "AUM ~EUR 6,800M.",
          topHoldings: "SAP ~14%, Siemens ~10%, Allianz ~8% — top 10 = ~60%."
        },
      ]
    }
  },

  // Fixed 7-ticker portfolio — always full richness, no tier gating.
  portfolio: [
    {
      ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
      pct1m: -5.50, pct6m: 68.40, pctYtd: 91.54, aumEurM: 5500,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen.",
      whyItMoved: "The July semiconductor selloff ended SEC0's run of positive months. Monthly chip sales hit $120.6B in May (+104% YoY) — fundamentals intact — but Broadcom's Q3 AI guidance miss ($16B vs $17.2B), SK Hynix slowing HBM expansion, and Fed hawkishness triggered a $1T+ market-cap wipeout across chip stocks. SEC0's broader global exposure cushioned the blow vs concentrated US-only peers like VVSM (-7.90% 1M). Analysts call it a mid-cycle reset — NVIDIA and Micron still have substantial 12-month upside targets.",
      vsCategory: "Underperformed the Technology category average (+1.0%) by ~6.5pts over 1M.",
      returnRisk: "3.5 (category avg 1.1). 1Y return ~+160%.",
      week52: "82% of 52-week range — off July highs but still elevated.",
      aumFlow: "AUM EUR 5,500M — up from 5,182M. Inflows continued despite the selloff.",
      topHoldings: "Micron 9.02%, AMD 8.09%, Broadcom 7.05%, TSMC 6.99%, NVIDIA 6.21%, SK Hynix 5.22%, Lam Research 4.43%, ASML 4.35% — top 10 = 59.37%."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: -3.00, pct6m: 42.00, pctYtd: 52.00, aumEurM: 1050,
      holds: "AI infrastructure companies — chip designers, cloud platforms, data-center operators, networking equipment. 45 holdings tracking the STOXX Global AI Infrastructure index.",
      whyItMoved: "Data-center capex projected to top $1T in 2026, with Magnificent Seven expected to spend $527B collectively. The July chip selloff dragged AIFS to -3% for the month, worse than last week's -0.41% as the correction deepened. The fund's broader exposure across the AI hardware stack (not just chips) provided partial insulation — cloud and networking names held up better than pure semiconductor plays. AUM maintained above EUR 1B.",
      vsCategory: "Underperformed the Technology category average (+1.0%) by ~4pts over 1M.",
      returnRisk: "3.8 (category avg 1.1). Volatility 1Y: ~20%.",
      week52: "78% of 52-week range.",
      aumFlow: "AUM EUR 1,050M — stable above EUR 1B.",
      topHoldings: "AMD 4.80%, Applied Materials 4.73%, Cisco 4.66%, Amazon 4.64%, Apple 4.63% — top 10 = 45.91%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: -5.08, pct6m: 27.11, pctYtd: 29.40, aumEurM: 7500,
      holds: "Broad AI value-chain basket — 138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung (8.4%) and SK Hynix (7.7%).",
      whyItMoved: "Europe's largest AI-themed ETF at EUR 7.5B. The Samsung and SK Hynix exposure (~16% combined) amplified the July semiconductor correction — XAIX appeared in the 1M worst performers list at -5.08%. The Korean memory-chip names that drove H1 outperformance became the drag in July. Broad AI still trails pure-play chip funds by 60+ pts YTD. XAIX entered the 1M worst top 10 among the largest 75 European ETFs.",
      vsCategory: "Underperformed the Technology category average (+1.0%) by ~6pts over 1M.",
      returnRisk: "2.0 (category avg 1.1). Volatility 1Y: ~20%.",
      week52: "78% of 52-week range.",
      aumFlow: "AUM EUR 7,500M — Europe's largest AI-themed ETF.",
      topHoldings: "Micron 8.97%, Samsung 8.38%, SK Hynix 7.70%, Intel 5.42%, Cisco 4.26% — top 10 = 54.11%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -6.00, pct6m: 9.00, pctYtd: 16.00, aumEurM: 2900,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. 105 holdings including Bloom Energy, First Solar, Enphase. Tracks S&P Global Clean Energy Transition index.",
      whyItMoved: "Clean energy remained under pressure with another -6% month. Rate-sensitive renewable names continue to suffer from financing-cost headwinds as the Fed stays hawkish. Hydrogen subsector weakness (Bloom Energy short-seller report, FuelCell profit-taking) compounded the selloff. Despite the drawdown, YTD is still positive at +16% — the AI data-center energy demand thesis and geopolitical energy-security tailwinds remain supportive long-term.",
      vsCategory: "Underperformed the Utilities category average (-1.5%) by ~4.5pts over 1M.",
      returnRisk: "1.5 (category avg 0.6). Volatility 1Y: ~25%.",
      week52: "52% of 52-week range — mid-range after pullback.",
      aumFlow: "AUM EUR 2,900M. Dividend yield ~0.94%.",
      topHoldings: "Bloom Energy 12.13%, First Solar 9.55%, NextEra 8.39%, Enphase 5.91%, China Yangtze Power 5.31% — top 10 = 55.04%."
    },
    {
      ticker: "EQQQ", name: "Invesco EQQQ Nasdaq-100 UCITS ETF",
      pct1m: -2.15, pct6m: 17.30, pctYtd: 19.90, aumEurM: 12000,
      holds: "Nasdaq-100 tracker — Mag7-heavy, 101 non-financial stocks listed on Nasdaq. TER 0.30%.",
      whyItMoved: "The Nasdaq-100 gave back some gains but held up better than pure semiconductor plays. Mega-cap diversification beyond chips — Apple, Alphabet, Amazon — cushioned the correction. AI capex commitments from hyperscalers remain undiminished ($527B projected collectively in 2026), supporting the long-term thesis even as near-term sentiment weakened. YTD slipped from 20.5% to 19.9% — modest relative to the chip carnage.",
      vsCategory: "Underperformed the Technology category average (+1%) by ~3pts over 1M.",
      returnRisk: "1.7 (category avg 1.0). 1Y return ~+30%.",
      week52: "80% of 52-week range.",
      aumFlow: "AUM EUR 12,000M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA 7.72%, Apple 7.31%, Alphabet 6.35% — top 10 = ~50%."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: -9.00, pct6m: 58.00, pctYtd: 78.00, aumEurM: 950,
      holds: "Broad South Korean equity index — 78 holdings. Samsung Electronics 28% and SK Hynix 18% dominate.",
      whyItMoved: "Korea continued to correct — IQQK dropped another ~9% this month as SK Hynix's HBM production slowdown and Samsung's weak foundry yields weighed on KOSPI. Together these two stocks comprise 46% of the fund, making IQQK effectively a leveraged AI memory-chip bet. The correction erased ~15% from the June peak but YTD still stands at +78%. Institutional flows are rotating into lower-cost FLXK (TER 0.09%) from IQQK (TER 0.65%), explaining the AUM decline.",
      vsCategory: "Underperformed the EM Equity category average (-1%) by ~8pts over 1M.",
      returnRisk: "4.5 (category avg 0.5). Volatility 1Y: ~42%.",
      week52: "68% of 52-week range — pulled back from near-ATH.",
      aumFlow: "AUM EUR 950M — down from 1,012M as flows rotate to cheaper FLXK. Dividend yield ~0.47%.",
      topHoldings: "Samsung Electronics 28.05%, SK Hynix 17.86%, Samsung (pref) 3.29%, Hyundai Motor 2.69%, KB Financial 2.33% — top 10 = 63.21%."
    }
  ]

};
