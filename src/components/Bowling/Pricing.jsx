import React from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../settings';

const settings = Object.assign(sliderSettings(), {
  dots: false,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

const Newsletter = () => (
  <div className="container-fluid" style={{ padding: '0' }}>
    <div className="bowling-left">
      <div className="col-md-12 text-center padd-50">
        <h2>PRICING</h2>
        <span className="bowling-left-span" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed a ligula
          in velit.
        </p>
        <div className="col-sm-6 col-md-6 bowling-left-border">
          <div className="block">
            <i className="flaticon-bowling-pin hovicon effect-3 sub-b" />
          </div>
          <h3 className="bowling-left-h3">BOWLING</h3>
          <h4 className="bowling-left-h3 bowling-left-h4">
            $4.<span className="bowling-left-price-span">50</span>
          </h4>
          <h5 className="bowling-left-price-p">PER GAME</h5>
        </div>

        <div className="col-sm-6 col-md-6">
          <div className="block">
            <i className="flaticon-sneakers hovicon effect-3 sub-b" />
          </div>
          <h3 className="bowling-left-h3">SHOE RENTAL</h3>
          <h4 className="bowling-left-h3 bowling-left-h4">
            $3.<span className="bowling-left-price-span">00</span>
          </h4>
          <h5 className="bowling-left-price-p">PER PAIR</h5>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="bowling-right">
      <Slider {...settings}>
        <div>
          <img src="images/bowling-slider.jpg" alt="..." className="img-responsive bowling-right-img" />
        </div>
        <div>
          <img src="images/bowling-slider-2.jpg" alt="..." className="img-responsive bowling-right-img" />
        </div>
        <div>
          <img src="images/bowling-slider-3.jpg" alt="..." className="img-responsive bowling-right-img" />
        </div>
      </Slider>
    </div>
  </div>
);

export default Newsletter;
