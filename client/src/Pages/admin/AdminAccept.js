import { useEffect, useState } from "react";
import axios from "axios";

function AdminAccept() {
  const [unreOrgs, setUnregOrgs] = useState([]);
  const [adminJobs, setAdminJobs] = useState([]);

  const [unregOrgsAccept, setUnregOrgsAccept] = useState({
    _id: null,
    adminOrganizationName: "",
    adminRegNo: "",
    adminEmail: "",
    adminRole: "",
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
      console.error("Error fetching unregistered orgs:", error);
    }
  };

  // FETCH REGISTERED ORGS
  const fetchAdminJobs = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/admin/approves/"
      );
      setAdminJobs(res.data);
    } catch (error) {
      console.error("Error fetching admin jobs:", error);
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
      console.error("Error accepting org:", error);
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
      console.error("Error rejecting org:", error);
    }
  };

  // DELETE REGISTERED ORG
  const toggleDeclineAdmin = async (job) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin/approves/${job._id}`
      );

      fetchAdminJobs();
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  // LOAD DATA INTO FORM
  const toggleUpdateAdmin = (org) => {
    setUnregOrgsAccept({
      _id: org._id,
      adminOrganizationName: org.adminOrganizationName,
      adminRegNo: org.adminRegNo,
      adminEmail: org.adminEmail,
      adminRole: org.adminRole,
      adminPassword: org.adminPassword,
    });
  };

  // INPUT CHANGE
  const handleAddFieldChange = (e) => {
    const { name, value } = e.target;

    setUnregOrgsAccept((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CREATE OR UPDATE
  const createAdminOrgJob = async (e) => {
    e.preventDefault();

    try {
      if (unregOrgsAccept._id) {
        await axios.patch(
          `http://localhost:4000/admin/approves/${unregOrgsAccept._id}`,
          unregOrgsAccept
        );
      } else {
        await axios.post(
          "http://localhost:4000/adminOrg/accepts/",
          {
            adminOrgOrganizationName: unregOrgsAccept.adminOrganizationName,
            adminOrgRegNo: unregOrgsAccept.adminRegNo,
            adminOrgEmail: unregOrgsAccept.adminEmail,
            adminOrgRole: "ORG",
            adminOrgPassword: unregOrgsAccept.adminPassword,
          }
        );
      }

      fetchUnregOrgs();
      fetchAdminJobs();

      setUnregOrgsAccept({
        _id: null,
        adminOrganizationName: "",
        adminRegNo: "",
        adminEmail: "",
        adminRole: "",
        adminPassword: "",
      });
    } catch (error) {
      console.error("Error saving org:", error);
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
      <form className="create" onSubmit={createAdminOrgJob}>
        <h2>Add / Edit Organization</h2>

        <input
          name="adminOrganizationName"
          value={unregOrgsAccept.adminOrganizationName}
          onChange={handleAddFieldChange}
          placeholder="Organization Name"
        />

        <input
          name="adminRegNo"
          value={unregOrgsAccept.adminRegNo}
          onChange={handleAddFieldChange}
          placeholder="Reg No"
        />

        <input
          name="adminEmail"
          value={unregOrgsAccept.adminEmail}
          onChange={handleAddFieldChange}
          placeholder="Email"
        />

        <input
          name="adminPassword"
          value={unregOrgsAccept.adminPassword}
          onChange={handleAddFieldChange}
          placeholder="Password"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AdminAccept;