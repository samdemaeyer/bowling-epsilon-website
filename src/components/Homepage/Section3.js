import React from 'react';

// TODO: name `alt`
const HomepageSection3 = () => (
	<div>
		<div className="container-fluid padd-70">
			<div className="container">
				<div className="col-md-12 text-center">
					<h2 className="welc-h3" style={{marginBottom: '10px'}}>Get Your Bowling On</h2>
					<span className="testimonial-under"></span>
				</div>
				<div className="clearfix"></div>
				<div className="col-xs-12 col-sm-6 col-md-4 text-center on">
					<div className="block">
						<i className="flaticon-birthday-cake hovicon effect-3 sub-b"></i>
					</div>
					<h3 className="welc-h3" style={{color: '#262b2a', marginBottom: '10px'}}>BOOK A PARTY</h3>
					<span className="h3-underline"></span>
					<p className="story-p" style={{marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula in velit.</p>
					<a href="contact.html" className="read-more text-center box-3-read-more">
						<img src="images/read-ball.png" style={{marginTop: '15px'}} alt="" />
						<br /><span>BOOK<br /> NOW</span>
					</a>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4 text-center on border">
					<div className="block">
						<i className="flaticon-bowling-pin hovicon effect-3 sub-b"></i>
					</div>
					<h3 className="welc-h3" style={{color: '#262b2a', marginBottom: '10px'}}>BOOK A LANE</h3>
					<span className="h3-underline"></span>
					<p className="story-p" style={{marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula in velit.</p>
					<a href="contact.html" className="read-more text-center box-1-read-more">
						<img src="images/read-ball.png" style={{marginTop: '15px'}} alt="" />
						<br /><span>BOOK<br /> NOW</span>
					</a>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-4 text-center on">
					<div className="block">
						<i className="flaticon-gallery hovicon effect-3 sub-b"></i>
					</div>
					<h3 className="welc-h3" style={{color: '#262b2a', marginBottom: '10px'}}>VIEW GALLERY</h3>
					<span className="h3-underline"></span>
					<p className="story-p" style={{marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula in velit.</p>
					<a href="gallery.html" className="read-more text-center box-1-read-more box-2-read-more">
						<img src="images/read-ball.png" style={{marginTop: '15px'}} alt="" />
						<br /><span style={{color: '#FFF' }}>VIEW<br /> GALLERY</span>
					</a>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
)

export default HomepageSection3;
