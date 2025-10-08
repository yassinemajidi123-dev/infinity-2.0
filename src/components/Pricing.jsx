export default function Pricing() {
  const plans = [
    {
      title: "3 Months",
      badge: "For 1 Screen",
      price: "€29.99",
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
      cta: "#contact",
    },
    {
      title: "6 Months",
      badge: "For 1 Screen",
      price: "€39.99",
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
      cta: "#contact",
    },
    {
      title: "1 Year",
      badge: "For 1 Screen",
      price: "€49.99",
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
      cta: "#contact",
    },
  ];

  return (
    <section id="pricing" className="section pricing-sec">
      <div className="container">
        <h2 className="pricing-title">— ° Choose the best IPTV subscription plan that suits you ! ° —</h2>
        <p className="pricing-sub">Your subscription will receive an email</p>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <article className={`price-card ${p.highlight ? "is-featured" : ""}`} key={i}>
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
