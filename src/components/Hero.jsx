export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid hero-center">
        <div className="hero-content">

          <h1>Infinity TV Best IPTV Subscription</h1>
          <p>
            No more waiting or overpaying. Enjoy 27,000 channels + VOD in 4K quality with no contract.
            Football, movies, series—everything is included. Limited-time offer—save 30% today.
          </p>

          {/* CTAs */}
          <div className="btns">
            <a className="btn" href="#pricing">See Plans</a>

            <a
              className="btn trial"  /* gradient is set in CSS below */
              href="https://wa.me/212617678180?text=Hello%2C%20I%20want%20a%20free%20trial%20for%20INFINITY%20TV"
              target="_blank"
              rel="noreferrer"
              aria-label="Start a free trial on WhatsApp"
            >
              Free Trial
            </a>
          </div>

          {/* device strip */}
          <div className="platforms">
            <div className="item">
              <img src="/icons/firetv.png" alt="Fire TV" />
              <span className="label">FIRE TV</span>
            </div>
            <div className="item">
              <img src="/icons/android.png" alt="Android" />
              <span className="label">ANDROID</span>
            </div>
            <div className="item">
              <img src="/icons/ios.png" alt="iOS" />
              <span className="label">IOS</span>
            </div>
            <div className="item">
              <img src="/icons/windows.png" alt="Windows" />
              <span className="label">WINDOWS</span>
            </div>
            <div className="item">
              <img src="/icons/samsung.png" alt="Samsung" />
              <span className="label">SMART TV</span>
            </div>
            <div className="item">
              <img src="/icons/lg.png" alt="LG Smart" />
              <span className="label">LG SMART</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
