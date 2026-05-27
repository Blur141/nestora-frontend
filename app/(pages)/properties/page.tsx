"use client";

import { useState } from "react";
import { MapPin, Bed, Bath, Ruler, SlidersHorizontal } from "lucide-react";
import {
  DISTRICTS,
  PROPERTY_TYPES,
  BUDGET_OPTIONS,
  BEDROOM_OPTIONS,
  PROPERTY_LISTINGS,
} from "@/lib/mock-data";

export default function PropertiesPage() {
  const [district, setDistrict] = useState("All Districts");
  const [type, setType] = useState("All Types");
  const [budget, setBudget] = useState("Any Budget");
  const [beds, setBeds] = useState("Any");
  const [showSale, setShowSale] = useState(true);
  const [showRent, setShowRent] = useState(true);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Find Your <span className="gradient-text">Dream Home</span></h1>
          <p>Explore thousands of verified properties across Kerala</p>
        </div>
      </section>

      <section className="section">
        <div className="container layout-2col">
          {/* Filter Sidebar */}
          <aside className="filter-sidebar">
            <h3>
              <i style={{ display: "inline-flex" }}><SlidersHorizontal size={18} /></i>
              Filters
            </h3>

            <div className="filter-group">
              <label>District</label>
              <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                {DISTRICTS.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Property Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Budget (Max)</label>
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Bedrooms</label>
              <select value={beds} onChange={(e) => setBeds(e.target.value)}>
                {BEDROOM_OPTIONS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Listing Type</label>
              <div className="check-group">
                <label>
                  <input type="checkbox" checked={showSale} onChange={(e) => setShowSale(e.target.checked)} />
                  For Sale
                </label>
                <label>
                  <input type="checkbox" checked={showRent} onChange={(e) => setShowRent(e.target.checked)} />
                  For Rent
                </label>
              </div>
            </div>

            <button className="btn btn-primary btn-block">Apply Filters</button>
          </aside>

          {/* Results */}
          <div>
            <div className="results-head">
              <p><strong>248</strong> properties found</p>
              <select>
                <option>Sort: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-2">
              {PROPERTY_LISTINGS.map((p) => (
                <article key={p.id} className="property-card">
                  <div
                    className="property-img"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  >
                    <span className={`badge${p.type === "For Rent" ? " badge-rent" : ""}`}>
                      {p.type}
                    </span>
                  </div>
                  <div className="property-body">
                    <h3>{p.title}</h3>
                    <p className="location">
                      <i style={{ display: "inline-flex" }}><MapPin size={14} /></i>
                      {p.location}
                    </p>
                    <div className="property-meta">
                      <span><i style={{ display: "inline-flex" }}><Bed size={14} /></i> {p.beds} Beds</span>
                      <span><i style={{ display: "inline-flex" }}><Bath size={14} /></i> {p.baths} Baths</span>
                      <span><i style={{ display: "inline-flex" }}><Ruler size={14} /></i> {p.sqft.toLocaleString()} sqft</span>
                    </div>
                    <div className="property-foot">
                      <div className="price">
                        {p.price}
                        {p.perMonth && <span>/mo</span>}
                      </div>
                      <a href="#" className="btn btn-sm btn-primary">Contact</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="pagination">
              <a href="#" className="page-link active">1</a>
              <a href="#" className="page-link">2</a>
              <a href="#" className="page-link">3</a>
              <a href="#" className="page-link">›</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
