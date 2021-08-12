import React, { Component } from 'react';
import Cropper from 'cropperjs';

class Zoomdisable extends Component {
    componentDidMount() {
        const zoomdisabled = document.getElementById('zoom-disabled');
        const cropper = new Cropper(zoomdisabled, {
            aspectRatio: 16 / 9,
            responsive: true,
            zoomable: false
        });
        cropper.reset();
    }
    render() {
        return (
            <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Disabled Zoom Cropper</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="ms-cropper-container">
                            <img id="zoom-disabled" src={process.env.PUBLIC_URL+'/assets/img/advance/slider-2.jpg'} alt="cropper" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Zoomdisable;