import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/mock-data";

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Customers Say</h2>
        </div>

        <div className="grid grid-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial">
              <div className="quote">
                <i style={{ display: "inline-flex" }}><Quote size={32} /></i>
              </div>
              <p>{t.text}</p>
              <div className="author">
                <div className="avatar">{t.initials}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
