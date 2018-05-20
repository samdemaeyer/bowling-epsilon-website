import React from 'react';
import Header from '../components/Bowling/Header';
import Story from '../components/Bowling/Story';
import GetYourBowlingOn from '../components/Common/GetYourBowlingOn';
import Pricing from '../components/Bowling/Pricing';
import Membership from '../components/Bowling/Membership';
import Stats from '../components/Bowling/Stats';
import FAQ from '../components/Bowling/FAQ';
import Testimonials from '../components/Common/Testimonials';
import Gallery from '../components/Common/Gallery';
import Newsletter from '../components/Common/Newsletter';
import ContactUs from '../components/Common/ContactUs';

const Bowling = () => (
  <div>
    <Header />
    <Story />
    <GetYourBowlingOn />
    <Pricing />
    <Membership />
    <Testimonials />
    <Stats />
    <FAQ />
    <Gallery />
    <Newsletter />
    <ContactUs />
  </div>
);

export default Bowling;
