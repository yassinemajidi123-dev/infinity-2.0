// src/components/SiteFooter.jsx
import { Link } from "react-router-dom";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Left: logo + short blurb */}
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/LLOGO.png"
            alt="INFINITY TV"
            width="160"
            height="50"
            loading="lazy"
            decoding="async"
          />
          <p>
            Choose IPTV with our quality subscriptions. Discover the best television
            experience now!
          </p>
        </div>

        {/* Quick Links 1 */}
        <nav className="footer-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/policies/terms">Terms and Conditions</Link></li>
            <li><Link to="/packages">Our offers</Link></li>
          </ul>
        </nav>

        {/* Quick Links 2 */}
        <nav className="footer-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/policies/privacy">Privacy Policy</Link></li>
            <li><Link to="/policies/refund">Refund Policy</Link></li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="footer-cta">
          <h4>Get the Best IPTV</h4>
          <p>Are you looking for a reliable service to watch your favorite shows?</p>
          {/* simple button (no gradient) */}
          <Link to="/contact" className="btn contact-simple">Contact us</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer-bottom">
        <span>© {year} INFINITY TV. All rights reserved.</span>
      </div>
    </footer>
  );
}
<div className="policy-strip">
  <div className="container policy-row">
    <nav className="policy-links" aria-label="Policies">
      <Link to="/policies/refund">Refund Policy</Link>
      <span className="sep" aria-hidden>•</span>
      <Link to="/policies/privacy">Privacy Policy</Link>
      <span className="sep" aria-hidden>•</span>
      <Link to="/policies/cookies">Cookies Policy</Link>
    </nav>

    <div className="policy-copy">
      © {new Date().getFullYear()} INFINITY TV. All rights reserved.
      <span className="heart" aria-hidden>❤</span>
    </div>
  </div>
</div>
