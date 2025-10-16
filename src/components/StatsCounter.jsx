import { useEffect, useRef, useState } from "react";

function useCountUp(finalValue = 1000, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(finalValue * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [finalValue, duration, start]);

  return value;
}

export default function StatsCounter() {
  const secRef = useRef(null);
  const [active, setActive] = useState(false);

  // Trigger once when ~30% visible
  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stats = [
    { label: "SATISFIED CLIENTS",   to: 4553,  icon: "⭐" },
    { label: "4K MOVIES",           to: 65000,  icon: "▶" },
    { label: "YEARS OF EXPERIENCE", to: 8,      icon: "🌍"  },
  ];

  return (
    <section className="section stats-sec purple-bg" ref={secRef} id="stats">
      <div className="container">
        <h2 className="stats-title">Why Thousands Trust Us</h2>
        <p className="stats-sub">
          High-quality IPTV, fast delivery, and reliable support — backed by our impressive numbers.
        </p>

        <div className="stats-grid">
          {stats.map((s, i) => {
            const val = useCountUp(s.to, 1400 + i * 250, active);
            return (
              <article className="stat-card" key={s.label}>
                <div className="stat-icon" aria-hidden>
                  <span>{s.icon}</span>
                </div>
                <div className="stat-value">
                  {val.toLocaleString("en-US")}
                  {s.to >= 10000 ? "+" : s.to <= 12 ? "+" : ""}
                </div>
                <div className="stat-label">{s.label}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
