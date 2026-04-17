import { NavLink, Link } from "react-router-dom";
import { usePortfolio } from "../contexts/PortfolioContext";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const { items } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand-icon">⚡</span>
          FinVest
        </Link>
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          <li>
            <NavLink to="/" className="navbar-link" onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={closeMenu}>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="navbar-link" onClick={closeMenu}>
              My Vibe
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="navbar-link" onClick={closeMenu}>
              Stash
              {items.length > 0 && (
                <span className="navbar-badge">{items.length}</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recommendations"
              className="navbar-link"
              onClick={closeMenu}
            >
              For Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
