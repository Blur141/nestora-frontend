import { ShieldCheck, Leaf, Users } from "lucide-react";
import { ABOUT_VALUES } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  shieldCheck: ShieldCheck,
  handHelping: Users,
  leaf: Leaf,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About <span className="gradient-text">VeeduHub</span></h1>
          <p>Reimagining how Kerala builds, rents and maintains homes.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <span className="eyebrow">Our Story</span>
            <h2>From a Garage in Kochi to Kerala&apos;s #1 Home Platform</h2>
            <p>
              VeeduHub was born in 2023 from a simple frustration:{" "}
              <em>finding a reliable plumber in Kerala was harder than it should be.</em>
            </p>
            <p>
              Today, we are a complete ecosystem that brings together property seekers,
              homeowners, skilled workers, contractors, tool owners and material suppliers
              — all under one digital roof.
            </p>
            <p>
              Our mission is simple:{" "}
              <strong>
                To simplify home construction, rentals, and services across Kerala
              </strong>{" "}
              — with trust, transparency and technology.
            </p>
          </div>
          <div
            className="about-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800')",
            }}
          />
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Values</span>
            <h2>What Drives Us</h2>
          </div>
          <div className="grid grid-3">
            {ABOUT_VALUES.map((v) => {
              const Icon = iconMap[v.icon] ?? ShieldCheck;
              return (
                <div key={v.title} className="value-card">
                  <i style={{ display: "flex", justifyContent: "center", color: "var(--emerald)", fontSize: "2.6rem" }}>
                    <Icon size={42} />
                  </i>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
