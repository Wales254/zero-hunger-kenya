import { useEffect, useState } from "react";
import axios from "axios";

function AdminAccept() {
  const [unreOrgs, setUnregOrgs] = useState([]);
  const [adminJobs, setAdminJobs] = useState([]);

  const [formData, setFormData] = useState({
    _id: null,
    adminOrganizationName: "",
    adminRegNo: "",
    adminEmail: "",
    adminRole: "ORG",
    adminPassword: "",
  });

  // LOAD DATA
  useEffect(() => {
    fetchUnregOrgs();
    fetchAdminJobs();
  }, []);

  // FETCH UNREGISTERED ORGS
  const fetchUnregOrgs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/adminOrg/accepts/"
      );
      setUnregOrgs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // FETCH APPROVED ORGS
  const fetchAdminJobs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/admin/approves/"
      );
      setAdminJobs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ACCEPT ORG
  const toggleAcceptUnregOrgs = async (org) => {
    try {
      const adminOrg = {
        adminOrganizationName: org.adminOrgOrganizationName,
        adminRegNo: org.adminOrgRegNo,
        adminEmail: org.adminOrgEmail,
        adminRole: "ORG",
        adminPassword: org.adminOrgPassword,
      };

      await axios.post(
        "http://localhost:4000/admin/approves/",
        adminOrg
      );

      await axios.delete(
        `http://localhost:4000/adminOrg/accepts/${org._id}`
      );

      fetchUnregOrgs();
      fetchAdminJobs();
    } catch (error) {
      console.error(error);
    }
  };

  // REJECT ORG
  const toggleRejectUnregOrgs = async (org) => {
    try {
      await axios.delete(
        `http://localhost:4000/adminOrg/accepts/${org._id}`
      );

      fetchUnregOrgs();
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE APPROVED ORG
  const toggleDeclineAdmin = async (job) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin/approves/${job._id}`
      );

      fetchAdminJobs();
    } catch (error) {
      console.error(error);
    }
  };

  // EDIT LOAD
  const toggleUpdateAdmin = (org) => {
    setFormData({
      _id: org._id,
      adminOrganizationName: org.adminOrganizationName,
      adminRegNo: org.adminRegNo,
      adminEmail: org.adminEmail,
      adminRole: org.adminRole,
      adminPassword: org.adminPassword,
    });
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData._id) {
        await axios.patch(
          `http://localhost:4000/admin/approves/${formData._id}`,
          formData
        );
      } else {
        await axios.post(
          "http://localhost:4000/adminOrg/accepts/",
          formData
        );
      }

      fetchUnregOrgs();
      fetchAdminJobs();

      setFormData({
        _id: null,
        adminOrganizationName: "",
        adminRegNo: "",
        adminEmail: "",
        adminRole: "ORG",
        adminPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <div className="workouts">
        <h1>Unregistered Organizations</h1>

        {unreOrgs.map((org) => (
          <div className="workout-details" key={org._id}>
            <h3>{org.adminOrgOrganizationName}</h3>
            <p>{org.adminOrgRegNo}</p>
            <p>{org.adminOrgEmail}</p>

            <button onClick={() => toggleAcceptUnregOrgs(org)}>
              Accept
            </button>

            <button onClick={() => toggleRejectUnregOrgs(org)}>
              Reject
            </button>
          </div>
        ))}

        <h1>Registered Organizations</h1>

        {adminJobs.map((job) => (
          <div className="workout-details" key={job._id}>
            <h3>{job.adminOrganizationName}</h3>
            <p>{job.adminRegNo}</p>
            <p>{job.adminEmail}</p>

            <button onClick={() => toggleDeclineAdmin(job)}>
              Delete
            </button>

            <button onClick={() => toggleUpdateAdmin(job)}>
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* FORM */}
      <form className="create" onSubmit={handleSubmit}>
        <h2>Add / Edit Organization</h2>

        <input
          name="adminOrganizationName"
          value={formData.adminOrganizationName}
          onChange={handleChange}
          placeholder="Organization Name"
        />

        <input
          name="adminRegNo"
          value={formData.adminRegNo}
          onChange={handleChange}
          placeholder="Reg No"
        />

        <input
          name="adminEmail"
          value={formData.adminEmail}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="adminPassword"
          value={formData.adminPassword}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AdminAccept;