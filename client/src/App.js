import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

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

// Optional 404 Page
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
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="pages">
          <Routes>

            {/* Landing Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Volunteer Routes */}
            <Route path="/volunteer-home" element={<VolunteerHome />} />
            <Route path="/volunteer-mgmt" element={<VolunteerMgmt />} />
            <Route
              path="/volunteer-delivery-accept"
              element={<VolunteerDeliveryAccept />}
            />

            {/* Organization Routes */}
            <Route path="/organization-home" element={<OrganizationHome />} />
            <Route path="/organization-mgmt" element={<OrganizationMgmt />} />
            <Route path="/foodaidrequest" element={<FoodAidRequest />} />

            {/* Donor Routes */}
            <Route path="/donor-home" element={<DonorHome />} />
            <Route path="/donor-mgmt" element={<DonorMgmt />} />
            <Route
              path="/donor-accept-request"
              element={<DonorAcceptRequest />}
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;