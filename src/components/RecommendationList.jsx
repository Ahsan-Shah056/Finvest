import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function RecommendationList({ recommendations, profile, isProfileComplete }) {
  if (!isProfileComplete) {
    return (
      <div className="empty-state">
        <h3>Drop Your Details First</h3>
        <p>
          We need to know your vibe before suggesting anything cool.
        </p>
        <Link to="/profile">
          <button className="btn-primary">Set Up Profile</button>
        </Link>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="empty-state">
        <h3>Nothing matches your vibe</h3>
        <p>
          We couldn't find anything that entirely matches your current setup. Try tweaking your budget or risk vibes.
        </p>
        <Link to="/profile">
          <button className="btn-secondary">Update Profile</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-lg)", fontSize: "var(--text-md)", fontWeight: "var(--weight-bold)" }}>
        <strong style={{ color: "var(--color-primary-light)" }}>{recommendations.length}</strong> products perfect for you
      </p>
      <div className="product-grid">
        {recommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
