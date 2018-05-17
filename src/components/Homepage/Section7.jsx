import React from 'react';

const HomepageSection8 = () => (
  <div className="container-fluid newslatter-bg">
    <div className="container">
      <div className="col-md-12 text-center">
        <h3 className="welc-h3" style={{ color: '#fff' }}>Sign up for newsletter</h3>
      </div>
      <div className="clearfix" />
      <div className="col-md-1" />
      <div className="col-md-10">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-5 input-top newslatter-btm">
          <input type="email" placeholder="Enter Your Name" className="input-box" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 input-top newslatter-btm">
          <input type="email" placeholder="Enter Your Email" className="input-box" />
        </div>
        <div className="col-xs-12 col-sm-4 col-sm-offset-4 col-md-offset-0 col-md-3 col-lg-2 input-top newslatter-btm" style={{ padding: '0 5px' }}>
          <button className="newslatter-submit text-center">KEEP UPDATED</button>
        </div>
        <div className="clearfix" />
      </div>
      <div className="col-md-1" />
      <div className="clearfix" />
    </div>
  </div>
);

export default HomepageSection8;
