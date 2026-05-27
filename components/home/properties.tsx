import Link from "next/link";
import { MapPin, Bed, Bath, Ruler } from "lucide-react";
import { PROPERTIES } from "@/lib/mock-data";

export default function FeaturedProperties() {
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Featured Listings</span>
          <h2>Homes Handpicked For You</h2>
        </div>

        <div className="grid grid-3">
          {PROPERTIES.map((p) => (
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
                  <span>
                    <i style={{ display: "inline-flex" }}><Bed size={14} /></i>
                    {p.beds} Beds
                  </span>
                  <span>
                    <i style={{ display: "inline-flex" }}><Bath size={14} /></i>
                    {p.baths} Baths
                  </span>
                  <span>
                    <i style={{ display: "inline-flex" }}><Ruler size={14} /></i>
                    {p.sqft.toLocaleString()} sqft
                  </span>
                </div>

                <div className="property-foot">
                  <div className="price">
                    {p.price}
                    {p.perMonth && <span>/mo</span>}
                  </div>
                  <Link href="/properties" className="btn btn-sm btn-primary">View</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/properties" className="btn btn-outline">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
