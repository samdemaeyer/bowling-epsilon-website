import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed: 5000,
  fade: true,
};

const HomepageCarousel = () => (
  <Slider {...settings}>
    <div>  
      <div className="carousel-element" style={{backgroundImage: "url(/images/slider-1.jpg"}}>
        Bowling, Fun & Food
      </div>
    </div>
    <div>  
      <div className="carousel-element" style={{backgroundImage: "url(/images/slider-2.jpg"}}></div>
    </div>
    <div>  
      <div className="carousel-element" style={{backgroundImage: "url(/images/slider-3.jpg"}}></div>
    </div>
  </Slider>
);

export default HomepageCarousel;