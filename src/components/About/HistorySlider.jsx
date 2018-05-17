import React from 'react';
import initiateHystorySlider from '../../assets/javaScript/history-slider';
import '../../styles/history-slider.css';

// TODO: name `alt`
class HistorySlider extends React.Component {
  componentDidMount() {
    initiateHystorySlider(window.$);
  }

  render() {
    return (
      <div className="container-fluid slider-bg">
        <div className="container padd-70">
          <div className="col-md-12 text-center">
            <h2 className="welc-h3" style={{ color: '#FFF', marginBottom: '0' }}>OUR HISTORY</h2>
            <span className="contact-underline" />
          </div>
          <div className="col-md-12">
            <section className="cd-horizontal-timeline">
              <div className="timeline">
                <div className="events-wrapper">
                  <div className="events">
                    <ol>
                      <li><a href="#0" data-date="16/01/2014" className="selected">1990</a></li>
                      <li><a href="#0" data-date="28/01/2014">1995</a></li>
                      <li><a href="#0" data-date="20/02/2014">2000</a></li>
                      <li><a href="#0" data-date="20/03/2014">2005</a></li>
                      <li><a href="#0" data-date="09/04/2014">2010</a></li>
                      <li><a href="#0" data-date="18/04/2014">2017</a></li>
                      <div className="clearfix" />
                    </ol>
                    <span className="filling-line" aria-hidden="true" />
                  </div>
                </div>
                <ul className="cd-timeline-navigation">
                  <li>
                    <a href="#0" className="prev inactive" aria-hidden="true">
                      <i className="fa fa-chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="next" aria-hidden="true">
                      <i className="fa fa-chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="events-content">
                <ol>
                  <li className="selected" data-date="16/01/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>1990</em>
                      <h2>Vestibulum porttitor</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>
                  <li data-date="28/01/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history-2.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>1995</em>
                      <h2>pretium tellus</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>
                  <li data-date="20/02/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history-3.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>2000</em>
                      <h2>Suspendisse sit</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>
                  <li data-date="20/03/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history-5.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>2005</em>
                      <h2>Vestibulum porttitor</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>

                  <li data-date="09/04/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history-6.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>2010</em>
                      <h2>tibulum purus</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>
                  <li data-date="18/04/2014">
                    <div className="col-md-6">
                      <img src="images/about-us-history-4.jpg" className="img-responsive" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <em>2017</em>
                      <h2>scelerisque neque</h2>
                      <p>
                        Morbi eu nisi accumsan, pretium tellus at, ultricies enim.
                        Donec elemen tum felis ligula, nec volutpat lacus euismod
                        id. Fusce sit amet enim vel mauris hendrerit suscipit nec
                        quis diam. Pellentesque tempor sem in metus pretium egestas.
                        Suspendisse sit amet pulvinar tortor, et ornare ligula. Ves
                        tibulum purus diam. Vestibulum auctor libero vel ex volutpat
                        porta. In tempor vel nulla ut consequat.
                      </p>
                      <p>
                        Sagittis et erat non, iaculis tristique lacus. Aenean quam
                        nunc, frin gilla vel dapibus sit amet, portti tor
                        scelerisque neque.
                      </p>
                    </div>
                    <div className="clearfix" />
                  </li>
                </ol>
              </div>
            </section>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default HistorySlider;
