"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { NAV_LINKS } from "@/lib/mock-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-wrapper">
        <Link href="/" className="logo">
          <i style={{ display: "inline-flex", color: "var(--emerald)" }}>
            <Home size={26} />
          </i>
          <span>nestora<span className="accent">Hub</span></span>
        </Link>

        <nav className={`nav-menu${menuOpen ? " active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/login" className="btn btn-ghost">Login</Link>
          <Link href="/register" className="btn btn-primary">Register</Link>
          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
