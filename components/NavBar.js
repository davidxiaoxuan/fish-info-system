import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Fish Info System</Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Area</button>
            <div className="dropdown-content">
              <Link to="/region/English Bay">English Bay</Link>
              <Link to="/region/Fraser River">Fraser River</Link>
              <Link to="/region/Stanley Park">Stanley Park</Link>
              <Link to="/region/Burnaby Lake">Burnaby Lake</Link>
              <Link to="/region/Capilano River">Capilano River</Link>
              <Link to="/region/Burrard Inlet">Burrard Inlet</Link>
              <Link to="/region/Seymour River">Seymour River</Link>
            </div>
          </div>
          {user ? (
            <>
              <Link className="nav-link" to="/profile">Profile</Link>
              <button className="nav-link" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
