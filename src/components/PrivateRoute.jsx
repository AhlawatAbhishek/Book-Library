import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = true; //toggle this value to test the private route
  return isAuthenticated ? Component : <Navigate to="/" />;
};

export default PrivateRoute;
