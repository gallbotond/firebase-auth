import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }
  return <div>{children}</div>;
}
