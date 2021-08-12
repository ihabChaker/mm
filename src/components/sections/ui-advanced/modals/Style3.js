import React, { Component } from 'react';
import { Modal } from "react-bootstrap";

class Style3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleShow4 = this.handleShow4.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show1: false,
        };
    }
    handleShow1() {
        this.setState({ show1: true });
    }
    handleShow2() {
        this.setState({ show2: true });
    }
    handleShow3() {
        this.setState({ show3: true });
    }
    handleShow4() {
        this.setState({ show4: true });
    }
    handleClose() {
        this.setState({ show1: false });
        this.setState({ show2: false });
        this.setState({ show3: false });
        this.setState({ show4: false });
    }
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Modals Style 3</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Congragulations message</h6>
                            <button className="btn btn-primary" onClick={this.handleShow1}> Click Me </button>
                        </div>
                        <Modal className="modal-min" show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body className="text-center">
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <i className="flaticon-tick-inside-circle d-block" />
                                <h1>Congragulations!</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ultrices massa, non consectetur nunc. Nullam erat magna,
                                    aliquet sed nibh non, pellentesque fermentum justo. Integer sed imperdiet sapien, vel pulvinar tellus. Donec sed justo ac urna
                </p>
                                <button type="button" className="btn btn-primary shadow-none">Get Started</button>
                            </Modal.Body>
                        </Modal>
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Opt-in Form</h6>
                            <button className="btn btn-primary" onClick={this.handleShow2}> Click Me </button>
                        </div>
                        <Modal className="modal-min" show={this.state.show2} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body className="text-center">
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <i className="flaticon-email d-block" />
                                <h1>Subscribe</h1>
                                <p> Subscribe and get our latest updates </p>
                                <form method="post">
                                    <div className="ms-form-group has-icon">
                                        <input type="text" placeholder="Email Address" className="form-control" name="news-letter" />
                                        <i className="material-icons">email</i>
                                    </div>
                                    <button type="submit" className="btn btn-primary shadow-none">Get Started</button>
                                </form>
                            </Modal.Body>
                        </Modal>
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Account Login</h6>
                            <button className="btn btn-primary" onClick={this.handleShow3}> Click Me </button>
                        </div>
                        <Modal className="modal-min" show={this.state.show3} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body className="text-center">
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <i className="flaticon-user d-block" />
                                <h1>Login to your Account</h1>
                                <form method="post">
                                    <div className="ms-form-group has-icon">
                                        <input type="text" placeholder="Email Address" className="form-control" name="email" />
                                        <i className="material-icons">email</i>
                                    </div>
                                    <div className="ms-form-group has-icon">
                                        <input type="password" placeholder="Password" className="form-control" name="password" />
                                        <i className="material-icons">security</i>
                                    </div>
                                    <button type="submit" className="btn btn-primary shadow-none">Login</button>
                                </form>
                            </Modal.Body>
                        </Modal>
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Forgot Password</h6>
                            <button className="btn btn-primary" onClick={this.handleShow4}> Click Me </button>
                        </div>
                        <Modal className="modal-min" show={this.state.show4} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body className="text-center">
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <i className="flaticon-secure-shield d-block" />
                                <h1>Forgot Password?</h1>
                                <p> Enter your email to recover your password </p>
                                <form>
                                    <div className="ms-form-group has-icon">
                                        <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" />
                                        <i className="material-icons">email</i>
                                    </div>
                                    <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style3;