import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthorView from "./view/AuthorView.tsx";
import { BookView } from "./view/BookView.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <AuthorView />,
      },
      {
        path: "/authors",
        element: <AuthorView />,
      },
      {
        path: "/books",
        element: <BookView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
