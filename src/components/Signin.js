import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            type="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            type="password"
          />
        </div>
        <button type="post">Sign in</button>
      </form>
    </div>
  );
}
