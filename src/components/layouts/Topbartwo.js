import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Makeappointment from '../modals/Makeappointment';
import Makeprescription from '../modals/Makeprescription';
import Generatereport from '../modals/Generatereport';
import Modallogintext from '../modals/Modallogintext';

import logo from '../../assets/img/medboard-logo-84x41.png';

class Topbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showappointment: false,
            showprescription: false,
            showreport: false,
        }
        //Modal login
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // appointment
        this.handleAppointmentShow = this.handleAppointmentShow.bind(this);
        this.handleAppointmentClose = this.handleAppointmentClose.bind(this);
        // prescription
        this.handlePrescriptionShow = this.handlePrescriptionShow.bind(this);
        this.handlePrescriptionClose = this.handlePrescriptionClose.bind(this);
        // report
        this.handleReportShow = this.handleReportShow.bind(this);
        this.handleReportClose = this.handleReportClose.bind(this);
    }
    // appointment
    handleAppointmentShow() {
        this.setState({
            showappointment: true
        });
    }
    handleAppointmentClose() {
        this.setState({
            showappointment: false
        });
    }
    // prescription
    handlePrescriptionShow() {
        this.setState({
            showprescription: true
        });
    }
    handlePrescriptionClose() {
        this.setState({
            showprescription: false
        });
    }
    // report
    handleReportShow() {
        this.setState({
            showreport: true
        });
    }
    handleReportClose() {
        this.setState({
            showreport: false
        });
    }
    // Modal login
    handleShow() {
        this.setState({ show: true });
    }
    handleClose() {
        this.setState({ show: false });
    }
    // Nav toggle
    navToggle = () => {
        document.getElementById('body').classList.toggle('ms-aside-left-open');
        document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
        document.getElementById('overlayleft').classList.toggle('d-block');
    }
    optionsToggle = () => {
        document.getElementById('ms-nav-options').classList.toggle('ms-slide-down');
    }
    render() {
        return (
            <Fragment>
                <nav className="navbar ms-navbar">
                    <div className="ms-aside-toggler ms-toggler pl-0" onClick={this.navToggle}>
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                    </div>
                    <div className="logo-sn logo-sm ms-d-block-sm">
                        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                        <li className="ms-nav-item  ms-d-none">
                            <Link to="#" className="text-white" onClick={this.handleAppointmentShow}>
                                <i className="flaticon-spreadsheet mr-2" /> Make an appointment
                            </Link>
                        </li>
                        <li className="ms-nav-item ms-d-none">
                            <Link to="#" className="text-white" onClick={this.handlePrescriptionShow}>
                                <i className="flaticon-pencil mr-2" /> Write a prescription
                            </Link>
                        </li>
                        <li className="ms-nav-item ms-d-none" onClick={this.handleReportShow}>
                            <Link to="#" className="text-white">
                                <i className="flaticon-list mr-2" /> Generate Report
                            </Link>
                        </li>
                        <li className="ms-nav-item">
                            <Button type="button" variant="warning" className="mt-0" onClick={this.handleShow}>Login</Button>
                        </li>
                    </ul>
                    <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" onClick={this.optionsToggle}>
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                        <span className="ms-toggler-bar bg-white" />
                    </div>
                </nav>
                {/* Appointment */}
                <Modal show={this.state.showappointment} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handleAppointmentClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Make An Appointment</h4>
                        <button type="button" className="close text-white" onClick={this.handleAppointmentClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Makeappointment/>
                    </Modal.Body>
                </Modal>
                {/* prescription */}
                <Modal show={this.state.showprescription} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handlePrescriptionClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Make a prescription</h4>
                        <button type="button" className="close text-white" onClick={this.handlePrescriptionClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Makeprescription/>
                    </Modal.Body>
                </Modal>
                {/* report */}
                <Modal show={this.state.showreport} className="ms-modal-dialog-width ms-modal-content-width" onHide={this.handleReportClose} centered>
                    <Modal.Header className="ms-modal-header-radius-0">
                        <h4 className="modal-title text-white">Generate report</h4>
                        <button type="button" className="close text-white" onClick={this.handleReportClose}>x</button>
                    </Modal.Header>
                    <Modal.Body className="p-0 text-left">
                        <Generatereport/>
                    </Modal.Body>
                </Modal>
                {/* Login */}
                <Modal show={this.state.show} className="modal-auth" onHide={this.handleClose} centered>
                    <Modal.Body>
                        <Fragment>
                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                           <Modallogintext/>
                        </Fragment>
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default Topbar