import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesComponent from "./Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>
);
