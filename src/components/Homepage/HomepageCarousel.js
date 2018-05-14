import React from "react";
import Slider from "react-slick";
import { sliderSettings } from '../../settings';

const HomepageCarousel = () => (
  <Slider {...sliderSettings()}>
    <div>  
      <img src="images/slider-1.jpg" className="img-responsive" alt="" />
    </div>
    <div>
      <img src="images/slider-2.jpg" className="img-responsive" alt="" />
    </div>
    <div>
      <img src="images/slider-3.jpg" className="img-responsive" alt="" />
    </div>
  </Slider>
);

export default HomepageCarousel;