// src/pages/Refund.jsx
import { useEffect } from "react";

export default function Refund() {
  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const BRAND = "INFINITY TV";
  const LAST_UPDATE = "2025-10-01";

  return (
    <section className="section policy">
      <div className="container">
        <h1>Refund Policy – IPTV Subscriptions</h1>
        <p className="muted">Last updated: {LAST_UPDATE}</p>

        <p>
          At {BRAND}, we are committed to providing a reliable, high-quality IPTV service.
          We offer a <strong>free trial</strong> before any subscription so you can test the
          service and verify compatibility with your devices and internet connection.
        </p>

        <h2>7-Day Money-Back Guarantee</h2>
        <p>
          We offer a <strong>7-day refund guarantee</strong> only when the service does not work
          (a verified technical issue making it impossible to use the subscription).
        </p>
        <ul>
          <li>
            This guarantee is <strong>not</strong> an additional trial period — the free trial
            already exists before you subscribe.
          </li>
          <li>
            If the service is functional but you choose to cancel without a valid reason,
            <strong> no refund</strong> will be issued.
          </li>
        </ul>

        <h2>Refund Conditions</h2>
        <ul>
          <li>You must contact us <strong>within 7 days</strong> of your purchase to request a refund.</li>
          <li>
            Our technical support team must be given the opportunity to verify the issue and
            help you resolve it.
          </li>
          <li>
            If you refuse to cooperate or to test the proposed solutions, the refund request
            cannot be accepted.
          </li>
          <li>
            Refunds are issued only to the <strong>original payment method</strong> used at checkout.
          </li>
        </ul>

        <h2>Non-Eligible Cases</h2>
        <ul>
          <li>Misuse of the service (e.g., illegal account sharing).</li>
          <li>Insufficient or unstable internet quality on the customer’s side.</li>
          <li>Personal decision to stop the service while it is functioning correctly.</li>
        </ul>

        <h2>In Summary</h2>
        <ul>
          <li>Always <strong>use the free trial</strong> before subscribing.</li>
          <li>
            A refund is granted only if the service does not work and we were unable to fix the issue.
          </li>
        </ul>
      </div>
    </section>
  );
}
