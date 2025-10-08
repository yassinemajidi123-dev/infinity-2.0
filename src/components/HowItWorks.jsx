export default function HowItWorks() {
  return (
    <section className="section how-sec" id="how">
      <div className="container">
        <p className="how-kicker">OUR SERVICES</p>
        <h2 className="how-title">How to get your IPTV account?</h2>

        <div className="how-flow" aria-label="steps">
          {/* Step 1 */}
          <article className="how-step">
            <div className="how-icon">
              {/* bag icon */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 8h12l1 11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 8Z" />
                <path d="M9 8V7a3 3 0 1 1 6 0v1" />
              </svg>
            </div>
            <h3>Place your order</h3>
            <p>Choose the subscription plan that fits you best and submit your order.</p>
          </article>

          {/* connector */}
          <div className="how-connector" aria-hidden="true">
            <span className="dot" />
            <span className="line" />
            <span className="arrow">›</span>
          </div>

          {/* Step 2 */}
          <article className="how-step">
            <div className="how-icon">
              {/* user icon */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                <path d="M3 21a9 9 0 0 1 18 0" />
              </svg>
            </div>
            <h3>Get your IPTV account</h3>
            <p>This takes 5–60 minutes. Check your email and WhatsApp for activation details.</p>
            <a className="btn how-cta" href="#pricing">Prices & Plans</a>
          </article>

          {/* connector */}
          <div className="how-connector" aria-hidden="true">
            <span className="dot" />
            <span className="line" />
            <span className="arrow">›</span>
          </div>

          {/* Step 3 */}
          <article className="how-step">
            <div className="how-icon">
              {/* play icon */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7Z" />
              </svg>
            </div>
            <h3>Enjoy watching</h3>
            <p>Over 27,000 live channels and 65,000+ movies & series—on every device.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
