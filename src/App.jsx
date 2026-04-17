import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { UserProfileProvider } from "./contexts/UserProfileContext";
import { transformAllProducts } from "./utils/transformData";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import Recommendations from "./pages/Recommendations";
import NotFound from "./pages/NotFound";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://dummyjson.com/products?limit=30");
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data = await response.json();
        if (!cancelled) {
          const productsArray = data.products || data;
          setProducts(transformAllProducts(productsArray));
        }
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load products. Please try again later.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();
    return () => { cancelled = true; };
  }, []);

  return (
    <PortfolioProvider>
      <UserProfileProvider>
        <BrowserRouter>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                border: '3px solid var(--color-text)',
                boxShadow: '4px 4px 0 var(--color-text)',
                borderRadius: '0',
                padding: '16px',
                color: 'var(--color-text)',
                fontWeight: '900',
                fontSize: 'var(--text-lg)',
              },
              success: {
                style: {
                  background: 'var(--color-success)',
                },
              },
              error: {
                style: {
                  background: 'var(--color-risk-high)',
                  color: 'white',
                },
              },
            }}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/products"
              element={
                <Products products={products} loading={loading} error={error} />
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetail products={products} />}
            />
            <Route
              path="/profile"
              element={<Profile products={products} />}
            />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/recommendations"
              element={<Recommendations products={products} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </UserProfileProvider>
    </PortfolioProvider>
  );
}
