import React from 'react';
import Header from '../components/About/Header';
import OurStory from '../components/About/OurStory';
import Facilities from '../components/About/Facilities';
import HistorySlider from '../components/About/HistorySlider';
import OurTeam from '../components/About/OurTeam';
import ImagesAutoSlider from '../components/Common/ImagesAutoSlider';
import Testimonials from '../components/Common/Testimonials';
import ContactUs from '../components/Common/ContactUs';

const About = () => (
  <div>
    <Header />
    <OurStory />
    <Facilities />
    <HistorySlider />
    <OurTeam />
    <ImagesAutoSlider />
    <Testimonials />
    <ContactUs />
  </div>
);

export default About;
