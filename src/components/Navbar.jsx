// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../navbar.mobile.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll on iOS when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || '';
    return () => (document.body.style.overflow = prev || '');
  }, [open]);

  return (
    <header className={`nav nav-purple ${open ? 'is-open' : ''}`}>
      <div className="container nav-wrap">
        {/* Brand (centered on mobile via CSS) */}
        <div className="brand">
          <Link to="/" className="brand-logo-wrap" aria-label="INFINITY TV — Home">
            <img
              className="brand-logo"
              src="/logo-mobile.png"
              width="200"
              height="48"
              alt="INFINITY TV"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="menu" role="navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Packages
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            FAQ
          </NavLink>

          <Link to="/contact" className="btn ghost">Contact</Link>

          {/* ✅ Free Trial (WhatsApp) */}
          <a
            className="btn trial"
            href="https://wa.me/212617678180?text=Hello%20INFINITY%20TV%2C%20I%27d%20like%20a%20free%20trial%20please."
            target="_blank"
            rel="noreferrer"
            aria-label="Start a free trial on WhatsApp"
          >
            Free Trial
          </a>

          <NavLink to="/packages" className="btn">
            Order
          </NavLink>

          {/* Instagram (desktop; hidden on phone via CSS) */}
          <a
            className="social-ig"
            href="https://instagram.com/infinity_tv__"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
              />
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Backdrop */}
      <button className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden={!open} />

      {/* Mobile drawer */}
      <nav
        id="mobile-drawer"
        className="nav-drawer"
        onClick={() => setOpen(false)}
      >
        {/* Primary */}
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/packages">Packages</NavLink>
        <NavLink to="/faq">FAQ</NavLink>

        {/* ✅ Free Trial (WhatsApp) */}
        <a
          className="btn trial"
          href="https://wa.me/212617678180?text=Hello%20INFINITY%20TV%2C%20I%27d%20like%20a%20free%20trial%20please."
          target="_blank"
          rel="noreferrer"
          aria-label="Start a free trial on WhatsApp"
        >
          Free Trial
        </a>

        {/* Simple Contact (no gradient) */}
        <Link to="/contact" className="btn ghost">Contact us</Link>

        {/* ---- Light gray POLICIES strip at the very bottom ---- */}
        <div className="drawer-policy-strip">
          <h6 className="drawer-title">POLICIES</h6>
          <Link className="policy-link" to="/policies/terms">Terms and Conditions</Link>
          <Link className="policy-link" to="/policies/privacy">Privacy Policy</Link>
          <Link className="policy-link" to="/policies/refund">Refund Policy</Link>

          <div className="drawer-policy-copy">
            © {new Date().getFullYear()} INFINITY TV
          </div>
        </div>
      </nav>
    </header>
  );
}
