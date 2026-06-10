"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are a helpful assistant for Apriliano Ernando Benyamin Boimau's portfolio website.
Answer questions about Apriliano in a friendly and professional manner.
For general questions not related to Apriliano, answer them helpfully as well.

Here is information about Apriliano:
- Full name: Apriliano Ernando Benyamin Boimau
- Nickname: Ino
- Role: Frontend Developer & Machine Learning Enthusiast.
- Education: Fresh graduate in Informatics at Universitas Amikom Yogyakarta
- Hometown: Kobelete, Kota SoE, Timor Tengah Selatan, Nusa Tenggara Timur, Indonesia
- Email: inoboimau@gmail.com
- GitHub: https://github.com/2eight9
- Instagram: https://www.instagram.com/2eight9_d1 (username: 2eight9_d1)
- Skills: Python, JavaScript, TypeScript, React.js, Next.js, Nuxt.js, Tailwind CSS, HTML, CSS, Scikit-Learn, Pandas, NumPy, Matplotlib
- Projects:
  1. Magic Chess AI Predictor V2 - XGBoost Classifier app for predicting win rate in Magic Chess (https://mcggai-v2.streamlit.app/)
  2. Magic Chess Win Predictor - Random Forest & XGBoost for predicting win rate (https://mcpredictai.streamlit.app/)
  3. Vehicle Tracker - Real-time vehicle tracking web app (https://vehicle-tracker-ruddy.vercel.app/)
  4. Portfolio V1 - First personal portfolio (https://2eight9.vercel.app/)
- Certificates: RevoU Intro to Software Engineering, Dicoding Python Programming, Dicoding Machine Learning for Beginners, Dicoding Fundamental Data Processing, Dicoding Gen AI with Microsoft Azure, Dicoding Data Science with Microsoft Fabric
- Hobbies: Football, Futsal, Swimming, Chess, Online games (Mobile Legends, Magic Chess, eFootball)
- Favorite football team: FC Barcelona
- Football idol: Lionel Messi
- Available for: freelance work, full-time positions, collaborations

Answer in the same language the user uses (English or Indonesian).
Keep answers concise, friendly and helpful.`;

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Apriliano's AI assistant. Ask me anything about his skills, projects, or experience! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 100,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "var(--color-accent)",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          boxShadow: "0 0 20px rgba(0,255,209,0.3)",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      <div
        style={{
          position: "fixed",
          bottom: "5.5rem",
          right: "2rem",
          zIndex: 99,
          width: "340px",
          height: "480px",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(20px)",
          pointerEvents: isOpen ? "auto" : "none",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            🤖
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--color-text)",
              }}
            >
              Ask About Apriliano
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--color-accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              AI Assistant • Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "0.6rem 0.875rem",
                  backgroundColor:
                    msg.role === "user"
                      ? "var(--color-accent)"
                      : "rgba(255,255,255,0.05)",
                  color:
                    msg.role === "user"
                      ? "var(--color-bg)"
                      : "var(--color-text)",
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  borderRadius:
                    msg.role === "user"
                      ? "12px 12px 2px 12px"
                      : "12px 12px 12px 2px",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  padding: "0.6rem 0.875rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: "12px 12px 12px 2px",
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                }}
              >
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          style={{
            padding: "0.875rem",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
            style={{
              flex: 1,
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text)",
              padding: "0.5rem 0.75rem",
              fontSize: "0.85rem",
              outline: "none",
              fontFamily: "'DM Sans', sans-serif",
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              border: "none",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 600,
              opacity: loading ? 0.5 : 1,
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
