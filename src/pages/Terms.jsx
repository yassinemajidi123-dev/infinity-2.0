// src/pages/Terms.jsx
import { useEffect } from "react";

// Scroll to top once when this page mounts
function ScrollTopOnMount() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return null;
}

export default function Terms() {
  // --- Customize these values if needed ---
  const BRAND       = "INFINITY TV";
  const COMPANY     = "INFINITY TV SAS";
  const EMAIL       = "contact@monsite.com";
  const SITE        = "https://infinitytv2.netlify.app/";
  const COUNTRY     = "France";
  const LAST_UPDATE = "2025-10-01";
  // ---------------------------------------

  return (
    <section className="section policy">
      <ScrollTopOnMount />

      <div className="container">
        <h1>Terms & Conditions</h1>
        <p className="muted">Last updated: {LAST_UPDATE}</p>

        <nav className="policy-toc">
          <a href="#changes">1. Changes to the Terms of Use</a>
          <a href="#age">2. Minimum Age Requirement</a>
          <a href="#tos">3. Terms of Use & Service</a>
          <a href="#thirdparty">4. Third-Party Purchases</a>
          <a href="#quality">5. Stream Quality</a>
          <a href="#balance">6. Used Balance</a>
          <a href="#vpn">7. VPN/Proxy Use</a>
          <a href="#accuracy">8. Accuracy of Information</a>
          <a href="#compat">9. Compatibility</a>
          <a href="#data">10. Internet Service & Data Usage</a>
          <a href="#sharing">11. Subscription Sharing</a>
          <a href="#purchase">12. Purchase Details</a>
          <a href="#suspension">13. Suspension & Downtime</a>
          <a href="#lang">14. Notices & Language</a>
          <a href="#termination">15. Termination</a>
          <a href="#ip">16. Trademarks & IP</a>
          <a href="#law">17. Governing Law & Jurisdiction</a>
        </nav>

        <h2 id="changes">1. Changes to the Terms of Use</h2>
        <p>We may, at any time and at our sole discretion, adjust these Terms of Use…</p>

        <h2 id="age">2. Minimum Age Requirement</h2>
        <p>To become a member and use {BRAND} services, you must be 18+.</p>

        <h2 id="tos">3. Terms of Use & Service</h2>
        <p>You may not restream, distribute, broadcast, or transmit the content.</p>

        <h2 id="thirdparty">4. Third-Party Purchases</h2>
        <p>Your dealings with third-party vendors are solely between you and them.</p>

        <h2 id="quality">5. Stream Quality</h2>
        <p>Performance depends on your network, devices, location, and setup…</p>

        <h2 id="balance">6. Used Balance</h2>
        <p>All purchased subscriptions and used credits are final and non-refundable.</p>

        <h2 id="vpn">7. VPN or Proxy Use</h2>
        <p>Using a VPN or proxy server is permitted.</p>

        <h2 id="accuracy">8. Accuracy of Information</h2>
        <p>Data you submit must be accurate and up to date. Keep passwords secure.</p>

        <h2 id="compat">9. Compatibility</h2>
        <p>Use devices that meet the system and compatibility requirements.</p>

        <h2 id="data">10. Internet Service & Data Usage</h2>
        <p>You are responsible for network access charges.</p>

        <h2 id="sharing">11. Subscription Sharing</h2>
        <p>Sharing is not permitted. One active stream at a time unless you buy more.</p>

        <h2 id="purchase">12. Purchase Details</h2>
        <p>Follow the ordering procedures shown in the service; details may change without notice.</p>

        <h2 id="suspension">13. Suspension & Downtime</h2>
        <p>Access may be suspended during unplanned downtime or unavailability.</p>

        <h2 id="lang">14. Notices & Language</h2>
        <p>All correspondence and notices must be in English.</p>

        <h2 id="termination">15. Termination</h2>
        <p>{BRAND} may terminate or limit access at any time for violations.</p>

        <h2 id="ip">16. Trademarks & Intellectual Property</h2>
        <p>All trademarks remain the property of their respective owners.</p>

        <h2 id="law">17. Governing Law & Jurisdiction</h2>
        <p>These Terms are governed by the laws of Europe…</p>

        <hr style={{ opacity: .15, margin: "18px 0" }} />
        <p className="muted">
          Company: {COMPANY} · Site: <a href={SITE}>{SITE}</a> · Support: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
