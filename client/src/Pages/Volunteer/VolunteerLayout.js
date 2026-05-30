import { Link } from "react-router-dom";
import "./VolunteerHomePage.css";

const VolunteerLayout = ({ children }) => {
  return (
    <div className="volunteer-dashboard">

      {/* Sidebar */}
      <aside className="volunteer-sidebar">
        <div className="volunteer-logo">Food Pals</div>

        <nav className="volunteer-menu">
          <Link to="/volunteer-home">Dashboard</Link>
          <Link to="/volunteer-delivery-accept">Deliveries</Link>
          <Link to="/volunteer-mgmt">Profile</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="volunteer-main">
        {children}
      </main>

    </div>
  );
};

export default VolunteerLayout;