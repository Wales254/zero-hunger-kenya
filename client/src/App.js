import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Landing Pages
import LandingPage from "./Pages/Landing Pages/LandingPage";
import Login from "./Pages/Landing Pages/LoginPage";
import Signup from "./Pages/Landing Pages/SignUpPage";

// Volunteer Pages
import VolunteerHome from "./Pages/Volunteer/VolunteerHomePage";
import VolunteerMgmt from "./Pages/Volunteer/VolunteerMgmt";
import VolunteerDeliveryAccept from "./Pages/Volunteer/VolunteerDeliveryAccept";

// Organization Pages
import OrganizationHome from "./Pages/Organization/OrganizationHomePage";
import OrganizationMgmt from "./Pages/Organization/OrganizationMgmtPage";
import FoodAidRequest from "./Pages/Organization/FoodAidRequestPage";

// Donor Pages
import DonorHome from "./Pages/Donor/DonorHomePage";
import DonorMgmt from "./Pages/Donor/DonorMgmtPage";
import DonorAcceptRequest from "./Pages/Donor/DonorAcceptRequestPage";

// ADMIN PAGES
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminAccept from "./Pages/Admin/AdminAccept";
import AdminManage from "./Pages/Admin/AdminManage";

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