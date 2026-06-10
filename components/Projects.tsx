"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "./LanguageContext";

const projects = [
  {
    number: "01",
    title: "TenunHub — AI-Powered Cultural Marketplace",
    category: {
      en: "Full-Stack Web Development / Gen-AI Integration",
      id: "Pengembangan Web Full-Stack / Integrasi Kecerdasan Buatan Generatif",
    },
    description: {
      en: "An AI-powered e-commerce platform for Timorese woven fabric galleries. It features an automated cultural storytelling tool powered by the Gemini API and a data security system built with Supabase RLS.",
      id: "Platform e-commerce berbasis AI untuk galeri kain tenun Timor. Dilengkapi fitur pembuat cerita budaya otomatis lewat Gemini API dan sistem keamanan data dengan Supabase RLS.",
    },
    tech: [
      "Next.js",
      "Golang",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Gemini API",
    ],
    link: "https://github.com/2eight9/TenunHub.git",
    demo: "https://tenun-hub.vercel.app/",
  },
  {
    number: "02",
    title: "Magic Chess Prediction Simulator V2",
    category: { en: "Machine Learning", id: "Pembelajaran Mesin" },
    description: {
      en: "Machine Learning Based Winning Probability Prediction System for Magic Chess Go Go Season 4.",
      id: "Sistem Prediksi Probabilitas Kemenangan Magic Chess Go Go Season 4 Berbasis Machine Learning.",
    },
    tech: [
      "Python",
      "Pandas",
      "Numpy",
      "Scikit-Learn(Random Forest & XGBoost)",
      "Streamlit",
    ],
    link: "https://github.com/2eight9/mcggs4_v2.git",
    demo: "https://mcggai-v2.streamlit.app/",
  },
  {
    number: "03",
    title: "Agri Cerdas",
    category: {
      en: "Machine Learning & Web Development",
      id: "Pembelajaran Mesin & Pengembangan Web",
    },
    description: {
      en: "An AI-powered web application for diagnosing corn leaf diseases in real time and offline directly from a browser. It utilizes an optimized MobileNetV2 architecture to ensure that the classification process runs smoothly and quickly on mobile devices without overloading the backend server.",
      id: "Aplikasi web berbasis AI untuk mendiagnosis penyakit daun jagung secara real-time dan offline langsung dari browser. Memanfaatkan arsitektur MobileNetV2 yang dioptimasi agar proses klasifikasi berjalan ringan dan cepat di perangkat mobile tanpa membebani server backend.",
    },
    tech: [
      "Next.js",
      "TensorFlow.js",
      "MobileNet V2",
      "Tailwind CSS",
      "Keras",
      "Python",
    ],
    link: "https://github.com/2eight9/agricerdas.git",
    demo: "https://agricerdas-bice.vercel.app/",
  },
  {
    number: "04",
    title: "Vehicle Tracker Dashboard",
    category: { en: "Frontend Development", id: "Pengembangan Front-End" },
    description: {
      id: "Panel kendali berbasis web yang responsif untuk memantau aktivitas armada kendaraan logistik secara langsung. Dikembangkan menggunakan React, TypeScript, dan Vite dengan tampilan dinamis berbasis Tailwind CSS.",
      en: "A responsive web-based control panel for real-time monitoring of logistics vehicle fleet activity. Developed using React, TypeScript, and Vite with a dynamic interface built on Tailwind CSS.",
    },
    tech: ["Typescript", "React.js", "Vite", "Tailwind CSS"],
    link: "https://github.com/2eight9/vehicle-tracker.git",
    demo: "https://vehicle-tracker-ruddy.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { lang, t } = useLang();

  return (
    <section
      id="projects"
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
        {t.projects.label}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "4rem",
          color: "var(--color-text)",
        }}
      >
        {t.projects.title}
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.number}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            style={{
              padding: "2rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
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
              className="project-card-inner"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
                gap: "1.5rem",
              }}
            >
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    {project.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-muted)",
                      padding: "0.2rem 0.6rem",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {project.category[lang]}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                    maxWidth: "100%",
                    textAlign: "justify",
                  }}
                >
                  {project.description[lang]}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        color: "var(--color-accent)",
                        padding: "0.25rem 0.75rem",
                        border: "1px solid var(--color-accent)",
                        opacity: 0.7,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="projects-buttons"
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  alignSelf: "flex-start",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.6rem 1.25rem",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text)";
                  }}
                >
                  {t.projects.github}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.6rem 1.25rem",
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-bg)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textAlign: "justify",
                  }}
                >
                  {t.projects.demo}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className="project-buttons"
        style={{ display: "flex", gap: "1rem", alignItems: "center" }}
      ></div>
    </section>
  );
}
