import React from 'react';
import AdvertCarousel from './AdvertCarousel';

const HomepageSection4 = () => (
  <div>
    <div className="container-fluid center-right advt-slider">
      <div className="center-right-black padd-50">
        <div className="container">
          <div className="col-md-12 text-center">
            <h2 className="welc-h3" style={{ color: '#FFF', marginBottom: '0' }}>LATEST EVENTS</h2>
            <span className="contact-underline" />
          </div>
          <div className="col-md-offset-2 col-md-8">
            <AdvertCarousel />
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
);

export default HomepageSection4;
