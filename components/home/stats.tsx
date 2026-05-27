"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Users, Handshake, Star } from "lucide-react";
import { STATS } from "@/lib/mock-data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  home: Home,
  users: Users,
  handshake: Handshake,
  star: Star,
};

function StatItem({
  icon,
  value,
  suffix,
  label,
}: {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const Icon = iconMap[icon] ?? Home;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <i style={{ display: "flex", justifyContent: "center" }}>
        <Icon size={38} />
      </i>
      <h2>{count.toLocaleString()}</h2>
      <span>{suffix}</span>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
