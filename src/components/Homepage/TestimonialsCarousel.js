import React from "react";
import Slider from "react-slick";
import { sliderSettings } from '../../settings';

// TODO: name `alt`
const TestimonialsCarousel = () => (
  <Slider {...sliderSettings}>
    <div className="testimonial">
      <div className="pic">
        <img src="images/testimonial-1.jpg" alt="" />
      </div>
      <p className="description">
        “Pellentesque congue nisi quis nisi ullamcorper sollicitudin. Duis hendrerit, magna ornare dapibus, nulla ipsum iaculis nisl, a malesuada arcu quam ut dolor. Fusce dolor erat, eget lobortis eget, hendrerit vel turpis. Mauris accumsan at nibh a lacinia. dit mauris quam, nec commodo dui tincidunt in”
      </p>
      <h3 className="testimonial-title"> - Natasha Mascara</h3>
    </div>
    <div className="testimonial">
      <div className="pic">
        <img src="images/testimonial-2.jpg" alt="" />
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim diam, tempus vel ultricies viverra, luctus in elit. Aliquam tempus blandit velit, in pharetra ex volutpat a. Cras eu augue ac nisl tempor commodo.
      </p>
      <h3 className="testimonial-title"> - Lucius Cashmere</h3>
    </div>
    <div className="testimonial">
      <div className="pic">
        <img src="images/testimonial-3.jpg" alt="" />
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim diam, tempus vel ultricies viverra, luctus in elit. Aliquam tempus blandit velit, in pharetra ex volutpat a. Cras eu augue ac nisl tempor commodo.
      </p>
      <h3 className="testimonial-title"> - Jesse Phoenix</h3>
    </div>
  </Slider>
);

export default TestimonialsCarousel;
