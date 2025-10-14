// src/pages/Privacy.jsx
import { useEffect } from "react";

export default function Privacy() {
  // scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const BRAND = "INFINITY TV";
  const WEBSITE = "https://your-domain.com";   // change to your domain
  const EMAIL = "contact@infinitytv.com";      // change to your email
  const LAST_UPDATE = "2025-10-01";

  return (
    <section className="section policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated: {LAST_UPDATE}</p>

        <p>
          At {BRAND}, we take your privacy seriously. This Privacy Policy explains what
          personal information we collect when you visit our website, how we use it, and
          how we protect it.
        </p>

        <h2>Information We Collect</h2>
        <ol>
          <li>
            <strong>Personally Identifiable Information:</strong> name, email address,
            postal address, phone number—collected to provide services and contact you.
          </li>
          <li>
            <strong>Payment Information:</strong> card/PayPal details processed by
            third-party providers to fulfill orders.
          </li>
          <li>
            <strong>Usage Information:</strong> pages viewed, links clicked, and similar
            data (aggregated/anonymous) to improve our site and services.
          </li>
        </ol>

        <h2>How We Use Information</h2>
        <ol>
          <li><strong>Service delivery</strong> (orders, account, support).</li>
          <li>
            <strong>Communications</strong> (updates, important notices, offers). You can
            opt out using links in our emails or by contacting us.
          </li>
          <li><strong>Improvement</strong> (analyzing trends and tailoring content).</li>
        </ol>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your
          data. However, no method of transmission or storage is 100% secure.
        </p>

        <h2>Disclosure of Information</h2>
        <ul>
          <li>When required to provide services (e.g., payment processors).</li>
          <li>When required by law or a competent authority.</li>
          <li>To protect our rights, property, or safety, or that of users/the public.</li>
        </ul>

        <h2>Cookies & Similar Technologies</h2>
        <p>
          We use cookies to improve your experience, personalize content/ads, and analyze
          usage. You can refuse cookies in your browser; some features may then be limited.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may link to external sites we do not operate. We are not responsible
          for their content or privacy practices—please review their policies.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may modify this Privacy Policy at any time. Changes take effect upon posting
          on our website. Please review this page periodically.
        </p>

        <h2>Contact Us</h2>
        <p className="muted">
          <strong>{BRAND}</strong><br />
          Website: <a href={WEBSITE}>{WEBSITE}</a><br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
