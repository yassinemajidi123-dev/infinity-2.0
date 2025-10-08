import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Left: logo + copy */}
        <div className="footer-brand">
          <img className="footer-logo" src="/LLOGO.png" alt="INFINITY TV" />
          <p>
            Optez pour l’IPTV en France 🇫🇷 avec nos abonnements de qualité.
            Découvrez la meilleure expérience télévisuelle dès maintenant !
          </p>
        </div>

        {/* Middle-left: quick links 1 */}
        <nav className="footer-group">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link to="/policies/terms">Termes et conditions</Link></li>
            <li><Link to="/about">À propos de nous</Link></li>
            <li><Link to="/packages">Nos offres</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* Middle-right: quick links 2 */}
        <nav className="footer-group">
          <h4>Liens rapides</h4>
          <ul>
            <li><Link to="/policies/refund">Politique de remboursement</Link></li>
            <li><Link to="/policies/privacy">Politique de confidentialité</Link></li>
            <li><Link to="/policies/cookies">Politique de cookies</Link></li>
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="footer-cta">
          <h4>Obtenez le meilleur IPTV en France !</h4>
          <p>
            Vous recherchez un service fiable pour regarder vos émissions préférées ?
          </p>
          <Link to="/contact" className="btn">Contact us</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} INFINITY TV. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
    