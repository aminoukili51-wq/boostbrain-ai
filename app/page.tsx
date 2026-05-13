"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀 BoostBrain AI</h1>
      <p style={{ maxWidth: "600px", marginBottom: "2rem" }}>
        Welkom bij mijn AI‑platform. Kies een pagina hieronder.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          href="/intro"
          style={{
            padding: "12px 20px",
            background: "#00c6ff",
            borderRadius: "8px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Intro
        </Link>

        <Link
          href="/dashboard"
          style={{
            padding: "12px 20px",
            background: "#ffdd00",
            borderRadius: "8px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
