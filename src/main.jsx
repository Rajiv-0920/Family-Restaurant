import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
// import "./i18n"; // Import i18n configuration
import { init } from "@emailjs/browser";

init(import.meta.env.VITE_PUBLIC_KEY); // Replace with your EmailJS User ID

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
