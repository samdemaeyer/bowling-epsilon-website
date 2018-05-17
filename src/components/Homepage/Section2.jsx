import React from 'react';

// TODO: name `alt`
const HomepageSection2 = () => (
  <div>
    <div className="container">
      <div className="col-xs-12 col-md-1" />
      <div className="col-xs-12 col-md-10 top-sec">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 box-1 text-center">
            <h2 className="welc-h2" style={{ color: '#FFF' }}>Bowling</h2>
            <p>Lorem ipsum dolor sit amet dipiscing elit.</p>
            <span className="perspective">
              <a href="bowling.html" className="btn-2 btn-8 btn-8a">READ MORE</a>
            </span>
            <img src="images/box-1-ball.png" alt="..." />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-4" style={{ padding: '0' }}>
            <img src="images/box-2.jpg" className="img-responsive" alt="..." />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12  col-md-8 box-2 text-center">
            <h2 className="welc-h2" style={{ color: '#FFF', marginBottom: '15px' }}>Parties & Events</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed a ligula in velit..</p><br />
            <span className="perspective">
              <a href="contact.html" className="btn-2 btn-8 btn-8a">BOOK NOW</a>
            </span>
            <img src="images/box-2-glas.png" alt="..." />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4" style={{ padding: '0' }}>
            <img src="images/box-3.jpg" className="img-responsive" alt="..." />
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-1" />
      <div className="clearfix" />
    </div>
  </div>
);

export default HomepageSection2;
