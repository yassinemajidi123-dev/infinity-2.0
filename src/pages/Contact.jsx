import { useState } from "react";
import emailjs from "@emailjs/browser";
import WaveDivider from "../components/WaveDivider.jsx";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success / error text
  const [emailError, setEmailError] = useState(""); // For real-time email validation
  const [msgError, setMsgError] = useState(""); // For message length validation

  // EmailJS env vars
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Simple email format check
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  // Real-time validation
  const validateEmail = (value) => {
    if (!value) {
      setEmailError("");
      return;
    }
    if (!isValidEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validateMessage = (value) => {
    if (value.trim().length < 10) {
      setMsgError("Message must be at least 10 characters long.");
    } else {
      setMsgError("");
    }
  };

  const onSend = async (e) => {
    e.preventDefault();
    if (hp) return; // honeypot filled = bot
    if (!email || !msg) return setStatus("Please fill in your email and message.");
    if (!isValidEmail(email)) return setStatus("Please enter a valid email address.");
    if (msg.trim().length < 10) return setStatus("Please provide a bit more detail in your message.");

    setLoading(true);
    setStatus(null);
    setEmailError("");
    setMsgError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: email.trim(),
          from_name: (name || "Website visitor").trim(),
          message: msg.trim(),
          subject: "New Contact Form Submission - Infinity TV",
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("Thank you! Your message has been sent successfully. We'll respond within 24 hours. ✅");
      setEmail(""); 
      setMsg(""); 
      setName("");
      setEmailError("");
      setMsgError("");
    } catch (err) {
      console.error(err);
      setStatus("We're sorry, but there was an issue sending your message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  // Hero photo (public/contactus.png). Change path if needed.
  const contactHeroImg = 'url(/contactus.png)';
  const contactHeroSize = 'cover';
  const contactHeroPos = 'center 30%'; // Slightly higher for more professional crop

  return (
    <>
      {/* HERO */}
      <section
        className="contact-hero"
        aria-label="Contact Infinity TV Support"
        style={{
          "--contact-img": contactHeroImg,
          "--contact-img-size": contactHeroSize,
          "--contact-img-position": contactHeroPos,
        }}
      >
        <div className="contact-hero-inner container">
          <h1 className="contact-hero-title">Get in Touch with Us</h1>
          <p className="contact-hero-sub">
            Our dedicated support team is ready to assist you with any inquiries about Infinity TV services.
          </p>
        </div>
      </section>

      {/* MAIN CARD: text | form */}
      <section className="section contact-sec with-wave-bg">
        <div className="container contact-wrap contact-2col">
          {/* TEXT (expanded) */}
          <div className="contact-info big">
            <h2>Do you have any questions?</h2>
            <p>
              At Infinity TV, we prioritize your experience. Whether you're troubleshooting setup, exploring activation options, 
              or selecting the perfect plan, our experts deliver prompt and personalized guidance across all devices.
            </p>
            
            <ul className="contact-points" style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}> Rapid response via WhatsApp or Email</li>
              <li style={{ marginBottom: "0.5rem" }}> Bilingual support in English and French</li>
              <li style={{ marginBottom: "0.5rem" }}> Full assistance for Smart TVs, Android, iOS, and more</li>
            </ul>
            
            <h3 style={{ marginTop: "1.5rem", fontSize: "1.2em", color: "#78cbffff" }}>Preferred Contact Methods</h3>
            <div className="contact-methods" style={{ fontSize: "0.95em", lineHeight: "1.6" }}>
              <p><strong>Email:</strong> infinitytv.cont@hotmail.com</p>
              <p>Response time: Within 24 hours during business days.</p>
            </div>

            {/* Global status message (accessible) */}
            {status && (
              <div
                role="alert"
                aria-live="polite"
                className={`status-message ${status.includes("Thank you") ? "status-success" : "status-error"}`}
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  borderRadius: "4px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {status}
              </div>
            )}
          </div>

          {/* FORM */}
          <form className="contact-form professional-form" onSubmit={onSend} noValidate>
            {/* Honeypot (invisible to humans) */}
            <label style={{ position: "absolute", left: "-9999px" }}>
              Do not fill
              <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                aria-hidden="true"
              />
            </label>

            <label className="form-label">
              <span className="label-text">Full Name (Optional)</span>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                disabled={loading}
                className="form-input"
              />
            </label>

            <label className="form-label">
              <span className="label-text">Email Address <span style={{ color: "#666" }}>(Required)</span></span>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                onBlur={() => validateEmail(email)}
                required
                inputMode="email"
                autoComplete="email"
                disabled={loading}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
                className={`form-input ${emailError ? "input-error" : ""}`}
              />
              {emailError && (
                <span id="email-error" className="error-message" style={{ color: "#e74c3c", fontSize: "0.85em", marginTop: "0.25rem" }}>
                  {emailError}
                </span>
              )}
            </label>

            <label className="form-label">
              <span className="label-text">Message <span style={{ color: "#666" }}>(Required, min. 10 characters)</span></span>
              <textarea
                rows={6}
                placeholder="Describe how we can assist you today (e.g., setup issues, plan recommendations)..."
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                  validateMessage(e.target.value);
                }}
                onBlur={() => validateMessage(msg)}
                required
                minLength={10}
                maxLength={4000}
                disabled={loading}
                aria-invalid={!!msgError}
                aria-describedby={msgError ? "msg-error" : undefined}
                className={`form-textarea ${msgError ? "input-error" : ""}`}
              />
              {msgError && (
                <span id="msg-error" className="error-message" style={{ color: "#e74c3c", fontSize: "0.85em", marginTop: "0.25rem" }}>
                  {msgError}
                </span>
              )}
            </label>

            <button className="btn btn-primary" type="submit" disabled={loading || !!emailError || !!msgError}>
              {loading ? (
                <span>Sending Message <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>&#8226;</span></span>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Optional bottom wave */}
      <WaveDivider />
    </>
  );
}