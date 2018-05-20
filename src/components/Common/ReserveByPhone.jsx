import React from 'react';
import { NavLink } from 'react-router-dom';

const ReserveByPhone = () => (
  <div className="container-fluid party-page-call-action-bg">
    <div className="container">
      <div className="col-sm-7 col-md-8 text-center">
        <h2>Reserve by phone</h2>
        <p>
          We take reservations for lunch and dinner. To make a reservation,
          please call us at (+01) 9876543210 between 10am-6pm, Monday to Friday.
        </p>
      </div>
      <div className="col-sm-5 col-md-4 text-center">
        <span className="perspective">
          <NavLink to="/contact" className="btn-2 btn-8 btn-8a">Call (+01) 9876543210</NavLink>
        </span>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default ReserveByPhone;
