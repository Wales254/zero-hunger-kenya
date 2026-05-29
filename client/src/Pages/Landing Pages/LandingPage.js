import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <h1>
            Together We Can End <span>Hunger</span>
          </h1>

          <p>
            Food Pals connects donors, volunteers, and organizations
            to rescue surplus food and deliver it to communities in need.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <Link to="/login">
              <button className="secondary-btn">
                Login
              </button>
            </Link>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="features">

        <div className="feature-card">
          <h2>🍲 Food Donation</h2>
          <p>
            Donors can easily share excess food with organizations.
          </p>
        </div>

        <div className="feature-card">
          <h2>🚚 Volunteer Delivery</h2>
          <p>
            Volunteers help transport food safely and quickly.
          </p>
        </div>

        <div className="feature-card">
          <h2>🏢 Organization Support</h2>
          <p>
            NGOs and shelters receive food aid efficiently.
          </p>
        </div>

      </section>

    </div>
  );
}

export default LandingPage;