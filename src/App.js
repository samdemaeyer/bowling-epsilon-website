import React, { Component } from 'react';
import MainNavbar from './components/MainNavbar';
import Homepage from './routes/Homepage';
import About from './routes/About';
import Restaurant from './routes/Restaurant';
import Contact from './routes/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MainNavbar />
          <Route exact={true} path="/" component={Homepage}/>
          <Route path="/about" component={About}/>
          <Route path="/restaurant" component={Restaurant}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
