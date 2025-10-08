import { useState } from "react";

/** Smart image with: URL-encoding, fallbacks, and final text fallback */
function LogoImg({ srcs = [], alt = "" }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  const safeSrc = (idx) => encodeURI(srcs[idx]); // handle +, spaces, etc.

  const onErr = () => {
    if (i < srcs.length - 1) {
      setI(i + 1);
    } else {
      setFailed(true);
      // helpful console log so you see which one failed
      // open DevTools (F12) → Console to read it
      console.warn(`[logo-miss] Could not load: ${srcs.join(" | ")} (alt="${alt}")`);
    }
  };

  if (failed) {
    return (
      <span
        style={{
          fontSize: ".8rem",
          color: "#cbd5ff",
          opacity: 0.8,
          padding: "0 8px",
          textAlign: "center",
        }}
        title={`Missing image for ${alt}`}
      >
        {alt}
      </span>
    );
  }

  return (
    <img
      src={safeSrc(i)}
      alt={alt}
      loading="lazy"
      onError={onErr}
      style={{ maxWidth: "90%", maxHeight: "82%", objectFit: "contain", display: "block" }}
    />
  );
}

export default function ChannelsMarquee() {
  // TIP: Best is to rename files in /public/channels to kebab-case without '+'
  // e.g. disney-plus.png, canal-plus.png, tnt-sports.png, comedy-central.png
  const logos = [
    { alt: "ITV",           srcs: ["/channels/itv.png", "/channels/ITV.png", "/channels/itv.svg"] },
    { alt: "Amazon Prime",  srcs: ["/channels/amazon-prime.png", "/channels/Amazon_Prime.png", "/channels/prime.png"] },
    { alt: "beIN SPORTS",   srcs: ["/channels/bein-sport.png", "/channels/Bein_sport.png", "/channels/bein.png", "/channels/bein.svg"] },

    // '+' often causes path mistakes — we try several variants and URL-encode them
    { alt: "CANAL+",        srcs: ["/channels/canal-plus.png", "/channels/canal+.png", "/channels/canal+.jpg", "/channels/canal.png", "/channels/canal.svg"] },
    { alt: "CNN",           srcs: ["/channels/cnn.png", "/channels/CNN.png", "/channels/cnn.svg"] },
    { alt: "Comedy Central",srcs: ["/channels/comedy-central.png", "/channels/Comedy_Central.png", "/channels/comedy_central.png", "/channels/comedy-central.svg"] },
    { alt: "Disney+",       srcs: ["/channels/disney-plus.png", "/channels/disney+.png", "/channels/Disney.png", "/channels/disney.png", "/channels/disney.svg"] },

    { alt: "Sky Showcase",  srcs: ["/channels/sky-showcase.png", "/channels/Sky_Showcase.png", "/channels/sky-showcase.svg"] },
    { alt: "TNT Sports",    srcs: ["/channels/tnt-sports.png", "/channels/TNT-Sports.png", "/channels/tntsports.png", "/channels/tnt-sports.svg"] },
    { alt: "Sky Mix",       srcs: ["/channels/sky-mix.png", "/channels/Sky_Mix.png"] },
    { alt: "Sky Kids",      srcs: ["/channels/sky-kids.png", "/channels/skykids.png", "/channels/sky_kids.png"] },
    { alt: "Sky News",      srcs: ["/channels/sky-news.png", "/channels/Sky-News.png", "/channels/sky_news.png"] },
    { alt: "Sky Atlantic",  srcs: ["/channels/sky-atlantic.png", "/channels/Logo_Sky_Atlantic_.png", "/channels/sky_atlantic.png"] },
    { alt: "Sky Cinema",    srcs: ["/channels/sky-cinema.png", "/channels/Sky_Cinema.png", "/channels/sky_cinema.png"] },
    { alt: "Sky Crime",     srcs: ["/channels/sky-crime.png", "/channels/Sky_Crime.png", "/channels/sky_crime.png"] },
  ];

  // which logos are typically light/white → stronger outline for visibility
  const LIGHT_ALTS = new Set([
    "Disney+","Comedy Central","ITV","Amazon Prime",
    "Sky Showcase","Sky Mix","Sky Kids","Sky News","Sky Atlantic","Sky Cinema","Sky Crime"
  ]);

  return (
    <section className="section">
      <div className="container">
        <div className="marquee" aria-label="supported channels">
          <div className="marquee-track">
            {logos.concat(logos).map((l, i) => {
              const isLight = LIGHT_ALTS.has(l.alt);
              return (
                <div className={`ch-item pill ${isLight ? "logo-light" : "logo-dark"}`} key={`${l.alt}-${i}`}>
                  <LogoImg srcs={l.srcs} alt={l.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
