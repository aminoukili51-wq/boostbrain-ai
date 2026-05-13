"use client";

import { useState } from "react";
import { analyzeGame, analyzeLastMatch } from "@/lib/api";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    try {
      setLoading(true);
      const json = JSON.parse(input);
      const result = await analyzeGame(json);
      setStats(result);
    } catch (err) {
      alert("Ongeldige JSON!");
    } finally {
      setLoading(false);
    }
  }

  async function handleAutoAnalyze() {
    try {
      setLoading(true);
      const result = await analyzeLastMatch();
      setStats(result);
    } catch (err) {
      alert("Fout bij automatische analyse!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        padding: 40,
        backgroundColor: "#0a0a0a",
        color: "#00bfff",
        minHeight: "100vh",
        fontFamily: "Orbitron, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 36, textShadow: "0 0 15px #00bfff" }}>
        🚀 BoostBrain Dashboard
      </h1>

      <button
        onClick={handleAutoAnalyze}
        style={{
          marginTop: 20,
          background: "linear-gradient(90deg, #00ff88, #00ffaa)",
          color: "black",
          border: "none",
          padding: "12px 24px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Analyze Last Match
      </button>

      <textarea
        placeholder="Plak hier je JSON data..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: 200,
          marginTop: 20,
          backgroundColor: "#111",
          color: "#00bfff",
          border: "1px solid #0070f3",
          borderRadius: 8,
          padding: 10,
        }}
      />

      <button
        onClick={handleAnalyze}
        style={{
          marginTop: 20,
          background: "linear-gradient(90deg, #0070f3, #00bfff)",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Analyseer Game
      </button>

      {loading && <p style={{ marginTop: 20 }}>Analyzing...</p>}

      {stats && (
        <div style={{ marginTop: 40 }}>
          <h2>Resultaten</h2>
          <pre style={{ whiteSpace: "pre-wrap", color: "#00ffcc" }}>
            {JSON.stringify(stats, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
