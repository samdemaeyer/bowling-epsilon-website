import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <header id="header" className="header">
        <div className="menu">
          <nav id="menu-1" className="mega-menu ">
            <section className="menu-list-items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <ul className="menu-logo">
                      <li className="head-info">
                        <Link to="/"><img id="logo_img" src="images/logo.png" alt="logo" /></Link>
                        <div className={`menu-mobile-collapse-trigger ${this.state.isOpen ? 'active' : ''}`} onClick={this.toggle}><span /></div>
                      </li>
                    </ul>
                    <ul className="menu-links" style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                      <li><NavLink exact to="/" className="menu-style menu-li-a">HOME</NavLink></li>
                      <li><NavLink to="/about" className="menu-style menu-li-a"> ABOUT</NavLink></li>
                      <li><NavLink to="/bowling" className="menu-style menu-li-a"> BOWLING</NavLink></li>
                      <li><NavLink to="/fun-and-games" className="menu-style menu-li-a"> FUN & GAMES </NavLink></li>
                      <li><NavLink to="/restaurant" className="menu-style menu-li-a"> RESTAURANT</NavLink></li>
                      <li><NavLink to="/contact" className="menu-style menu-li-a"> CONTACT</NavLink></li>
                      <li><NavLink to="/book-party" className="menu-book-table-btn btn-bg">BOOK A PARTY</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </header>
    );
  }
}
