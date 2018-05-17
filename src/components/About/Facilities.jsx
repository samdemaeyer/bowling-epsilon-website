import React from 'react';

const OurStory = () => (
  <div className="container-fluid padd-70">
    <div className="container">
      <div className="about-top">
        <div className="col-xs-12 col-md-6">
          <div className="about-us-img">
            <img src="images/about-top-1.jpg" className="img-responsive" alt="..." />
          </div>
        </div>
        <div className="col-xs-12 col-md-6 about-btm-top-mar">
          <h2 className="story-h2" style={{ marginTop: '0' }}>About</h2>
          <h3 className="welc-h3" style={{ fontSize: '32px', marginTop: '0' }}>All Seasons Bowling Center</h3>
          <p className="story-p">
            Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
            elemen tum felis ligula, nec volutpat lacus euismod id. Fusce sit
            amet enim vel mauris hendrerit suscipit nec quis diam. Pellentesque
            tempor sem in metus pretium egestas. Suspendisse sit amet pulvinar
            tortor, et ornare ligula. Ves tibulum purus diam. Vestibulum auctor
            libero vel ex volutpat porta. In tempor vel nulla ut consequat.
          </p>
          <p className="story-p" style={{ marginTop: '20px' }}>
            Sagittis et erat non, iaculis tristique lacus. Curabitur ut libero
            quis augue porttitor varius. Aenean quam nunc, frin gilla vel
            dapibus sit amet, portti tor scelerisque neque.
          </p>
        </div>
        <div className="clearfix" />
      </div>
      <div className="about-btm">
        <div className="col-xs-12 col-md-6 col-md-push-6">
          <div
            id="carousel-example-generic"
            className="carousel slide about-us-img about-slider"
            data-ride="carousel"
            style={{ position: 'relative' }}
          >
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="images/about-slider-1.jpg" alt="..." className="img-responsive bowling-right-img" />
              </div>
              <div className="item">
                <img src="images/about-slider-2.jpg" alt="..." className="img-responsive bowling-right-img" />
              </div>
              <div className="item">
                <img src="images/about-slider-3.jpg" alt="..." className="img-responsive bowling-right-img" />
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon-chevron-left" aria-hidden="true">
                <i className="fa fa-chevron-left" aria-hidden="true" />
              </span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon-chevron-right" aria-hidden="true">
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-md-pull-6 about-btm-top-mar">
          <h2 className="story-h2" style={{ marginTop: '0' }}>Our</h2>
          <h3 className="welc-h3" style={{ fontSize: '32px', marginTop: '0', marginBottom: '20px' }}>Luxurious Facilities</h3>
          <div className="about-btm-list">
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Morbi eu nisi accumsan, pretium tellus at, ultricies enim.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Donec elemen tum felis ligula, nec volutpat lacus euismod id.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Fusce sit amet enim vel mauris hendrerit suscipit nec quis diam.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Pellentesque tempor sem in metus pretium egestas.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Suspendisse sit amet pulvinar tortor, et ornare ligula.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Ves tibulum purus diam ulum auctor libero vel ex volutpat porta.</h3>
            </div>
            <div className="about-page-top">
              <span className="about-btm-list-span" />
              <h3>Suspendisse sit amet pulvinar tortor, et ornare ligula.</h3>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
);

export default OurStory;
