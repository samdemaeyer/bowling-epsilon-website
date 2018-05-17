import React from 'react';

// TODO: name `alt`
class ImagesAutoSlider extends React.Component {
  componentDidMount() {
    window.$('.bxslider').bxSlider({
      minSlides: 1,
      maxSlides: 8,
      slideWidth: 279,
      slideMargin: 0,
      ticker: true,
      speed: 90000,
    });
  }

  render() {
    return (
      <div className="container-fluid" style={{ padding: '0' }}>
        <ul className="bxslider">
          <li><img src="images/gallery-1.jpg" alt="..." /></li>
          <li><img src="images/gallery-6.jpg" alt="..." /></li>
          <li><img src="images/gallery-2.jpg" alt="..." /></li>
          <li><img src="images/gallery-3.jpg" alt="..." /></li>
          <li><img src="images/gallery-4.jpg" alt="..." /></li>
          <li><img src="images/gallery-5.jpg" alt="..." /></li>
          <li><img src="images/gallery-1.jpg" alt="..." /></li>
          <li><img src="images/gallery-3.jpg" alt="..." /></li>
        </ul>
      </div>
    );
  }
}

export default ImagesAutoSlider;

