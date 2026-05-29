import { useEffect, useState } from "react";
import axios from "axios";

function AdminManage() {
  const [adminJobs, setAdminJobs] = useState([]);

  const [updateAdmin, setUpdateAdmin] = useState({
    _id: null,
    adminOrganizationName: "",
    adminRegNo: "",
    adminEmail: "",
    adminRole: "",
    adminPassword: "",
  });

  // LOAD DATA
  useEffect(() => {
    fetchAdminJobs();
  }, []);

  // FETCH ADMIN JOBS
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

  // DELETE ADMIN JOB
  const toggleDeclineAdmin = async (job) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin/approves/${job._id}`
      );

      fetchAdminJobs();
    } catch (error) {
      console.error("Error deleting admin job:", error);
    }
  };

  // LOAD DATA INTO FORM
  const toggleUpdateAdmin = (job) => {
    setUpdateAdmin({
      _id: job._id,
      adminOrganizationName: job.adminOrganizationName,
      adminRegNo: job.adminRegNo,
      adminEmail: job.adminEmail,
      adminRole: job.adminRole,
      adminPassword: job.adminPassword,
    });
  };

  // HANDLE INPUT CHANGE
  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;

    setUpdateAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // UPDATE ADMIN JOB
  const updateAdminJob = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:4000/admin/approves/${updateAdmin._id}`,
        updateAdmin
      );

      fetchAdminJobs();

      // reset form
      setUpdateAdmin({
        _id: null,
        adminOrganizationName: "",
        adminRegNo: "",
        adminEmail: "",
        adminRole: "",
        adminPassword: "",
      });
    } catch (error) {
      console.error("Error updating admin job:", error);
    }
  };

  return (
    <div className="home">
      <div className="workouts">
        <h1>Admin Jobs Management</h1>

        {adminJobs.map((job) => (
          <div className="workout-details" key={job._id}>
            <h3>{job.adminOrganizationName}</h3>

            <p>Reg No: {job.adminRegNo}</p>
            <p>Email: {job.adminEmail}</p>
            <p>Role: {job.adminRole}</p>

            <button onClick={() => toggleDeclineAdmin(job)}>
              Delete
            </button>

            <button onClick={() => toggleUpdateAdmin(job)}>
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* UPDATE FORM */}
      <form className="create" onSubmit={updateAdminJob}>
        <h2>Edit Admin Organization</h2>

        <input
          type="text"
          name="adminOrganizationName"
          placeholder="Organization Name"
          value={updateAdmin.adminOrganizationName}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="text"
          name="adminRegNo"
          placeholder="Registration Number"
          value={updateAdmin.adminRegNo}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="email"
          name="adminEmail"
          placeholder="Email"
          value={updateAdmin.adminEmail}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="text"
          name="adminRole"
          placeholder="Role"
          value={updateAdmin.adminRole}
          onChange={handleUpdateFieldChange}
        />

        <input
          type="password"
          name="adminPassword"
          placeholder="Password"
          value={updateAdmin.adminPassword}
          onChange={handleUpdateFieldChange}
        />

        <button type="submit">Update Admin</button>
      </form>
    </div>
  );
}

export default AdminManage;