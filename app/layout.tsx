import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "BoostBrain AI",
  description: "AI powered platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(10px)",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/intro">Intro</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div style={{ marginTop: "80px" }}>{children}</div>
      </body>
    </html>
  );
}
