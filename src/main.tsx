import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { RefsProvider } from "./context/useRefs.tsx";
import router from "./route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RefsProvider>
      <RouterProvider router={router} />
    </RefsProvider>
  </StrictMode>
);
