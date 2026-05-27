import Link from "next/link";
import { Droplets, Zap, Sparkles, Star } from "lucide-react";
import { SERVICES } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  droplets: Droplets,
  zap: Zap,
  sparkles: Sparkles,
};

export default function PopularServices() {
  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Popular Services</span>
          <h2>Trusted Professionals at Your Doorstep</h2>
        </div>

        <div className="grid grid-3">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] ?? Droplets;
            return (
              <div key={s.title} className="service-card">
                <div className="service-icon">
                  <Icon size={32} />
                </div>
                <h3>{s.title}</h3>

                <div className="stars">
                  {Array.from({ length: s.fullStars }).map((_, i) => (
                    <i key={i} style={{ display: "inline-flex" }}>
                      <Star size={14} fill="currentColor" />
                    </i>
                  ))}
                  {s.halfStar && (
                    <i style={{ display: "inline-flex", opacity: 0.5 }}>
                      <Star size={14} fill="currentColor" />
                    </i>
                  )}
                  <span>{s.rating}</span>
                </div>

                <p>{s.description}</p>
                <Link href="/services" className="btn btn-outline btn-block">
                  Book Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
