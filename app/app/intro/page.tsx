"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        flexDirection: "column",
        fontFamily: "Orbitron, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 50,
          color: "#00bfff",
          textShadow: "0 0 20px #00bfff",
          animation: "fadeIn 2s ease-out",
        }}
      >
        BoostBrain AI
      </h1>

      <p
        style={{
          marginTop: 10,
          color: "#00ffaa",
          opacity: 0.8,
          animation: "fadeIn 3s ease-out",
        }}
      >
        Analyzing your gameplay…
      </p>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
