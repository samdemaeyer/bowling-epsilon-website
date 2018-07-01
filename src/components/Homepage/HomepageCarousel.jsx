import React from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../settings';

// TODO: name `alt`
const HomepageCarousel = () => (
  <Slider {...sliderSettings()}>
    <div className="slide-wrapper">
      <img src="images/slider-1.jpg" className="img-responsive" alt="..." />
      <div className="slide-content">
        <h3>Bowling, Fun & Food</h3>
        <h4>come get your game on today</h4>
      </div>
    </div>
    <div className="slide-wrapper">
      <img src="images/slider-2.jpg" className="img-responsive" alt="..." />
      <div className="slide-content">
        <h3>Bowlers do it in alleys.</h3>
        <h4>We don’t remember days…we remember moments.</h4>
      </div>
    </div>
    <div className="slide-wrapper">
      <img src="images/slider-3.jpg" className="img-responsive" alt="..." />
      <div className="slide-content">
        <h3>Bowling is fun in your SPARE time.</h3>
        <h4>Bowling is a sport for people who have talent to spare.</h4>
      </div>
    </div>
  </Slider>
);

export default HomepageCarousel;
