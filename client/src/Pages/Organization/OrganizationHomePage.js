import React from "react";
import { Link } from "react-router-dom";
import "./OrganizationHomePage.css";

const OrganizationHomePage = () => {
  return (
    <div className="org-dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <h1>Organization Dashboard</h1>

        <p>
          Manage food aid requests, donations, and community support efficiently.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>128</h2>
          <p>Food Requests</p>
        </div>

        <div className="stat-card">
          <h2>84</h2>
          <p>Successful Deliveries</p>
        </div>

        <div className="stat-card">
          <h2>32</h2>
          <p>Active Volunteers</p>
        </div>

        <div className="stat-card">
          <h2>15</h2>
          <p>Partner Donors</p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="actions-grid">

          <Link to="/foodaidrequest">
            <button>Create Food Request</button>
          </Link>

          <Link to="/organization-mgmt">
            <button>Manage Requests</button>
          </Link>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="recent-activity">

        <h2>Recent Activity</h2>

        <div className="activity-card">
          <p>🍲 Food request created for Nairobi Shelter.</p>
        </div>

        <div className="activity-card">
          <p>🚚 Volunteer assigned to delivery route.</p>
        </div>

        <div className="activity-card">
          <p>✅ Donation received from local restaurant.</p>
        </div>

      </div>

    </div>
  );
};

export default OrganizationHomePage;