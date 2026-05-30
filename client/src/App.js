import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Landing Pages
import LandingPage from "./pages/Landing Pages/LandingPage";
import Login from "./pages/Landing Pages/LoginPage";
import Signup from "./pages/Landing Pages/SignUpPage";

// Volunteer Pages
import VolunteerHome from "./pages/Volunteer/VolunteerHomePage";
import VolunteerMgmt from "./pages/Volunteer/VolunteerMgmt";
import VolunteerDeliveryAccept from "./pages/Volunteer/VolunteerDeliveryAccept";

// Organization Pages
import OrganizationHome from "./pages/Organization/OrganizationHomePage";
import OrganizationMgmt from "./pages/Organization/OrganizationMgmtPage";
import FoodAidRequest from "./pages/Organization/FoodAidRequestPage";

// Donor Pages
import DonorHome from "./pages/Donor/DonorHomePage";
import DonorMgmt from "./pages/Donor/DonorMgmtPage";
import DonorAcceptRequest from "./pages/Donor/DonorAcceptRequestPage";

// ADMIN PAGES
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminAccept from "./pages/Admin/AdminAccept";
import AdminManage from "./pages/Admin/AdminManage";

// 404 Page
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* NAVBAR (always visible) */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="pages">
          <Routes>

            {/* LANDING */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* VOLUNTEER */}
            <Route path="/volunteer-home" element={<VolunteerHome />} />
            <Route path="/volunteer-mgmt" element={<VolunteerMgmt />} />
            <Route path="/volunteer-delivery-accept" element={<VolunteerDeliveryAccept />} />

            {/* ORGANIZATION */}
            <Route path="/organization-home" element={<OrganizationHome />} />
            <Route path="/organization-mgmt" element={<OrganizationMgmt />} />
            <Route path="/foodaidrequest" element={<FoodAidRequest />} />

            {/* DONOR */}
            <Route path="/donor-home" element={<DonorHome />} />
            <Route path="/donor-mgmt" element={<DonorMgmt />} />
            <Route path="/donor-accept-request" element={<DonorAcceptRequest />} />

            {/* ADMIN */}
            <Route path="/admin-home" element={<AdminHomePage />} />
            <Route path="/admin-accept" element={<AdminAccept />} />
            <Route path="/admin-manage" element={<AdminManage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* FOOTER (always visible) */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;