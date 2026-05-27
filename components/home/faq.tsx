import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/mock-data";

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <details key={i} className="faq-item" open={i === 0 ? true : undefined}>
              <summary>
                {faq.q}
                <i style={{ display: "inline-flex" }}><ChevronDown size={18} /></i>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
