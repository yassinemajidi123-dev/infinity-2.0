import { useEffect, useMemo, useState } from "react";

export default function Pricing() {
  const plans = [
    {
      title: "3 Months",
      badge: "For 1 Screen",
      price: "€20.00",
      highlight: false,
      features: [
        "SD/HD/Full HD/4K quality",
        "+27,000 channels",
        "+65,000 movies & series",
        "Instant delivery",
        "99.9% uptime guarantee",
        "Compatible with all devices",
        "24/7 support",
        "Free updates",
        "After-sales service",
      ],
      cta: "https://wa.me/212617678180?text=Hello%2C%20I%20want%20the%203%20Months%20plan",
    },
    {
      title: "6 Months",
      badge: "For 1 Screen",
      price: "€30.00",
      highlight: false,
      features: [
        "SD/HD/Full HD/4K quality",
        "+27,000 channels",
        "+65,000 movies & series",
        "Instant delivery",
        "99.9% uptime guarantee",
        "Compatible with all devices",
        "24/7 support",
        "Free updates",
        "After-sales service",
      ],
      cta: "https://wa.me/212617678180?text=Hello%2C%20I%20want%20the%206%20Months%20plan",
    },
    {
      title: "1 Year",
      badge: "For 1 Screen",
      price: "€38.00",
      highlight: true, // highlighted like your right-most blue card
      features: [
        "SD/HD/Full HD/4K Quality",
        "+27,000 channels",
        "+65,000 movies & Series",
        "Instant delivery",
        "99.9% uptime guarantee",
        "Compatible with all devices",
        "24/7 Assistance & Support",
        "Free updates",
        "After-sales service",
      ],
      cta: "https://wa.me/212617678180?text=Hello%2C%20I%20want%20the%201%20Year%20plan",
    },
  ];

  // detect phone width
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    // support older Safari
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  // reorder ONLY on mobile: 1 Year -> 6 Months -> 3 Months
  const orderedPlans = useMemo(() => {
    if (!isMobile) return plans;
    const order = { "1 Year": 0, "6 Months": 1, "3 Months": 2 };
    return [...plans].sort(
      (a, b) => (order[a.title] ?? 99) - (order[b.title] ?? 99)
    );
  }, [isMobile, plans]);

  return (
    <section id="pricing" className="section pricing-sec">
      <div className="container">
        <h2 className="pricing-title"> Choose the best IPTV subscription plan that suits you !</h2>

        <div className="pricing-grid">
          {orderedPlans.map((p, i) => (
            <article className={`price-card ${p.highlight ? "is-featured" : ""}`} key={`${p.title}-${i}`}>
              <div className="card-top">
                <h3>{p.title}</h3>
                <span className="mini-badge">{p.badge}</span>
                <div className="big-price">{p.price}</div>
              </div>

              <ul className="features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path fill="currentColor" d="M9.55 17.54 4.8 12.8l1.4-1.41 3.35 3.36 7.25-7.25 1.41 1.41-8.66 8.63z"/>
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a className={`btn price-btn ${p.highlight ? "btn-light" : ""}`} href={p.cta}>Purchase</a>
              <div className="guarantee">7-day money-back guarantee</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
