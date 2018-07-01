import React from 'react';

const ContactForm = () => (
  <div className="container-fluid" style={{padding: '0'}}>
    <div className="contact-page-left">
      <div className="col-md-offset-2 col-md-10 contact-page-left-padd">
        <h3 className="welc-h3">HOW CAN WE HELP?</h3>
        <span className="testimonial-under" style={{width: '130px', marginBottom: '10px'}} />
        <div className="col-md-12" style={{marginTop: '20px', padding: '0'}}>
          <div className="row">
            <div className="col-sm-6 col-md-6 input-top">
              <input type="text" placeholder="First Name" className="contact-page-box" />
            </div>
            <div className="col-sm-6 col-md-6 input-top">
              <input type="text" placeholder="Last Name" className="contact-page-box" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 input-top">
              <input type="email" placeholder="Email" className="contact-page-box" />
            </div>
            <div className="col-sm-6 col-md-6 input-top">
              <input type="tel" placeholder="Phone" className="contact-page-box" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 input-top">
              <textarea placeholder="Message" className="contact-page-message" />
            </div>
          </div>
          <a href="#" className="contact-page-submit">SUBMIT</a>
          <div className="clearfix" />
        </div>
      </div>
    </div>

    <div className="contact-page-right">
      <div className="col-md-offset-1 col-md-11 contact-page-left-padd">
        <h3 className="welc-h3">CONTACT INFORMATION</h3>
        <span className="testimonial-under" style={{width: '130px', marginBottom: '30px'}} />
        <div className="location contact-page-right-loc-padd">
          <div className="contact-loc">
            <i className="flaticon-placeholder" aria-hidden="true" />
          </div>
          <span>
            B-9223 Your Address Here,<br /> City,Country,987654.
          </span>
        </div>
        <div className="line contact-page-line" />

        <div className="cal contact-page-right-loc-padd">
          <div className="contact-cal">
            <i className="flaticon-phone-call" aria-hidden="true" />
          </div>
          <span>987.654.BOWL</span>
          <br />987.654.2695
        </div>
        <div className="line contact-page-line" />

        <div className="location contact-page-right-loc-padd">
          <div className="contact-mail">
            <i className="flaticon-envelope" aria-hidden="true" />
          </div>
          <span style={{lineHeight: '47px'}}>info@bowlingcenter.com</span>
        </div>
        <div className="line contact-page-line" />

        <div className="location contact-page-right-loc-padd">
          <div className="contact-time">
            <i className="flaticon-clock" aria-hidden="true" />
          </div>
          <span>
            <b>Monday to Saturday </b>: 11am - 10pm<br />
            Sunday : 11am - 10pm<br />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ContactForm;
