import React from 'react';

// import { Link } from 'react-router-dom';


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
      <div>
        <header id="header" className="header">
          <div className="menu">
            <nav id="menu-1" className="mega-menu ">
              <section className="menu-list-items">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <ul className="menu-logo">
                        <li className="head-info">
                          <a href="index.html"> <img id="logo_img" src="images/logo.png" alt="logo"/></a>
                          <div className={"menu-mobile-collapse-trigger " + (this.state.isOpen ? 'active' : '')} onClick={this.toggle}><span></span></div>
                        </li>
                      </ul>
                      <ul className="menu-links" style={{display: this.state.isOpen ? 'block' : 'none'}}>
                        <li> 
                          <a className="menu-style menu-li-a active"> HOME <i className="fa fa-angle-down fa-indicator"></i></a>
                          <ul className="drop-down-multilevel">
                            <li><a className="menu-li-a-drop" href="index.html">Home-Page-Rustic</a></li>
                            <li><a className="menu-li-a-drop" href="index-2.html">Home-Page-Classic</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-style menu-li-a" href="about-us.html"> ABOUT</a></li>
                        <li><a className="menu-style menu-li-a" href="bowling.html"> BOWLING</a></li>
                        <li><a className="menu-style menu-li-a" href="fun&games.html"> FUN & GAMES </a></li>
                        <li><a className="menu-style menu-li-a" href="resturant.html"> RESTAURANT</a></li>
                        <li><a className="menu-style menu-li-a"> PAGES <i className="fa fa-angle-down fa-indicator"></i></a>
                          <ul className="drop-down-multilevel">
                            <li><a className="menu-li-a-drop">Gallery<i className="fa fa-angle-right fa-indicator"></i></a>
                              <ul className="drop-down-multilevel left-side effect-fade">
                                <li><a className="menu-li-a-drop" href="gallery.html">gallery-2-column</a></li>
                                <li><a className="menu-li-a-drop" href="gallery-3-colum.html">gallery-3-column</a></li>
                                <li><a className="menu-li-a-drop" href="gallery-4-colum.html">gallery-4-column</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-li-a-drop">Event<i className="fa fa-angle-right fa-indicator"></i></a>
                              <ul className="drop-down-multilevel left-side effect-fade">
                                <li><a className="menu-li-a-drop" href="event.html">Event</a></li>
                                <li><a className="menu-li-a-drop" href="event-detail.html">Event-detail</a></li>
                              </ul>
                            </li>
                            <li>
                              <a className="menu-li-a-drop">Blog<i className="fa fa-angle-right fa-indicator"></i></a>
                              <ul className="drop-down-multilevel left-side effect-fade">
                                <li><a className="menu-li-a-drop" href="blog.html">Blog</a></li>
                                <li><a className="menu-li-a-drop" href="blog-detail.html">Blog-post</a></li>
                              </ul>
                            </li>
                            <li>
                              <a className="menu-li-a-drop">Shortcodes<i className="fa fa-angle-right fa-indicator"></i></a>
                              <ul className="drop-down-multilevel left-side effect-fade">
                                <li><a className="menu-li-a-drop" href="elements.html">Elements</a></li>
                                <li><a className="menu-li-a-drop" href="pricing-table.html">Pricing-table</a></li>
                                <li><a className="menu-li-a-drop" href="typography.html">Typography</a></li>
                                <li><a className="menu-li-a-drop" href="call-to-action.html">Call-to-action</a></li>
                                <li><a className="menu-li-a-drop" href="divider.html">Divider</a></li>
                                <li><a className="menu-li-a-drop" href="message-box.html">Message-box</a></li>
                              </ul>
                            </li>
                            <li><a className="menu-li-a-drop" href="404-error.html">404 error</a></li>
                            <li><a className="menu-li-a-drop" href="coming-soon.html">Coming soon</a></li>
                          </ul>
                        </li>
                        <li><a className="menu-style menu-li-a" href="contact.html"> CONTACT</a></li>
                        <li><a className="menu-book-table-btn btn-bg" href="book-party.html">BOOK A PARTY</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
