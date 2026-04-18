<div align="center">

# FinVest

### A Financial Product Discovery Platform

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://finvest-amber.vercel.app/)

**Browse financial products. Build your investor profile. Grow your stash.**

[Live Demo](https://finvest-amber.vercel.app/) · [Report a Bug](https://github.com/Ahsan-Shah056/Finvest/issues)

</div>

---

## What Is FinVest?

Most investment platforms assume you already know what you want. FinVest does not.

It fetches retail product data from an external API, transforms it into financial instruments
with risk levels, expected returns, and liquidity classifications, then uses your investor profile
to surface products that match your situation.

---

## Screenshots

| Home | Products |
|---|---|
| ![Home](Interface/home.png) | ![Products](Interface/products.png) |

| Profile | Recommendations | Portfolio |
|---|---|---|
| ![Profile](Interface/profile.png) | ![Recommendations](Interface/recommendations.png) | ![Portfolio](Interface/portfolio.png) |

---

## Features

| Feature | Description |
|---|---|
| Dynamic Catalog | 30 products from DummyJSON, transformed into financial instruments |
| Multi-Criteria Filtering | Filter by risk, return, category, liquidity, horizon, and budget |
| Investor Profile | Capture risk tolerance, horizon, monthly capacity, liquidity, and goal |
| Recommendation Engine | Four-pass filter matched to profile, sorted by expected return |
| Live Portfolio Metrics | Weighted return, total invested, and risk distribution update instantly |
| Consistent Data | Seeded function ensures identical data on every page load |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM v7 |
| State | Context API with useMemo |
| Styling | Vanilla CSS |
| Notifications | react-hot-toast |
| Analytics | Vercel Analytics |
| Data Source | DummyJSON REST API |
| Deployment | Vercel |

---

## Getting Started

```bash
git clone https://github.com/Ahsan-Shah056/Finvest.git
cd Finvest
npm install
npm run dev
```

App runs at `http://localhost:5173`.

---

## Project Structure

```
src/
├── components/    # FilterPanel, ProductCard, RiskBadge, ReturnDisplay, ...
├── contexts/      # PortfolioContext, UserProfileContext
├── pages/         # Home, Products, Profile, Recommendations, Portfolio, ProductDetail
├── utils/         # transformData.js, portfolioCalc.js, recommendations.js
└── styles/        # Per-component CSS files
```

---

## Component Architecture

![Component Hierarchy](Diagrams/React%20Component%20Hierarchy%20Tree.png)

**App** owns data fetching and passes `products`, `loading`, `error` as props.
**Products** derives its filtered list inline on every render from raw filter state.
**Portfolio** reads entirely from PortfolioContext — no props from App.

---

## Financial Logic

Every product is assigned a financial category via `id % 4`, which determines its risk level,
expected return band, liquidity, and time horizon. Returns are computed with a seeded sine
function so the data is identical on every render without a backend.

| Risk Level | Return Range | Categories |
|---|---|---|
| Low | 3% to 7% p.a. | Savings, Insurance |
| Medium | 7% to 12% p.a. | Investment |
| High | 12% to 27% p.a. | Crypto |

### Recommendation Algorithm

```
All products
    ├── [1] Budget check     — drop products above monthlyCapacity
    ├── [2] Risk filter      — conservative=[low] / moderate=[low,medium] / aggressive=[all]
    ├── [3] Horizon filter   — cumulative: short/medium/long
    ├── [4] Liquidity filter — cumulative: easy/moderate/locked
    └── Sort by expectedReturn (ascending for conservative, descending otherwise)
```

![Recommendation Algorithm](Diagrams/Product%20Recommendation%20Algorithm%20Flowchart.png)

### Portfolio Calculations

```
totalInvested   = sum(allocatedAmount)
weightedReturn  = sum((allocatedAmount / totalInvested) * expectedReturn)
riskDistribution = { low: %, medium: %, high: % } of totalInvested
```

![Portfolio State Flow](Diagrams/Add%20to%20Portfolio%20State%20Lifecycle.png)

---

## API Integration

![Data Transformation](Diagrams/Data%20Transformation%20Flowchart.png)

The app fetches from DummyJSON and transforms each retail product:
- Category: `id % 4` maps to savings / investment / insurance / crypto
- Risk, liquidity, horizon: derived from category via lookup maps
- Expected return: seeded sine function scaled to the risk band
- Min investment: `Math.round(price * 1000)` in PKR

---

## Deployment

Live at [finvest-amber.vercel.app](https://finvest-amber.vercel.app/)

```bash
npm install -g vercel
vercel --prod
```

---

<div align="center">

Built for the Web Programming course at FAST-NU by Muhammad Ahsan (23i-5010).

</div>
