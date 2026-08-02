#!/usr/bin/env python3
"""One-shot builder for movers.js — S&P 500 stock movers for the Stocks tab.
Hardcodes all data collected via Chrome MCP + WebSearch on 2 Aug 2026.
"""
import json, textwrap

AS_OF = "31 Jul 2026, close"
UNIVERSE = "S&P 500"
SOURCE_STATUS = "researched"
FX_RATE = "EUR/USD 1.1519"

# ── All returns (USD) ──
RET = {
    "CTSH": {"m1":42.91,"m6":-31.73,"ytd":-32.5},
    "ACN":  {"m1":34.94,"m6":-35.77,"ytd":-36.52},
    "PYPL": {"m1":32.49,"m6":9.27,"ytd":-1.38},
    "WDAY": {"m1":30.98,"m6":-8.71,"ytd":-25.35},
    "WTW":  {"m1":28.52,"m6":6.55,"ytd":2.94},
    "SNDK": {"m1":-46.57,"m6":110.82,"ytd":411.77},
    "GLW":  {"m1":-45.88,"m6":34.35,"ytd":58.43},
    "KLAC": {"m1":-39.41,"m6":28.36,"ytd":50.85},
    "INTC": {"m1":-35.4,"m6":94.1,"ytd":144.44},
    "COHR": {"m1":-33.36,"m6":23.9,"ytd":42.43},
    "DELL": {"m1":-5.9,"m6":255.83,"ytd":225.02},
    "HPE":  {"m1":6.19,"m6":124.67,"ytd":101.28},
    "DVA":  {"m1":7.92,"m6":119.58,"ytd":111.33},
    "WDC":  {"m1":-14.7,"m6":117.9,"ytd":216.51},
    "CSGP": {"m1":1.55,"m6":-53.24,"ytd":-57.23},
    "BSX":  {"m1":9.49,"m6":-50.04,"ytd":-50.99},
    "BLDR": {"m1":-25.75,"m6":-41.92,"ytd":-35.76},
    "TTD":  {"m1":-0.22,"m6":-40.52,"ytd":-52.48},
    "ROL":  {"m1":-9.03,"m6":-39.67,"ytd":-36.33},
    "STX":  {"m1":-11.28,"m6":110.51,"ytd":211.64},
    "MU":   {"m1":-28.69,"m6":98.49,"ytd":188.53},
    "INTU": {"m1":21.64,"m6":-36.17,"ytd":-51.84},
    "LULU": {"m1":4.11,"m6":-31.88,"ytd":-42.8},
}

# ── Names ──
NAMES = {
    "CTSH":"Cognizant Technology Solutions","ACN":"Accenture","PYPL":"PayPal Holdings",
    "WDAY":"Workday","WTW":"Willis Towers Watson","SNDK":"Sandisk","GLW":"Corning",
    "KLAC":"KLA Corporation","INTC":"Intel","COHR":"Coherent",
    "DELL":"Dell Technologies","HPE":"Hewlett Packard Enterprise","DVA":"DaVita",
    "WDC":"Western Digital","CSGP":"CoStar Group","BSX":"Boston Scientific",
    "BLDR":"Builders FirstSource","TTD":"The Trade Desk","ROL":"Rollins",
    "STX":"Seagate Technology","MU":"Micron Technology","INTU":"Intuit","LULU":"Lululemon Athletica",
}

# ── Industries ──
IND = {
    "CTSH":"Information Technology Services","ACN":"Information Technology Services",
    "PYPL":"Credit Services","WDAY":"Software - Application",
    "WTW":"Insurance Brokers","SNDK":"Computer Hardware","GLW":"Electronic Components",
    "KLAC":"Semiconductor Equipment & Materials","INTC":"Semiconductors",
    "COHR":"Scientific & Technical Instruments","DELL":"Computer Hardware",
    "HPE":"Communication Equipment","DVA":"Medical Care Facilities",
    "WDC":"Computer Hardware","CSGP":"Real Estate Services","BSX":"Medical Devices",
    "BLDR":"Building Products & Equipment","TTD":"Software - Application",
    "ROL":"Specialty Business Services","STX":"Computer Hardware","MU":"Semiconductors",
    "INTU":"Software - Application","LULU":"Apparel Retail",
}

