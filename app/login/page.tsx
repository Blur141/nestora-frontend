"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa6";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ credential: "", password: "", remember: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Logging in…");
  };

  return (
    <div className="auth-body">
      <div className="auth-bg" />

      <Link href="/" className="auth-logo">
        <i style={{ display: "inline-flex", color: "#fbbf24" }}><Home size={22} /></i>
        <span>nestora<span className="accent" style={{ color: "#fbbf24" }}>Hub</span></span>
      </Link>

      <div className="auth-card glass">
        <h1>Welcome Back</h1>
        <p>Sign in to continue to nestorab</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email or Phone</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><User size={16} /></i>
              <input
                type="text"
                required
                placeholder="you@example.com"
                value={form.credential}
                onChange={(e) => setForm({ ...form, credential: e.target.value })}
              />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-with-icon">
              <i style={{ display: "inline-flex" }}><Lock size={16} /></i>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="••••••••"
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

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
              />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            Login
            <i style={{ display: "inline-flex" }}><ArrowRight size={16} /></i>
          </button>
        </form>

        <div className="divider"><span>or continue with</span></div>

        <div className="social-logins">
          <button className="social-btn" aria-label="Google"><FaGoogle size={20} /></button>
          <button className="social-btn" aria-label="Facebook"><FaFacebook size={20} /></button>
          <button className="social-btn" aria-label="Apple"><FaApple size={20} /></button>
        </div>

        <p className="auth-foot">
          Don&apos;t have an account?{" "}
          <Link href="/register">Register free</Link>
        </p>
      </div>
    </div>
  );
}
