import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaTruck,
  FaBuilding,
  FaUsers,
  FaUtensils,
  FaGlobeAfrica
} from "react-icons/fa";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            Together We Can End <span>Hunger</span>
          </h1>

          <p>
            Food Pals connects donors, volunteers, and organizations
            to rescue surplus food and deliver it to communities
            that need it most.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary-btn">
                Join Food Pals
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

      {/* STATS */}
      <section className="stats">

        <div className="stat-card">
          <FaUtensils className="stat-icon" />
          <h2>5,000+</h2>
          <p>Meals Donated</p>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>1,200+</h2>
          <p>Volunteers</p>
        </div>

        <div className="stat-card">
          <FaBuilding className="stat-icon" />
          <h2>250+</h2>
          <p>Organizations</p>
        </div>

        <div className="stat-card">
          <FaGlobeAfrica className="stat-icon" />
          <h2>50+</h2>
          <p>Communities Reached</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <FaHandHoldingHeart className="feature-icon" />
          <h2>Food Donations</h2>

          <p>
            Businesses and individuals can donate
            surplus food instead of letting it go to waste.
          </p>
        </div>

        <div className="feature-card">
          <FaTruck className="feature-icon" />
          <h2>Volunteer Deliveries</h2>

          <p>
            Volunteers transport food safely from
            donors to organizations.
          </p>
        </div>

        <div className="feature-card">
          <FaBuilding className="feature-icon" />
          <h2>Organization Support</h2>

          <p>
            NGOs, shelters, and community centers
            receive aid efficiently.
          </p>
        </div>

      </section>

      {/* IMPACT SECTION */}
      <section className="impact">

        <h2>Creating Real Impact</h2>

        <p>
          Every meal saved means one less person going hungry.
          Food Pals bridges the gap between surplus food and
          communities in need through technology and collaboration.
        </p>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Become Part of the Solution</h2>

        <p>
          Join donors, volunteers, and organizations making
          a difference every day.
        </p>

        <Link to="/signup">
          <button className="primary-btn">
            Get Started Today
          </button>
        </Link>

      </section>

    </div>
  );
}

export default LandingPage;