# ── Sector averages (S&P 500 universe) ──
SECT_AVG = {
    "Semiconductors":              {"m1":-13.0, "m6":34.0,  "ytd":53.4},
    "Computer Hardware":           {"m1":-7.31, "m6":94.88, "ytd":160.79},
    "Electronic Components":       {"m1":-17.75,"m6":18.04, "ytd":26.76},
    "Information Technology Services":{"m1":14.52,"m6":-21.46,"ytd":-26.09},
    "Software - Application":      {"m1":12.59, "m6":-0.63, "ytd":-12.3},
    "Medical Devices":             {"m1":9.1,   "m6":-11.22,"ytd":-11.79},
    "Communication Equipment":     {"m1":-3.02, "m6":56.66, "ytd":57.38},
    "Scientific & Technical Instruments":{"m1":-2.13,"m6":20.01,"ytd":25.59},
    "Credit Services":             {"m1":9.08,  "m6":4.62,  "ytd":-4.25},
    "Insurance Brokers":           {"m1":11.93, "m6":-0.44, "ytd":-3.14},
    "Medical Care Facilities":     {"m1":8.15,  "m6":28.74, "ytd":25.1},
    "Real Estate Services":        {"m1":5.28,  "m6":-33.52,"ytd":-32.96},
    "Building Products & Equipment":{"m1":-14.62,"m6":-1.91,"ytd":3.88},
    "Apparel Retail":              {"m1":8.64,  "m6":2.47,  "ytd":0.07},
    # Proxies for missing sectors
    "Semiconductor Equipment & Materials":{"m1":-13.0,"m6":34.0,"ytd":53.4},  # use Semiconductors
    "Specialty Business Services": {"m1":None,  "m6":None,  "ytd":None},
}

# ── 52-week range data ──
W52 = {
    "CTSH":{"price":55.35,"low":38.73,"high":86.7,"pct":35},
    "ACN":{"price":165.92,"low":124.44,"high":288.54,"pct":25},
    "PYPL":{"price":57.21,"low":39.08,"high":76.13,"pct":49},
    "WDAY":{"price":160.34,"low":112.5,"high":247.69,"pct":35},
    "WTW":{"price":335.92,"low":242.12,"high":349.93,"pct":87},
    "SNDK":{"price":1214.83,"low":40.69,"high":2335.0,"pct":51},
    "GLW":{"price":138.25,"low":62.05,"high":255.69,"pct":39},
    "KLAC":{"price":182.82,"low":84.39,"high":301.71,"pct":45},
    "INTC":{"price":90.2,"low":19.31,"high":140.94,"pct":58},
    "COHR":{"price":262.89,"low":86.55,"high":426.89,"pct":52},
    "DELL":{"price":405.37,"low":111.07,"high":465.96,"pct":83},
    "HPE":{"price":47.9,"low":19.81,"high":56.15,"pct":77},
    "DVA":{"price":240.09,"low":103.87,"high":240.96,"pct":99},
    "WDC":{"price":544.48,"low":73.78,"high":746.23,"pct":70},
    "CSGP":{"price":28.76,"low":27.14,"high":96.83,"pct":2},
    "BSX":{"price":46.73,"low":42.63,"high":108.14,"pct":6},
    "BLDR":{"price":66.44,"low":66.01,"high":149.21,"pct":1},
    "TTD":{"price":18.04,"low":16.79,"high":89.76,"pct":2},
    "ROL":{"price":37.97,"low":37.97,"high":65.6,"pct":0},
    "STX":{"price":855.91,"low":147.27,"high":1094.04,"pct":75},
    "MU":{"price":823.03,"low":104.88,"high":1213.56,"pct":65},
    "INTU":{"price":316.07,"low":255.07,"high":784.87,"pct":12},
    "LULU":{"price":118.87,"low":105.43,"high":215.88,"pct":12},
}

