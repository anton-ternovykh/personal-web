import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
