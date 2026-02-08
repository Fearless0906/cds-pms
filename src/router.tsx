import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./app/dashboard/Dashboard";
import Login from "./app/auth/Login";
import SignUp from "./app/auth/SignUp";
import ForgotPassword from "./app/auth/Forgot-Password";
import { ProjectBoard } from "./app/project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/project",
    element: <ProjectBoard />,
  },
]);

export default router;
