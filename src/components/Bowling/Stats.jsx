import React from 'react';

const Stats = () => (
  <div className="container-fluid bowling-para">
    <div className="container">
      <div className="col-md-12 text-center">
        <h2 className="welc-h3" style={{ color: '#FFF', marginBottom: '0' }}>ALL SEASON BOWLING CENTER</h2>
        <span className="contact-underline" />
        <p>
          Let, consectetur adipiscing elit. Vestibu lum porttitor egestas orci,
          vitae ullamcorper risus consett velit vestibulum, rutru.
        </p>
      </div>
      <div className="clearfix" />
      <div className="col-xs-12 col-sm-6 col-md-3 text-center counter-col">
        <span className="count" style={{ fontSize: '50px', fontFamily: 'track', color: '#FFF' }}>190</span>
        <div className="counter-underline" />
        <p className="text-uppercase">celebrated Parties</p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 text-center counter-col">
        <span className="count" style={{ fontSize: '50px', fontFamily: 'track', color: '#FFF' }}>5</span>
        <h2>K</h2>
        <div className="counter-underline" />
        <p className="text-uppercase">total bowling</p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 text-center counter-col">
        <span className="count" style={{ fontSize: '50px', fontFamily: 'track', color: '#FFF' }}>450</span>
        <div className="counter-underline" />
        <p className="text-uppercase">Events</p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 text-center counter-col">
        <span className="count" style={{ fontSize: '50px', fontFamily: 'track', color: '#FFF' }}>100</span>
        <h2>K</h2>
        <div className="counter-underline" />
        <p className="text-uppercase">Visited people</p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default Stats;
