function Topbar() {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="topbar-right">

        <button className="notification">
          🔔
          <span>3</span>
        </button>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <span>Admin</span>
        </div>

      </div>

    </div>
  );
}

export default Topbar;