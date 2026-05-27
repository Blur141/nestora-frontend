"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/lib/mock-data";

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Used <span className="gradient-text">Marketplace</span></h1>
          <p>Pre-owned furniture, appliances, electronics &amp; décor — buy &amp; sell with confidence.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-chips">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`chip${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-4">
            {filtered.map((p) => (
              <article key={p.id} className="product-card">
                <div
                  className="product-img"
                  style={{ backgroundImage: `url('${p.image}')` }}
                >
                  <span className="badge">Used</span>
                </div>
                <div className="product-body">
                  <span className="product-cat">{p.category}</span>
                  <h3>{p.name}</h3>
                  <p className="location">
                    <i style={{ display: "inline-flex" }}><MapPin size={13} /></i>
                    {p.location}
                  </p>
                  <div className="product-foot">
                    <div className="price">{p.price}</div>
                    <a href="#" className="btn btn-sm btn-primary">Buy</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
