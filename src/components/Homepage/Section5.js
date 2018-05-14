import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

// TODO: name `alt`
const HomepageSection5 = () => (
	<div>
		<div className="container-fluid padd-50" style={{backgroundImage: 'url(images/welcome-bg.jpg)', backgroundRepeat: 'no-repeat'}}>
			<div className="container">
				<div className="col-md-12 text-center">
					<h2 className="welc-h3">TESTIMONIALS</h2>
					<span className="testimonial-under"></span>
				</div>
				<div className="clearfix"></div>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<TestimonialsCarousel />
					</div>
					<div className="col-md-2"></div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
)

export default HomepageSection5;
