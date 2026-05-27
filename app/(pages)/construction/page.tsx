import { MapPin } from "lucide-react";
import Stars from "@/components/home/stars";
import { PROS } from "@/lib/mock-data";

export default function ConstructionPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Build Your <span className="gradient-text">Dream Home</span></h1>
          <p>Verified contractors, engineers, architects and interior designers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {PROS.map((p) => (
              <div key={p.id} className="pro-card">
                <div
                  className="pro-img"
                  style={{ backgroundImage: `url('${p.image}')` }}
                >
                  <span className="pro-role">{p.role}</span>
                </div>
                <div className="pro-body">
                  <h3>{p.name}</h3>
                  <p className="location">
                    <i style={{ display: "inline-flex" }}><MapPin size={13} /></i>
                    {p.location} · {p.experience} yrs exp
                  </p>
                  <Stars
                    fullStars={p.fullStars}
                    halfStar={p.halfStar}
                    rating={p.rating}
                    reviews={p.reviews}
                  />
                  <p>{p.description}</p>
                  <a href="#" className="btn btn-primary btn-block">Contact</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
