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
        {/* Kiri: Info kontak */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              label: "Email",
              value: "inoboimau@gmail.com",
              href: "mailto:inoboimau@gmail.com",
            },
            {
              label: "GitHub",
              value: "github.com/2eight9",
              href: "https://github.com/2eight9",
            },
            {
              label: "Instagram",
              value: "@2eight9_d1",
              href: "https://www.instagram.com/2eight9_d1",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/2eight9",
              href: "https://www.linkedin.com/in/2eight9",
            },
            {
              label: "Location",
              value: "Kobelete, SoE, NTT, Indonesia",
              href: "https://maps.app.goo.gl/myzTXS3BRPwEYsR96",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 0",
                borderBottom: "1px solid var(--color-border)",
                textDecoration: "none",
                transition: "border-color 0.2s",
                gap: "1rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-border)")
              }
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text)",
                  fontWeight: 500,
                  textAlign: "right",
                  wordBreak: "break-all",
                }}
              >
                {item.value}
              </span>
            </a>
          ))}
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
                  placeholder: "Apriliano Boimau",
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
