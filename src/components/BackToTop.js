import React from 'react';
import * as Scroll from 'react-scroll';

const scrollToTop = () => {
  Scroll.animateScroll.scrollToTop();
}

const BackToTop = () => (
  <div id="back-to-top">
    <button className="top arrow" href="#" onClick={scrollToTop}><i className="fa fa-long-arrow-up"></i></button>
  </div>
);

export default BackToTop;