import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Demo users (frontend only)
  const users = [
    {
      email: "donor@foodpals.com",
      password: "1234",
      role: "donor",
    },
    {
      email: "org@foodpals.com",
      password: "1234",
      role: "organization",
    },
    {
      email: "volunteer@foodpals.com",
      password: "1234",
      role: "volunteer",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage("✅ Login successful!");

      // ROLE ROUTING
      if (user.role === "donor") {
        navigate("/donor-home");
      } else if (user.role === "organization") {
        navigate("/organization-home");
      } else if (user.role === "volunteer") {
        navigate("/volunteer-home");
      }

    } else {
      setMessage("❌ Invalid email or password");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Sign in to continue helping communities fight hunger.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        {message && (
          <div className="login-message">
            {message}
          </div>
        )}

      </div>

    </div>
  );
};

export default Login;