// src/pages/Packages.jsx
import Pricing from "../components/Pricing.jsx";

export default function Packages() {
  return (
    <>
      {/* Full-bleed hero with background (styled via .packages-hero + ::before) */}
      <section className="packages-hero" aria-label="Packages header">
        <div className="packages-hero-inner container">
          <h1 className="packages-title">Our Packages</h1>
          <p className="packages-sub">
            Choose the IPTV plan that fits you best. Instant activation, 24/7 support.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section" aria-labelledby="packages-pricing-title">
        <div className="container">
          <Pricing />
        </div>
      </section>
    </>
  );
}
