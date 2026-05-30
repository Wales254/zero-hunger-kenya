import React from "react";
import "./VolunteerHomePage.css";
import VolunteerDashboardLayout from "./VolunteerDashboardLayout";

const VolunteerHomePage = () => {
  return (
    <VolunteerDashboardLayout>

      <div className="volunteer-home">

        {/* TOP SECTION */}
        <div className="volunteer-topbar-simple">
          <h1>Volunteer Dashboard</h1>
          <p>Welcome back 👋 Manage your deliveries efficiently</p>
        </div>

        {/* STATS CARDS */}
        <div className="volunteer-stats">

          <div className="stat-card">
            <h3>Active Deliveries</h3>
            <h2>5</h2>
          </div>

          <div className="stat-card">
            <h3>Completed</h3>
            <h2>18</h2>
          </div>

          <div className="stat-card">
            <h3>Pending</h3>
            <h2>3</h2>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="volunteer-grid">

          <div className="volunteer-card">
            <h3>🚚 Deliveries</h3>
            <p>View and accept available delivery requests</p>
          </div>

          <div className="volunteer-card">
            <h3>⚙️ Profile</h3>
            <p>Update your personal and contact details</p>
          </div>

          <div className="volunteer-card">
            <h3>📊 Activity</h3>
            <p>Track your delivery performance</p>
          </div>

        </div>

        {/* ACTIVITY CHART SECTION */}
        <div className="volunteer-activity">
          <h3>📈 Activity Overview</h3>

          <div className="chart-box">
            Activity Chart will be connected here (Recharts integration ready)
          </div>
        </div>

      </div>

    </VolunteerDashboardLayout>
  );
};

export default VolunteerHomePage;