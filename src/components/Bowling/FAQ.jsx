import React from 'react';
import jQuery from 'jquery';

class FAQ extends React.Component {
  componentDidMount() {
    jQuery('.accordion').accordion({ cookieName: 'accordion_nav' });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container padd-50" style={{ paddingBottom: '0' }}>
          <div className="col-md-12 text-center">
            <h2 className="welc-h3">FAQ&apos;S</h2>
            <span className="testimonial-under" style={{ width: '80px' }} />
          </div>
          <div className="clearfix" />
          <div className="col-md-offset-1 col-md-10">
            <div className="accordion accordion-close" id="section1">
              Q. VestibulumLorem ipsum dolor sit amet, consectetur Vestibulum?<span />
            </div>
            <div className="content">
              <p className="content-p">
                Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
                elementum felis ligula, nec volutpat lacus euismod id. Fusce sit
                amet enim vel mauris hendrerit suscipit nec quis diam. Pellentes
                tempor sem in metus pretium egestas.
              </p>
            </div>

            <div className="accordion accordion-close" id="section1">
              Q. Curabitur ac tortor ut ipsum egestas elementum Nunc imperdiet
              gravida mauris?<span />
            </div>

            <div className="content">
              <p className="content-p">
                Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
                elementum felis ligula, nec volutpat lacus euismod id. Fusce sit
                amet enim vel mauris hendrerit suscipit nec quis diam. Pellentes
                tempor sem in metus pretium egestas.
              </p>
            </div>

            <div className="accordion accordion-close" id="section1">
              Q. Duis velit augue, condimentum at, ultrices Donec pellentesque
              egestas eros?<span />
            </div>

            <div className="content">
              <p className="content-p">
                Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
                elementum felis ligula, nec volutpat lacus euismod id. Fusce sit
                amet enim vel mauris hendrerit suscipit nec quis diam. Pellentes
                tempor sem in metus pretium egestas.
              </p>
            </div>

            <div className="accordion accordion-close" id="section1">
              Q. Fusce mi pede, tempor id, cursus ac, ullamcorper ne enim Sed tortor
              Curabitur?<span />
            </div>

            <div className="content">
              <p className="content-p">
                Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
                elementum felis ligula, nec volutpat lacus euismod id. Fusce sit
                amet enim vel mauris hendrerit suscipit nec quis diam. Pellentes
                tempor sem in metus pretium egestas.
              </p>
            </div>

            <div className="accordion accordion-close" id="section1">
              Q. Maecenas feugiat consequat diam Maecenas metus Vivamus diam purus?<span />
            </div>

            <div className="content">
              <p className="content-p">
                Morbi eu nisi accumsan, pretium tellus at, ultricies enim. Donec
                elementum felis ligula, nec volutpat lacus euismod id. Fusce sit
                amet enim vel mauris hendrerit suscipit nec quis diam. Pellentes
                tempor sem in metus pretium egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
