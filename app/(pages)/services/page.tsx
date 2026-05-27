import { MapPin, Droplets, Zap, Sparkles, PaintBucket, Snowflake, Hammer, CheckCircle, Clock } from "lucide-react";
import Stars from "@/components/home/stars";
import { WORKERS } from "@/lib/mock-data";

const serviceIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  droplets: Droplets,
  zap: Zap,
  sparkles: Sparkles,
  paintBucket: PaintBucket,
  snowflake: Snowflake,
  hammer: Hammer,
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Book <span className="gradient-text">Trusted Home Services</span></h1>
          <p>Verified professionals, transparent pricing, instant booking.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {WORKERS.map((w) => {
              const Icon = serviceIcons[w.serviceIcon] ?? Droplets;
              return (
                <div key={w.id} className="worker-card">
                  <div
                    className="worker-img"
                    style={{ backgroundImage: `url('${w.image}')` }}
                  >
                    <span className="service-tag">
                      <i style={{ display: "inline-flex" }}><Icon size={13} /></i>
                      {w.service}
                    </span>
                  </div>
                  <div className="worker-body">
                    <h3>{w.name}</h3>
                    <Stars
                      fullStars={w.fullStars}
                      halfStar={w.halfStar}
                      rating={w.rating}
                      reviews={w.reviews}
                    />
                    <p className="location">
                      <i style={{ display: "inline-flex" }}><MapPin size={13} /></i>
                      {w.location} · {w.experience} yrs exp
                    </p>
                    <div className={`availability ${w.available ? "available" : "busy"}`}>
                      <i style={{ display: "inline-flex" }}>
                        {w.available ? <CheckCircle size={15} /> : <Clock size={15} />}
                      </i>
                      {w.availabilityText}
                    </div>
                    <a href="#" className="btn btn-primary btn-block">Book Now</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
