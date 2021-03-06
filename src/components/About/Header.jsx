import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid about-head-bg">
    <div className="about-head-bg-black">
      <div className="container text-center">
        <h2>ABOUT US</h2>
        <span>
          <NavLink to="/">HOME &nbsp; &gt;</NavLink> &nbsp; ABOUT US
        </span>
      </div>
    </div>
  </div>
);

export default Header;
