import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          🍽️ FoodPals
        </Link>

        {/* Mobile Menu Button */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link
            to="/organization-home"
            onClick={() => setMenuOpen(false)}
          >
            Organizations
          </Link>

          <Link
            to="/donor-home"
            onClick={() => setMenuOpen(false)}
          >
            Donors
          </Link>

          <Link
            to="/volunteer-home"
            onClick={() => setMenuOpen(false)}
          >
            Volunteers
          </Link>

          <div className="mobile-buttons">
            <Link
              to="/login"
              className="login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Get Started
          </Link>
        </div>

      </div>

    </header>
  );
};

export default Navbar;