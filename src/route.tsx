import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./components/page/Home";
import Projects from "./components/page/Projects";
import ProjectDetails from "./components/page/ProjectDetails";
import ItemNotFound from "./components/feedback/ItemNotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "projects",
        children: [
          { index: true, element: <Projects /> },
          { path: ":projectId", element: <ProjectDetails /> },
        ],
      },
      {
        path: "*",
        element: (
          <ItemNotFound
            title="Page not found"
            description="This path isn't anywhere in the history. It may have been moved, or it never existed."
          />
        ),
      },
    ],
  },
]);

export default router
