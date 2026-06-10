"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "id";

type Translations = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    certificates: string;
    contact: string;
    hire: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    description: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    label: string;
    title: string;
    bio1: string;
    bio2: string;
    techStack: string;
    certLabel: string;
    certTitle: string;
    viewCert: string;
  };
  projects: {
    label: string;
    title: string;
    github: string;
    demo: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
  };
};

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
      hire: "Hire Me",
    },
    hero: {
      greeting: "Hi, I am",
      subtitle: "Frontend Developer & ML Enthusiast",
      description:
        "I build beautiful, interactive web experiences and explore the intersection of design and machine learning.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    about: {
      label: "01. About Me",
      title: "Who I Am",
      bio1: "I am Apriliano Ernando Benyamin Boimau, a fresh graduate in Informatics at Universitas Amikom Yogyakarta with a passion for building beautiful and functional web experiences.",
      bio2: "I love combining clean UI design with powerful frontend engineering, and I am deeply interested in Machine Learning — exploring how intelligent systems can be brought to life through the browser.",
      techStack: "Tech Stack",
      certLabel: "02. Certificates",
      certTitle: "My Credentials",
      viewCert: "View Certificate",
    },
    projects: {
      label: "03. Projects",
      title: "Things I've Built",
      github: "GitHub",
      demo: "Live Demo",
    },
    contact: {
      label: "04. Contact",
      title: "Get In Touch",
      description:
        "Have a project in mind or just want to say hello? Feel free to reach out — I'd love to hear from you!",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you! I'll get back to you as soon as possible.",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      certificates: "Sertifikat",
      contact: "Kontak",
      hire: "Rekrut Saya",
    },
    hero: {
      greeting: "Halo, saya",
      subtitle: "Frontend Developer & ML Enthusiast",
      description:
        "Saya membangun pengalaman web yang indah dan interaktif serta mengeksplorasi persimpangan antara desain dan machine learning.",
      viewWork: "Lihat Karya Saya",
      getInTouch: "Hubungi Saya",
    },
    about: {
      label: "01. Tentang Saya",
      title: "Siapa Saya",
      bio1: "Saya Apriliano Ernando Benyamin Boimau, Lulusan Baru Informatika di Universitas Amikom Yogyakarta yang passionate dalam membangun pengalaman web yang indah dan fungsional.",
      bio2: "Saya suka menggabungkan desain UI yang bersih dengan rekayasa frontend yang powerful, dan saya sangat tertarik dengan Machine Learning — mengeksplorasi bagaimana sistem cerdas dapat diwujudkan melalui browser.",
      techStack: "Teknologi",
      certLabel: "02. Sertifikat",
      certTitle: "Kredensial Saya",
      viewCert: "Lihat Sertifikat",
    },
    projects: {
      label: "03. Proyek",
      title: "Yang Telah Saya Bangun",
      github: "GitHub",
      demo: "Demo Langsung",
    },
    contact: {
      label: "04. Kontak",
      title: "Hubungi Saya",
      description:
        "Punya proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya — saya senang mendengar dari kamu!",
      name: "Nama Kamu",
      email: "Email Kamu",
      message: "Pesan",
      messagePlaceholder: "Ceritakan tentang proyekmu...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan Terkirim!",
      successMessage: "Terima kasih! Saya akan membalas secepatnya.",
    },
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({ lang: "en", setLang: () => {}, t: translations.en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