# ── Company descriptions ("does") ──
DOES = {
    "CTSH":"IT consulting and digital services — outsourcing, application modernisation, cloud migration.",
    "ACN":"Global IT consulting, technology services, and outsourcing across every major industry.",
    "PYPL":"Digital payments platform — online/mobile payments, Venmo, Braintree, and crypto trading.",
    "WDAY":"Cloud-based enterprise software for human resources and financial management.",
    "WTW":"Global advisory and insurance brokerage — risk management, employee benefits, reinsurance.",
    "SNDK":"Flash memory storage and SSDs, spun off from Western Digital in early 2026.",
    "GLW":"Specialty glass, optical fibre, and ceramics — Gorilla Glass, fibre-optic cables for data centres.",
    "KLAC":"Semiconductor process-control and yield-management equipment for chip fabs.",
    "INTC":"Designs and manufactures CPUs and is building a major third-party chip foundry business.",
    "COHR":"Optical communications modules, lasers, and photonic solutions for data centres and telecom.",
    "DELL":"PCs, enterprise servers, storage, and networking — a leading AI-server infrastructure supplier.",
    "HPE":"Enterprise servers, hybrid-cloud platforms, storage, and high-performance computing.",
    "DVA":"Largest US provider of kidney dialysis services, operating ~2,600 outpatient centres.",
    "WDC":"Hard-disk drives and flash-based data-storage solutions for cloud and enterprise.",
    "CSGP":"Commercial real-estate data, analytics, and online marketplaces (CoStar, Apartments.com, Homes.com).",
    "BSX":"Medical devices — cardiac rhythm management, endoscopy, urology, and neuromodulation.",
    "BLDR":"Distributes building materials and manufactures structural components for homebuilders.",
    "TTD":"Demand-side programmatic advertising platform for digital media buying.",
    "ROL":"Pest and termite control services (Orkin, HomeTeam, Western Pest).",
    "STX":"Hard-disk drives and mass data-storage solutions for cloud, enterprise, and consumer.",
    "MU":"Memory and storage semiconductors — DRAM, NAND flash, and high-bandwidth memory for AI.",
    "INTU":"Financial software — TurboTax, QuickBooks, Credit Karma, and Mailchimp.",
    "LULU":"Premium athletic apparel, accessories, and lifestyle products.",
}

