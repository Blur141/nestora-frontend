import Link from "next/link";
import { Home, MapPin, Phone, Mail, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { FOOTER_QUICK_LINKS, FOOTER_DISTRICTS } from "@/lib/mock-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <Link href="/" className="logo">
              <i style={{ display: "inline-flex", color: "var(--emerald)" }}>
                <Home size={24} />
              </i>
              <span>nestora<span className="accent">Hub</span></span>
            </Link>
            <p>
              Kerala&apos;s most trusted home and construction ecosystem — properties,
              services, tools and more, all in one platform.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><FaFacebook size={16} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" aria-label="X (Twitter)"><FaXTwitter size={16} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={16} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Districts */}
          <div className="footer-col">
            <h4>Top Districts</h4>
            <ul>
              {FOOTER_DISTRICTS.map((d) => (
                <li key={d}>
                  <a href="#">{d}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <i style={{ display: "flex", flexShrink: 0, marginTop: "3px" }}>
                  <MapPin size={16} />
                </i>
                MG Road, Kochi, Kerala 682016
              </li>
              <li>
                <i style={{ display: "flex", flexShrink: 0 }}><Phone size={16} /></i>
                +91 98765 43210
              </li>
              <li>
                <i style={{ display: "flex", flexShrink: 0 }}><Mail size={16} /></i>
                hello@nestora.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 nestora. All rights reserved. | Made with{" "}
          <i style={{ display: "inline-flex", verticalAlign: "middle" }}>
            <Heart size={13} fill="currentColor" />
          </i>{" "}
          in Kerala.
        </div>
      </div>
    </footer>
  );
}
