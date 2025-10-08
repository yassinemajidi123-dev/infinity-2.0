// src/pages/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import WaveDivider from "../components/WaveDivider.jsx";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");       // optional
  const [hp, setHp] = useState("");           // honeypot (anti-bot)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success / error text

  // Read from .env if present, else fallback to your values
  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSend = async (e) => {
    e.preventDefault();
    if (hp) return; // bot filled hidden field
    if (!email || !msg) return setStatus("Please fill in your email and message.");

    setLoading(true);
    setStatus(null);

    try {
      // Variables must match fields you defined in the EmailJS template
      const params = {
        from_email: email,
        from_name: name || "Website visitor",
        message: msg,
        subject: "New contact from Infinity TV", // optional; add a {{subject}} field if you want to use it
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY });

      setStatus("Message sent successfully ✅");
      setEmail("");
      setMsg("");
      setName("");
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Full-bleed header (optional background set in CSS) */}
      <section className="contact-hero" aria-label="Contact header">
        <div className="contact-hero-inner container"></div>
      </section>

      {/* Text + Form block (the wave will sit behind this) */}
      <section className="section contact-sec with-wave-bg">
        <div className="container contact-wrap contact-2col">
          {/* TEXT (expanded) */}
          <div className="contact-info big">
            <h2>Get in touch</h2>
            <p>
              Have questions about packages, activation, or devices? We’re here to help.
              Reach out and we’ll get back within minutes (typically).
            </p>
            <ul className="contact-points">
              <li>✓ Fast response on WhatsApp / Email</li>
              <li>✓ Assistance in English & French</li>
              <li>✓ Guidance for Smart TV, Android, iOS, and more</li>
            </ul>
            {status && (
              <p style={{marginTop: 10, color: status.startsWith("Failed") ? "#ff8a8a" : "#8ff0b3"}}>
                {status}
              </p>
            )}
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={onSend}>
            {/* Honeypot (hidden) */}
            <input
              type="text"
              value={hp}
              onChange={(e)=>setHp(e.target.value)}
              style={{position:"absolute", left:"-9999px", top:"-9999px"}}
              tabIndex={-1}
              aria-hidden="true"
            />

            <label>
              <span>Name (optional)</span>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                rows="8"
                placeholder="Tell us how we can help…"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
            </label>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send"}
            </button>
          </form>
        </div>
      </section>

      {/* Realistic wave tucked under the block above */}
      <WaveDivider />
    </>
  );
}
