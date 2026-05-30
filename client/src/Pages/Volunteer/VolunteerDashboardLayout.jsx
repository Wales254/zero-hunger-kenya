import { useState } from "react";
import { Link } from "react-router-dom";
import "./VolunteerDashboardLayout.css";

const VolunteerDashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "vd-layout dark" : "vd-layout"}>

      {/* SIDEBAR */}
      <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>

        <div className="logo">
          <h2>🍲 Food Pals</h2>
        </div>

        <nav>
          <Link to="/volunteer-home">Dashboard</Link>
          <Link to="/volunteer-delivery-accept">Deliveries</Link>
          <Link to="/volunteer-mgmt">Profile</Link>
        </nav>

        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
          {collapsed ? "➡" : "⬅"}
        </button>
      </aside>

      {/* MAIN AREA */}
      <div className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div className="left">
            <h3>Volunteer Panel</h3>
          </div>

          <div className="right">

            {/* Notification */}
            <div className="icon">🔔</div>

            {/* Dark Mode */}
            <button onClick={() => setDark(!dark)}>
              {dark ? "☀️" : "🌙"}
            </button>

            {/* Profile */}
            <div className="profile">
              <div className="avatar">V</div>
              <span>Volunteer</span>
            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}
        <div className="content">
          {children}
        </div>

      </div>

    </div>
  );
};

export default VolunteerDashboardLayout;