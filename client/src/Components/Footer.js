import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Food Pals</h2>
          <p>Fighting hunger through smart food redistribution.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Food Pals. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;