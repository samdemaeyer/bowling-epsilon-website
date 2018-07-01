import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jQuery from 'jquery';
import accordion from './assets/javaScript/accordion';
import MainNavbar from './components/MainNavbar';
import BackToTop from './components/BackToTop';
import MainFooter from './components/MainFooter';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Restaurant from './routes/Restaurant';
import Contact from './routes/Contact';
import Bowling from './routes/Bowling';
import FunAndGames from './routes/FunAndGames';
import './App.css';

window.$ = jQuery;
window.jQuery = jQuery;

require('../node_modules/bxslider/dist/jquery.bxslider.js');

accordion(jQuery);

const App = () => (
  <Router>
    <div>
      <MainNavbar />
      <BackToTop />
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/bowling" component={Bowling} />
      <Route path="/fun-and-games" component={FunAndGames} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/contact" component={Contact} />
      <MainFooter />
    </div>
  </Router>
);

export default App;
