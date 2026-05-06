"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/2eight9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/2eight9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    invert: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/2eight9_d1",
    icon: "https://cdn.simpleicons.org/instagram/00FFD1",
    invert: false,
  },
  {
    label: "Email",
    href: "mailto:inoboimau@gmail.com",
    icon: "https://cdn.simpleicons.org/gmail/00FFD1",
    invert: false,
  },
];

// 👇 GANTI dengan link CV kamu
const CV_LINKS = {
  en: "https://drive.google.com/file/d/1dACnjCHSX6XEG3-7Wcyc1xxS1zIksqDm/view?usp=sharing",
  id: "https://drive.google.com/file/d/1dACnjCHSX6XEG3-7Wcyc1xxS1zIksqDm/view?usp=sharing",
};

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "2rem",
      }}
    >
      {/* Kiri: Teks */}
      <div style={{ flex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.875rem",
            color: "var(--color-accent)",
            marginBottom: "1.5rem",
          }}
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "1rem",
            color: "var(--color-text)",
          }}
        >
          Apriliano
          <br />
          <span style={{ color: "var(--color-accent)" }}>Boimau.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(1rem, 3vw, 1.75rem)",
            fontWeight: 500,
            color: "var(--color-muted)",
            marginBottom: "2rem",
          }}
        >
          {t.hero.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: "1.125rem",
            color: "var(--color-muted)",
            maxWidth: "480px",
            lineHeight: 1.8,
            marginBottom: "3rem",
          }}
        >
          {t.hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.875rem 2rem",
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            {t.hero.viewWork}
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.875rem 2rem",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            {t.hero.getInTouch}
          </a>

          {/* Download CV Button */}
          <a
            href={CV_LINKS[lang]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.875rem 1.5rem",
              border: "1px solid var(--color-accent)",
              color: "var(--color-accent)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
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
            ↓ {lang === "en" ? "Download CV" : "Unduh CV"}
          </a>
        </motion.div>
      </div>

      {/* Kanan: Foto + Social */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hero-photo"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Foto */}
        <div style={{ position: "relative", width: "340px", height: "400px" }}>
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              right: "-16px",
              bottom: "-16px",
              border: "2px solid var(--color-accent)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <Image
              src="/profile.png"
              alt="Apriliano Boimau"
              fill
              sizes="(max-width: 768px) 200px, 340px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--color-border)",
                transition: "all 0.2s",
                padding: "10px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.backgroundColor = "rgba(0,255,209,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <img
                src={social.icon}
                alt={social.label}
                width={22}
                height={22}
                style={{ filter: social.invert ? "invert(1)" : "none" }}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
