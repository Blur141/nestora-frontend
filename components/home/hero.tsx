"use client";

import { useState } from "react";
import { Leaf, MapPin, Layers, Search } from "lucide-react";
import { DISTRICTS, CATEGORIES } from "@/lib/mock-data";

const heroStats = [
  { value: "10K+", label: "Properties" },
  { value: "500+", label: "Workers" },
  { value: "14", label: "Districts" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  const [district, setDistrict] = useState("All Districts");
  const [category, setCategory] = useState("All Categories");
  const [keyword, setKeyword] = useState("");

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-badge">
          <i style={{ display: "inline-flex" }}><Leaf size={14} /></i>
          Kerala&apos;s #1 Home Ecosystem
        </span>

        <h1>
          Everything Needed<br />
          For Your <span className="gradient-text">Home</span>
        </h1>

        <p className="hero-sub">
          Properties, Workers, Tool Rentals, Construction &amp; Home Services &mdash; All In One Platform
        </p>

        <form
          className="hero-search"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Searching: ${district} / ${category} / ${keyword || "all"}`);
          }}
        >
          <div className="search-field">
            <label>
              <i style={{ display: "inline-flex" }}><MapPin size={12} /></i>
              District
            </label>
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              {DISTRICTS.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          <div className="search-field">
            <label>
              <i style={{ display: "inline-flex" }}><Layers size={12} /></i>
              Category
            </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="search-field">
            <label>
              <i style={{ display: "inline-flex" }}><Search size={12} /></i>
              Keyword
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search homes, workers, tools..."
            />
          </div>

          <button type="submit" className="search-btn">
            <i style={{ display: "inline-flex" }}><Search size={16} /></i>
            Search
          </button>
        </form>

        <div className="hero-stats">
          {heroStats.map((s) => (
            <div key={s.label}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
