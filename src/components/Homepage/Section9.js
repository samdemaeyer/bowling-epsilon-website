import React from 'react';
const iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37422.58259528527!2d5.366275263636478!3d50.91554078977238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1200b2fdc492d%3A0xc72c260ece60e28e!2sbowling+Epsilon!5e0!3m2!1sen!2suk!4v1526332251815'

const HomepageSection9 = () => (
	<div>
		<div className="container-fluid contact-bg">
			<div className="container padd-50 contact-container">
				<div className="col-sm-4 col-md-4">
					<h3 className="welc-h3">CONTACT US</h3>
					<span className="testimonial-under" style={{width: '130px', marginBottom: '10px'}}></span>
					<div className="location">
						<i className="flaticon-placeholder" aria-hidden="true"></i>
						<span>B-9223  Your Address Here,<br /> City,Country,987654.</span>
					</div>
					<div className="line"></div>
					<div className="cal">
						<i className="flaticon-phone-call" aria-hidden="true"></i>
						<span>987.654.BOWL</span>
					</div>
					<div className="line"></div>
					<div className="location">
						<i className="flaticon-envelope" aria-hidden="true"></i>
						<span>info@bowlingcenter.com</span>
					</div>
					<div className="line"></div>
					<div className="location">
						<i className="flaticon-clock" aria-hidden="true"></i>
						<span>
							Sunday: 11am - 10pm<br />
							Monday: Private Events<br />
							Tuesday: 2pm - 10pm<br />
							Wednesday: 2pm - 10pm<br />
							Thursday: 2pm - 10pm<br />
							Friday: 2pm - 12am<br />
							Saturday: 10am - 12am
						</span>
					</div>
				</div>
				<div className="col-sm-8 col-md-8">
					<iframe src={iframeSrc} width="100%" title="Maps iFrame" height="450" frameBorder="0" style={{border: '5px solid #FFF', marginTop: '20px'}} allowFullScreen></iframe>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
)

export default HomepageSection9;
