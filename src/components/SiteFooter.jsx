import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Left: logo + copy */}
        <div className="footer-brand">
          <img className="footer-logo" src="/LLOGO.png" alt="INFINITY TV" />
          <p>
            Choose IPTV with our quality subscriptions. Discover the best television experience now!

!
          </p>
        </div>

        {/* Middle-left: quick links 1 */}
        <nav className="footer-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/policies/terms">Termes et conditions</Link></li>
            <li><Link to="/packages">Our offers</Link></li>
          </ul>
        </nav>

        {/* Middle-right: quick links 2 */}
        <nav className="footer-group">
          <h4>Quick Links</h4>
          <ul>       
            <li><Link to="/policies/privacy">Privacy Policy</Link></li>
             <li><Link to="/policies/refund">Refund Policy</Link></li>
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="footer-cta">
          <h4>Get the Best IPTV</h4>
          <p>
           Are you looking for a reliable service to watch your favorite shows?
          </p>
          <Link to="/contact" className="btn">Contact us</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} INFINITY TV. All rights reserved.</span>
      </div>
    </footer>
  );
}
    