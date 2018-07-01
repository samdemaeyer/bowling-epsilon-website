import React from 'react';
import { NavLink } from 'react-router-dom';

const Membership = () => (
  <div className="container padd-70">
    <div className="col-md-12 text-center">
      <h2 className="welc-h3" style={{marginBottom: '10px'}}>
        MemberShip
      </h2>
      <span className="testimonial-under" style={{marginBottom: '5px'}} />
      <p className="head-p">
        Book Our Membership with Stunning Facility and Delicious Food
      </p>
    </div>
    <div className="clearfix" />

    <div className="row">
      <div className="col-sm-6 col-md-3 text-center">
        <div className="plan-body">
          <h2>Basic</h2>
          <p>Basic membership</p>
          <div className="price-body">
            <span>39$</span>
            <h5>Per Person</h5>
          </div>
          <ul>
            <li>Bowling</li>
            <li>Strike</li>
            <li>Snooker</li>
            <li>
              <del>Arcade</del>
            </li>
            <li>
              <del>Laser Tag</del>
            </li>
            <li>
              <del>Food</del>
            </li>
          </ul>
          <NavLink to="/contact">More Info</NavLink>
        </div>
      </div>

      <div className="col-sm-6 col-md-3 text-center">
        <div className="plan-body">
          <h2>Standard</h2>
          <p>Standard membership</p>
          <div className="price-body">
            <span>49$</span>
            <h5>Per Person</h5>
          </div>
          <ul>
            <li>Bowling</li>
            <li>Strike</li>
            <li>Snooker</li>
            <li>Arcade</li>
            <li>
              <del>Laser Tag</del>
            </li>
            <li>
              <del>Food</del>
            </li>
          </ul>
          <NavLink to="/contact">More Info</NavLink>
        </div>
      </div>

      <div className="col-sm-6 col-md-3 text-center">
        <div className="plan-body">
          <div className="offer-label">40% off</div>
          <h2>Platinum</h2>
          <p>Platinum membership</p>
          <div className="price-body">
            <span>59$</span>
            <h5>Per Person</h5>
          </div>
          <ul>
            <li>Bowling</li>
            <li>Strike</li>
            <li>Snooker</li>
            <li>Arcade</li>
            <li>Laser Tag</li>
            <li>
              <del>Food</del>
            </li>
          </ul>
          <NavLink to="/contact">More Info</NavLink>
        </div>
      </div>

      <div className="col-sm-6 col-md-3 text-center">
        <div className="plan-body">
          <h2>Premium</h2>
          <p>Premium membership</p>
          <div className="price-body">
            <span>59$</span>
            <h5>Per Person</h5>
          </div>
          <ul>
            <li>Bowling</li>
            <li>Strike</li>
            <li>Snooker</li>
            <li>Arcade</li>
            <li>Laser Tag</li>
            <li>Food</li>
          </ul>
          <NavLink to="/contact">More Info</NavLink>
        </div>
      </div>

      <div className="clearfix" />
    </div>
  </div>
);

export default Membership;
