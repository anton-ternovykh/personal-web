import { createBrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import About from "./app/About.tsx";
import Contact from "./app/Contact.tsx";
import Resume from "./app/Resume.tsx";
import Root from "./Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
