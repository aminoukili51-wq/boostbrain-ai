"use client";

import React from "react";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀 BoostBrain AI</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        Welkom bij mijn AI‑project! BoostBrain‑AI is gebouwd met Next.js en Vercel — een plek waar
        technologie en creativiteit samenkomen. Nieuwe features volgen binnenkort!
      </p>

      <a
        href="https://github.com/aminoukili51-wq/boostbrain-ai"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "#00c6ff",
          color: "#000",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        Bekijk op GitHub
      </a>
    </main>
  );
}
