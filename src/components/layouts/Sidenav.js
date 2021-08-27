import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-perfect-scrollbar';
import { Accordion, NavLink } from 'react-bootstrap';

import logo from '../../assets/img/medboard-logo-216x62.png';
import dashboarduser from '../../assets/img/dashboard/doctor-3.jpg';

class Sidenav extends Component {
    navToggle = () => {
        document.getElementById('body').classList.toggle('ms-aside-left-open');
        document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
        document.getElementById('overlayleft').classList.toggle('d-block');
    }
    render() {
        return (
            <Fragment>
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" id="overlayleft" onClick={this.navToggle} />
                {/* Sidebar Navigation Left */}
                <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                    {/* Logo */}
                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="/">
                            <img src={logo} alt="logo" /> </Link>
                        <Link to="/" className="text-center ms-logo-img-link"> <img src={dashboarduser} alt="logo" /></Link>
                        <h5 className="text-center text-white mt-2">Dr.Samuel</h5>
                        <h6 className="text-center text-white mb-3">Admin</h6>
                    </div>
                    {/* Navigation */}
                    <Accordion className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        {/* Dashboard */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="0" className="has-chevron">
                                <span><i className="material-icons fs-16">dashboard</i>Dashboard </span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <ul>
                                    <li> <Link to="/">Medboard</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* /Dashboard */}
                        {/* Doctor */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="1" className="has-chevron">
                                <span><i className="fas fa-stethoscope" />Doctor</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <ul>
                                    <li> <Link to="/doctor/add-doctor">Add Doctor</Link> </li>
                                    <li> <Link to="/doctor/doctor-list">Doctor List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Doctor */}
                        {/* Patient */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="2" className="has-chevron">
                                <span><i className="fas fa-user" />Patient</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <ul>
                                    <li> <Link to="/patient/add-patient">Add Patient</Link> </li>
                                    <li> <Link to="/patient/patient-list">Patient List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Patient */}
                        {/* Department */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="3" className="has-chevron">
                                <span><i className="fas fa-sitemap" />Department</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <ul>
                                    <li> <Link to="/department/add-department">Add Department</Link> </li>
                                    <li> <Link to="/department/department-list">Department List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Department */}
                        {/* Schedule */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="4" className="has-chevron">
                                <span><i className="fas fa-list-alt" />Doctor Schedule</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <ul>
                                    <li> <Link to="/doctor-schedule/add-schedule">Add Schedule</Link> </li>
                                    <li> <Link to="/doctor-schedule/schedule-list">Schedule List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Schedule */}
                        {/* Appointment */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="5" className="has-chevron">
                                <span><i className="far fa-check-square" />Appointment</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <ul>
                                    <li> <Link to="/appointment/add-appointment">Add Appointment</Link> </li>
                                    <li> <Link to="/appointment/appointment-list">Appointment List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Appointment */}
                        {/* Payment */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="6" className="has-chevron">
                                <span><i className="fas fa-credit-card" />Payment</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6">
                                <ul>
                                    <li> <Link to="/payment/add-payment">Add Payment</Link> </li>
                                    <li> <Link to="/payment/payment-list">Payment List</Link> </li>
                                    <li> <Link to="/payment/payment-invoice">Payment Invoice</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Payment */}
                        {/* Report */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="7" className="has-chevron">
                                <span><i className="fas fa-file-alt" />Report</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="7">
                                <ul>
                                    <li> <Link to="/report/patient-report">Patient Wise Report</Link> </li>
                                    <li> <Link to="/report/doctor-report">Doctor Wise Report</Link> </li>
                                    <li> <Link to="/report/total-report">Total Report</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Report */}
                        {/* Human Resource */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="8" className="has-chevron">
                                <span><i className="far fa-user-circle" />Human Resource</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="8">
                                <ul>
                                    <li> <Link to="/human-resource/add-employee">Add Employee</Link> </li>
                                    <li> <Link to="/human-resource/employee-list">Employee List</Link> </li>
                                    <li> <Link to="/human-resource/add-nurse">Add Nurse</Link> </li>
                                    <li> <Link to="/human-resource/nurse-list">Nurse List</Link> </li>
                                    <li> <Link to="/human-resource/add-pharmacist">Add Pharmacist</Link> </li>
                                    <li> <Link to="/human-resource/pharmacist-list">Pharmacist List</Link> </li>
                                    <li> <Link to="/human-resource/add-representative">Add Representative</Link> </li>
                                    <li> <Link to="/human-resource/representative-list">Representative List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Human Resource */}
                        {/* Bed */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="9" className="has-chevron">
                                <span><i className="fas fa-bed" />Bed Manager</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="9">
                                <ul>
                                    <li> <Link to="/bed-manager/add-bed">Add Bed</Link> </li>
                                    <li> <Link to="/bed-manager/bed-list">Bed List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Bed */}
                        {/* Notice */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="10" className="has-chevron">
                                <span><i className="far fa-file-alt" />Notice</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="10">
                                <ul>
                                    <li> <Link to="/notice/add-notice">Add Notice</Link> </li>
                                    <li> <Link to="/notice/notice-list">Notice List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Notice */}
                        <li className="menu-item">
                            <Link to="/widgets">
                                <span><i className="material-icons fs-16">widgets</i>Widgets</span>
                            </Link>
                        </li>
                        {/* Basic UI Elements */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="11" className="has-chevron">
                                <span><i className="material-icons fs-16">filter_list</i>Basic UI Elements</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="11">
                                <ul>
                                    <li> <Link to="/ui-basic/accordions">Accordions</Link> </li>
                                    <li> <Link to="/ui-basic/alerts">Alerts</Link> </li>
                                    <li> <Link to="/ui-basic/buttons">Buttons</Link> </li>
                                    <li> <Link to="/ui-basic/breadcrumbs">Breadcrumbs</Link> </li>
                                    <li> <Link to="/ui-basic/badges">Badges</Link> </li>
                                    <li> <Link to="/ui-basic/cards">Cards</Link> </li>
                                    <li> <Link to="/ui-basic/progress-bars">Progress Bars</Link> </li>
                                    <li> <Link to="/ui-basic/preloaders">Pre-loaders</Link> </li>
                                    <li> <Link to="/ui-basic/pagination">Pagination</Link> </li>
                                    <li> <Link to="/ui-basic/tabs">Tabs</Link> </li>
                                    <li> <Link to="/ui-basic/typography">Typography</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Basic UI Elements */}
                        {/* Advanced UI Elements */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="12" className="has-chevron">
                                <span><i className="material-icons fs-16">code</i>Advanced UI Elements</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="12">
                                <ul>
                                    <li> <Link to="/ui-advanced/draggables">Draggables</Link> </li>
                                    <li> <Link to="/ui-advanced/sliders">Sliders</Link> </li>
                                    <li> <Link to="/ui-advanced/modals">Modals</Link> </li>
                                    <li> <Link to="/ui-advanced/rating">Rating</Link> </li>
                                    <li> <Link to="/ui-advanced/tour">Tour</Link> </li>
                                    <li> <Link to="/ui-advanced/cropper">Cropper</Link> </li>
                                    <li> <Link to="/ui-advanced/range-slider">Range Slider</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Advanced UI Elements */}
                        <li className="menu-item">
                            <Link to="/animation">
                                <span><i className="material-icons fs-16">format_paint</i>Animations</span>
                            </Link>
                        </li>
                        {/* Form Elements */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="13" className="has-chevron">
                                <span><i className="material-icons fs-16">input</i>Form Elements</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="13">
                                <ul>
                                    <li> <Link to="/form/form-elements">Form Elements</Link> </li>
                                    <li> <Link to="/form/form-layout">Form Layouts</Link> </li>
                                    <li> <Link to="/form/form-validation">Form Validation</Link> </li>
                                    <li> <Link to="/form/form-wizard">Form Wizard</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Form Elements */}
                        {/* Charts */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="14" className="has-chevron">
                                <span><i className="material-icons fs-16">equalizer</i>Charts</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="14">
                                <ul>
                                    <li> <Link to="/charts/chartjs">Chart JS</Link> </li>
                                    <li> <Link to="/charts/google-charts">Google Chart</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Charts */}
                        {/* Tables */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="15" className="has-chevron">
                                <span><i className="material-icons fs-16">tune</i>Tables</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="15">
                                <ul>
                                    <li> <Link to="/tables/basic-tables">Basic Tables</Link> </li>
                                    <li> <Link to="/tables/data-tables">Data tables</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Tables */}
                        {/* Popups */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="16" className="has-chevron">
                                <span><i className="material-icons fs-16">message</i>Popups</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="16">
                                <ul>
                                    <li> <Link to="/popups/sweet-alerts">Sweet Alerts</Link> </li>
                                    <li> <Link to="/popups/toast">Toast</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Popups */}
                        {/* Icons */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="17" className="has-chevron">
                                <span><i className="material-icons fs-16">border_color</i>Icons</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="17">
                                <ul>
                                    <li> <Link to="/icons/fontawesome">Fontawesome</Link> </li>
                                    <li> <Link to="/icons/flaticons">Flaticons</Link> </li>
                                    <li> <Link to="/icons/materialize">Materialize</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Icons */}
                        {/* Maps */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="18" className="has-chevron">
                                <span><i className="material-icons fs-16">map</i>Maps</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="18">
                                <ul>
                                    <li> <Link to="/maps/google-maps">Google Maps</Link> </li>
                                    <li> <Link to="/maps/vector-maps">Vector Maps</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Maps */}
                        {/* Pages */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="19" className="has-chevron">
                                <span><i className="material-icons fs-16">insert_drive_file</i>Pages</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="19">
                                <ul>
                                    <Accordion>
                                        <li className="menu-item">
                                            <Accordion.Toggle as={NavLink} variant="link" eventKey="20" className="has-chevron">
                                                Authentication
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="20">
                                                <ul>
                                                    <li> <Link to="/prebuilt-pages/default-login">Default Login</Link> </li>
                                                    <li> <Link to="/prebuilt-pages/modal-login">Modal Login</Link> </li>
                                                    <li> <Link to="/prebuilt-pages/default-register">Default Registration</Link> </li>
                                                    <li> <Link to="/prebuilt-pages/modal-register">Modal Registration</Link> </li>
                                                    <li> <Link to="/prebuilt-pages/lock-screen">Lock Screen</Link> </li>
                                                </ul>
                                            </Accordion.Collapse>
                                        </li>
                                    </Accordion>
                                    <li> <Link to="/prebuilt-pages/coming-soon">Coming Soon</Link> </li>
                                    <li> <Link to="/prebuilt-pages/error">Error Page</Link> </li>
                                    <li> <Link to="/prebuilt-pages/faq"> FAQ </Link> </li>
                                    <li> <Link to="/prebuilt-pages/portfolio"> Portfolio </Link> </li>
                                    <li> <Link to="/prebuilt-pages/user-profile"> User Profile </Link> </li>
                                    <li> <Link to="/prebuilt-pages/invoice"> Invoice </Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Pages */}
                        {/* Bonus Pages */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="21" className="has-chevron">
                                <span><i className="material-icons fs-16">dashboard</i>Bonus Pages </span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="21">
                                <ul>
                                    <li> <Link to="/dashboard/web-analytics"> Web Analytics </Link> </li>
                                    <li> <Link to="/dashboard/social-media">Social Media Management</Link> </li>
                                    <li> <Link to="/dashboard/project-management">Department Management</Link> </li>
                                    <li> <Link to="/dashboard/client-management">Patient Management</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Bonus Pages */}
                        {/* Apps */}
                        <li className="menu-item">
                            <Accordion.Toggle as={NavLink} variant="link" eventKey="22" className="has-chevron">
                                <span><i className="material-icons fs-16">phone_iphone</i>Apps</span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="22">
                                <ul>
                                    <li> <Link to="/chat">Chat</Link> </li>
                                    <li> <Link to="/email">Email</Link> </li>
                                    <li> <Link to="/to-do-list">To-do List</Link> </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        {/* Apps */}
                    </Accordion>
                </Scrollbar>
            </Fragment>
        );
    }
}

export default Sidenav;