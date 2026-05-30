import DashboardLayout from "../../Components/DashboardLayout";
import DashboardCards from "../../Components/DashboardCards";
import ActivityChart from "../../Components/ActivityChart";
import "./AdminHomePage.css";

function AdminHomePage() {
  return (
    <DashboardLayout>

      <h1>Admin Dashboard</h1>

      <DashboardCards />

      <ActivityChart />

    </DashboardLayout>
  );
}

export default AdminHomePage;