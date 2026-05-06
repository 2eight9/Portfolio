"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { useLang } from "./LanguageContext";

const skills = {
  "Programming Language": [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  "Machine Learning": [
    {
      name: "Scikit-Learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Matplotlib",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    },
  ],
};

const certificates = [
  {
    title: {
      en: "Intro to Software Engineering",
      id: "Intro to Software Engineering",
    },
    issuer: "RevoU",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/10RQUxDX7eXbdNoBOJK9G-xLn8eoXdA4V/view?usp=drive_link",
  },
  {
    title: {
      en: "Getting Started with Python Programming",
      id: "Memulai Pemrograman dengan Python",
    },
    issuer: "Dicoding",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/15htqQmRpGtS85oCR4XMVHa1UquinjreW/view?usp=drive_link",
  },
  {
    title: {
      en: "Machine Learning for Beginners",
      id: "Belajar Machine Learning untuk Pemula",
    },
    issuer: "Dicoding",
    date: "Apr 2026",
    link: "https://drive.google.com/file/d/13OZBRYdxY--5m_ZlVhnWP5aS55m7_90E/view?usp=drive_link",
  },
  {
    title: {
      en: "Fundamental Data Processing",
      id: "Belajar Fundamental Pemrosesan Data",
    },
    issuer: "Dicoding",
    date: "Apr 2026",
    link: "https://drive.google.com/file/d/121KfGp5B-JrS17koyey9fXq3shgez6o9/view?usp=drive_link",
  },
  {
    title: {
      en: "Building Gen AI Apps with Microsoft Azure",
      id: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    },
    issuer: "Dicoding",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/1cPHsSfb3ekWCatYzA9XSD3AE39Mi65h1/view?usp=drive_link",
  },
  {
    title: {
      en: "Data Science with Microsoft Fabric",
      id: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    },
    issuer: "Dicoding",
    date: "Mar 2026",
    link: "https://drive.google.com/file/d/1Grcfkt_XlwJoHlaedgzUjc_1-BSGWyDR/view?usp=drive_link",
  },
];

const allSkills = Object.values(skills).flat();

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { lang, t } = useLang();

  return (
    <section
      id="about"
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
        {t.about.label}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "3rem",
          color: "var(--color-text)",
        }}
      >
        {t.about.title}
      </motion.h2>

      {/* Bio + Foto */}
      <div
        className="about-bio-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        {/* Kiri: Teks Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-muted)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            {t.about.bio1}
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-muted)",
              lineHeight: 1.8,
            }}
          >
            {t.about.bio2}
          </p>
        </motion.div>

        {/* Kanan: Foto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{ position: "relative", width: "280px", height: "320px" }}
          >
            {/* Border dekorasi */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                right: "-12px",
                bottom: "-12px",
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
                sizes="280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills - 1 baris marquee */}
      <div id="skills" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginBottom: "5rem" }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            color: "var(--color-accent)",
            marginBottom: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {t.about.techStack}
        </p>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              zIndex: 2,
              background:
                "linear-gradient(to right, var(--color-bg), transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              zIndex: 2,
              background:
                "linear-gradient(to left, var(--color-bg), transparent)",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "1rem",
              animation: "marqueeLeft 20s linear infinite",
            }}
          >
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1.25rem",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  minWidth: "100px",
                  flexShrink: 0,
                }}
              >
                <img src={skill.icon} alt={skill.name} width={40} height={40} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-muted)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certificates */}
      <div id="certificates" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginTop: "2rem" }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.875rem",
            color: "var(--color-accent)",
            marginBottom: "1rem",
          }}
        >
          {t.about.certLabel}
        </p>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "var(--color-text)",
          }}
        >
          {t.about.certTitle}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1.5rem",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-border)")
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--color-accent)",
                    padding: "0.25rem 0.5rem",
                    border: "1px solid var(--color-accent)",
                  }}
                >
                  {cert.issuer}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {cert.date}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text)",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {cert.title[lang]}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-accent)",
                  marginTop: "1rem",
                }}
              >
                {t.about.viewCert} →
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
