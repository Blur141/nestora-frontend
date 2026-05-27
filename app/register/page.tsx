"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, Phone, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa6";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", confirm: "",
    role: "Buyer", terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { alert("Passwords do not match."); return; }
    if (!form.terms) { alert("Please accept the terms and conditions."); return; }
    alert("Account created! Welcome to VeeduHub.");
  };

  return (
    <div className="auth-body">
      <div className="auth-bg" />

      <Link href="/" className="auth-logo">
        <i style={{ display: "inline-flex", color: "#fbbf24" }}><Home size={22} /></i>
        <span>Veedu<span className="accent" style={{ color: "#fbbf24" }}>Hub</span></span>
      </Link>

      <div className="auth-card glass">
        <h1>Create Account</h1>
        <p>Join Kerala&apos;s #1 home platform today</p>

        <div className="social-logins">
          <button className="social-btn" aria-label="Google"><FaGoogle size={20} /></button>
          <button className="social-btn" aria-label="Facebook"><FaFacebook size={20} /></button>
          <button className="social-btn" aria-label="Apple"><FaApple size={20} /></button>
        </div>

        <div className="divider"><span>or register with email</span></div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><User size={16} /></i>
              <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
          </div>

          <div className="field">
            <label>Phone Number</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><Phone size={16} /></i>
              <input type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>

          <div className="field">
            <label>Email</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><Mail size={16} /></i>
              <input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>

          <div className="field">
            <label>I am a</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              style={{ background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)", color: "#fff", borderRadius: "var(--radius-sm)", padding: "12px 16px", width: "100%", outline: "none" }}
            >
              <option style={{ color: "#111" }}>Buyer</option>
              <option style={{ color: "#111" }}>Seller / Owner</option>
              <option style={{ color: "#111" }}>Worker / Technician</option>
              <option style={{ color: "#111" }}>Contractor / Builder</option>
            </select>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><Lock size={16} /></i>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Min. 8 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass((v) => !v)}
                style={{ background: "none", border: "none", cursor: "pointer", display: "inline-flex", color: "rgba(255,255,255,0.6)" }}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><Lock size={16} /></i>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Re-enter password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              />
            </div>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              style={{ marginTop: "2px", flexShrink: 0 }}
            />
            <span>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-foot" style={{ marginTop: "16px" }}>
          Already have an account?{" "}
          <Link href="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
