import React, { useState } from "react";
import "./SignUpPage.css";

const SignUp = () => {
  const [activeForm, setActiveForm] = useState("");

  const handleOrgSubmit = (event) => {
    event.preventDefault();

    const orgData = {
      orgName: event.target.orgName.value,
      registrationNo: event.target.registrationNo.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: "organization",
    };

    console.log("Organization Data:", orgData);

    event.target.reset();
  };

  const handleVolSubmit = (event) => {
    event.preventDefault();

    const userData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: event.target.role.value,
    };

    console.log("Volunteer/Donor Data:", userData);

    event.target.reset();
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        {/* Left Section */}
        <div className="signup-info">
          <h1>Join Food Pals</h1>

          <p>
            Become part of a growing movement dedicated
            to reducing hunger and food waste worldwide.
          </p>

          <div className="role-buttons">

            <button
              className={`role-btn ${
                activeForm === "organization" ? "active" : ""
              }`}
              onClick={() => setActiveForm("organization")}
            >
              🏢 Organization
            </button>

            <button
              className={`role-btn ${
                activeForm === "volunteer" ? "active" : ""
              }`}
              onClick={() => setActiveForm("volunteer")}
            >
              🙋 Volunteer / Donor
            </button>

          </div>
        </div>

        {/* Right Section */}
        <div className="signup-form-container">

          {/* Organization Form */}
          {activeForm === "organization" && (
            <form className="signup-form" onSubmit={handleOrgSubmit}>

              <h2>Organization Sign Up</h2>

              <input
                type="text"
                name="orgName"
                placeholder="Organization Name"
                required
              />

              <input
                type="text"
                name="registrationNo"
                placeholder="Registration Number"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <button type="submit">
                Create Organization Account
              </button>

            </form>
          )}

          {/* Volunteer / Donor Form */}
          {activeForm === "volunteer" && (
            <form className="signup-form" onSubmit={handleVolSubmit}>

              <h2>Volunteer / Donor Sign Up</h2>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <select name="role" required>
                <option value="">Select Role</option>
                <option value="volunteer">Volunteer</option>
                <option value="donor">Donor</option>
              </select>

              <button type="submit">
                Create Account
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};

export default SignUp;