import './nav.css'



const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Navbar Section */}
      <div className="nav">
        <div className="navbar-left">
          <div className="logo-container">
            <img src="\VAICSLogo.png" className="Dash-logo" alt="vaics" />
          </div>
        </div>
        <header className="navbar">
          <div className="navbar-center">
            <button className="navbar-label active">Label</button>
            <button className="navbar-label">Label</button>
            <button className="navbar-label">Label</button>
            <button className="navbar-label">Label</button>
            <button className="navbar-label">Label</button>
            <button className="navbar-label">Label</button>
          </div>
          <div className="navbar-right">
            <span className="navbar-icon">🔍</span>
            <span className="navbar-profile">😊</span>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Dashboard;