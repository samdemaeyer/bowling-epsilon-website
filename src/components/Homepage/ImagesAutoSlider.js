import React from "react";
import Slider from "react-slick";

const settings = {
  autoplay:true,
  autoplaySpeed: 1500,
  arrows:false,
  slide:'.slider-pic', 
  slidesToShow:4,
  slidesToScroll:1,
  dots:false,
  cssEase: 'cubic-bezier(0.250, 0.250, 0.750, 0.750',
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      dots: false
    }
  }]
}

const ImagesAutoSlider = () => (
  <Slider {...settings}>
    <div>  
      <img className="group" src="images/gallery-1.jpg" alt="" />
    </div>
    <div>
      <img className="group" src="images/gallery-2.jpg" alt="" />
    </div>
    <div>
      <img className="group" src="images/gallery-3.jpg" alt="" />
    </div>
    <div>  
      <img className="group" src="images/gallery-4.jpg" alt="" />
    </div>
    <div>
      <img className="group" src="images/gallery-5.jpg" alt="" />
    </div>
    <div>
      <img className="group" src="images/gallery-6.jpg" alt="" />
    </div>
  </Slider>
);

export default ImagesAutoSlider;