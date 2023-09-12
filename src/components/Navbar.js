import React from 'react';
import logo from '../logo.jpg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Navbar;
