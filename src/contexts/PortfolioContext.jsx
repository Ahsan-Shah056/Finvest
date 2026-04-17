import { createContext, useContext, useState, useMemo } from "react";
import { calculatePortfolioStats } from "../utils/portfolioCalc";

const PortfolioContext = createContext(null);

/**
 * PortfolioProvider
 *
 * Wraps the app and provides portfolio state and actions:
 * - items: array of { product, allocatedAmount }
 * - addToPortfolio(product, amount): adds a product (rejects duplicates)
 * - removeFromPortfolio(productId): removes by product id
 * - updateAllocation(productId, newAmount): updates allocated amount
 * - stats: recalculated portfolio statistics on every change
 * - isInPortfolio(productId): checks if product already added
 */
export function PortfolioProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToPortfolio(product, amount) {
    setItems((prev) => {
      /* Do not add duplicates */
      if (prev.some((item) => item.product.id === product.id)) {
        return prev;
      }
      return [...prev, { product, allocatedAmount: Number(amount) || product.minInvestment }];
    });
  }

  function removeFromPortfolio(productId) {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }

  function updateAllocation(productId, newAmount) {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, allocatedAmount: Number(newAmount) || 0 }
          : item
      )
    );
  }

  function isInPortfolio(productId) {
    return items.some((item) => item.product.id === productId);
  }

  /* Recalculate stats whenever items change */
  const stats = useMemo(() => calculatePortfolioStats(items), [items]);

  const value = {
    items,
    addToPortfolio,
    removeFromPortfolio,
    updateAllocation,
    isInPortfolio,
    stats,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