# ── whyItMoved + drivers (researched tier only) ──
# Key: (ticker, period) → dict
RESEARCH = {
    ("CTSH","1m"): {
        "whyItMoved":"Q2 revenue grew 4.5% YoY to $5.48B and management raised FY26 EPS guidance to $5.70-$5.82, sending shares up 11% in a single session despite a modest EPS miss. The stock bounced hard off deeply oversold YTD levels.",
        "drivers":["Raised FY26 EPS guidance","Revenue +4.5% YoY to $5.48B","Bounce from deeply oversold levels"],
    },
    ("ACN","1m"): {
        "whyItMoved":"Rebound from a sector-wide selloff as investors re-rated Accenture's AI and defence exposure: new agentic-AI products with Google Cloud, a ~€200M NATO contract, and FQ3 EPS up 9% YoY to $3.80. Buyback plan also raised by $2B to $7.5B.",
        "drivers":["AI product launches + NATO contract","FQ3 EPS $3.80, up 9%","$7.5B buyback plan"],
    },
    ("SNDK","1m"): {
        "whyItMoved":"Sharp pullback from the June all-time high ($2,335) after weak earnings guidance raised demand concerns. A sector-wide storage selloff dragged SNDK, WDC, and STX down 10-13% in one session; WallStreetBets-amplified volatility accelerated the slide.",
        "drivers":["Weak forward guidance","Sector-wide storage selloff","WSB-driven volatility unwind"],
    },
    ("GLW","1m"): {
        "whyItMoved":"Biggest single-day drop since 2002 after Q3 revenue guidance missed ($4.9-5.0B vs $5.0B consensus). High memory prices are squeezing smartphone OEMs; management guided handheld shipments down mid-teens %. AI-infrastructure rotation added pressure.",
        "drivers":["Q3 guidance miss","Smartphone demand weakness from memory costs","AI-infrastructure rotation"],
    },
    ("DELL","6m"): {
        "whyItMoved":"AI server revenue surged 757% YoY to $16.1B as Q1 EPS of $4.86 crushed the $2.94 estimate. AI order backlog hit $51.3B. New partnerships with Nvidia, Google, and SpaceX AI were unveiled at Dell Technologies World.",
        "drivers":["AI server revenue +757%","$51.3B AI order backlog","Massive EPS beat ($4.86 vs $2.94 est.)"],
    },
    ("HPE","6m"): {
        "whyItMoved":"Raised FY26 guidance two years ahead of its long-term plan: non-GAAP EPS $3.35-$3.45, FCF ≥$3.5B. Revenue growth guided 29-33% on surging AI-server demand; gross margins expanded 8+ pp to 36.5%. AI backlog entered Q3 at $5.9B.",
        "drivers":["FY26 guidance raised substantially","Gross margins +8 pp to 36.5%","$5.9B AI-server backlog"],
    },
    ("CSGP","6m"): {
        "whyItMoved":"Down 57% YTD amid concerns over heavy Homes.com investment burn, CFO departure, and activist pressure. Exited the Nasdaq-100 index. Despite revenue up 22.5% and EBITDA doubling, the market lost confidence in the near-term growth trajectory.",
        "drivers":["Homes.com investment concerns","CFO departure + analyst downgrade","Removed from Nasdaq-100"],
    },
    ("BSX","6m"): {
        "whyItMoved":"Management cut FY26 organic revenue growth guidance to 6.5-8% and flagged flat WATCHMAN implant revenue in Q2-Q3. Slowing electrophysiology growth, disappointing trial results, and product recalls eroded the premium valuation.",
        "drivers":["FY26 growth guidance cut to 6.5-8%","WATCHMAN revenue stagnation","Product recalls"],
    },
    # YTD researched entries
    ("SNDK","ytd"): {
        "whyItMoved":"Spun off from Western Digital in early 2026 and surged on explosive AI-driven flash-storage demand, peaking at $2,335 in June. Despite a 46% July correction, YTD return remains above +400% — the S&P 500's top performer this year.",
        "drivers":["AI storage demand boom","WDC spinoff re-rating","857% H1 gain before July pullback"],
    },
    ("DELL","ytd"): {
        "whyItMoved":"AI server revenue surged 757% YoY to $16.1B as Q1 EPS of $4.86 crushed the $2.94 estimate. AI order backlog hit $51.3B. Dell is now positioned as a critical hardware supplier for the enterprise AI buildout.",
        "drivers":["AI server revenue +757%","$51.3B AI order backlog","Massive EPS beat ($4.86 vs $2.94 est.)"],
    },
    ("CSGP","ytd"): {
        "whyItMoved":"Down 57% YTD amid concerns over heavy Homes.com investment burn, CFO departure, and activist pressure. Exited the Nasdaq-100 index. Revenue growth (+22.5%) and EBITDA doubling were not enough to offset the credibility hit.",
        "drivers":["Homes.com investment concerns","CFO departure + Nasdaq-100 exit","Activist pressure"],
    },
    ("TTD","ytd"): {
        "whyItMoved":"Lost 52% in H1 after Q1 revenue growth decelerated to 12% (from 25% YoY). Publicis Groupe pulled ad spend in a fees dispute; CFO and CRO both departed. Max drawdown of 81% from peak — the deepest in company history.",
        "drivers":["Revenue growth deceleration (25%→12%)","Publicis Groupe fee dispute","CFO + CRO departures"],
    },
}

# ── Rankings ──
RANKINGS = {
    "1m": {
        "best": ["CTSH","ACN","PYPL","WDAY","WTW"],
        "worst": ["SNDK","GLW","KLAC","INTC","COHR"],
    },
    "6m": {
        "best": ["DELL","HPE","DVA","WDC","SNDK"],
        "worst": ["CSGP","BSX","BLDR","TTD","ROL"],
    },
    "ytd": {
        "best": ["SNDK","DELL","WDC","STX","MU"],
        "worst": ["CSGP","TTD","INTU","BSX","LULU"],
    },
}

# ── Reversal candidates (appear in both best and worst across periods) ──
REVERSALS = {"SNDK"}

# ── Helpers ──
def fmt_pct(v):
    return f"{v:+.2f}" if v is not None else "N/A"

def vs_sector(ticker, period):
    """Compute vs-sector string."""
    ind = IND[ticker]
    avg_data = SECT_AVG.get(ind)
    if not avg_data:
        return "Sector comparison not available."
    avg = avg_data.get(period)
    if avg is None:
        return "Sector average not available."
    ret = RET[ticker][period]
    diff = round(ret - avg, 1)
    sign = "+" if diff >= 0 else ""
    above_below = "above" if diff >= 0 else "below"
    return f"{sign}{diff} pp {above_below} {ind} avg ({fmt_pct(avg)}%)"

