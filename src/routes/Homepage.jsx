import React from 'react';
import HomepageCarousel from '../components/Homepage/HomepageCarousel';
import HomepageSection1 from '../components/Homepage/Section1';
import HomepageSection2 from '../components/Homepage/Section2';
import HomepageSection3 from '../components/Homepage/Section3';
import HomepageSection4 from '../components/Homepage/Section4';
import Testimonials from '../components/Common/Testimonials';
import ImagesAutoSlider from '../components/Common/ImagesAutoSlider';
import GetYourBowlingOn from '../components/Common/GetYourBowlingOn';
import ContactUs from '../components/Common/ContactUs';
import Newslatter from '../components/Common/Newsletter';

const Homepage = () => (
  <div>
    <HomepageCarousel />
    <HomepageSection1 />
    <HomepageSection2 />
    <GetYourBowlingOn />
    <HomepageSection3 />
    <Testimonials />
    <ImagesAutoSlider />
    <HomepageSection4 />
    <Newslatter />
    <ContactUs />
  </div>
);

export default Homepage;
