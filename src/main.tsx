import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import App from "./App.tsx";
import { AuthorProvider } from "./context/AuthorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthorProvider>
      <App />
    </AuthorProvider>
  </StrictMode>
);
