import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>

      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        ☰
      </button>

      <h2 className="logo">
        {collapsed ? "FP" : "Food Pals"}
      </h2>

      <nav>

        <Link to="/admin-home">
          📊 {!collapsed && "Dashboard"}
        </Link>

        <Link to="/organization-home">
          🏢 {!collapsed && "Organizations"}
        </Link>

        <Link to="/donor-home">
          💝 {!collapsed && "Donors"}
        </Link>

        <Link to="/volunteer-home">
          🚚 {!collapsed && "Volunteers"}
        </Link>

        <Link to="/">
          🚪 {!collapsed && "Logout"}
        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;