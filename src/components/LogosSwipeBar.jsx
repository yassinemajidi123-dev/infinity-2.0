import { useRef } from "react";

/**
 * Horizontal swipe/drag bar (safe version)
 * - Works with mouse, touch, wheel
 * - No crash if refs are null
 */
export default function LogosSwipeBar() {
  const wrapRef = useRef(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

 const logos = [
    "/vod/HBO_Max.png",
    "/vod/hulu.png",
    "/vod/Netflix.png",
    "/vod/Universal.png",
    "/vod/AMC_Theatres.png",
    "/vod/Warner-Bros.png",
    "/vod/FOX.png",
    "/vod/DAZN.png",
    "/vod/Videoland.png",
    "/vod/viaplay.png",
    
    // repeat or add more items…
  ];

  const onPointerDown = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    dragging.current = true;
    startX.current = e.pageX ?? (e.touches && e.touches[0].pageX) ?? 0;
    startScroll.current = el.scrollLeft;
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const el = wrapRef.current;
    if (!el) return;
    const x = e.pageX ?? (e.touches && e.touches[0].pageX) ?? 0;
    el.scrollLeft = startScroll.current + (startX.current - x);
  };

  const onPointerUp = () => {
    dragging.current = false;
    wrapRef.current?.classList.remove("is-dragging");
  };

  const onWheel = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    // convert vertical wheel to horizontal scroll (nice on mice)
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section className="vodbar">
      <div
        ref={wrapRef}
        className="vodbar-wrap"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseLeave={onPointerUp}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
        onWheel={onWheel}
      >
        <div className="vodbar-rail">
          {logos.concat(logos).map((src, i) => (
            <div className="vod-tile" key={i}>
              <img
                src={encodeURI(src)}
                alt="brand"
                loading="lazy"
                onError={(ev) => {
                  // If an image path is wrong, show the filename as text (no crash)
                  const name = src.split("/").pop();
                  ev.currentTarget.replaceWith(
                    Object.assign(document.createElement("span"), {
                      textContent: name?.replace(/\.(png|jpg|svg|webp)$/i, "") || "logo",
                      className: "vod-fallback",
                    })
                  );
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <h3 className="vodbar-title">THE LATEST MOVIES AND SERIES UP TO DATE</h3>
    </section>
  );
}
