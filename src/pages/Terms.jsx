// src/pages/Terms.jsx
export default function Terms() {
  // --- Customize these values if needed ---
  const BRAND   = "INFINITY TV";
  const COMPANY = "INFINITY TV SAS";
  const EMAIL   = "contact@monsite.com";
  const SITE    = "https://your-domain.com";
  const COUNTRY = "France";
  const LAST_UPDATE = "2025-10-01";
  // ---------------------------------------

  return (
    <section className="section policy">
      <div className="container">
        <h1>Terms & Conditions</h1>
        <p className="muted">Last updated: {LAST_UPDATE}</p>

        {/* Table of contents */}
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
        <p>
          We may, at any time and at our sole discretion, adjust these Terms of Use, including
          our Privacy Policy, with or without notice to the Customer. Any modification is
          effective immediately upon posting. Your continued use of our Service and this Site
          after such modification constitutes your acknowledgment of the adjusted Terms.
        </p>

        <h2 id="age">2. Minimum Age Requirement</h2>
        <p>To become a member and use {BRAND} services, you must be 18 years of age or older.</p>

        <h2 id="tos">3. Terms of Use & Service</h2>
        <p>
          You may not—directly or through any device, software, website, web-based service, or
          other means—restream, distribute, broadcast, or transmit the content.
        </p>

        <h2 id="thirdparty">4. Third-Party Purchases</h2>
        <p>
          Your dealings and other transactions with third-party vendors found on or through the
          service—including “click-to-buy” programs and similar offerings—are solely between you
          and those vendors.
        </p>

        <h2 id="quality">5. Stream Quality</h2>
        <p>
          A flawless viewing experience depends on your network access and your device’s
          capabilities. Performance depends on your location, internet capacity, the number of
          devices connected to the same network, the selected content, and your device setup.
          Therefore, we cannot guarantee content performance in this respect. Note: sharing a
          subscription will result in a permanent suspension or device ban.
        </p>

        <h2 id="balance">6. Used Balance</h2>
        <p>All purchased subscriptions and used credits are final and non-refundable.</p>

        <h2 id="vpn">7. VPN or Proxy Use</h2>
        <p>Using a VPN or proxy server is permitted when connecting to our servers.</p>

        <h2 id="accuracy">8. Accuracy of Information</h2>
        <p>
          All data you submit to our database must be accurate and up to date. Keep your
          passwords secure. You will not be asked to disclose them to {BRAND} agents. You are
          responsible for all use of your account.
        </p>

        <h2 id="compat">9. Compatibility</h2>
        <p>
          To access the services, you must use devices that meet the system and compatibility
          requirements we set out in our help center.
        </p>

        <h2 id="data">10. Internet Service & Data Usage</h2>
        <p>You are responsible for all charges related to the network access you use.</p>

        <h2 id="sharing">11. Subscription Sharing</h2>
        <p>
          Sharing a subscription is not permitted. You may have only one active stream at a time.
          To watch on multiple devices simultaneously, purchase additional subscriptions.
        </p>

        <h2 id="purchase">12. Purchase Details</h2>
        <p>
          To make a purchase, follow the ordering procedures described through the service. Product
          pricing and the payment/delivery process are displayed via the service and may change
          without notice.
        </p>

        <h2 id="suspension">13. Suspension & Downtime</h2>
        <p>
          Your access to and use of the services may be suspended during any period of sudden or
          unplanned downtime or unavailability of any part of the services, for any reason.
        </p>

        <h2 id="lang">14. Notices & Language</h2>
        <p>
          All correspondence and notices made or given under this Agreement must be in English.
        </p>

        <h2 id="termination">15. Termination</h2>
        <p>
          We reserve the right to immediately terminate or limit your use of the services or your
          access to content at any time, without notice or liability, if {BRAND} determines in its
          sole discretion that you have breached these terms or violated any law, rule, or
          regulation.
        </p>

        <h2 id="ip">16. Trademarks & Intellectual Property</h2>
        <p>
          The <em>surfiptv.online</em> logo and other IR marks, graphics, and scripts are
          trademarks of Xstreamhdiptv. None of {BRAND}’s trademarks may be copied, downloaded, or
          otherwise exploited. All other names and logos are the property of their respective
          owners and do not imply any affiliation unless stated.
        </p>

        <h2 id="law">17. Governing Law & Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of {COUNTRY}. Failing an amicable resolution, the
          courts with material and territorial jurisdiction shall have exclusive competence.
        </p>

        <hr style={{opacity:.15, margin:"18px 0"}} />
        <p className="muted">
          Company: {COMPANY} · Site: <a href={SITE}>{SITE}</a> · Support: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
