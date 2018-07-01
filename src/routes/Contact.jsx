import React from 'react';
import Header from '../components/Contact/Header';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import ContactUs from '../components/Common/ContactUs';

const Contact = () => (
  <div className="contact">
    <Header />
    <ContactForm />
    <Newsletter />
    <ContactUs />
  </div>
);

export default Contact;
