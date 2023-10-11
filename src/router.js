import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Admin from "./admin/Admin";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to="/admin/login" />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
