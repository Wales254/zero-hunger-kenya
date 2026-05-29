import React from "react";
import "./DonorAcceptRequestPage.css";

const DonorAcceptRequestPage = () => {
  const requests = [
    {
      id: 1,
      organization: "Nairobi Shelter",
      location: "Kibera",
      people: 120,
      urgency: "High",
    },
    {
      id: 2,
      organization: "Hope Foundation",
      location: "Mathare",
      people: 80,
      urgency: "Medium",
    },
    {
      id: 3,
      organization: "City Rescue Center",
      location: "Eastlands",
      people: 50,
      urgency: "Low",
    },
  ];

  const handleAccept = (org) => {
    alert(`You accepted request from ${org}`);
  };

  return (
    <div className="donor-page">

      <h1>🍱 Food Donation Requests</h1>
      <p>Review and accept requests from organizations in need.</p>

      <div className="donor-grid">

        {requests.map((req) => (
          <div className="donor-card" key={req.id}>

            <h2>{req.organization}</h2>

            <p><strong>Location:</strong> {req.location}</p>
            <p><strong>People:</strong> {req.people}</p>

            <p
              className={`urgency ${req.urgency.toLowerCase()}`}
            >
              {req.urgency} Priority
            </p>

            <button onClick={() => handleAccept(req.organization)}>
              Accept Request
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default DonorAcceptRequestPage;