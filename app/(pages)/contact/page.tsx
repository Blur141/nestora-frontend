"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { CONTACT_DETAILS } from "@/lib/mock-data";

const detailIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  mapPin: MapPin, phone: Phone, mail: Mail, clock: Clock,
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Query", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Let&apos;s <span className="gradient-text">Connect</span></h1>
          <p>We&apos;d love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Our Kerala support team is available 7 days a week.</p>

            <ul className="info-list">
              {CONTACT_DETAILS.map((d) => {
                const Icon = detailIcons[d.icon] ?? MapPin;
                return (
                  <li key={d.title}>
                    <i style={{ display: "inline-flex" }}><Icon size={20} /></i>
                    <div>
                      <h4>{d.title}</h4>
                      {d.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="socials" style={{ marginTop: "24px" }}>
              <a href="#" aria-label="Facebook"><FaFacebook size={16} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" aria-label="X"><FaXTwitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp size={16} /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            <div className="form-row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label>Phone</label>
                <input type="tel" placeholder="+91 ..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="field">
                <label>Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  <option>General Query</option>
                  <option>Property Inquiry</option>
                  <option>Service Booking</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Message</label>
              <textarea rows={5} required placeholder="How can we help?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Send Message
              <i style={{ display: "inline-flex" }}><Send size={16} /></i>
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-frame">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.25%2C9.95%2C76.32%2C10.02&layer=mapnik"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="VeeduHub Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
