import { Link } from "react-router-dom";
import { useMemo } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const CATEGORIES = [
  { key: "savings", icon: "🏦", name: "Savings", desc: "Low-risk, easy access funds to stack cash safely" },
  { key: "investment", icon: "📈", name: "Investment", desc: "Grow your money with balanced risk levels" },
  { key: "insurance", icon: "🛡️", name: "Insurance", desc: "Protect your capital for the long run" },
  { key: "crypto", icon: "₿", name: "Crypto", desc: "High risk, high reward digital assets" },
];

export default function Home({ products }) {
  const featured = useMemo(() => {
    if (!products || products.length === 0) return [];
    const bestPerCategory = {};
    products.forEach((p) => {
      if (!bestPerCategory[p.category] || p.expectedReturn > bestPerCategory[p.category].expectedReturn) {
        bestPerCategory[p.category] = p;
      }
    });
    return Object.values(bestPerCategory);
  }, [products]);

  return (
    <div className="page-container">
      <section className="home-hero">
        <span className="home-hero-badge">Level up your money</span>
        <h1 className="home-hero-title">
          Find & Build Your<br />Ultimate Stash
        </h1>
        <p className="home-hero-subtitle">
          Browse cool financial products, get ideas tailored to your unique vibe, and build your stash — all in one place.
        </p>
        <div className="home-hero-cta">
          <Link to="/products">
            <button className="btn-primary">Explore Products</button>
          </Link>
          <Link to="/profile">
            <button className="btn-secondary">Set My Vibe</button>
          </Link>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stat">
          <div className="home-stat-value">{products.length}</div>
          <div className="home-stat-label">Live Products</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-value">4</div>
          <div className="home-stat-label">Categories</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-value">3</div>
          <div className="home-stat-label">Risk Levels</div>
        </div>
      </section>

      <section className="home-categories">
        <h2 className="section-title">Pick a Category</h2>
        <div className="home-categories-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={`/products?category=${cat.key}`}
              className="home-category-card"
            >
              <span className="home-category-card-icon">{cat.icon}</span>
              <span className="home-category-card-name">{cat.name}</span>
              <span className="home-category-card-desc">{cat.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="home-featured">
          <h2 className="section-title">Top Rated Picks</h2>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
