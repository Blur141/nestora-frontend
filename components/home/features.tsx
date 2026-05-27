import Link from "next/link";
import { Building2, Wrench, Hammer, HardHat, Boxes, Sofa, ArrowRight } from "lucide-react";
import { FEATURES } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  building: Building2,
  wrench: Wrench,
  toolbox: Hammer,
  hardhat: HardHat,
  boxes: Boxes,
  sofa: Sofa,
};

export default function Features() {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2>Everything Under One Roof</h2>
          <p>From buying your dream home to fixing a leaking tap — VeeduHub has you covered.</p>
        </div>

        <div className="grid grid-3">
          {FEATURES.map((f) => {
            const Icon = iconMap[f.icon] ?? Building2;
            return (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={28} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                <Link href={f.href} className="card-link">
                  Explore
                  <i style={{ display: "inline-flex" }}><ArrowRight size={16} /></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
