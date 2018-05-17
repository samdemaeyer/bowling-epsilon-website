import React from 'react';
import Header from '../components/Restaurant/Header';
import Menu1 from '../components/Restaurant/Menu1';
import Menu2 from '../components/Restaurant/Menu2';
import SpecialsHeader from '../components/Restaurant/SpecialsHeader';
import ReserveByPhone from '../components/Common/ReserveByPhone';
import ContactUs from '../components/Common/ContactUs';

const Restaurant = () => (
  <div>
    <Header />
    <Menu1 />
    <SpecialsHeader />
    <Menu2 />
    <ReserveByPhone />
    <ContactUs />
  </div>
);

export default Restaurant;
