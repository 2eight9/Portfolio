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
    connect: string;
    location: string;
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
      hire: "Let’s Talk",
    },
    hero: {
      greeting: "Hi, I am",
      subtitle: "Fullstack AI Engineer",
      description:
        "I build innovative end-to-end digital products by integrating modern web interfaces and artificial intelligence to create solutions that make a real difference.",
      viewWork: "View My Work",
      getInTouch: "Explore the Works",
    },
    about: {
      label: "01. About Me",
      title: "Who I Am",
      bio1: "I am a Full-Stack AI Engineer and a recent graduate with a Bachelor’s degree in Computer Science from Amikom University in Yogyakarta. I am deeply committed to transforming complex artificial intelligence models into ready-to-use, adaptive digital products that have a real impact on users.",
      bio2: "My core expertise lies in front-end engineering and machine learning integration, supported by a solid understanding of backend architecture that enables me to build end-to-end systems independently. My focus goes beyond simply writing code; I strive to create practical solutions to real-world problems—such as the digitization of cultural heritage through smart e-commerce platforms and technological innovation in the agricultural sector—using responsive, high-performance web interfaces.",
      techStack: "Tech Stack",
      certLabel: "02. Certificates",
      certTitle: "My Credentials",
      viewCert: "View Certificate",
    },
    projects: {
      label: "03. Projects",
      title: "Featured Projects",
      github: "GitHub",
      demo: "Live Demo",
    },
    contact: {
      label: "04. Contact",
      title: "Contact Me",
      description:
        "Have a question or a project in mind? Send me a message here!! I’ll get back to you right away!",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you! I'll get back to you as soon as possible.",
      connect: "Connect with me",
      location: "Location",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      certificates: "Sertifikat",
      contact: "Kontak",
      hire: "Mari Berdiskusi",
    },
    hero: {
      greeting: "Halo, saya",
      subtitle: "Fullstack AI Engineer",
      description:
        "Saya membangun produk digital end-to-end yang inovatif dengan mengintegrasikan antarmuka web modern dan kecerdasan buatan untuk menciptakan solusi yang berdampak nyata.",
      viewWork: "Lihat Karya Saya",
      getInTouch: "Hubungi Saya",
    },
    about: {
      label: "01. Tentang Saya",
      title: "Siapa Saya",
      bio1: "Saya adalah seorang Fullstack AI Engineer dan lulusan baru Sarjana Komputer jurusan Informatika dari Universitas Amikom Yogyakarta. Saya memiliki dedikasi tinggi untuk mengubah model kecerdasan buatan yang kompleks menjadi produk digital yang siap pakai, adaptif, dan berdampak nyata bagi pengguna.",
      bio2: "Keahlian utama saya terletak pada Frontend Engineering dan integrasi Machine Learning, yang didukung oleh pemahaman arsitektur backend yang solid untuk membangun sistem end-to-end secara mandiri. Fokus saya bukan sekadar menulis kode, melainkan menciptakan solusi praktis atas masalah nyata—seperti digitalisasi budaya melalui platform e-commerce pintar hingga inovasi teknologi di sektor agrikultur—lewat antarmuka web yang responsif dan berkinerja tinggi.",
      techStack: "Teknologi",
      certLabel: "02. Sertifikat",
      certTitle: "Kredensial Saya",
      viewCert: "Lihat Sertifikat",
    },
    projects: {
      label: "03. Proyek",
      title: "Proyek Pilihan",
      github: "GitHub",
      demo: "Demo Langsung",
    },
    contact: {
      label: "04. Kontak",
      title: "Hubungi Saya",
      description:
        "Punya pertanyaan atau rencana proyek? Kirim pesan di sini !! Saya akan segera merespons!!",
      name: "Nama Kamu",
      email: "Email Kamu",
      message: "Pesan",
      messagePlaceholder: "Tulis pesan Anda di sini...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      successTitle: "Pesan Terkirim!",
      successMessage: "Terima kasih! Saya akan membalas secepatnya.",
      connect: "Hubungi saya",
      location: "Lokasi",
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