def fmt_week52(ticker):
    w = W52[ticker]
    pct = w["pct"]
    lo = w["low"]
    hi = w["high"]
    if pct <= 5:
        label = "Near 52w low"
    elif pct <= 20:
        label = "Lower quarter"
    elif pct <= 40:
        label = "Lower half"
    elif pct <= 60:
        label = "Mid-range"
    elif pct <= 80:
        label = "Upper half"
    elif pct <= 95:
        label = "Upper quarter"
    else:
        label = "Near 52w high"
    return f"{label} — {pct}% of range (${lo:,.2f} – ${hi:,.2f})"

def get_badges(ticker, period, side):
    badges = []
    if ticker in REVERSALS:
        badges.append("reversal")
    w = W52[ticker]
    if w["pct"] <= 3:
        badges.append("52w low")
    elif w["pct"] >= 95:
        badges.append("52w high")
    return badges

def tier_for(rank):
    return "researched" if rank <= 2 else "screener"

def entry(ticker, period, rank, side):
    t = tier_for(rank)
    per_key = {"1m":"m1","6m":"m6","ytd":"ytd"}[period]
    pct = RET[ticker][per_key]
    e = {
        "tier": t,
        "ticker": ticker,
        "name": NAMES[ticker],
        "category": IND[ticker],
        "pct": pct,
        "does": DOES[ticker],
        "vsSector": vs_sector(ticker, per_key),
        "week52": fmt_week52(ticker),
        "volume": None,
        "badges": get_badges(ticker, period, side),
    }
    if t == "researched":
        key = (ticker, period)
        if key in RESEARCH:
            e["whyItMoved"] = RESEARCH[key]["whyItMoved"]
            e["drivers"] = RESEARCH[key]["drivers"]
        else:
            e["whyItMoved"] = "No single clear driver this period — moved broadly with its sector."
            e["drivers"] = []
    return e

def build():
    stocks = {}
    for period in ["1m","6m","ytd"]:
        best_tickers = RANKINGS[period]["best"]
        worst_tickers = RANKINGS[period]["worst"]
        stocks[period] = {
            "best": [entry(t, period, i+1, "best") for i, t in enumerate(best_tickers)],
            "worst": [entry(t, period, i+1, "worst") for i, t in enumerate(worst_tickers)],
        }
    movers = {
        "meta": {
            "asOf": AS_OF,
            "universe": UNIVERSE,
            "sourceStatus": SOURCE_STATUS,
            "fxRate": FX_RATE,
            "stocksTracked": 502,
        },
        "stocks": stocks,
    }
    return movers

def to_js(movers):
    blob = json.dumps(movers, indent=2, ensure_ascii=False)
    return f"const MOVERS = {blob};\n"

# ── Validation ──
def validate(movers):
    errs = []
    for period in ["1m","6m","ytd"]:
        for side in ["best","worst"]:
            entries = movers["stocks"][period][side]
            if len(entries) != 5:
                errs.append(f"{period}/{side}: expected 5 entries, got {len(entries)}")
            for e in entries:
                for k in ["tier","ticker","name","category","pct","does","vsSector","week52"]:
                    if k not in e:
                        errs.append(f"{period}/{side}/{e.get('ticker','?')}: missing {k}")
                if e["tier"] == "researched":
                    if "whyItMoved" not in e:
                        errs.append(f"{period}/{side}/{e['ticker']}: researched but no whyItMoved")
                    if "drivers" not in e:
                        errs.append(f"{period}/{side}/{e['ticker']}: researched but no drivers")
    return errs

if __name__ == "__main__":
    movers = build()
    errs = validate(movers)
    if errs:
        print("VALIDATION ERRORS:")
        for e in errs:
            print(f"  • {e}")
    else:
        print("✓ Validation passed")
    js = to_js(movers)
    import os
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "movers.js")
    with open(out, "w") as f:
        f.write(js)
    print(f"✓ Wrote {len(js):,} bytes to {out}")
    print(f"  {sum(len(movers['stocks'][p][s]) for p in ['1m','6m','ytd'] for s in ['best','worst'])} entries across 6 tables")
