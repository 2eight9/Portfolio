"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLang } from "./LanguageContext";

const projects = [
  {
    number: "01",
    title: "Magic Chess AI Predictor V2",
    category: { en: "Machine Learning", id: "Machine Learning" },
    description: {
      en: "AI application to help Magic Chess players predict win probability based on Commander and Synergy combinations using XGBoost Classifier. Built with Cyberpunk theme and Glassmorphism.",
      id: "Aplikasi AI untuk membantu pemain Magic Chess memprediksi peluang kemenangan berdasarkan kombinasi Commander dan Sinergi menggunakan XGBoost Classifier. Dibangun dengan tema Cyberpunk dan Glassmorphism.",
    },
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "Scikit-Learn"],
    link: "https://github.com/2eight9/mcggs4_v2.git",
    demo: "https://mcggai-v2.streamlit.app/",
  },
  {
    number: "02",
    title: "Magic Chess Win Predictor",
    category: { en: "Machine Learning", id: "Machine Learning" },
    description: {
      en: "Application to predict Win Rate in Magic Chess based on Commander, Role, and Faction combinations using Random Forest and XGBoost trained on historical match data.",
      id: "Aplikasi prediksi Win Rate dalam game Magic Chess berdasarkan kombinasi Commander, Role, dan Faction menggunakan Random Forest dan XGBoost yang dilatih dengan data historis pertandingan.",
    },
    tech: ["Python", "Random Forest", "XGBoost", "Streamlit", "Pandas"],
    link: "https://github.com/2eight9/mcggs4_p1.git",
    demo: "https://mcpredictai.streamlit.app/",
  },
  {
    number: "03",
    title: "Vehicle Tracker",
    category: { en: "Web Development", id: "Pengembangan Web" },
    description: {
      en: "Web application for real-time vehicle tracking. Built with modern web technologies and deployed using Vercel.",
      id: "Aplikasi web untuk melacak kendaraan secara real-time. Dibangun dengan teknologi web modern dan di-deploy menggunakan Vercel.",
    },
    tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    link: "https://github.com/2eight9/vehicle-tracker.git",
    demo: "https://vehicle-tracker-ruddy.vercel.app/",
  },
  {
    number: "04",
    title: "Portfolio V1",
    category: { en: "Web Development", id: "Pengembangan Web" },
    description: {
      en: "First version of personal portfolio website showcasing projects and skills as a Frontend Developer and ML Enthusiast.",
      id: "Versi pertama portfolio website pribadi yang menampilkan project dan keahlian sebagai Frontend Developer dan ML Enthusiast.",
    },
    tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    link: "https://github.com/2eight9/Portfolio1s6.git",
    demo: "https://2eight9.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
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
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ flex: 1 }}>
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
                    maxWidth: "600px",
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
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
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
