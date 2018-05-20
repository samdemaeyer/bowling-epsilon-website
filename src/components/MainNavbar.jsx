import React from 'react';
import { NavLink } from 'react-router-dom';
import jQuery from 'jquery';
import megaMenu from '../assets/javaScript/mega-menu';

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    megaMenu(jQuery);
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
                        <NavLink to="/"><img id="logo_img" src="images/logo.png" alt="logo" /></NavLink>
                        <button className={`menu-mobile-collapse-trigger ${this.state.isOpen ? 'active' : ''}`} onClick={this.toggle}><span /></button>
                      </li>
                    </ul>
                    <ul className="menu-links" style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                      <li><NavLink exact to="/" className="menu-style menu-li-a" onClick={this.toggle}>HOME</NavLink></li>
                      <li><NavLink to="/about" className="menu-style menu-li-a" onClick={this.toggle}> ABOUT</NavLink></li>
                      <li><NavLink to="/bowling" className="menu-style menu-li-a" onClick={this.toggle}> BOWLING</NavLink></li>
                      <li><NavLink to="/fun-and-games" className="menu-style menu-li-a" onClick={this.toggle}> FUN & GAMES </NavLink></li>
                      <li><NavLink to="/restaurant" className="menu-style menu-li-a" onClick={this.toggle}> RESTAURANT</NavLink></li>
                      <li><NavLink to="/contact" className="menu-style menu-li-a" onClick={this.toggle}> CONTACT</NavLink></li>
                      <li><NavLink to="/book-party" className="menu-book-table-btn btn-bg" onClick={this.toggle} activeClassName="">BOOK A PARTY</NavLink></li>
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
