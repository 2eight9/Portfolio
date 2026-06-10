"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { useLang } from "./LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setSent(true);
    } catch {
      alert("Failed to send message. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "8rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.875rem",
          color: "var(--color-accent)",
          marginBottom: "1rem",
        }}
      >
        {t.contact.label}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "1rem",
          color: "var(--color-text)",
        }}
      >
        {t.contact.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "1.125rem",
          color: "var(--color-muted)",
          maxWidth: "500px",
          lineHeight: 1.8,
          marginBottom: "4rem",
        }}
      >
        {t.contact.description}
      </motion.p>

      <div
        className="contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}
      >
        {/* Kiri: Info kontak (Ikon Sosial Media & Google Maps) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {/* Bagian 1: Baris Ikon Sosial Media */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              {t.contact.connect}
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {[
                {
                  name: "Email",
                  href: "mailto:inoboimau@gmail.com",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  name: "GitHub",
                  href: "https://github.com/2eight9",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/2eight9_d1",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/2eight9",
                  svg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    color: "var(--color-muted)",
                    transition: "color 0.2s, transform 0.2s",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Bagian 2: Alamat & Kotak Embed Google Maps */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {t.contact.location}
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Gereja+Tebes,SoE,Nusa+Tenggara+Timur"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1rem",
                color: "var(--color-text)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
            >
              Kobelete, SoE.
            </a>

            {/* Box Pembungkus Iframe Peta Warna Asli (Gereja Tebes) */}
            <div
              style={{
                width: "100%",
                height: "250px",
                border: "1px solid var(--color-border)",
                marginTop: "0.5rem",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Gereja%20Tebes,%20SoE,%20Nusa%20Tenggara%20Timur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }} // Filter gelap dihapus agar warna asli bawaan Google Maps muncul kembali
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

        {/* Kanan: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {sent ? (
            <div
              style={{
                padding: "3rem",
                border: "1px solid var(--color-accent)",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>✅</p>
              <p
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.25rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                {t.contact.successTitle}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
                {t.contact.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  id: "name",
                  label: t.contact.name,
                  placeholder: "Your Name",
                },
                {
                  id: "email",
                  label: t.contact.email,
                  placeholder: "email@example.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--color-muted)",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.id === "email" ? "email" : "text"}
                    required
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) =>
                      setForm({ ...form, [field.id]: e.target.value })
                    }
                    style={{
                      width: "100%",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                      padding: "0.75rem 1rem",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-border)")
                    }
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--color-muted)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                    fontFamily: "'Satoshi', sans-serif",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "0.875rem 2rem",
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-bg)",
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {loading ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
