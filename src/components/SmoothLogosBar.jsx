import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Ultra-smooth, infinitely-scrolling logos bar.
 *
 * Props:
 * - height: number (px)          -> tile size (square)
 * - gap: number (px)             -> spacing between tiles
 * - speed: number (px/ms)        -> autoplay speed; e.g. 0.12 is slow & smooth
 * - direction: 'rtl' | 'ltr'     -> scroll direction (default 'rtl')
 * - logos: string[]              -> list of image URLs
 * - title?: string               -> optional heading
 * - subtitle?: string            -> optional subheading
 * - pauseOnHover?: boolean       -> pause while mouse is over (default true)
 * - pauseOnFocus?: boolean       -> pause while focused (default true)
 * - respectReducedMotion?: bool  -> respect OS reduce-motion (default true)
 * - pauseWhenNotVisible?: bool   -> pause when off-screen/tab hidden (default true)
 * - edgeFade?: boolean           -> fade masks on edges (default true)
 * - ariaLabel?: string           -> accessibility label
 */
export default function SmoothLogosBar({
  height = 110,
  gap = 18,
  speed = 0.35,
  direction = "rtl",
  logos = [],
  title = "Watch the World’s Biggest Leagues and Tournaments in 4K UHD",
  subtitle = "Clean and premium, fits a modern streaming platform",
  pauseOnHover = true,
  pauseOnFocus = true,
  respectReducedMotion = true,
  pauseWhenNotVisible = true,
  edgeFade = true,
  ariaLabel = "leagues logos",
}) {
  const wrapRef = useRef(null);
  const railRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const s = useRef({
    x: 0,
    lastTime: 0,
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
    w: 0,
    contentW: 0,
    reduced: false,
    visible: true,
  });

  const spd = Math.max(0, Number(speed) || 0);
  const dir = direction === "ltr" ? 1 : -1;

  const items = useMemo(() => {
    const list = Array.isArray(logos) ? logos.filter(Boolean) : [];
    return [...list, ...list];
  }, [logos]);

  // autoplay loop
  useEffect(() => {
    const state = s.current;
    state.reduced = respectReducedMotion
      ? (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false)
      : false;

    const wrap = wrapRef.current;
    const rail = railRef.current;
    if (!wrap || !rail) return;

    const measure = () => {
      state.w = wrap.clientWidth || 0;
      state.contentW = rail.scrollWidth / 2; // width of one full set
    };
    measure();

    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(measure);
      ro.observe(rail);
      ro.observe(wrap);
    } else {
      window.addEventListener("resize", measure);
    }

    // pause when not visible (intersection)
    let io;
    const setVisible = (v) => { state.visible = v; };
    if (pauseWhenNotVisible && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => setVisible(entries[0]?.isIntersecting ?? true),
        { root: null, threshold: 0.01 }
      );
      io.observe(wrap);
    } else {
      setVisible(true);
    }

    // pause when tab is hidden
    const vis = () => {
      if (!pauseWhenNotVisible) return;
      setVisible(document.visibilityState !== "hidden");
    };
    document.addEventListener("visibilitychange", vis);

    let raf;
    const step = (t) => {
      const canPlay =
        playing &&
        !state.dragging &&
        !state.reduced &&
        (pauseWhenNotVisible ? state.visible : true) &&
        spd > 0;

      if (!state.lastTime) state.lastTime = t;

      if (canPlay) {
        const dt = t - state.lastTime;
        state.x += dir * spd * dt; // rtl negative, ltr positive
        if (state.x <= -state.contentW) state.x += state.contentW;
        if (state.x >= 0) state.x -= state.contentW;
        rail.style.transform = `translateX(${state.x}px)`;
      }

      state.lastTime = t;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect?.();
      io?.disconnect?.();
      document.removeEventListener("visibilitychange", vis);
      window.removeEventListener("resize", measure);
    };
  }, [playing, spd, dir, respectReducedMotion, pauseWhenNotVisible]);

  // drag / wheel / hover/focus pause
  useEffect(() => {
    const wrap = wrapRef.current;
    const rail = railRef.current;
    if (!wrap || !rail) return;
    const state = s.current;

    const getX = (e) => (e.touches ? e.touches[0].pageX : e.pageX);

    const down = (e) => {
      state.dragging = true;
      setPlaying(false);
      state.dragStartX = getX(e);
      const m = /translateX\((-?\d+(\.\d+)?)px\)/.exec(rail.style.transform || "");
      state.dragStartPos = m ? parseFloat(m[1]) : state.x;
      rail.classList.add("is-dragging");
    };

    const move = (e) => {
      if (!state.dragging) return;
      const dx = getX(e) - state.dragStartX;
      state.x = state.dragStartPos + dx;
      if (state.x > 0) state.x -= state.contentW;
      if (state.x < -state.contentW) state.x += state.contentW;
      rail.style.transform = `translateX(${state.x}px)`;
    };

    const up = () => {
      if (!state.dragging) return;
      state.dragging = false;
      rail.classList.remove("is-dragging");
      setPlaying(true);
    };

    const wheel = (e) => {
      // vertical scroll => horizontal move
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        state.x -= e.deltaY * 0.9;
        rail.style.transform = `translateX(${state.x}px)`;
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

    const enter = () => pauseOnHover && setPlaying(false);
    const leave = () => pauseOnHover && setPlaying(true);
    const focus = () => pauseOnFocus && setPlaying(false);
    const blur = () => pauseOnFocus && setPlaying(true);

    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    wrap.addEventListener("focusin", focus);
    wrap.addEventListener("focusout", blur);

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
      wrap.removeEventListener("focusin", focus);
      wrap.removeEventListener("focusout", blur);
    };
  }, [pauseOnHover, pauseOnFocus]);

  // fallback label for broken images
  const labelFromPath = (p) => {
    try {
      const base = p.split("/").pop()?.split(".")[0] || "logo";
      return base.replace(/[_-]/g, " ").toUpperCase().slice(0, 22);
    } catch {
      return "LOGO";
    }
  };

  return (
    <section className="section smooth-bar purple" aria-label={ariaLabel}>
      <div className="container">
        {(title || subtitle) && (
          <div className="smooth-heading">
            {title && <h3>{title}</h3>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        <div
          className="smooth-wrap"
          ref={wrapRef}
          style={{ height: height + 20 }}
          role="region"
          aria-roledescription="carousel"
        >
          {edgeFade && (
            <>
              <div aria-hidden className="smooth-fade-left" />
              <div aria-hidden className="smooth-fade-right" />
            </>
          )}

          <div
            className="smooth-rail"
            ref={railRef}
            style={{ gap: `${gap}px`, willChange: "transform" }}
          >
            {items.map((src, i) => (
              <div
                className="league-card square pill"
                style={{ height, width: height }}
                key={`${src}-${i}`}
              >
                <img
                  src={src}
                  alt={labelFromPath(src)}
                  loading="lazy"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="vod-fallback">${labelFromPath(src)}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* small CSS for the fades if you use them */}
      <style>{`
        .smooth-wrap { position:relative; overflow:hidden; }
        .smooth-fade-left,
        .smooth-fade-right{
          position:absolute; top:0; bottom:0; width:90px; pointer-events:none; z-index:2;
        }
        .smooth-fade-left { left:0;  background:linear-gradient(90deg, #0b1221 35%, rgba(11,18,33,0)); }
        .smooth-fade-right{ right:0; background:linear-gradient(-90deg, #0b1221 35%, rgba(11,18,33,0)); }
      `}</style>
    </section>
  );
}
