import React from 'react';

// TODO: name `alt`
const HomepageSection1 = () => (
	<div>
		<div className="container-fluid" style={{backgroundImage: 'url(images/welcome-bg.jpg)', backgroundRepeat:'no-repeat'}}>
			<div className="container about-sec">
				<div className="col-md-1"></div>
				<div className="col-md-5 padd-50">
						<h2 className="welc-h2">WELCOME TO</h2>
						<div className="h2-underline"></div>
						<h3 className="welc-h3">The All Seasons<br />Bowling Alley.</h3>
				</div>
				<div className="col-md-5 padd-50" style={{paddingRight: '50px'}}>
					<h2 className="story-h2">Our Story</h2>
					<p className="story-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula in velit aliquam efficitur. Quisque facilisis lectus et justo tempor, quis posuere mi posuere. Aliquam eget est sed  male suada elementum. Ut ultrices ligula vitae egestas.Ut ultrices ligula vitae egestas varius.</p>
					<div className="read-more text-center">
						<a href="about-us.html">
							<img src="images/read-ball.png" style={{marginTop: '15px'}} alt="" />
							<br /><span>Read<br /> More</span>
						</a>
					</div>
				</div>
				<div className="col-md-1"></div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
)

export default HomepageSection1;
