import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return ( 
<  nav id="home-nav">
    <Link to="/">Home</Link>
    <Link to="/restaurants/wynwood">Munchies</Link>
    <Link to="/about-us">About Us</Link>
  </nav> );
}
 
export default NavBar;