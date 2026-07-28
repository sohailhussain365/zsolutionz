import { createRoot } from "react-dom/client";
import App from "./App";
import SiteGate from "./site";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <SiteGate>
    <App />
  </SiteGate>
);