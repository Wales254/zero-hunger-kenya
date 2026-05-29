import React, { useState } from "react";
import "./FoodAidRequestPage.css";

const FoodAidRequestPage = () => {
  const [formData, setFormData] = useState({
    organization: "",
    location: "",
    people: "",
    description: "",
    urgency: "medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Food Aid Request:", formData);

    alert("Food aid request submitted successfully!");

    setFormData({
      organization: "",
      location: "",
      people: "",
      description: "",
      urgency: "medium",
    });
  };

  return (
    <div className="food-request-page">

      <div className="request-container">

        <h1>🍲 Food Aid Request</h1>
        <p>Request food support for communities in need.</p>

        <form onSubmit={handleSubmit} className="request-form">

          <label>Organization Name</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Nairobi, Kibera"
            required
          />

          <label>Number of People</label>
          <input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            required
          />

          <label>Urgency Level</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the situation..."
            rows="5"
            required
          />

          <button type="submit">
            Submit Request
          </button>

        </form>

      </div>

    </div>
  );
};

export default FoodAidRequestPage;