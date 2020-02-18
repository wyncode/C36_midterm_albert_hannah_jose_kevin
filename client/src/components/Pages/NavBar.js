import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <nav class="home-nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-links">
          <Link to="/restaurants/wynwood">Munchies</Link>
        </div>
        <div className="nav-links">
          <Link to="/about-us">About Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
