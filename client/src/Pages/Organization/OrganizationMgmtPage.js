import React, { useState } from "react";
import "./OrganizationMgmtPage.css";

const OrganizationMgmtPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Org Data:", formData);
    alert("Organization details updated successfully!");
  };

  return (
    <div className="org-mgmt-page">

      {/* Header */}
      <div className="org-mgmt-header">
        <h1>🏢 Organization Management</h1>
        <p>Update and manage your organization profile</p>
      </div>

      <div className="org-mgmt-container">

        {/* Left Panel - Form */}
        <form className="org-form" onSubmit={handleSubmit}>

          <label>Organization Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter organization name"
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

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="About your organization"
            rows="5"
          />

          <button type="submit">Save Changes</button>
        </form>

        {/* Right Panel - Info Cards */}
        <div className="org-info">

          <div className="info-card">
            <h2>Active Requests</h2>
            <p>12</p>
          </div>

          <div className="info-card">
            <h2>Completed Deliveries</h2>
            <p>48</p>
          </div>

          <div className="info-card">
            <h2>Volunteers</h2>
            <p>18</p>
          </div>

          <div className="info-card highlight">
            <h2>Status</h2>
            <p>Active</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrganizationMgmtPage;