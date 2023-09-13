import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import logo from '../logo.jpg';

function BackArrow() {
  return (
    <div data-testId="back-navigation" className="detsNav">
      <Link to="/">
        <AiOutlineLeft />
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <span />
    </div>
  );
}

export default BackArrow;
