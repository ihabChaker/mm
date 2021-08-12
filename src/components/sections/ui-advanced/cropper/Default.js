import React, { Component } from 'react';
import Cropper from 'cropperjs';

class Default extends Component {
    componentDidMount(){
        const defaultimage = document.getElementById('default');
        const cropper = new Cropper(defaultimage, {
            aspectRatio: 16 / 9,
            responsive: true,
        });
        cropper.reset();
    }
    render() {
        return (
            <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Default Cropper</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="ms-cropper-container">
                            <img id="default" src={process.env.PUBLIC_URL+'/assets/img/advance/slider-1.jpg'} alt="cropper" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;