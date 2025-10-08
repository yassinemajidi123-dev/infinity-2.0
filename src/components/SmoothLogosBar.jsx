import { useEffect, useRef, useState } from "react";

/** Ultra-smooth, infinite-scrolling logos bar (null-safe JS version) */
export default function SmoothLogosBar({
  height = 110,
  gap = 18,
  speed = 0.35,
  logos = [
    "/leagues/liga.png",
    "/leagues/Premier_League.png",
    "/leagues/champions.png",
    "/leagues/bundesliga.png",
    "/leagues/formula.png",
    "/leagues/EFL.png",
    "/leagues/enfusion.png",
    "/leagues/ksw.png",
    "/leagues/ucl.png",
    "/leagues/2026_FIFA_World_Cup.png",
    "/leagues/ufc.png",
  ],

  // NEW (optional) heading/subtitle; defaults to your French text
  title = "Watch the World’s Biggest Leagues and Tournaments in 4K UHD",
  subtitle = "Clean and premium, fits a modern streaming platform"
}) {
  const railRef = useRef(null);
  const wrapRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const state = useRef({
    x: 0,
    lastTime: 0,
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    w: 0,
    contentW: 0,
    reduced: false,
  });

  const items = [...logos, ...logos];

  useEffect(() => {
    const s = state.current;
    s.reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;

    const rail = railRef.current;
    const wrap = wrapRef.current;
    if (!rail || !wrap) return;

    const measure = () => {
      s.w = wrap.clientWidth || 0;
      s.contentW = rail.scrollWidth / 2;
    };
    measure();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(rail);
      ro.observe(wrap);
    } else {
      window.addEventListener("resize", measure);
    }

    let raf;
    const step = (t) => {
      if (!playing || s.dragging || s.reduced) {
        s.lastTime = t;
        raf = requestAnimationFrame(step);
        return;
      }
      if (!s.lastTime) s.lastTime = t;
      const dt = t - s.lastTime;
      s.lastTime = t;

      s.x -= speed * dt;
      if (-s.x >= s.contentW) s.x += s.contentW;
      rail.style.transform = `translateX(${s.x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, [playing, speed]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const rail = railRef.current;
    if (!wrap || !rail) return;
    const s = state.current;

    const getX = (e) => (e.touches ? e.touches[0].pageX : e.pageX);

    const down = (e) => {
      s.dragging = true;
      setPlaying(false);
      s.dragStartX = getX(e);
      const m = /translateX\((-?\d+(\.\d+)?)px\)/.exec(rail.style.transform || "");
      s.dragStartPos = m ? parseFloat(m[1]) : s.x;
      rail.classList.add("is-dragging");
    };

    const move = (e) => {
      if (!s.dragging) return;
      const dx = getX(e) - s.dragStartX;
      s.x = s.dragStartPos + dx;
      if (s.x > 0) s.x -= s.contentW;
      if (s.x < -s.contentW) s.x += s.contentW;
      rail.style.transform = `translateX(${s.x}px)`;
    };

    const up = () => {
      if (!s.dragging) return;
      s.dragging = false;
      rail.classList.remove("is-dragging");
      setPlaying(true);
    };

    const wheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        s.x -= e.deltaY * 0.9;
        rail.style.transform = `translateX(${s.x}px)`;
        e.preventDefault();
      }
    };

    wrap.addEventListener("mousedown", down);
    wrap.addEventListener("mousemove", move);
    wrap.addEventListener("mouseleave", up);
    wrap.addEventListener("mouseup", up);
    wrap.addEventListener("touchstart", down, { passive: true });
    wrap.addEventListener("touchmove", move, { passive: true });
    wrap.addEventListener("touchend", up);
    wrap.addEventListener("wheel", wheel, { passive: false });

    const enter = () => setPlaying(false);
    const leave = () => setPlaying(true);
    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);

    return () => {
      wrap.removeEventListener("mousedown", down);
      wrap.removeEventListener("mousemove", move);
      wrap.removeEventListener("mouseleave", up);
      wrap.removeEventListener("mouseup", up);
      wrap.removeEventListener("touchstart", down);
      wrap.removeEventListener("touchmove", move);
      wrap.removeEventListener("touchend", up);
      wrap.removeEventListener("wheel", wheel);
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="section smooth-bar purple">
      <div className="container">
        {/* NEW: heading above the logos */}
        <div className="smooth-heading">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>

        <div className="smooth-wrap" ref={wrapRef} style={{ height: height + 20 }}>
          <div className="smooth-rail" ref={railRef} style={{ gap: `${gap}px` }}>
            {items.map((src, i) => (
              <div
                className="league-card square pill"
                style={{ height, width: height }}
                key={`${src}-${i}`}
              >
                <img src={src} alt="league" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
