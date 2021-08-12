import React, { Component } from 'react';

class Videoplayer extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Video Player Icons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row ms-icons-list">
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-arrows-alt" /> fa-arrows-alt</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-backward" /> fa-backward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-compress" /> fa-compress</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-eject" /> fa-eject</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-expand" /> fa-expand</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fast-backward" /> fa-fast-backward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-fast-forward" /> fa-fast-forward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-forward" /> fa-forward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-pause" /> fa-pause</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-play" /> fa-play</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-play-circle" /> fa-play-circle</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="far fa-play-circle" /> fa-play-circle</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-step-backward" /> fa-step-backward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-step-forward" /> fa-step-forward</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fa fa-stop" /> fa-stop</div>
                            <div className="col-sm-6 col-md-4 col-lg-3"><i className="fab fa-youtube" /> fa-youtube-play</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Videoplayer;