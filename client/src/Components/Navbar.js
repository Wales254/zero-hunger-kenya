import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <h1>Food Pals</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/organization-home">Organizations</Link>
          <Link to="/donor-home">Donors</Link>
          <Link to="/volunteer-home">Volunteers</Link>
        </nav>

        {/* Auth Buttons */}
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