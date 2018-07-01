import React from 'react';

const Bowling = () => (
  <div className="container-fluid">
    <div className="container padd-50 gallery-video">
      <div className="col-md-12 text-center">
        <h2 className="welc-h3">GALLERY</h2>
        <span className="testimonial-under" style={{ width: '80px', marginBottom: '10px' }} />
        <p className="head-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          egestas orci, vitae ullamcorper risus consectetur id.
        </p>
      </div>
      <div className="clearfix" />
      <a href="javascript:void(0)" type="button" data-toggle="modal" data-target="#myModal">
        <div className="col-xs-12 col-sm-6 col-md-4 video-top wow animated fadeInRight">
          <div className="video">
            <img src="images/bowling-video-1.jpg" className="img-responsive" alt="..." />
          </div>
          <h3 className="video-p">
            Vestibulum auctor libero vel ex volutpat porta.
          </h3>
        </div>
      </a>

      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h2 className="modal-title" id="myModalLabel">
                Title name
              </h2>
            </div>
            <div className="modal-body">
              <video className="slider-video" loop controls>
                <source src="images/bowling.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <a href="javascript:void(0)" type="button" data-toggle="modal" data-target="#myModal2">
        <div className="col-xs-12 col-sm-6 col-md-4 video-top wow animated fadeInRight">
          <div className="video">
            <img src="images/bowling-video-2.jpg" className="img-responsive" alt="..." />
          </div>
          <h3 className="video-p">
            Vestibulum auctor libero vel ex volutpat porta.
          </h3>
        </div>
      </a>

      <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h2 className="modal-title" id="myModalLabel">
                Title name
              </h2>
            </div>
            <div className="modal-body">
              <video className="slider-video" loop controls>
                <source src="images/bowling(1).mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <a href="javascript:void(0)" type="button" data-toggle="modal" data-target="#myModal3">
        <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4 video-top wow animated fadeInRight">
          <div className="video">
            <img src="images/bowling-video-3.jpg" className="img-responsive" alt="..." />
          </div>
          <h3 className="video-p">
            Vestibulum auctor libero vel ex volutpat porta.
          </h3>
        </div>
      </a>

      <div className="modal fade" id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h2 className="modal-title" id="myModalLabel">
                Title name
              </h2>
            </div>
            <div className="modal-body">
              <video className="slider-video" loop controls>
                <source src="images/Stephanie Birthday.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix" />

      <div className="col-md-12 text-center">
        <a href="gallery-3-colum.html" className="video-btn">
          VIEW ALL
        </a>
      </div>
      <div className="clearfix" />
    </div>
  </div>
);

export default Bowling;
