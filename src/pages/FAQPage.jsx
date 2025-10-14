import { useEffect, useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What is IPTV?",
    a: "IPTV (Internet Protocol Television) lets you watch TV over the Internet instead of satellite or cable. You get live channels, VOD and series via a compatible app (TV/box/phone).",
  },
  {
    q: "How can I get IPTV?",
    a: "Choose a plan, receive your credentials by email/WhatsApp, then enter them in a compatible app (e.g., IPTV Smarters, TiviMate, etc.). We’ll guide you if needed.",
  },
  {
    q: "How do I choose my IPTV plan?",
    a: "Select the duration (1, 3, 6, 12 months), the number of simultaneous screens, and the device type you use most (Smart TV, Android TV Box, smartphone, etc.).",
  },
  {
    q: "How long does it take to receive the IPTV code?",
    a: "After payment, activation is usually quick (a few minutes). During peak times, it may take up to 1–2 hours. You’ll receive everything by email/WhatsApp.",
  },
  {
    q: "How do I install IPTV?",
    a: "Install a compatible application (IPTV Smarters, TiviMate, etc.), open it, then enter the link/credentials we send you. A step-by-step guide is provided after purchase.",
  },
  {
    q: "Can I use IPTV everywhere?",
    a: "Yes, as long as you have a stable Internet connection (fiber/ADSL/4G/5G). Quality depends on your bandwidth and network stability.",
  },
  {
    q: "Can I use my subscription on multiple devices?",
    a: "A standard plan allows one simultaneous stream. For multiple screens at the same time, choose a multi-screen plan or additional subscriptions.",
  },
  {
    q: "Can I use IPTV without a satellite dish?",
    a: "Yes. IPTV works entirely over the Internet. No satellite dish is required.",
  },
];

export default function FAQPage() {
  // Scroll to top when the page opens
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((curr) => (curr === i ? null : i));

  return (
    <section className="section">
      <div className="container" id="faq">
        <h1 style={{ margin: "0 0 10px" }}>FAQ</h1>
        <p style={{ color: "var(--muted)", margin: "0 0 18px" }}>
          Find answers to the most common questions about INFINITY TV subscriptions.
        </p>

        {/* Accordion */}
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  padding: "14px 0",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                {item.q}
              </button>

              <div
                className="faq-a"
                style={{
                  transition: "max-height .25s ease",
                  overflow: "hidden",
                  maxHeight: open === i ? "500px" : "0",
                }}
              >
                <p style={{ margin: "0 0 14px", color: "var(--muted)" }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
