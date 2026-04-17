import { Link } from "react-router-dom";
import { usePortfolio } from "../contexts/PortfolioContext";
import PortfolioSummary from "../components/PortfolioSummary";
import PortfolioItem from "../components/PortfolioItem";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const { items, removeFromPortfolio, updateAllocation, stats } = usePortfolio();

  if (items.length === 0) {
    return (
      <div className="page-container">
        <h1 className="section-title">Your Stash</h1>
        <div className="empty-state">
          <h3>Your stash is looking pretty empty</h3>
          <p>Start exploring and stack up some products.</p>
          <Link to="/products">
            <button className="btn-primary">Find Products</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="section-title">Your Stash</h1>

      <PortfolioSummary stats={stats} />

      <div className="portfolio-items-list">
        {items.map((item) => (
          <PortfolioItem
            key={item.product.id}
            item={item}
            onRemove={removeFromPortfolio}
            onUpdateAmount={updateAllocation}
          />
        ))}
      </div>
    </div>
  );
}
