import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isLoggedIn, user, children }) => {
  const location = useLocation();

  if (
    !isLoggedIn &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    // Redirect to login page
    return <Navigate to="/auth/login" />;
  }

  if (
    isLoggedIn &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shopping/home" />;
    }
  }

  if (
    isLoggedIn &&
    location.pathname.includes("/admin") &&
    user?.role !== "admin"
  ) {
    return <Navigate to="/shopping/home" />;
  }

  if (
    isLoggedIn &&
    location.pathname.includes("/shopping") &&
    user?.role === "admin"
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;oo9
};

export default CheckAuth;
