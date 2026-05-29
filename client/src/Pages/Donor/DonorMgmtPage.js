import React, { useState } from "react";
import "./DonorMgmtPage.css";

const DonorMgmtPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Donor Info:", formData);
    alert("Donor profile updated successfully!");
  };

  return (
    <div className="donor-mgmt-page">

      {/* Header */}
      <div className="donor-mgmt-header">
        <h1>🍱 Donor Management</h1>
        <p>Manage your profile and donation activity</p>
      </div>

      <div className="donor-mgmt-container">

        {/* Left: Form */}
        <form className="donor-form" onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Nairobi, Kenya"
          />

          <button type="submit">Save Changes</button>
        </form>

        {/* Right: Stats */}
        <div className="donor-info">

          <div className="info-card">
            <h2>Total Donations</h2>
            <p>24</p>
          </div>

          <div className="info-card">
            <h2>Meals Provided</h2>
            <p>980</p>
          </div>

          <div className="info-card">
            <h2>Active Requests</h2>
            <p>5</p>
          </div>

          <div className="info-card highlight">
            <h2>Status</h2>
            <p>Active Donor</p>
          </div>

        </div>

      </div>

      {/* History Section */}
      <div className="donor-history">

        <h2>Donation History</h2>

        <div className="history-card">
          <p>🍲 Donated food to Nairobi Shelter</p>
        </div>

        <div className="history-card">
          <p>🍱 Supported Mathare Community Kitchen</p>
        </div>

        <div className="history-card">
          <p>🚚 Pickup completed by volunteer</p>
        </div>

      </div>

    </div>
  );
};

export default DonorMgmtPage;