import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid contact-head-bg">
    <div className="contact-head-bg-black">
      <div className="container text-center">
        <h2>CONTACT</h2>
        <span>
          <NavLink to="/">HOME &nbsp; &gt;</NavLink> &nbsp; CONTACT
        </span>
      </div>
    </div>
  </div>
);

export default Header;
