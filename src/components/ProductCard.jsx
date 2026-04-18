import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { usePortfolio } from "../contexts/PortfolioContext";
import RiskBadge from "./RiskBadge";
import ReturnDisplay from "./ReturnDisplay";
import "../styles/Components.css";

export default function ProductCard({ product }) {
  const { addToPortfolio, isInPortfolio } = usePortfolio();
  const added = isInPortfolio(product.id);

  function handleAdd() {
    if (!added) {
      addToPortfolio(product, product.minInvestment);
      toast.success(`${product.name} added to your Stash!`);
    }
  }

  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img
          className="product-card-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className="product-card-overlay">
          <RiskBadge riskLevel={product.riskLevel} />
          <div className="product-card-overlay-item">
            Return: <span><ReturnDisplay value={product.expectedReturn} /></span>
          </div>
          <div className="product-card-overlay-item">
            Liquidity: <span>{product.liquidity}</span>
          </div>
          <div className="product-card-overlay-item">
            Min Invest: <span>PKR {product.minInvestment.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <div className="product-card-meta">
          <span className={`category-badge category-badge-${product.category}`}>
            {product.category}
          </span>
          <ReturnDisplay value={product.expectedReturn} />
        </div>

        <div className="product-card-actions">
          <Link to={`/product/${product.id}`}>
            <button className="product-card-btn-details">View Details</button>
          </Link>
          <button
            className={added ? "product-card-btn-added" : "product-card-btn-add"}
            onClick={handleAdd}
            disabled={added}
          >
            {added ? "Added to Stash ✓" : "Add to Stash"}
          </button>
        </div>
      </div>
    </div>
  );
}
