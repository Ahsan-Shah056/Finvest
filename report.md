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
