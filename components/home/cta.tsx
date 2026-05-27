import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Build Your Dream Home?</h2>
          <p>Join thousands of Keralites who trust VeeduHub for everything home-related.</p>
          <div className="cta-actions">
            <Link href="/register" className="btn btn-primary btn-lg">
              Get Started Free
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
