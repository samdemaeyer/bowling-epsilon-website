import React from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../settings';

// TODO: name `alt`
const AdvertCarousel = () => (
  <Slider {...sliderSettings}>
    <div>
      <div className="testimonial">
        <img src="images/advt-1.jpg" className="img-responsive" alt="..." />
      </div>
    </div>
    <div className="testimonial">
      <img src="images/advt-2.jpg" className="img-responsive" alt="..." />
    </div>
  </Slider>
);

export default AdvertCarousel;
