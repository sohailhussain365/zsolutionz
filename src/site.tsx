import { useEffect, useState } from "react";

/**
 * SiteGate
 * Wrap your whole <App /> with this. On load, it checks a GitHub Gist
 * (that ONLY you control) to see whether the site should be shown.
 *
 * WHY A GIST: it lives on GitHub's servers under your own account, not on
 * the client's hosting. Even if they remove your Hostinger access, this
 * still works — you toggle it from GitHub, completely independent of them.
 *
 * SETUP (one time):
 * 1. Go to https://gist.github.com (log in / sign up if needed — it's free)
 * 2. Create a new gist:
 *    - Filename: status.json
 *    - Content:  {"enabled": true}
 *    - Choose "Create public gist" (public just means "anyone with the
 *      exact link can view it" — it's not listed or searchable anywhere,
 *      and only YOU can edit it since that requires your GitHub login)
 * 3. After creating it, click the "Raw" button on the file. Copy that URL.
 * 4. Paste that URL below as GIST_RAW_URL.
 *
 * Usage in main.tsx:
 *   import SiteGate from "./SiteGate";
 *   createRoot(document.getElementById("root")!).render(
 *     <SiteGate><App /></SiteGate>
 *   );
 */

// ↓↓↓ PASTE YOUR GIST'S RAW URL HERE AFTER SETUP ↓↓↓
const GIST_RAW_URL = "https://gist.githubusercontent.com/sohailhussain365/fd84d75529d231b8748e968452f2620e/raw/status.json";

export default function SiteGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "on" | "off">("loading");

  useEffect(() => {
    // cache-bust so browsers/CDNs don't show a stale "on" after you flip it off
    const bustUrl = `${GIST_RAW_URL}?t=${Date.now()}`;
    fetch(bustUrl, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setStatus(data.enabled ? "on" : "off"))
      .catch(() => setStatus("on")); // if the check fails, default to showing the site
  }, []);

  if (status === "loading") {
    return null;
  }

  if (status === "off") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#f1f5f9",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚧</div>
          <h1 style={{ fontSize: "22px", marginBottom: "8px" }}>Site Temporarily Unavailable</h1>
          <p style={{ color: "#94a3b8", fontSize: "15px" }}>Please check back soon.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}