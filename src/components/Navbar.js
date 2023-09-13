import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Navbar;
