import React from 'react';

const HomepageSection7 = () => (
	<div>
		<div className="container-fluid paralex">
			<div className="container">
				<div className="col-md-12 text-center">
					<h2 className="welc-h3" style={{color: '#FFF', marginBottom: '0'}}>BOOK A PARTY</h2>
					<span className="contact-underline"></span>
					<p>Let, consectetur adipiscing elit. Vestibu lum porttitor egestas orci, vitae ullamcorper risus consett velit vestibulum, rutru.</p>
				</div>
				<div className="clearfix"></div>
				<div className="col-md-2"></div>
				<div className="col-md-8" style={{marginTop: '20px'}}>
					<div className="col-sm-6 col-md-6 input-top">
						<input type="text" placeholder="First Name" className="input-box" />
					</div>
					<div className="col-sm-6 col-md-6 input-top">
						<input type="text" placeholder="Last Name" className="input-box" />
					</div>
					<div className="clearfix"></div>
					<div className="col-sm-6 col-md-6 input-top">
						<input type="email" placeholder="Enter Your Email" className="input-box" />
					</div>
					<div className="col-sm-6 col-md-6 input-top">
						<input type="tel" placeholder="Enter Your Phone" className="input-box" />
					</div>
					<div className="clearfix"></div>
					<div className="col-sm-6 col-md-6 input-top">
						<input id="example1" className="date-pick input-box" placeholder="Date" type="text" />
					</div>
					<div className="col-sm-6 col-md-6 input-top">
						<input type="number" placeholder="Anticipated Number of People" className="input-box" />
					</div>
					<div className="clearfix"></div>
					<div className="col-md-12 input-top">
						<textarea placeholder="Message" className="input-message"></textarea>
					</div>
					<div className="clearfix"></div>
					<div className="col-md-12 text-center input-top">
						<button className="input-submit">SUBMIT</button>
					</div>
				</div>
				<div className="col-md-2"></div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
)

export default HomepageSection7;
