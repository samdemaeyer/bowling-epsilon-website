import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid Bowling-head-bg">
    <div className="Bowling-head-bg-black">
      <div className="container text-center">
        <h2>BOWLING</h2>
        <span>
          <NavLink to="/">HOME &nbsp; &gt;</NavLink> &nbsp; BOWLING
        </span>
      </div>
    </div>
  </div>
);

export default Header;
