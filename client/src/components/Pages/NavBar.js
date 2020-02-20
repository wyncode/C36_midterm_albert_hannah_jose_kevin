import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../images/perfect-burger.png';

const NavBar = () => {
  const [isHovered, setHover] = React.useState(false);
  const handleHover = () => {
    setHover(!isHovered);
  };
  const burgerClass = isHovered ? 'burger-button heartBeat' : 'burger-button';

  return (
    <div>
      <nav className="home-nav">
        <div className="burger-button">
          <a className="burger-animation" href="/">
            <img
              src={burger}
              alt="burger"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={burgerClass}
            />
          </a>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/restaurants/wynwood">Munchies</Link>
          </div>
          <div className="nav-links">
            <Link to="/about-us">About Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
