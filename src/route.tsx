import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/page/Home";
import Projects from "./components/page/Projects";
import ProjectDetails from "./components/page/ProjectDetails";

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
    ],
  },
]);

export default router