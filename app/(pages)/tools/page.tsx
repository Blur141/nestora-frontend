import { CheckCircle, Clock } from "lucide-react";
import { TOOLS } from "@/lib/mock-data";

export default function ToolsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Rent <span className="gradient-text">Professional Tools</span></h1>
          <p>Daily rentals · Site delivery · Hassle-free returns</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {TOOLS.map((t) => (
              <div key={t.id} className="tool-card">
                <div
                  className="tool-img"
                  style={{ backgroundImage: `url('${t.image}')` }}
                >
                  {t.badge && (
                    <span className={`badge${t.badgeRent ? " badge-rent" : ""}`}>
                      {t.badge}
                    </span>
                  )}
                </div>
                <div className="tool-body">
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <div className="tool-meta">
                    <div className="price">
                      {t.price}<span>/day</span>
                    </div>
                    <div className={`availability ${t.available ? "available" : "busy"}`}>
                      <i style={{ display: "inline-flex" }}>
                        {t.available ? <CheckCircle size={14} /> : <Clock size={14} />}
                      </i>
                      {t.available ? "Available" : "From Tomorrow"}
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary btn-block">Rent Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
