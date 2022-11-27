import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, logout2 } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout2;
    } catch (e) {
      console.log(e.message);
    }
    navigate("/");
  };

  return (
    <div>
      <h1>Account</h1>
      <p>Email: {user && user.email}</p>

      <button onClick={logout2}>Logout</button>
    </div>
  );
}
