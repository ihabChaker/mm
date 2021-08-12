import React, { Component } from 'react';
import { Modal, Accordion, Card } from "react-bootstrap";

class Style4 extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
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
    handleClose() {
        this.setState({ show1: false });
        this.setState({ show2: false });
        this.setState({ show3: false });
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
                            <h6 className="section-title">User Concent</h6>
                            <button className="btn btn-primary" onClick={this.handleShow1}> Click Me </button>
                        </div>
                        <Modal className="modal-max" show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body>
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <h1>Are You Sure?</h1>
                                <ul className="ms-list">
                                    <li className="ms-list-item media">
                                        <i className="flaticon-start align-self-center" />
                                        <div className="media-body">
                                            <p>It is a long established fact that a reader will be distracted by the content</p>
                                        </div>
                                    </li>
                                    <li className="ms-list-item media">
                                        <i className="flaticon-email align-self-center" />
                                        <div className="media-body">
                                            <p>It is a long established fact that a reader will be distracted by the content</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                    <button type="button" className="btn btn-primary shadow-none">Get Started</button>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Opt-in Form</h6>
                            <button className="btn btn-primary" onClick={this.handleShow2}> Click Me </button>
                        </div>
                        <Modal className="modal-max" show={this.state.show2} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body>
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <h1>Subscribe to our Newsletter</h1>
                                <p>It is a long established fact that a reader will be distracted by the content</p>
                                <form>
                                    <div className="ms-form-group has-icon">
                                        <input type="text" placeholder="Email Address" className="form-control" name="subscribe" />
                                        <i className="material-icons">email</i>
                                    </div>
                                    <div className="modal-notice">
                                        <label className="ms-checkbox-wrap">
                                            <input type="checkbox" />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Include Promotional Emails </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                        <button type="submit" className="btn btn-primary shadow-none">Subscribe</button>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal>
                        <div className="col-md-3 col-sm-6">
                            <h6 className="section-title">Reminder</h6>
                            <button className="btn btn-primary" onClick={this.handleShow3}> Click Me </button>
                        </div>
                        <Modal className="modal-max" show={this.state.show3} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                            centered>
                            <Modal.Body>
                                <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                                <h1>A Privacy Reminder from our site</h1>
                                <p> Leverage agile frameworks to provide a robust synopsis</p>
                                <Accordion className="has-gap ms-accordion-chevron" defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Collapse className="collapseparent" eventKey="0">
                                            <Card.Body>
                                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                                        </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <span> How we manage site cookies to improve user experience. </span>
                                        </Accordion.Toggle>
                                    </Card>
                                    <Card>
                                        <Accordion.Collapse className="collapseparent" eventKey="1">
                                            <Card.Body>
                                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                                        </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <span> What kind of data we process when you use our site </span>
                                        </Accordion.Toggle>
                                    </Card>
                                </Accordion>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                                    <button type="button" className="btn btn-primary shadow-none" data-dismiss="modal">Continue</button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>

        );
    }
}

export default Style4;