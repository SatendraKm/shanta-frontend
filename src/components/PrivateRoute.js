import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext"; // Import the context

function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;
