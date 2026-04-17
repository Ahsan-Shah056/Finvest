import RiskBadge from "./RiskBadge";
import ReturnDisplay from "./ReturnDisplay";
import "../styles/Portfolio.css";

export default function PortfolioItem({ item, onRemove, onUpdateAmount }) {
  const { product, allocatedAmount } = item;

  return (
    <div className="portfolio-item">
      <img
        className="portfolio-item-image"
        src={product.image}
        alt={product.name}
      />

      <div className="portfolio-item-info">
        <div className="portfolio-item-name">{product.name}</div>
        <div className="portfolio-item-meta">
          <RiskBadge riskLevel={product.riskLevel} />
          <ReturnDisplay value={product.expectedReturn} />
        </div>
      </div>

      <input
        className="portfolio-item-amount-input"
        type="number"
        value={allocatedAmount}
        onChange={(e) => onUpdateAmount(product.id, e.target.value)}
        min="0"
        aria-label={`Allocation for ${product.name}`}
      />

      <button
        className="portfolio-item-remove"
        onClick={() => onRemove(product.id)}
        aria-label={`Remove ${product.name}`}
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
}
