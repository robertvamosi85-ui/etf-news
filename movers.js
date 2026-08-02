const MOVERS = {
  "meta": {
    "asOf": "31 Jul 2026, close",
    "universe": "S&P 500",
    "sourceStatus": "researched",
    "fxRate": "EUR/USD 1.1519",
    "stocksTracked": 502
  },
  "stocks": {
    "1m": {
      "best": [
        {
          "tier": "researched",
          "ticker": "CTSH",
          "name": "Cognizant Technology Solutions",
          "category": "Information Technology Services",
          "pct": 42.91,
          "does": "IT consulting and digital services — outsourcing, application modernisation, cloud migration.",
          "vsSector": "+28.4 pp above Information Technology Services avg (+14.52%)",
          "week52": "Lower half — 35% of range ($38.73 – $86.70)",
          "volume": null,
          "badges": [],
          "whyItMoved": "Q2 revenue grew 4.5% YoY to $5.48B and management raised FY26 EPS guidance to $5.70-$5.82, sending shares up 11% in a single session despite a modest EPS miss. The stock bounced hard off deeply oversold YTD levels.",
          "drivers": [
            "Raised FY26 EPS guidance",
            "Revenue +4.5% YoY to $5.48B",
            "Bounce from deeply oversold levels"
          ]
        },
        {
          "tier": "researched",
          "ticker": "ACN",
          "name": "Accenture",
          "category": "Information Technology Services",
          "pct": 34.94,
          "does": "Global IT consulting, technology services, and outsourcing across every major industry.",
          "vsSector": "+20.4 pp above Information Technology Services avg (+14.52%)",
          "week52": "Lower half — 25% of range ($124.44 – $288.54)",
          "volume": null,
          "badges": [],
          "whyItMoved": "Rebound from a sector-wide selloff as investors re-rated Accenture's AI and defence exposure: new agentic-AI products with Google Cloud, a ~€200M NATO contract, and FQ3 EPS up 9% YoY to $3.80. Buyback plan also raised by $2B to $7.5B.",
          "drivers": [
            "AI product launches + NATO contract",
            "FQ3 EPS $3.80, up 9%",
            "$7.5B buyback plan"
          ]
        },
        {
          "tier": "screener",
          "ticker": "PYPL",
          "name": "PayPal Holdings",
          "category": "Credit Services",
          "pct": 32.49,
          "does": "Digital payments platform — online/mobile payments, Venmo, Braintree, and crypto trading.",
          "vsSector": "+23.4 pp above Credit Services avg (+9.08%)",
          "week52": "Mid-range — 49% of range ($39.08 – $76.13)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "WDAY",
          "name": "Workday",
          "category": "Software - Application",
          "pct": 30.98,
          "does": "Cloud-based enterprise software for human resources and financial management.",
          "vsSector": "+18.4 pp above Software - Application avg (+12.59%)",
          "week52": "Lower half — 35% of range ($112.50 – $247.69)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "WTW",
          "name": "Willis Towers Watson",
          "category": "Insurance Brokers",
          "pct": 28.52,
          "does": "Global advisory and insurance brokerage — risk management, employee benefits, reinsurance.",
          "vsSector": "+16.6 pp above Insurance Brokers avg (+11.93%)",
          "week52": "Upper quarter — 87% of range ($242.12 – $349.93)",
          "volume": null,
          "badges": []
        }
      ],
      "worst": [
        {
          "tier": "researched",
          "ticker": "SNDK",
          "name": "Sandisk",
          "category": "Computer Hardware",
          "pct": -46.57,
          "does": "Flash memory storage and SSDs, spun off from Western Digital in early 2026.",
          "vsSector": "-39.3 pp below Computer Hardware avg (-7.31%)",
          "week52": "Mid-range — 51% of range ($40.69 – $2,335.00)",
          "volume": null,
          "badges": [
            "reversal"
          ],
          "whyItMoved": "Sharp pullback from the June all-time high ($2,335) after weak earnings guidance raised demand concerns. A sector-wide storage selloff dragged SNDK, WDC, and STX down 10-13% in one session; WallStreetBets-amplified volatility accelerated the slide.",
          "drivers": [
            "Weak forward guidance",
            "Sector-wide storage selloff",
            "WSB-driven volatility unwind"
          ]
        },
        {
          "tier": "researched",
          "ticker": "GLW",
          "name": "Corning",
          "category": "Electronic Components",
          "pct": -45.88,
          "does": "Specialty glass, optical fibre, and ceramics — Gorilla Glass, fibre-optic cables for data centres.",
          "vsSector": "-28.1 pp below Electronic Components avg (-17.75%)",
          "week52": "Lower half — 39% of range ($62.05 – $255.69)",
          "volume": null,
          "badges": [],
          "whyItMoved": "Biggest single-day drop since 2002 after Q3 revenue guidance missed ($4.9-5.0B vs $5.0B consensus). High memory prices are squeezing smartphone OEMs; management guided handheld shipments down mid-teens %. AI-infrastructure rotation added pressure.",
          "drivers": [
            "Q3 guidance miss",
            "Smartphone demand weakness from memory costs",
            "AI-infrastructure rotation"
          ]
        },
        {
          "tier": "screener",
          "ticker": "KLAC",
          "name": "KLA Corporation",
          "category": "Semiconductor Equipment & Materials",
          "pct": -39.41,
          "does": "Semiconductor process-control and yield-management equipment for chip fabs.",
          "vsSector": "-26.4 pp below Semiconductor Equipment & Materials avg (-13.00%)",
          "week52": "Mid-range — 45% of range ($84.39 – $301.71)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "INTC",
          "name": "Intel",
          "category": "Semiconductors",
          "pct": -35.4,
          "does": "Designs and manufactures CPUs and is building a major third-party chip foundry business.",
          "vsSector": "-22.4 pp below Semiconductors avg (-13.00%)",
          "week52": "Mid-range — 58% of range ($19.31 – $140.94)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "COHR",
          "name": "Coherent",
          "category": "Scientific & Technical Instruments",
          "pct": -33.36,
          "does": "Optical communications modules, lasers, and photonic solutions for data centres and telecom.",
          "vsSector": "-31.2 pp below Scientific & Technical Instruments avg (-2.13%)",
          "week52": "Mid-range — 52% of range ($86.55 – $426.89)",
          "volume": null,
          "badges": []
        }
      ]
    },
    "6m": {
      "best": [
        {
          "tier": "researched",
          "ticker": "DELL",
          "name": "Dell Technologies",
          "category": "Computer Hardware",
          "pct": 255.83,
          "does": "PCs, enterprise servers, storage, and networking — a leading AI-server infrastructure supplier.",
          "vsSector": "+161.0 pp above Computer Hardware avg (+94.88%)",
          "week52": "Upper quarter — 83% of range ($111.07 – $465.96)",
          "volume": null,
          "badges": [],
          "whyItMoved": "AI server revenue surged 757% YoY to $16.1B as Q1 EPS of $4.86 crushed the $2.94 estimate. AI order backlog hit $51.3B. New partnerships with Nvidia, Google, and SpaceX AI were unveiled at Dell Technologies World.",
          "drivers": [
            "AI server revenue +757%",
            "$51.3B AI order backlog",
            "Massive EPS beat ($4.86 vs $2.94 est.)"
          ]
        },
        {
          "tier": "researched",
          "ticker": "HPE",
          "name": "Hewlett Packard Enterprise",
          "category": "Communication Equipment",
          "pct": 124.67,
          "does": "Enterprise servers, hybrid-cloud platforms, storage, and high-performance computing.",
          "vsSector": "+68.0 pp above Communication Equipment avg (+56.66%)",
          "week52": "Upper half — 77% of range ($19.81 – $56.15)",
          "volume": null,
          "badges": [],
          "whyItMoved": "Raised FY26 guidance two years ahead of its long-term plan: non-GAAP EPS $3.35-$3.45, FCF ≥$3.5B. Revenue growth guided 29-33% on surging AI-server demand; gross margins expanded 8+ pp to 36.5%. AI backlog entered Q3 at $5.9B.",
          "drivers": [
            "FY26 guidance raised substantially",
            "Gross margins +8 pp to 36.5%",
            "$5.9B AI-server backlog"
          ]
        },
        {
          "tier": "screener",
          "ticker": "DVA",
          "name": "DaVita",
          "category": "Medical Care Facilities",
          "pct": 119.58,
          "does": "Largest US provider of kidney dialysis services, operating ~2,600 outpatient centres.",
          "vsSector": "+90.8 pp above Medical Care Facilities avg (+28.74%)",
          "week52": "Near 52w high — 99% of range ($103.87 – $240.96)",
          "volume": null,
          "badges": [
            "52w high"
          ]
        },
        {
          "tier": "screener",
          "ticker": "WDC",
          "name": "Western Digital",
          "category": "Computer Hardware",
          "pct": 117.9,
          "does": "Hard-disk drives and flash-based data-storage solutions for cloud and enterprise.",
          "vsSector": "+23.0 pp above Computer Hardware avg (+94.88%)",
          "week52": "Upper half — 70% of range ($73.78 – $746.23)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "SNDK",
          "name": "Sandisk",
          "category": "Computer Hardware",
          "pct": 110.82,
          "does": "Flash memory storage and SSDs, spun off from Western Digital in early 2026.",
          "vsSector": "+15.9 pp above Computer Hardware avg (+94.88%)",
          "week52": "Mid-range — 51% of range ($40.69 – $2,335.00)",
          "volume": null,
          "badges": [
            "reversal"
          ]
        }
      ],
      "worst": [
        {
          "tier": "researched",
          "ticker": "CSGP",
          "name": "CoStar Group",
          "category": "Real Estate Services",
          "pct": -53.24,
          "does": "Commercial real-estate data, analytics, and online marketplaces (CoStar, Apartments.com, Homes.com).",
          "vsSector": "-19.7 pp below Real Estate Services avg (-33.52%)",
          "week52": "Near 52w low — 2% of range ($27.14 – $96.83)",
          "volume": null,
          "badges": [
            "52w low"
          ],
          "whyItMoved": "Down 57% YTD amid concerns over heavy Homes.com investment burn, CFO departure, and activist pressure. Exited the Nasdaq-100 index. Despite revenue up 22.5% and EBITDA doubling, the market lost confidence in the near-term growth trajectory.",
          "drivers": [
            "Homes.com investment concerns",
            "CFO departure + analyst downgrade",
            "Removed from Nasdaq-100"
          ]
        },
        {
          "tier": "researched",
          "ticker": "BSX",
          "name": "Boston Scientific",
          "category": "Medical Devices",
          "pct": -50.04,
          "does": "Medical devices — cardiac rhythm management, endoscopy, urology, and neuromodulation.",
          "vsSector": "-38.8 pp below Medical Devices avg (-11.22%)",
          "week52": "Lower quarter — 6% of range ($42.63 – $108.14)",
          "volume": null,
          "badges": [],
          "whyItMoved": "Management cut FY26 organic revenue growth guidance to 6.5-8% and flagged flat WATCHMAN implant revenue in Q2-Q3. Slowing electrophysiology growth, disappointing trial results, and product recalls eroded the premium valuation.",
          "drivers": [
            "FY26 growth guidance cut to 6.5-8%",
            "WATCHMAN revenue stagnation",
            "Product recalls"
          ]
        },
        {
          "tier": "screener",
          "ticker": "BLDR",
          "name": "Builders FirstSource",
          "category": "Building Products & Equipment",
          "pct": -41.92,
          "does": "Distributes building materials and manufactures structural components for homebuilders.",
          "vsSector": "-40.0 pp below Building Products & Equipment avg (-1.91%)",
          "week52": "Near 52w low — 1% of range ($66.01 – $149.21)",
          "volume": null,
          "badges": [
            "52w low"
          ]
        },
        {
          "tier": "screener",
          "ticker": "TTD",
          "name": "The Trade Desk",
          "category": "Software - Application",
          "pct": -40.52,
          "does": "Demand-side programmatic advertising platform for digital media buying.",
          "vsSector": "-39.9 pp below Software - Application avg (-0.63%)",
          "week52": "Near 52w low — 2% of range ($16.79 – $89.76)",
          "volume": null,
          "badges": [
            "52w low"
          ]
        },
        {
          "tier": "screener",
          "ticker": "ROL",
          "name": "Rollins",
          "category": "Specialty Business Services",
          "pct": -39.67,
          "does": "Pest and termite control services (Orkin, HomeTeam, Western Pest).",
          "vsSector": "Sector average not available.",
          "week52": "Near 52w low — 0% of range ($37.97 – $65.60)",
          "volume": null,
          "badges": [
            "52w low"
          ]
        }
      ]
    },
    "ytd": {
      "best": [
        {
          "tier": "researched",
          "ticker": "SNDK",
          "name": "Sandisk",
          "category": "Computer Hardware",
          "pct": 411.77,
          "does": "Flash memory storage and SSDs, spun off from Western Digital in early 2026.",
          "vsSector": "+251.0 pp above Computer Hardware avg (+160.79%)",
          "week52": "Mid-range — 51% of range ($40.69 – $2,335.00)",
          "volume": null,
          "badges": [
            "reversal"
          ],
          "whyItMoved": "Spun off from Western Digital in early 2026 and surged on explosive AI-driven flash-storage demand, peaking at $2,335 in June. Despite a 46% July correction, YTD return remains above +400% — the S&P 500's top performer this year.",
          "drivers": [
            "AI storage demand boom",
            "WDC spinoff re-rating",
            "857% H1 gain before July pullback"
          ]
        },
        {
          "tier": "researched",
          "ticker": "DELL",
          "name": "Dell Technologies",
          "category": "Computer Hardware",
          "pct": 225.02,
          "does": "PCs, enterprise servers, storage, and networking — a leading AI-server infrastructure supplier.",
          "vsSector": "+64.2 pp above Computer Hardware avg (+160.79%)",
          "week52": "Upper quarter — 83% of range ($111.07 – $465.96)",
          "volume": null,
          "badges": [],
          "whyItMoved": "AI server revenue surged 757% YoY to $16.1B as Q1 EPS of $4.86 crushed the $2.94 estimate. AI order backlog hit $51.3B. Dell is now positioned as a critical hardware supplier for the enterprise AI buildout.",
          "drivers": [
            "AI server revenue +757%",
            "$51.3B AI order backlog",
            "Massive EPS beat ($4.86 vs $2.94 est.)"
          ]
        },
        {
          "tier": "screener",
          "ticker": "WDC",
          "name": "Western Digital",
          "category": "Computer Hardware",
          "pct": 216.51,
          "does": "Hard-disk drives and flash-based data-storage solutions for cloud and enterprise.",
          "vsSector": "+55.7 pp above Computer Hardware avg (+160.79%)",
          "week52": "Upper half — 70% of range ($73.78 – $746.23)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "STX",
          "name": "Seagate Technology",
          "category": "Computer Hardware",
          "pct": 211.64,
          "does": "Hard-disk drives and mass data-storage solutions for cloud, enterprise, and consumer.",
          "vsSector": "+50.8 pp above Computer Hardware avg (+160.79%)",
          "week52": "Upper half — 75% of range ($147.27 – $1,094.04)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "MU",
          "name": "Micron Technology",
          "category": "Semiconductors",
          "pct": 188.53,
          "does": "Memory and storage semiconductors — DRAM, NAND flash, and high-bandwidth memory for AI.",
          "vsSector": "+135.1 pp above Semiconductors avg (+53.40%)",
          "week52": "Upper half — 65% of range ($104.88 – $1,213.56)",
          "volume": null,
          "badges": []
        }
      ],
      "worst": [
        {
          "tier": "researched",
          "ticker": "CSGP",
          "name": "CoStar Group",
          "category": "Real Estate Services",
          "pct": -57.23,
          "does": "Commercial real-estate data, analytics, and online marketplaces (CoStar, Apartments.com, Homes.com).",
          "vsSector": "-24.3 pp below Real Estate Services avg (-32.96%)",
          "week52": "Near 52w low — 2% of range ($27.14 – $96.83)",
          "volume": null,
          "badges": [
            "52w low"
          ],
          "whyItMoved": "Down 57% YTD amid concerns over heavy Homes.com investment burn, CFO departure, and activist pressure. Exited the Nasdaq-100 index. Revenue growth (+22.5%) and EBITDA doubling were not enough to offset the credibility hit.",
          "drivers": [
            "Homes.com investment concerns",
            "CFO departure + Nasdaq-100 exit",
            "Activist pressure"
          ]
        },
        {
          "tier": "researched",
          "ticker": "TTD",
          "name": "The Trade Desk",
          "category": "Software - Application",
          "pct": -52.48,
          "does": "Demand-side programmatic advertising platform for digital media buying.",
          "vsSector": "-40.2 pp below Software - Application avg (-12.30%)",
          "week52": "Near 52w low — 2% of range ($16.79 – $89.76)",
          "volume": null,
          "badges": [
            "52w low"
          ],
          "whyItMoved": "Lost 52% in H1 after Q1 revenue growth decelerated to 12% (from 25% YoY). Publicis Groupe pulled ad spend in a fees dispute; CFO and CRO both departed. Max drawdown of 81% from peak — the deepest in company history.",
          "drivers": [
            "Revenue growth deceleration (25%→12%)",
            "Publicis Groupe fee dispute",
            "CFO + CRO departures"
          ]
        },
        {
          "tier": "screener",
          "ticker": "INTU",
          "name": "Intuit",
          "category": "Software - Application",
          "pct": -51.84,
          "does": "Financial software — TurboTax, QuickBooks, Credit Karma, and Mailchimp.",
          "vsSector": "-39.5 pp below Software - Application avg (-12.30%)",
          "week52": "Lower quarter — 12% of range ($255.07 – $784.87)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "BSX",
          "name": "Boston Scientific",
          "category": "Medical Devices",
          "pct": -50.99,
          "does": "Medical devices — cardiac rhythm management, endoscopy, urology, and neuromodulation.",
          "vsSector": "-39.2 pp below Medical Devices avg (-11.79%)",
          "week52": "Lower quarter — 6% of range ($42.63 – $108.14)",
          "volume": null,
          "badges": []
        },
        {
          "tier": "screener",
          "ticker": "LULU",
          "name": "Lululemon Athletica",
          "category": "Apparel Retail",
          "pct": -42.8,
          "does": "Premium athletic apparel, accessories, and lifestyle products.",
          "vsSector": "-42.9 pp below Apparel Retail avg (+0.07%)",
          "week52": "Lower quarter — 12% of range ($105.43 – $215.88)",
          "volume": null,
          "badges": []
        }
      ]
    }
  }
};
