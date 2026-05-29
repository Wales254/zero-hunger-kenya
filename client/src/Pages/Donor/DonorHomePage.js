import React from "react";
import { Link } from "react-router-dom";
import "./DonorHomePage.css";

const DonorHomePage = () => {
  return (
    <div className="donor-dashboard">

      {/* Header */}
      <div className="donor-header">
        <h1>🍱 Donor Dashboard</h1>
        <p>Help reduce hunger by donating surplus food to those in need.</p>
      </div>

      {/* Stats Section */}
      <div className="donor-stats">

        <div className="stat-box">
          <h2>56</h2>
          <p>Active Requests</p>
        </div>

        <div className="stat-box">
          <h2>32</h2>
          <p>Accepted Donations</p>
        </div>

        <div className="stat-box">
          <h2>1200+</h2>
          <p>People Helped</p>
        </div>

        <div className="stat-box highlight">
          <h2>Active</h2>
          <p>Status</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="donor-actions">

        <h2>Quick Actions</h2>

        <div className="action-buttons">

          <Link to="/donor-accept-request">
            <button>View Food Requests</button>
          </Link>

          <Link to="/donor-mgmt">
            <button>Manage Donations</button>
          </Link>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="donor-activity">

        <h2>Recent Activity</h2>

        <div className="activity-card">
          <p>🍲 You donated food to Nairobi Shelter.</p>
        </div>

        <div className="activity-card">
          <p>🚚 Volunteer picked up donation from your location.</p>
        </div>

        <div className="activity-card">
          <p>✅ Donation successfully delivered.</p>
        </div>

      </div>

    </div>
  );
};

export default DonorHomePage;