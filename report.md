# Dynamic Financial Product Discovery Platform

**Course:** Web Programming
**Instructor:** Arsalan Khan
**Submitted by:** Muhammad Ahsan / 23i-5010

## 1. Introduction

### Project Overview

FinVest is a React-based FinTech application that helps users discover and evaluate
financial products without needing prior investment knowledge. Users fill out an investor
profile and receive personalized recommendations matched to their risk tolerance, budget,
and time horizon.

### Features Implemented

- Dynamic financial product catalog (30 products from DummyJSON API)
- Multi-criteria filtering (risk, return, category, liquidity, horizon, budget)
- Investor profile builder
- Personalized recommendation engine
- Live portfolio management with weighted return calculation

## 2. Component Architecture

**App** owns data fetching and wraps everything in PortfolioProvider and UserProfileProvider.
**Products** manages filter state and derives the visible list inline on every render.
**FilterPanel** is stateless — it receives filters and an onChange callback.
**ProductCard** connects to PortfolioContext to add products to the stash.
**Portfolio** reads directly from PortfolioContext with no props from App.

## 3. State Management

useState handles local UI state (form fields, filter values, loading/error flags).
PortfolioContext manages the stash, allocations, and live stats via useMemo.
UserProfileContext stores the investor profile and exposes the recommendation bridge.

## 4. Financial Logic

Every product is assigned a category via id % 4: savings, investment, insurance, or crypto.
Risk, return range, liquidity, and time horizon are derived from the category via mapping objects.
Expected return uses a seeded sine function for deterministic consistency across page loads.

| Risk Level | Return Range | Categories         |
|------------|-------------|---------------------|
| Low        | 3–7% p.a.   | Savings, Insurance  |
| Medium     | 7–12% p.a.  | Investment          |
| High       | 12–27% p.a. | Crypto              |

## 5. API Integration

The app fetches from DummyJSON wrapped in try/catch inside useEffect.
A cancelled flag prevents state updates on unmounted components.
On failure, an error state triggers a fallback UI.
