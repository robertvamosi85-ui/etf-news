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
    asOf: "16 Jul 2026, 17:30",
    fundsTracked: 272
  },

  performers: {

    "1m": {
      best: [
        {
          tier: "researched", ticker: "W1TB", name: "WisdomTree Cybersecurity UCITS ETF",
          category: "Thematic / Cybersecurity", pct: 22.90, aumEurM: 394,
          holds: "Global cybersecurity companies — ~30 holdings spanning network security, endpoint protection, cloud security, and identity management. Tracks WisdomTree Team8 Cybersecurity index.",
          whyItMoved: "AI-enhanced cyber threats up 30% YoY in 2026 drove enterprise security spending above analyst estimates. CrowdStrike and Palo Alto Networks both beat Q2 guidance. Sector rotation from overheated AI/semiconductor names into adjacent defensive tech accelerated in July. WisdomTree's index methodology revamp in March 2026 improved holdings quality. Government zero-trust mandates and SEC cyber-incident disclosure rules added regulatory tailwind.",
          vsCategory: "Outperformed the Technology category average (+1%) by ~22pts over 1M.",
          returnRisk: "1.8 (category avg 1.0) — sector concentration but diversified within cybersecurity.",
          week52: "92% of 52-week range — near YTD highs.",
          aumFlow: "AUM EUR 394M — steady inflows as cybersecurity theme gains traction.",
          topHoldings: "CrowdStrike ~8%, Palo Alto Networks ~7%, Fortinet ~6%, Zscaler ~5% — top 10 = ~55%."
        },
        {
          tier: "researched", ticker: "IUFS", name: "iShares S&P 500 Financials Sector UCITS ETF",
          category: "US Equity / Financials", pct: 6.22, aumEurM: 2130,
          holds: "S&P 500 financial-sector companies — banks, insurance, capital markets, diversified financials. ~70 holdings tracking S&P 500 Capped 35/20 Financials Index.",
          whyItMoved: "Q2 bank earnings season driving financials higher — sector earnings expected to surge 12.5% on 8.1% revenue growth. Investment banking revenue for largest US banks forecast to jump 26% YoY, trading revenue up 14% (KBW estimates). Financials on a five-week winning streak into mid-July. Berkshire Hathaway gained ~10% since early June. JPMorgan and Bank of America beating estimates.",
          vsCategory: "Outperformed the US Equity category average (+2%) by ~4pts over 1M.",
          returnRisk: "1.2 (category avg 1.0) — sector-concentrated but large-cap quality.",
          week52: "85% of 52-week range.",
          aumFlow: "AUM EUR 2,130M — inflows on earnings momentum.",
          topHoldings: "Berkshire Hathaway ~13%, JPMorgan ~10%, Visa ~7%, Mastercard ~6%, Bank of America ~4% — top 10 = ~55%."
        },
        {
          tier: "researched", ticker: "L0CK", name: "iShares Digital Security UCITS ETF",
          category: "Thematic / Digital Security", pct: 5.91, aumEurM: 1571,
          holds: "Global digital security companies — identity management, data protection, fraud prevention, and cybersecurity. ~120 holdings tracking STOXX Global Digital Security index.",
          whyItMoved: "Same cybersecurity tailwind as W1TB — broader digital security theme including identity management, data protection, and fraud prevention beyond pure-play cybersecurity. Rising AI-powered threats driving enterprise digital security spending above estimates. SEC cyber-incident disclosure rules creating compliance-driven demand across the digital security stack.",
          vsCategory: "Outperformed the Technology category average (+1%) by ~5pts over 1M.",
          returnRisk: "1.3 (category avg 1.0) — broader than pure cybersecurity, lower concentration.",
          week52: "80% of 52-week range.",
          aumFlow: "AUM EUR 1,571M — Europe's largest digital security ETF.",
          topHoldings: "Broadcom ~4%, Cisco ~3%, Palo Alto Networks ~3%, CrowdStrike ~3% — top 10 = ~30%. Well diversified."
        },
        {
          tier: "lighter", ticker: "IUES", name: "iShares S&P 500 Energy Sector UCITS ETF",
          category: "US Equity / Energy", pct: 5.32, aumEurM: 1218,
          holds: "S&P 500 energy companies — integrated oil, E&P, refining, pipelines.",
          vsCategory: "Outperformed the US Equity category average (+2%) by ~3pts over 1M.",
          returnRisk: "1.4 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 1,218M.",
          topHoldings: "ExxonMobil ~23%, Chevron ~15%, ConocoPhillips ~8% — top 10 = ~70%."
        },
        {
          tier: "lighter", ticker: "IOGP", name: "iShares Oil & Gas Exploration & Production UCITS ETF",
          category: "Global Equity / Oil & Gas E&P", pct: 2.39, aumEurM: 367,
          holds: "Global oil & gas exploration and production companies — ~70 holdings tracking S&P Commodity Producers Oil & Gas E&P index.",
          vsCategory: "Outperformed the Energy category average (+1%) by ~1.4pts over 1M.",
          returnRisk: "1.8 (category avg 1.2).",
          week52: "72% of 52-week range.",
          aumFlow: "AUM EUR 367M.",
          topHoldings: "ConocoPhillips ~9%, EOG Resources ~7%, Canadian Natural ~6% — top 10 = ~50%."
        },
        {
          tier: "lighter", ticker: "VUAA", name: "Vanguard S&P 500 UCITS ETF (Acc)",
          category: "US Equity / S&P 500", pct: 2.10, aumEurM: 30010,
          holds: "S&P 500 full replication — 503 US large-cap stocks. TER 0.07%.",
          vsCategory: "In line with the US Equity category average over 1M.",
          returnRisk: "1.0 (category avg 1.0).",
          week52: "82% of 52-week range.",
          aumFlow: "AUM EUR 30,010M — one of Europe's largest S&P 500 trackers.",
          topHoldings: "Apple ~7%, NVIDIA ~7%, Microsoft ~6%, Amazon ~4%, Alphabet ~4% — top 10 = ~35%."
        },
        {
          tier: "lighter", ticker: "CSPX", name: "iShares Core S&P 500 UCITS ETF (Acc)",
          category: "US Equity / S&P 500", pct: 2.08, aumEurM: 132712,
          holds: "S&P 500 full replication — 503 US large-cap stocks. TER 0.07%. Europe's largest equity ETF.",
          vsCategory: "In line with the US Equity category average over 1M.",
          returnRisk: "1.0 (category avg 1.0).",
          week52: "82% of 52-week range.",
          aumFlow: "AUM EUR 132,712M — Europe's single largest equity ETF.",
          topHoldings: "Apple ~7%, NVIDIA ~7%, Microsoft ~6%, Amazon ~4%, Alphabet ~4% — top 10 = ~35%."
        },
        {
          tier: "lighter", ticker: "IWDA", name: "iShares Core MSCI World UCITS ETF (Acc)",
          category: "Global Equity / MSCI World", pct: 1.91, aumEurM: 126076,
          holds: "MSCI World full replication — ~1,400 developed-market large/mid-cap stocks. TER 0.20%.",
          vsCategory: "In line with the Global Equity category average over 1M.",
          returnRisk: "0.9 (category avg 1.0).",
          week52: "80% of 52-week range.",
          aumFlow: "AUM EUR 126,076M — Europe's largest MSCI World tracker.",
          topHoldings: "Apple ~5%, NVIDIA ~5%, Microsoft ~4%, Amazon ~3% — top 10 = ~25%."
        },
        {
          tier: "lighter", ticker: "VWCE", name: "Vanguard FTSE All-World UCITS ETF (Acc)",
          category: "Global Equity / FTSE All-World", pct: 0.85, aumEurM: 45422,
          holds: "FTSE All-World — ~3,700 stocks across developed and emerging markets. TER 0.22%.",
          vsCategory: "In line with the Global Equity category average over 1M.",
          returnRisk: "0.9 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 45,422M — Europe's most popular all-world tracker.",
          topHoldings: "Apple ~4%, NVIDIA ~4%, Microsoft ~4%, Amazon ~2% — top 10 = ~22%."
        },
        {
          tier: "lighter", ticker: "NDIA", name: "iShares MSCI India UCITS ETF",
          category: "EM Equity / India", pct: 0.53, aumEurM: 4474,
          holds: "MSCI India index — ~130 Indian large/mid-cap stocks. TER 0.65%.",
          vsCategory: "Underperformed the EM Equity category average (-2%) but turned slightly positive this month.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "55% of 52-week range — recovering from lows.",
          aumFlow: "AUM EUR 4,474M.",
          topHoldings: "Reliance Industries ~10%, HDFC Bank ~7%, Infosys ~6%, ICICI Bank ~5% — top 10 = ~45%."
        },
      ],
      worst: [
        {
          tier: "researched", ticker: "VVMX", name: "VanEck Rare Earth and Strategic Metals UCITS ETF",
          category: "Thematic / Rare Earth & Strategic Metals", pct: -21.63, aumEurM: 1111,
          holds: "Global rare earth and strategic metals miners — ~20 holdings tracking MVIS Global Rare Earth/Strategic Metals index.",
          whyItMoved: "Paradox — rare earth spot prices at multi-year highs BUT the ETF falling because of heavy lithium exposure (Albemarle 7.12%, PLS Group 6.86% are lithium, not rare earth). Lithium market in prolonged structural slump dragging the entire fund. Down 26.84% from 52-week high of EUR 18.76. The name misleads — this is as much a lithium play as a rare earth one.",
          vsCategory: "Underperformed the Commodities Equity category average (-2%) by ~20pts over 1M.",
          returnRisk: "4.2 (category avg 1.5) — extreme concentration in ~20 names.",
          week52: "38% of 52-week range — near 52-week lows.",
          aumFlow: "AUM EUR 1,111M — down from peak as NAV declines.",
          topHoldings: "Lynas Rare Earths ~8%, Albemarle ~7%, PLS Group ~7%, Pilbara Minerals ~6% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
          category: "EM Equity / Korea", pct: -20.20, aumEurM: 1012,
          holds: "MSCI Korea index — ~100 South Korean large/mid-cap stocks. Samsung Electronics 28% and SK Hynix 18% dominate. TER 0.65%.",
          whyItMoved: "KOSPI fell to 6,821 on July 16, -23% in one month. Samsung -8.94%, SK Hynix -11.58%. Triggers: US chip selloff contagion, escalating Middle East tensions (US strikes on Iran), Bank of Korea rate hike to 2.75%. Three circuit breakers triggered in one month. Samsung and SK Hynix comprise ~46% of the fund, making IQQK a leveraged AI memory-chip bet.",
          vsCategory: "Underperformed the EM Equity category average (-2%) by ~18pts over 1M.",
          returnRisk: "4.5 (category avg 0.8) — extreme semiconductor concentration.",
          week52: "68% of 52-week range — pulled back sharply from near-ATH.",
          aumFlow: "AUM EUR 1,012M — some rotation to lower-cost alternatives.",
          topHoldings: "Samsung Electronics ~28%, SK Hynix ~18%, Samsung (pref) ~3%, Hyundai Motor ~3%, KB Financial ~2% — top 10 = ~63%."
        },
        {
          tier: "researched", ticker: "NUKL", name: "VanEck Uranium and Nuclear Technologies UCITS ETF",
          category: "Thematic / Uranium & Nuclear", pct: -14.04, aumEurM: 1930,
          holds: "Global uranium miners, nuclear utilities, and nuclear technology companies — ~25 holdings tracking MarketVector Global Uranium & Nuclear Energy index.",
          whyItMoved: "Uranium spot corrected from 2025 peaks as reactor restart timelines slipped and supply concerns eased. Japanese reactor restarts proceeding slower than expected. Profit-taking after the 2024-25 nuclear renaissance rally. Trading at significant discount to 52-week highs. AI data-center nuclear power demand narrative intact but priced in at current levels.",
          vsCategory: "Underperformed the Energy category average (+1%) by ~15pts over 1M.",
          returnRisk: "3.8 (category avg 1.2) — concentrated thematic, commodity-price sensitive.",
          week52: "42% of 52-week range — deep in correction territory.",
          aumFlow: "AUM EUR 1,930M — down from peak AUM on NAV decline and some outflows.",
          topHoldings: "Cameco ~15%, NexGen Energy ~8%, Paladin Energy ~7%, Kazatomprom ~6% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "QUTM", name: "VanEck Quantum Computing UCITS ETF",
          category: "Thematic / Quantum Computing", pct: -10.96, aumEurM: 702,
          holds: "Global quantum computing companies — ~25 holdings tracking MarketVector Quantum Computing index.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~12pts over 1M.",
          returnRisk: "4.0 (category avg 1.0) — early-stage thematic, high volatility.",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 702M.",
          topHoldings: "IonQ ~8%, Rigetti ~7%, D-Wave ~6%, Honeywell ~5% — top 10 = ~60%."
        },
        {
          tier: "lighter", ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
          category: "Thematic / Clean Energy", pct: -9.47, aumEurM: 3010,
          holds: "Global clean energy companies — solar, wind, hydrogen, utilities. ~105 holdings tracking S&P Global Clean Energy Transition index.",
          vsCategory: "Underperformed the Utilities category average (-1.5%) by ~8pts over 1M.",
          returnRisk: "1.5 (category avg 0.6). Volatility 1Y: ~25%.",
          week52: "52% of 52-week range.",
          aumFlow: "AUM EUR 3,010M. Dividend yield ~0.94%.",
          topHoldings: "Bloom Energy ~12%, First Solar ~10%, NextEra ~8%, Enphase ~6% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "BCHS", name: "Invesco CoinShares Global Blockchain UCITS ETF",
          category: "Thematic / Blockchain", pct: -9.36, aumEurM: 884,
          holds: "Global blockchain-related companies — miners, exchanges, infrastructure. ~50 holdings tracking CoinShares Blockchain Global Equity index.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~10pts over 1M.",
          returnRisk: "3.5 (category avg 1.0) — high crypto correlation.",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 884M.",
          topHoldings: "MicroStrategy ~8%, Coinbase ~7%, Galaxy Digital ~5%, Block ~4% — top 10 = ~50%."
        },
        {
          tier: "lighter", ticker: "ECAR", name: "iShares Electric Vehicles and Driving Technology UCITS ETF",
          category: "Thematic / Electric Vehicles", pct: -9.13, aumEurM: 542,
          holds: "Global EV and driving technology companies — ~100 holdings tracking STOXX Global Electric Vehicles & Driving Technology index. TER 0.40%.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~10pts over 1M.",
          returnRisk: "2.5 (category avg 1.0).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM EUR 542M.",
          topHoldings: "Tesla ~5%, BYD ~4%, Samsung SDI ~4%, NVIDIA ~3% — top 10 = ~35%."
        },
        {
          tier: "lighter", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Thematic / Semiconductors", pct: -8.45, aumEurM: 5058,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index. ~280 holdings.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~9.5pts over 1M.",
          returnRisk: "3.5 (category avg 1.0).",
          week52: "78% of 52-week range — correcting from ATH.",
          aumFlow: "AUM EUR 5,058M — inflows continued despite selloff.",
          topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6% — top 10 = ~59%."
        },
        {
          tier: "lighter", ticker: "DFEN", name: "VanEck Defense UCITS ETF",
          category: "Thematic / Defense", pct: -6.22, aumEurM: 6112,
          holds: "Global defense companies — ~30 holdings tracking MarketVector Global Defense Industry index.",
          vsCategory: "Underperformed the Industrials category average (+0.5%) by ~7pts over 1M.",
          returnRisk: "2.0 (category avg 0.8).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 6,112M.",
          topHoldings: "Palantir ~8%, Rheinmetall ~7%, Leonardo ~6%, L3Harris ~5% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
          category: "Thematic / AI & Big Data", pct: -6.07, aumEurM: 7633,
          holds: "Broad AI value-chain — ~138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip tilt via Samsung and SK Hynix.",
          vsCategory: "Underperformed the Technology category average (+1%) by ~7pts over 1M.",
          returnRisk: "2.0 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 7,633M — Europe's largest AI-themed ETF.",
          topHoldings: "Micron ~9%, Samsung ~8%, SK Hynix ~8%, Intel ~5%, Cisco ~4% — top 10 = ~54%."
        },
      ]
    },

    "6m": {
      best: [
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Thematic / Semiconductors", pct: 60.81, aumEurM: 5058,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index with ESG screen. ~280 holdings.",
          whyItMoved: "Monthly chip sales hit $120.6B in May (+104% YoY) — fundamentals intact. TSMC raised 2026 capex to $60-64B, well above market expectations. Hyperscaler AI capex commitments approaching $700B collectively. Mid-cycle correction in July (-8.45% 1M) but 6M performance remains dominant at +60.81%. AI infrastructure buildout is the defining demand driver.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~51pts over 6M.",
          returnRisk: "3.5 (category avg 1.0). 1Y return ~+160%.",
          week52: "78% of 52-week range — off July highs but still elevated.",
          aumFlow: "AUM EUR 5,058M — inflows continued despite the July selloff.",
          topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6%, SK Hynix ~5%, Lam Research ~4%, ASML ~4% — top 10 = ~59%."
        },
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Thematic / Semiconductors", pct: 55.64, aumEurM: 7752,
          holds: "US-listed semiconductor companies — 25 concentrated holdings tracking MVIS US Listed Semiconductor 25 Index.",
          whyItMoved: "Concentrated 25-stock US semiconductor portfolio amplified both the H1 rally and July correction. SOXX -13.2% in 4 weeks from late-June peak but still dominant over 6M. Samsung missed AI expectations, Broadcom Q3 guidance fell short. The fund's narrow MVIS 25 index means high beta to the chip cycle — great on the way up, painful in corrections.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~46pts over 6M.",
          returnRisk: "3.2 (category avg 1.0) — high concentration, high volatility.",
          week52: "76% of 52-week range — correcting from ATH.",
          aumFlow: "AUM EUR 7,752M — down from ~8,000M on NAV decline.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%. Highly concentrated."
        },
        {
          tier: "researched", ticker: "ITWN", name: "iShares MSCI Taiwan UCITS ETF",
          category: "EM Equity / Taiwan", pct: 49.96, aumEurM: 1355,
          holds: "MSCI Taiwan index — ~90 Taiwanese large/mid-cap stocks. TSMC dominates at ~50% weight. TER 0.65%.",
          whyItMoved: "TAIEX surged ~60% in H1 2026, powered by TSMC (+55%) and MediaTek (~200%). TSMC raised 2026 capex to $60-64B (vs $52-56B prior guidance), signaling sustained AI chip demand. Taiwan's semiconductor supply chain capturing outsized share of AI infrastructure buildout. Some July giveback as the broader chip correction hit but 6M performance still near +50%.",
          vsCategory: "Outperformed the EM Equity category average (+12%) by ~38pts over 6M.",
          returnRisk: "3.0 (category avg 0.8) — extreme TSMC concentration.",
          week52: "75% of 52-week range.",
          aumFlow: "AUM EUR 1,355M — steady inflows on AI semiconductor theme.",
          topHoldings: "TSMC ~50%, MediaTek ~7%, Hon Hai ~4%, Delta Electronics ~3% — top 10 = ~72%. TSMC-dominated."
        },
        {
          tier: "lighter", ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
          category: "EM Equity / Korea", pct: 48.57, aumEurM: 1012,
          holds: "MSCI Korea — ~100 stocks. Samsung 28%, SK Hynix 18%.",
          vsCategory: "Outperformed the EM Equity category average (+12%) by ~37pts over 6M.",
          returnRisk: "4.5 (category avg 0.8).",
          week52: "68% of 52-week range.",
          aumFlow: "AUM EUR 1,012M.",
          topHoldings: "Samsung ~28%, SK Hynix ~18%, Hyundai ~3% — top 10 = ~63%."
        },
        {
          tier: "lighter", ticker: "W1TB", name: "WisdomTree Cybersecurity UCITS ETF",
          category: "Thematic / Cybersecurity", pct: 45.71, aumEurM: 394,
          holds: "Global cybersecurity companies — ~30 holdings. WisdomTree Team8 index.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~36pts over 6M.",
          returnRisk: "1.8 (category avg 1.0).",
          week52: "92% of 52-week range.",
          aumFlow: "AUM EUR 394M.",
          topHoldings: "CrowdStrike ~8%, Palo Alto ~7%, Fortinet ~6%, Zscaler ~5% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "LSMC", name: "Amundi MSCI Semiconductors ESG Leaders UCITS ETF",
          category: "Thematic / Semiconductors", pct: 41.56, aumEurM: 1934,
          holds: "Global semiconductors with ESG filter — ~50 holdings tracking MSCI ACWI Semiconductors & Semiconductor Equipment ESG Leaders index.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~32pts over 6M.",
          returnRisk: "3.0 (category avg 1.0).",
          week52: "75% of 52-week range.",
          aumFlow: "AUM EUR 1,934M.",
          topHoldings: "TSMC ~15%, NVIDIA ~12%, Broadcom ~8%, ASML ~7% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
          category: "Thematic / AI Infrastructure", pct: 38.86, aumEurM: 963,
          holds: "AI infrastructure — chip designers, cloud platforms, data-center operators, networking. ~45 holdings tracking STOXX Global AI Infrastructure index.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~29pts over 6M.",
          returnRisk: "3.8 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 963M.",
          topHoldings: "AMD ~5%, Applied Materials ~5%, Cisco ~5%, Amazon ~5%, Apple ~5% — top 10 = ~46%."
        },
        {
          tier: "lighter", ticker: "ECAR", name: "iShares Electric Vehicles and Driving Technology UCITS ETF",
          category: "Thematic / Electric Vehicles", pct: 34.09, aumEurM: 542,
          holds: "Global EV and driving technology — ~100 holdings. STOXX index.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~24pts over 6M.",
          returnRisk: "2.5 (category avg 1.0).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM EUR 542M.",
          topHoldings: "Tesla ~5%, BYD ~4%, Samsung SDI ~4%, NVIDIA ~3% — top 10 = ~35%."
        },
        {
          tier: "lighter", ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
          category: "Thematic / AI & Big Data", pct: 24.61, aumEurM: 7633,
          holds: "Broad AI value-chain — ~138 holdings. Heavy Korean memory-chip exposure.",
          vsCategory: "Outperformed the Technology category average (+10%) by ~15pts over 6M.",
          returnRisk: "2.0 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 7,633M — Europe's largest AI-themed ETF.",
          topHoldings: "Micron ~9%, Samsung ~8%, SK Hynix ~8%, Intel ~5% — top 10 = ~54%."
        },
        {
          tier: "lighter", ticker: "IOGP", name: "iShares Oil & Gas Exploration & Production UCITS ETF",
          category: "Global Equity / Oil & Gas E&P", pct: 22.18, aumEurM: 367,
          holds: "Global oil & gas E&P companies — ~70 holdings.",
          vsCategory: "Outperformed the Energy category average (+8%) by ~14pts over 6M.",
          returnRisk: "1.8 (category avg 1.2).",
          week52: "72% of 52-week range.",
          aumFlow: "AUM EUR 367M.",
          topHoldings: "ConocoPhillips ~9%, EOG Resources ~7%, Canadian Natural ~6% — top 10 = ~50%."
        },
      ],
      worst: [
        {
          tier: "researched", ticker: "NUKL", name: "VanEck Uranium and Nuclear Technologies UCITS ETF",
          category: "Thematic / Uranium & Nuclear", pct: -24.58, aumEurM: 1930,
          holds: "Global uranium miners, nuclear utilities, and nuclear technology — ~25 holdings tracking MarketVector Global Uranium & Nuclear Energy index.",
          whyItMoved: "Uranium spot corrected from 2025 peaks as reactor restart timelines slipped globally. Japanese restarts proceeding slower than expected. Extended profit-taking after the 2024-25 nuclear renaissance rally. AI data-center nuclear demand narrative remains intact but priced in. Cameco and NexGen — top holdings — both pulling back from stretched valuations.",
          vsCategory: "Underperformed the Energy category average (+8%) by ~33pts over 6M.",
          returnRisk: "3.8 (category avg 1.2) — concentrated thematic.",
          week52: "42% of 52-week range — deep in correction.",
          aumFlow: "AUM EUR 1,930M — significant decline from peak AUM.",
          topHoldings: "Cameco ~15%, NexGen Energy ~8%, Paladin Energy ~7%, Kazatomprom ~6% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "DFEN", name: "VanEck Defense UCITS ETF",
          category: "Thematic / Defense", pct: -21.34, aumEurM: 6112,
          holds: "Global defense companies — ~30 holdings tracking MarketVector Global Defense Industry index. Broadest global defense exposure among European ETFs.",
          whyItMoved: "European defense stocks consolidating after the 2025 boom. Rheinmetall missed Q1 earnings expectations. Gaza ceasefire reduced near-term threat perception. Analysts see 2026 as a valuation consolidation year — lofty multiples from the 2025 rally need earnings to catch up. Palantir's high weight (~8%) adds tech-valuation risk to what should be an industrials play.",
          vsCategory: "Underperformed the Industrials category average (+5%) by ~26pts over 6M.",
          returnRisk: "2.0 (category avg 0.8) — sector concentration.",
          week52: "55% of 52-week range — well off 2025 highs.",
          aumFlow: "AUM EUR 6,112M — still the largest European defense ETF despite correction.",
          topHoldings: "Palantir ~8%, Rheinmetall ~7%, Leonardo ~6%, L3Harris ~5%, Thales ~5% — top 10 = ~55%."
        },
        {
          tier: "researched", ticker: "EUDF", name: "WisdomTree Europe Defence UCITS ETF",
          category: "Thematic / European Defence", pct: -16.06, aumEurM: 4311,
          holds: "Pure European defence companies — ~25 holdings tracking WisdomTree Europe Defence index. Mid-cap overweight vs broader defense peers.",
          whyItMoved: "Same European defense consolidation as DFEN, but EUDF's pure-European focus adds exposure to procurement timeline delays and domestic budget politics. European defence budgets committed but contracting cycles running 12-18 months behind spending pledges. WisdomTree's index methodology overweights mid-cap European defence pure-plays, amplifying volatility in the correction.",
          vsCategory: "Underperformed the European Equity category average (+3%) by ~19pts over 6M.",
          returnRisk: "2.5 (category avg 0.8).",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 4,311M — large for a single-theme European ETF.",
          topHoldings: "Rheinmetall ~12%, Leonardo ~10%, BAE Systems ~8%, Thales ~7% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "VVMX", name: "VanEck Rare Earth and Strategic Metals UCITS ETF",
          category: "Thematic / Rare Earth & Strategic Metals", pct: -14.68, aumEurM: 1111,
          holds: "Rare earth and strategic metals miners — ~20 holdings. Heavy lithium exposure despite the name.",
          vsCategory: "Underperformed the Commodities Equity category average (+2%) by ~17pts over 6M.",
          returnRisk: "4.2 (category avg 1.5).",
          week52: "38% of 52-week range.",
          aumFlow: "AUM EUR 1,111M.",
          topHoldings: "Lynas ~8%, Albemarle ~7%, PLS Group ~7%, Pilbara ~6% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "DEFE", name: "Amundi Stoxx Europe Select Defence UCITS ETF",
          category: "Thematic / European Defence", pct: -14.61, aumEurM: 565,
          holds: "European defence pure-plays — ~15 holdings tracking STOXX Europe Select Defence index.",
          vsCategory: "Underperformed the European Equity category average (+3%) by ~18pts over 6M.",
          returnRisk: "2.8 (category avg 0.8).",
          week52: "48% of 52-week range.",
          aumFlow: "AUM EUR 565M.",
          topHoldings: "Rheinmetall ~15%, BAE Systems ~12%, Leonardo ~10%, Thales ~9% — top 10 = ~75%."
        },
        {
          tier: "lighter", ticker: "DAGB", name: "VanEck Crypto and Blockchain Innovators UCITS ETF",
          category: "Thematic / Crypto & Blockchain", pct: -14.44, aumEurM: 467,
          holds: "Global crypto and blockchain companies — ~20 holdings tracking MarketVector Global Digital Assets Equity index.",
          vsCategory: "Underperformed the Technology category average (+10%) by ~24pts over 6M.",
          returnRisk: "5.0 (category avg 1.0) — extreme crypto correlation.",
          week52: "40% of 52-week range.",
          aumFlow: "AUM EUR 467M.",
          topHoldings: "MicroStrategy ~15%, Coinbase ~12%, Galaxy Digital ~8%, Marathon Digital ~7% — top 10 = ~70%."
        },
        {
          tier: "lighter", ticker: "NDIA", name: "iShares MSCI India UCITS ETF",
          category: "EM Equity / India", pct: -6.93, aumEurM: 4474,
          holds: "MSCI India — ~130 Indian large/mid-cap stocks.",
          vsCategory: "Underperformed the EM Equity category average (+12%) by ~19pts over 6M.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 4,474M.",
          topHoldings: "Reliance ~10%, HDFC Bank ~7%, Infosys ~6%, ICICI Bank ~5% — top 10 = ~45%."
        },
        {
          tier: "lighter", ticker: "DFND", name: "iShares Global Aerospace & Defence UCITS ETF",
          category: "Thematic / Aerospace & Defence", pct: -6.59, aumEurM: 1587,
          holds: "Global aerospace and defence companies — ~60 holdings tracking S&P Developed BMI Select Aerospace & Defense index.",
          vsCategory: "Underperformed the Industrials category average (+5%) by ~12pts over 6M.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "60% of 52-week range.",
          aumFlow: "AUM EUR 1,587M.",
          topHoldings: "Boeing ~8%, RTX ~7%, Airbus ~6%, Lockheed Martin ~6% — top 10 = ~50%."
        },
        {
          tier: "lighter", ticker: "BCHS", name: "Invesco CoinShares Global Blockchain UCITS ETF",
          category: "Thematic / Blockchain", pct: 1.97, aumEurM: 884,
          holds: "Global blockchain-related companies — ~50 holdings.",
          vsCategory: "Underperformed the Technology category average (+10%) by ~8pts over 6M.",
          returnRisk: "3.5 (category avg 1.0).",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 884M.",
          topHoldings: "MicroStrategy ~8%, Coinbase ~7%, Galaxy Digital ~5%, Block ~4% — top 10 = ~50%."
        },
        {
          tier: "lighter", ticker: "QUTM", name: "VanEck Quantum Computing UCITS ETF",
          category: "Thematic / Quantum Computing", pct: 4.17, aumEurM: 702,
          holds: "Quantum computing companies — ~25 holdings.",
          vsCategory: "Underperformed the Technology category average (+10%) by ~6pts over 6M.",
          returnRisk: "4.0 (category avg 1.0).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 702M.",
          topHoldings: "IonQ ~8%, Rigetti ~7%, D-Wave ~6%, Honeywell ~5% — top 10 = ~60%."
        },
      ]
    },

    "ytd": {
      best: [
        {
          tier: "researched", ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
          category: "Thematic / Semiconductors", pct: 85.62, aumEurM: 5058,
          holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index. ~280 holdings.",
          whyItMoved: "The AI infrastructure buildout remains the dominant theme of 2026. Monthly chip sales hit $120.6B in May (+104% YoY). Hyperscaler capex commitments near $700B — Amazon $200B, Alphabet $175-185B, Meta $115-135B, Microsoft $120B+. TSMC raised capex to $60-64B. The July correction (-8.45% 1M) barely dented the YTD total. SEC0's broader global exposure (~280 stocks) provides diversification vs concentrated peers.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~71pts YTD.",
          returnRisk: "3.5 (category avg 1.0). 1Y return ~+160%.",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 5,058M — substantial growth from start of year.",
          topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6% — top 10 = ~59%."
        },
        {
          tier: "researched", ticker: "VVSM", name: "VanEck Semiconductor UCITS ETF",
          category: "Thematic / Semiconductors", pct: 79.17, aumEurM: 7752,
          holds: "US-listed semiconductors — 25 concentrated holdings. MVIS US Listed Semiconductor 25 Index.",
          whyItMoved: "Same AI chip supercycle driving SEC0, but VVSM's concentrated 25-stock portfolio means higher beta in both directions. NVIDIA (~12%), Broadcom (~10%), and AMD (~8%) are the core holdings. The July correction was sharper (-5.07% 1M) but YTD still towers at +79%. Europe's largest semiconductor ETF at EUR 7.8B AUM.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~64pts YTD.",
          returnRisk: "3.2 (category avg 1.0).",
          week52: "76% of 52-week range.",
          aumFlow: "AUM EUR 7,752M — Europe's largest semiconductor ETF.",
          topHoldings: "NVIDIA ~12%, Broadcom ~10%, AMD ~8%, Qualcomm ~7% — top 10 = ~70%."
        },
        {
          tier: "researched", ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
          category: "EM Equity / Korea", pct: 72.18, aumEurM: 1012,
          holds: "MSCI Korea — ~100 stocks. Samsung 28%, SK Hynix 18%. Effectively a leveraged AI memory-chip bet.",
          whyItMoved: "Korea's KOSPI surged on the AI memory supercycle — Samsung and SK Hynix (46% combined weight) drove IQQK to +72% YTD despite the violent July correction (-20.20% 1M). Three circuit breakers triggered in July on US chip selloff contagion, Middle East escalation, and BOK rate hike to 2.75%. The YTD remains extraordinary but the recent drawdown is a reminder of the extreme concentration risk.",
          vsCategory: "Outperformed the EM Equity category average (+18%) by ~54pts YTD.",
          returnRisk: "4.5 (category avg 0.8) — extreme semiconductor concentration.",
          week52: "68% of 52-week range.",
          aumFlow: "AUM EUR 1,012M.",
          topHoldings: "Samsung ~28%, SK Hynix ~18%, Samsung (pref) ~3%, Hyundai ~3% — top 10 = ~63%."
        },
        {
          tier: "lighter", ticker: "ITWN", name: "iShares MSCI Taiwan UCITS ETF",
          category: "EM Equity / Taiwan", pct: 62.12, aumEurM: 1355,
          holds: "MSCI Taiwan — ~90 stocks. TSMC ~50% weight.",
          vsCategory: "Outperformed the EM Equity category average (+18%) by ~44pts YTD.",
          returnRisk: "3.0 (category avg 0.8).",
          week52: "75% of 52-week range.",
          aumFlow: "AUM EUR 1,355M.",
          topHoldings: "TSMC ~50%, MediaTek ~7%, Hon Hai ~4% — top 10 = ~72%."
        },
        {
          tier: "lighter", ticker: "LSMC", name: "Amundi MSCI Semiconductors ESG Leaders UCITS ETF",
          category: "Thematic / Semiconductors", pct: 55.92, aumEurM: 1934,
          holds: "Global semiconductors with ESG filter — ~50 holdings.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~41pts YTD.",
          returnRisk: "3.0 (category avg 1.0).",
          week52: "75% of 52-week range.",
          aumFlow: "AUM EUR 1,934M.",
          topHoldings: "TSMC ~15%, NVIDIA ~12%, Broadcom ~8%, ASML ~7% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
          category: "Thematic / AI Infrastructure", pct: 50.08, aumEurM: 963,
          holds: "AI infrastructure across the stack — chips, cloud, data centers, networking. ~45 holdings.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~35pts YTD.",
          returnRisk: "3.8 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 963M.",
          topHoldings: "AMD ~5%, Applied Materials ~5%, Cisco ~5%, Amazon ~5% — top 10 = ~46%."
        },
        {
          tier: "lighter", ticker: "W1TB", name: "WisdomTree Cybersecurity UCITS ETF",
          category: "Thematic / Cybersecurity", pct: 44.21, aumEurM: 394,
          holds: "Global cybersecurity — ~30 holdings. WisdomTree Team8 index.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~29pts YTD.",
          returnRisk: "1.8 (category avg 1.0).",
          week52: "92% of 52-week range.",
          aumFlow: "AUM EUR 394M.",
          topHoldings: "CrowdStrike ~8%, Palo Alto ~7%, Fortinet ~6% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "ECAR", name: "iShares Electric Vehicles and Driving Technology UCITS ETF",
          category: "Thematic / Electric Vehicles", pct: 40.98, aumEurM: 542,
          holds: "Global EV and driving tech — ~100 holdings.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~26pts YTD.",
          returnRisk: "2.5 (category avg 1.0).",
          week52: "65% of 52-week range.",
          aumFlow: "AUM EUR 542M.",
          topHoldings: "Tesla ~5%, BYD ~4%, Samsung SDI ~4% — top 10 = ~35%."
        },
        {
          tier: "lighter", ticker: "IUES", name: "iShares S&P 500 Energy Sector UCITS ETF",
          category: "US Equity / Energy", pct: 31.91, aumEurM: 1218,
          holds: "S&P 500 energy companies — integrated oil, E&P, refining, pipelines.",
          vsCategory: "Outperformed the US Equity category average (+14%) by ~18pts YTD.",
          returnRisk: "1.4 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 1,218M.",
          topHoldings: "ExxonMobil ~23%, Chevron ~15%, ConocoPhillips ~8% — top 10 = ~70%."
        },
        {
          tier: "lighter", ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
          category: "Thematic / AI & Big Data", pct: 26.86, aumEurM: 7633,
          holds: "Broad AI value-chain — ~138 holdings.",
          vsCategory: "Outperformed the Technology category average (+15%) by ~12pts YTD.",
          returnRisk: "2.0 (category avg 1.0).",
          week52: "78% of 52-week range.",
          aumFlow: "AUM EUR 7,633M.",
          topHoldings: "Micron ~9%, Samsung ~8%, SK Hynix ~8%, Intel ~5% — top 10 = ~54%."
        },
      ],
      worst: [
        {
          tier: "researched", ticker: "NDIA", name: "iShares MSCI India UCITS ETF",
          category: "EM Equity / India", pct: -8.16, aumEurM: 4474,
          holds: "MSCI India — ~130 Indian large/mid-cap stocks. TER 0.65%.",
          whyItMoved: "MSCI India underperforming MSCI EM by ~30pts YTD as investors rotate to tech-heavy EM markets (Korea +72%, Taiwan +62%) chasing the AI semiconductor theme. Indian earnings growth lagging — macro data encouraging but corporate profits disappointing relative to elevated multiples. The +0.53% 1M shows early stabilization but the rotation headwind persists.",
          vsCategory: "Underperformed the EM Equity category average (+18%) by ~26pts YTD.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 4,474M — outflows as investors rotate to tech-heavy EM.",
          topHoldings: "Reliance Industries ~10%, HDFC Bank ~7%, Infosys ~6%, ICICI Bank ~5%, TCS ~4% — top 10 = ~45%."
        },
        {
          tier: "researched", ticker: "NUKL", name: "VanEck Uranium and Nuclear Technologies UCITS ETF",
          category: "Thematic / Uranium & Nuclear", pct: -6.85, aumEurM: 1930,
          holds: "Uranium miners, nuclear utilities, nuclear tech — ~25 holdings.",
          whyItMoved: "Extended correction from 2025 uranium peaks. Reactor restart timelines slipping — Japan slower than expected, US relicensing delayed. Uranium spot prices corrected as supply fears eased with Kazakhstan maintaining production targets. Profit-taking intensified after the 2024-25 nuclear renaissance rally. The AI data-center nuclear theme is long-dated, not a 2026 earnings driver.",
          vsCategory: "Underperformed the Energy category average (+20%) by ~27pts YTD.",
          returnRisk: "3.8 (category avg 1.2).",
          week52: "42% of 52-week range.",
          aumFlow: "AUM EUR 1,930M — declining from peak.",
          topHoldings: "Cameco ~15%, NexGen ~8%, Paladin ~7%, Kazatomprom ~6% — top 10 = ~65%."
        },
        {
          tier: "researched", ticker: "DFEN", name: "VanEck Defense UCITS ETF",
          category: "Thematic / Defense", pct: -3.53, aumEurM: 6112,
          holds: "Global defense — ~30 holdings. MarketVector Global Defense Industry index.",
          whyItMoved: "Defense sector consolidating after the extraordinary 2025 rally. Rheinmetall missed Q1 earnings, signaling the gap between defence-spending pledges and actual procurement orders. Gaza ceasefire dampened near-term threat premium. Palantir's ~8% weight introduces tech-valuation volatility into what investors expect to be an industrials play. 2026 shaping up as the year earnings need to justify 2025 multiples.",
          vsCategory: "Underperformed the Industrials category average (+8%) by ~12pts YTD.",
          returnRisk: "2.0 (category avg 0.8).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 6,112M — still Europe's largest defense ETF.",
          topHoldings: "Palantir ~8%, Rheinmetall ~7%, Leonardo ~6%, L3Harris ~5% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "EUDF", name: "WisdomTree Europe Defence UCITS ETF",
          category: "Thematic / European Defence", pct: -0.87, aumEurM: 4311,
          holds: "European defence pure-plays — ~25 holdings.",
          vsCategory: "Underperformed the European Equity category average (+6%) by ~7pts YTD.",
          returnRisk: "2.5 (category avg 0.8).",
          week52: "50% of 52-week range.",
          aumFlow: "AUM EUR 4,311M.",
          topHoldings: "Rheinmetall ~12%, Leonardo ~10%, BAE ~8%, Thales ~7% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "DEFE", name: "Amundi Stoxx Europe Select Defence UCITS ETF",
          category: "Thematic / European Defence", pct: -0.36, aumEurM: 565,
          holds: "European defence — ~15 concentrated holdings.",
          vsCategory: "Underperformed the European Equity category average (+6%) by ~6pts YTD.",
          returnRisk: "2.8 (category avg 0.8).",
          week52: "48% of 52-week range.",
          aumFlow: "AUM EUR 565M.",
          topHoldings: "Rheinmetall ~15%, BAE ~12%, Leonardo ~10%, Thales ~9% — top 10 = ~75%."
        },
        {
          tier: "lighter", ticker: "VVMX", name: "VanEck Rare Earth and Strategic Metals UCITS ETF",
          category: "Thematic / Rare Earth & Strategic Metals", pct: 3.81, aumEurM: 1111,
          holds: "Rare earth and strategic metals miners — ~20 holdings. Heavy lithium exposure.",
          vsCategory: "Underperformed the Commodities Equity category average (+15%) by ~11pts YTD.",
          returnRisk: "4.2 (category avg 1.5).",
          week52: "38% of 52-week range.",
          aumFlow: "AUM EUR 1,111M.",
          topHoldings: "Lynas ~8%, Albemarle ~7%, PLS ~7% — top 10 = ~65%."
        },
        {
          tier: "lighter", ticker: "IUFS", name: "iShares S&P 500 Financials Sector UCITS ETF",
          category: "US Equity / Financials", pct: 7.23, aumEurM: 2130,
          holds: "S&P 500 financials — banks, insurance, capital markets. ~70 holdings.",
          vsCategory: "Underperformed the US Equity category average (+14%) by ~7pts YTD.",
          returnRisk: "1.2 (category avg 1.0).",
          week52: "85% of 52-week range.",
          aumFlow: "AUM EUR 2,130M.",
          topHoldings: "Berkshire ~13%, JPMorgan ~10%, Visa ~7% — top 10 = ~55%."
        },
        {
          tier: "lighter", ticker: "DFND", name: "iShares Global Aerospace & Defence UCITS ETF",
          category: "Thematic / Aerospace & Defence", pct: 8.15, aumEurM: 1587,
          holds: "Global aerospace and defence — ~60 holdings.",
          vsCategory: "Underperformed the Industrials category average (+8%) by ~0pts YTD.",
          returnRisk: "1.5 (category avg 0.8).",
          week52: "60% of 52-week range.",
          aumFlow: "AUM EUR 1,587M.",
          topHoldings: "Boeing ~8%, RTX ~7%, Airbus ~6%, Lockheed Martin ~6% — top 10 = ~50%."
        },
        {
          tier: "lighter", ticker: "DAGB", name: "VanEck Crypto and Blockchain Innovators UCITS ETF",
          category: "Thematic / Crypto & Blockchain", pct: 9.99, aumEurM: 467,
          holds: "Crypto and blockchain companies — ~20 holdings. High crypto correlation.",
          vsCategory: "Underperformed the Technology category average (+15%) by ~5pts YTD.",
          returnRisk: "5.0 (category avg 1.0).",
          week52: "40% of 52-week range.",
          aumFlow: "AUM EUR 467M.",
          topHoldings: "MicroStrategy ~15%, Coinbase ~12%, Galaxy Digital ~8% — top 10 = ~70%."
        },
        {
          tier: "lighter", ticker: "QUTM", name: "VanEck Quantum Computing UCITS ETF",
          category: "Thematic / Quantum Computing", pct: 12.81, aumEurM: 702,
          holds: "Quantum computing companies — ~25 holdings.",
          vsCategory: "Underperformed the Technology category average (+15%) by ~2pts YTD.",
          returnRisk: "4.0 (category avg 1.0).",
          week52: "55% of 52-week range.",
          aumFlow: "AUM EUR 702M.",
          topHoldings: "IonQ ~8%, Rigetti ~7%, D-Wave ~6%, Honeywell ~5% — top 10 = ~60%."
        },
      ]
    }
  },

  // Fixed 7-ticker portfolio — always full richness, no tier gating.
  portfolio: [
    {
      ticker: "SEC0", name: "iShares MSCI Global Semiconductors UCITS ETF",
      pct1m: -8.45, pct6m: 60.81, pctYtd: 85.62, aumEurM: 5058,
      holds: "Global semiconductor designers, foundries, and equipment makers — MSCI ACWI IMI Semiconductors index. ~280 holdings.",
      whyItMoved: "The AI infrastructure buildout remains 2026's defining theme. Monthly chip sales $120.6B in May (+104% YoY). Hyperscaler capex commitments near $700B. TSMC raised capex to $60-64B. July correction (-8.45% 1M) driven by Meta Compute announcement, SK Hynix HBM4 delay, Chinese CXMT $10B IPO signaling supply expansion. Analysts call it a mid-cycle reset, not a trend reversal.",
      vsCategory: "Outperformed the Technology category average (+15%) by ~71pts YTD.",
      returnRisk: "3.5 (category avg 1.0). 1Y return ~+160%.",
      week52: "78% of 52-week range — off July highs but still elevated.",
      aumFlow: "AUM EUR 5,058M — inflows continued despite the selloff.",
      topHoldings: "Micron ~9%, AMD ~8%, Broadcom ~7%, TSMC ~7%, NVIDIA ~6%, SK Hynix ~5%, Lam Research ~4%, ASML ~4% — top 10 = ~59%."
    },
    {
      ticker: "AIFS", name: "iShares AI Infrastructure UCITS ETF",
      pct1m: -4.72, pct6m: 38.86, pctYtd: 50.08, aumEurM: 963,
      holds: "AI infrastructure across the stack — chip designers, cloud platforms, data-center operators, networking equipment. ~45 holdings tracking STOXX Global AI Infrastructure index.",
      whyItMoved: "Hyperscaler capex commitments near $700B in 2026 — Amazon $200B, Alphabet $175-185B, Meta $115-135B, Microsoft $120B+. The fund captures AI infrastructure across the full stack, not just chips. July correction dragged AIFS -4.72% but 6M/YTD remain strong as the AI buildout thesis is intact. Broader exposure provided partial insulation vs pure semiconductor plays.",
      vsCategory: "Outperformed the Technology category average (+15%) by ~35pts YTD.",
      returnRisk: "3.8 (category avg 1.0). Volatility 1Y: ~20%.",
      week52: "78% of 52-week range.",
      aumFlow: "AUM EUR 963M — approaching EUR 1B milestone.",
      topHoldings: "AMD ~5%, Applied Materials ~5%, Cisco ~5%, Amazon ~5%, Apple ~5% — top 10 = ~46%."
    },
    {
      ticker: "XAIX", name: "Xtrackers AI & Big Data UCITS ETF",
      pct1m: -6.07, pct6m: 24.61, pctYtd: 26.86, aumEurM: 7633,
      holds: "Broad AI value-chain — ~138 holdings spanning AI, big data, and cybersecurity. Heavy Korean memory-chip exposure (~16% via Samsung and SK Hynix).",
      whyItMoved: "Europe's largest AI-themed ETF at EUR 7.6B. The Samsung and SK Hynix exposure (~16% combined) amplified the July correction — Korea's KOSPI circuit breakers hit the portfolio hard. Broader 138-holding diversification dilutes pure AI exposure but provides resilience. Still +26.86% YTD as AI and big data spending accelerates. Trails pure-play chip funds by ~60pts YTD — the price of diversification.",
      vsCategory: "Outperformed the Technology category average (+15%) by ~12pts YTD.",
      returnRisk: "2.0 (category avg 1.0). Volatility 1Y: ~20%.",
      week52: "78% of 52-week range.",
      aumFlow: "AUM EUR 7,633M — Europe's largest AI-themed ETF.",
      topHoldings: "Micron ~9%, Samsung ~8%, SK Hynix ~8%, Intel ~5%, Cisco ~4% — top 10 = ~54%."
    },
    {
      ticker: "IQQH", name: "iShares Global Clean Energy Transition UCITS ETF",
      pct1m: -9.47, pct6m: 7.00, pctYtd: 16.57, aumEurM: 3010,
      holds: "Global clean energy companies — solar, wind, hydrogen, utilities. ~105 holdings tracking S&P Global Clean Energy Transition index.",
      whyItMoved: "Rate-sensitive renewable stocks under pressure from the Fed's hawkish stance. Hydrogen subsector weakness (Bloom Energy short-seller report, FuelCell profit-taking) compounded the -9.47% monthly drawdown. Global clean energy transition spending rose 8% to $2.3T in 2025 (BloombergNEF) — structural support intact. AI data-center energy demand creating a new tailwind for clean energy producers. YTD still positive at +16.57%.",
      vsCategory: "Underperformed the Utilities category average (-1.5%) by ~8pts over 1M.",
      returnRisk: "1.5 (category avg 0.6). Volatility 1Y: ~25%.",
      week52: "52% of 52-week range — mid-range after pullback.",
      aumFlow: "AUM EUR 3,010M. Dividend yield ~0.94%.",
      topHoldings: "Bloom Energy ~12%, First Solar ~10%, NextEra ~8%, Enphase ~6%, China Yangtze Power ~5% — top 10 = ~55%."
    },
    {
      ticker: "EQQQ", name: "Invesco EQQQ Nasdaq-100 UCITS ETF",
      pct1m: -1.26, pct6m: 16.27, pctYtd: 18.91, aumEurM: 11849,
      holds: "Nasdaq-100 tracker — Mag7-heavy, 101 non-financial stocks listed on Nasdaq. TER 0.30%.",
      whyItMoved: "Nasdaq-100 up 26% in H1 2026, powered by the AI infrastructure trade. July saw modest giveback (-1.26% 1M) as market questioned AI ROI vs spending pace. Meta's excess compute capacity raised questions about hyperscaler overbuilding. Mega-cap diversification (Apple, Alphabet, Amazon) cushioned the correction vs pure chip plays. Q2 earnings season testing momentum — banks beating, tech up in late July.",
      vsCategory: "Outperformed the US Equity category average (+14%) by ~5pts YTD.",
      returnRisk: "1.7 (category avg 1.0). 1Y return ~+30%.",
      week52: "80% of 52-week range.",
      aumFlow: "AUM EUR 11,849M — one of Europe's largest equity ETFs.",
      topHoldings: "NVIDIA ~8%, Apple ~7%, Alphabet ~6%, Microsoft ~6%, Amazon ~5% — top 10 = ~50%."
    },
    {
      ticker: "IQQK", name: "iShares MSCI Korea UCITS ETF",
      pct1m: -20.20, pct6m: 48.57, pctYtd: 72.18, aumEurM: 1012,
      holds: "MSCI Korea — ~100 South Korean large/mid-cap stocks. Samsung Electronics 28% and SK Hynix 18% dominate. TER 0.65%.",
      whyItMoved: "KOSPI fell to 6,821 on July 16 — -23% in one month. Samsung -8.94%, SK Hynix -11.58%. Three circuit breakers triggered on US chip selloff contagion, escalating Middle East tensions (US strikes on Iran), and BOK rate hike to 2.75%. The 46% Samsung/SK Hynix weight makes IQQK a leveraged AI memory-chip bet. Despite the violent correction, YTD still stands at +72%.",
      vsCategory: "Outperformed the EM Equity category average (+18%) by ~54pts YTD, but -20% 1M.",
      returnRisk: "4.5 (category avg 0.8). Volatility 1Y: ~42%.",
      week52: "68% of 52-week range — pulled back from near-ATH.",
      aumFlow: "AUM EUR 1,012M — some rotation to lower-cost alternatives. Dividend yield ~0.47%.",
      topHoldings: "Samsung Electronics ~28%, SK Hynix ~18%, Samsung (pref) ~3%, Hyundai Motor ~3%, KB Financial ~2% — top 10 = ~63%."
    },
    {
      ticker: "WTE", name: "WisdomTree Physical Palladium ETC",
      pct1m: -4.89, pct6m: -25.92, pctYtd: -16.10, aumEurM: 147,
      holds: "Physical palladium bullion — WisdomTree's ETC backed by allocated metal in London vaults.",
      whyItMoved: "Palladium corrected from $1,869 (Feb 2026) to ~$983. Structural headwinds: EV adoption eliminating 30-35% of automotive palladium demand 2023-2026 as catalytic converters become obsolete, platinum substitution in remaining ICE vehicles, increased recycling supply. 85% automotive demand concentration is the key vulnerability. The EV transition is an existential threat to palladium's demand base.",
      vsCategory: "Underperformed the Precious Metals category average (-2%) by ~14pts YTD.",
      returnRisk: "Very high — single-commodity, structurally declining demand.",
      week52: "32% of 52-week range — near multi-year lows.",
      aumFlow: "AUM EUR 147M — declining on NAV erosion and outflows.",
      topHoldings: "Single commodity — physical palladium bullion.",
      badges: ["Thin liquidity"]
    }
  ]

};
