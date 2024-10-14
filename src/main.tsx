import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import "./index.css";

createRoot(document.getElementById("root")!).render(<Home />);
