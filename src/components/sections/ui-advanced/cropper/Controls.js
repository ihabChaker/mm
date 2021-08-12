import React, { Component } from 'react';
import Cropper from 'cropperjs';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const zoomintip = (
    <Tooltip>
        Zoom In 
    </Tooltip>
);
const zoomouttip = (
    <Tooltip>
        Zoom Out
    </Tooltip>
);
const rotaterighttip = (
    <Tooltip>
        Rotate Right
    </Tooltip>
);
const rotatelefttip = (
    <Tooltip>
        Rotate Left
    </Tooltip>
);
const movelefttip = (
    <Tooltip>
        Move Left
    </Tooltip>
);
const moverighttip = (
    <Tooltip>
        Move Right
    </Tooltip>
);
const movedowntip = (
    <Tooltip>
        Move Down
    </Tooltip>
);
const moveuptip = (
    <Tooltip>
        Move Up
    </Tooltip>
);
const locktip = (
    <Tooltip>
        Lock
    </Tooltip>
);
const unlocktip = (
    <Tooltip>
        Unlock
    </Tooltip>
);
const resettip = (
    <Tooltip>
        Reset
    </Tooltip>
);
class Controls extends Component {
    componentDidMount() {
        const cropperexpandedimage = document.getElementById('cropper-expanded');
        const cropper = new Cropper(cropperexpandedimage, {
            aspectRatio: 16 / 9,
            guides: false,
            responsive: true,
            preview: '.ms-crop-preview',
        });
        cropper.reset();

    }
    zoomIn = () => {
        document.getElementById('cropper-expanded').cropper.zoom(0.1);
    }
    zoomOut = () => {
        document.getElementById('cropper-expanded').cropper.zoom(-0.1);
    }
    rotateRight = () => {
        document.getElementById('cropper-expanded').cropper.rotate(45);
    }
    rotateLeft = () => {
        document.getElementById('cropper-expanded').cropper.rotate(-45);
    }
    moveLeft = () => {
        document.getElementById('cropper-expanded').cropper.move(-10, 0);
    }
    moveRight = () => {
        document.getElementById('cropper-expanded').cropper.move(10, 0);
    }
    moveDown = () => {
        document.getElementById('cropper-expanded').cropper.move(0, 10);
    }
    moveUp = () => {
        document.getElementById('cropper-expanded').cropper.move(0, -10);
    }
    lock = () => {
        document.getElementById('cropper-expanded').cropper.disable();
    }
    unLock = () => {
        document.getElementById('cropper-expanded').cropper.enable();
    }
    reset = () => {
        document.getElementById('default').cropper.reset();
        document.getElementById('zoom-disabled').cropper.reset();
        document.getElementById('cropper-expanded').cropper.reset();
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Cropper with Controls</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row">
                            <div className="col-xl-9 col-md-12">
                                <div className="ms-cropper-container">
                                    <img id="cropper-expanded" src={process.env.PUBLIC_URL+'/assets/img/cropper-1280x720.jpg'} alt="cropper" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-12">
                                <div className="ms-crop-preview ms-crop-preview-lg" />
                                <div className="ms-crop-preview ms-crop-preview-md" />
                                <div className="ms-crop-preview ms-crop-preview-sm" />
                            </div>
                            <div className="col-xl-9 col-md-12">
                                <div className="ms-cropper-controls">
                                    <OverlayTrigger placement="top" overlay={zoomintip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.zoomIn}><i className="material-icons">zoom_in</i></button>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={zoomouttip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.zoomOut}><i className="material-icons">zoom_out</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={rotaterighttip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.rotateRight}><i className="material-icons">rotate_right</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={rotatelefttip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.rotateLeft}><i className="material-icons">rotate_left</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={movelefttip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.moveLeft}><i className="material-icons">arrow_back</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={movedowntip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.moveDown}><i className="material-icons">arrow_downward</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={moverighttip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.moveRight}><i className="material-icons">arrow_forward</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={moveuptip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.moveUp}><i className="material-icons">arrow_upward</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={locktip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.lock}><i className="material-icons">lock_outline</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={unlocktip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.unLock}><i className="material-icons">lock_open</i></button>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="top" overlay={resettip}>
                                        <button type="button" className="ms-btn-icon btn-primary" onClick={this.reset}><i className="material-icons">refresh</i></button>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;