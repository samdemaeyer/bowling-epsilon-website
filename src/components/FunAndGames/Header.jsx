import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid fun-games-head-bg">
    <div className="fun-games-head-bg-black">
      <div className="container text-center">
        <h2>Fun & Games</h2>
        <span>
          <NavLink to="/">HOME &nbsp; &gt;</NavLink> &nbsp; FUN & GAMES
        </span>
      </div>
    </div>
  </div>
);

export default Header;
