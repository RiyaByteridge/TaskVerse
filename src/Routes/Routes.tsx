import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Signup from "../components/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
