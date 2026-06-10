"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "./LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href:"#about" },
    { label: t.nav.projects, href:"#projects" },
    { label: t.nav.skills, href:"#skills" },
    { label: t.nav.certificates, href:"#certificates" },
    { label: t.nav.contact, href:"#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          backgroundColor:
            scrolled || menuOpen ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
        }}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Apriliano Logo"
          width={40}
          height={40}
          priority
          style={{ objectFit: "contain" }}
        />
        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "var(--color-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              color: "var(--color-muted)",
              cursor: "pointer",
              padding: "0.35rem 0.75rem",
              fontSize: "0.75rem",
              fontFamily: "'JetBrains Mono', monospace",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-muted)";
            }}
          >
            {lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
          </button>

          <a
            href="#contact"
            style={{
              padding: "0.5rem 1.25rem",
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-bg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
          >
            {t.nav.hire}
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--color-text)",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--color-text)",
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--color-text)",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          backgroundColor: "rgba(10,10,10,0.98)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          transition: "all 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Logo Mobile */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          style={{ objectFit: "contain", marginBottom: "0.5rem" }}
        />

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="mobile-menu-link"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--color-text)",
              textDecoration: "none",
              transition: "color 0.2s",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
          >
            {link.label}
          </a>
        ))}

        {/* Language Toggle Mobile */}
        <button
          onClick={() => setLang(lang === "en" ? "id" : "en")}
          style={{
            background: "none",
            border: "1px solid var(--color-border)",
            color: "var(--color-muted)",
            cursor: "pointer",
            padding: "0.5rem 1.25rem",
            fontSize: "0.875rem",
            fontFamily: "'JetBrains Mono', monospace",
            marginTop: "0.5rem",
          }}
        >
          {lang === "en" ? "🇮🇩 Bahasa Indonesia" : "🇬🇧 English"}
        </button>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            padding: "0.75rem 2rem",
            border: "1px solid var(--color-accent)",
            color: "var(--color-accent)",
            textDecoration: "none",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          {t.nav.hire}
        </a>
      </div>
    </>
  );
}
