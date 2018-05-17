import React from 'react';
import HomepageCarousel from '../components/Homepage/HomepageCarousel';
import HomepageSection1 from '../components/Homepage/Section1';
import HomepageSection2 from '../components/Homepage/Section2';
import HomepageSection3 from '../components/Homepage/Section3';
import HomepageSection4 from '../components/Homepage/Section4';
import HomepageSection6 from '../components/Homepage/Section6';
import HomepageSection7 from '../components/Homepage/Section7';
import Testimonials from '../components/Common/Testimonials';
import ImagesAutoSlider from '../components/Common/ImagesAutoSlider';
import ContactUs from '../components/Common/ContactUs';

const Homepage = () => (
  <div>
    <HomepageCarousel />
    <HomepageSection1 />
    <HomepageSection2 />
    <HomepageSection3 />
    <HomepageSection4 />
    <Testimonials />
    <ImagesAutoSlider />
    <HomepageSection6 />
    <HomepageSection7 />
    <ContactUs />
  </div>
);

export default Homepage;
