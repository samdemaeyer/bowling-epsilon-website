import React from 'react';

// import { Link } from 'react-router-dom';

// TODO: name `alt`
// TODO: Fill Links
// TODO: Fill Social Media
const MainFooter = () => (
  <div className="container-fluid padd-50">
    <div className="container">
      <div className="col-md-12 text-center">
        <img src="images/footer-logo.png" alt="..." />
      </div>
      <div className="clearfix" />
      <div className="col-sm-4 col-md-4 line-top">
        <img src="images/footer-line.png" className="img-responsive" alt="..." />
      </div>
      <div className="col-sm-4 col-md-4 text-center" style={{ marginTop: '30px' }}>
        <h2 className="welc-h3">LET&apos;S CONNECT</h2>
      </div>
      <div className="col-sm-4 col-md-4 line-btm">
        <img src="images/footer-line.png" className="img-responsive" alt="..." />
      </div>
      <div className="clearfix" />
      <div className="col-md-offset-4 col-md-4 social text-center">
        <ul>
          <li>
            <a href="https://www.facebook.com" aria-hidden="true">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-hidden="true">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" aria-hidden="true">
              <i className="fa fa-youtube" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" aria-hidden="true">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="clearfix" />
      <div className="col-md-12 foot-menu text-center">
        <ul>
          <li><a href="about-us.html">ABOUT US</a></li>
          <li><a href="bowling.html">BOWLING</a></li>
          <li><a href="fun&games.html">FUN & GAMES</a></li>
          <li><a href="gallery-3-colum.html">GALLERY</a></li>
          <li><a href="blog.html">BLOG</a></li>
          <li><a href="event.html">EVENT</a></li>
          <li><a href="contact.html">CONTACT US</a></li>
        </ul>
      </div>
      <div className="clearfix" />
      <div className="col-md-12 text-center footer-theme-color">
        <p className="footer-p text-uppercase">Copyright © 2016 all Seasons Bowling Center. All rights reserved</p>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default MainFooter;
