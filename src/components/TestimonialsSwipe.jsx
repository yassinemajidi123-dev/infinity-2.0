import { useRef } from "react";

export default function TestimonialsSwipe({
  title = "Amazing feedback from our valued clients.",
  kicker = "— Our Clients —",
  images = [
    "/public/LLOGO.png",
    "/testimonials/wa2.jpg",
    "/testimonials/wa3.jpg",
    "/testimonials/wa4.jpg",
    "/testimonials/wa5.jpg",
  ],
}) {
  const wrapRef = useRef(null);
  const state = useRef({ down:false, x:0, scroll:0, v:0, raf:0, last:0 });

  const down = (e) => {
    const x = ("touches" in e ? e.touches[0].pageX : e.pageX);
    state.current = { ...state.current, down:true, x, scroll: wrapRef.current.scrollLeft, v:0, last: performance.now() };
    wrapRef.current.classList.add("dragging");
  };
  const move = (e) => {
    if (!state.current.down) return;
    const x = ("touches" in e ? e.touches[0].pageX : e.pageX);
    const dx = state.current.x - x;
    const now = performance.now();
    const dt = now - state.current.last || 16;
    state.current.v = (dx / dt) * 16; // px/frame
    state.current.last = now;
    wrapRef.current.scrollLeft = state.current.scroll + dx;
  };
  const up = () => {
    if (!state.current.down) return;
    state.current.down = false;
    wrapRef.current.classList.remove("dragging");
    // inertial scrolling
    cancelAnimationFrame(state.current.raf);
    const step = () => {
      if (Math.abs(state.current.v) < 0.1) return;
      wrapRef.current.scrollLeft += state.current.v;
      state.current.v *= 0.95; // friction
      state.current.raf = requestAnimationFrame(step);
    };
    state.current.raf = requestAnimationFrame(step);
  };
  const wheel = (e) => {
    // convert vertical wheel to horizontal for convenience
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      wrapRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section className="section testi">
      <div className="container">
        <p className="testi-kicker">{kicker}</p>
        <h2 className="testi-title">{title}</h2>

        <div
          ref={wrapRef}
          className="testi-wrap"
          onMouseDown={down}
          onMouseMove={move}
          onMouseLeave={up}
          onMouseUp={up}
          onTouchStart={down}
          onTouchMove={move}
          onTouchEnd={up}
          onWheel={wheel}
        >
          <div className="testi-rail">
            {images.map((src, i) => (
              <figure className="testi-card" key={i}>
                <img src={src} alt={`Témoignage ${i+1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
