import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jQuery from 'jquery';
import MainNavbar from './components/MainNavbar';
import BackToTop from './components/BackToTop';
import MainFooter from './components/MainFooter';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Restaurant from './routes/Restaurant';
import Contact from './routes/Contact';
import './App.css';

window.$ = window.jQuery = jQuery;

require('../node_modules/bxslider/dist/jquery.bxslider.js');

const App = () => (
  <Router>
    <div>
      <MainNavbar />
      <BackToTop />
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/contact" component={Contact} />
      <MainFooter />
    </div>
  </Router>
);

export default App;
