import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar';

import img1 from '../../../../assets/img/dashboard/doctor-1.jpg';
import img2 from '../../../../assets/img/dashboard/doctor-2.jpg';
import img3 from '../../../../assets/img/dashboard/doctor-3.jpg';

class Content extends Component {
    render() {
        return ( 
            <Fragment>
                <div className="ms-lock-screen-weather">
                    <p>38°</p>
                    <p>San Francisco, CA</p>
                </div>
                <ul className="ms-lock-screen-nav">
                <Dropdown className="ms-nav-item">
                        <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0" id="mailDropdown"><i className="material-icons">email</i></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="mailDropdown">
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
                            </li>
                            <li className="dropdown-divider" />
                            <Scrollbar className="ms-scrollable ms-dropdown-list">
                                <Link className="media p-2" to="#">
                                    <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                        <img src={img1} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>Hey man, looking forward to your new project.</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                    </div>
                                </Link>
                                <Link className="media p-2" to="#">
                                    <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                                        <img src={img2} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>Dear John, I was told you bought Medboard! Send me your feedback</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                                    </div>
                                </Link>
                                <Link className="media p-2" to="#">
                                    <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                        <img src={img3} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body">
                                        <span>How many people are we inviting to the dashboard?</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                                    </div>
                                </Link>
                            </Scrollbar>
                            <li className="dropdown-divider" />
                            <li className="dropdown-menu-footer text-center">
                                <Link to="/apps/email">Go to Inbox</Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="ms-nav-item">
                        <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons">notifications</i></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="notificationDropdown">
                            <li className="dropdown-menu-header">
                                <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
                            </li>
                            <li className="dropdown-divider" />
                            <Scrollbar className="ms-scrollable ms-dropdown-list">
                                <Link className="media p-2" to="#">
                                    <div className="media-body">
                                        <span>12 ways to improve your crypto dashboard</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                    </div>
                                </Link>
                                <Link className="media p-2" to="#">
                                    <div className="media-body">
                                        <span>You have newly registered users</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                                    </div>
                                </Link>
                                <Link className="media p-2" to="#">
                                    <div className="media-body">
                                        <span>Your account was logged in from an unauthorized IP</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                                    </div>
                                </Link>
                                <Link className="media p-2" to="#">
                                    <div className="media-body">
                                        <span>An application form has been submitted</span>
                                        <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                                    </div>
                                </Link>
                            </Scrollbar>
                            <li className="dropdown-divider" />
                            <li className="dropdown-menu-footer text-center">
                                <Link to="#">View all Notifications</Link>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
                {/* Main Content */}
                <main className="body-content ms-lock-screen">
                    {/* Body Content Wrapper */}
                    <div className="ms-content-wrapper">
                        <img className="ms-user-img ms-img-round ms-lock-screen-user" src={img1} alt="people" />
                        <h1>John Doe</h1>
                        <form method="post">
                            <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                <input type="password" className="ms-form-input" name="pin" placeholder="Enter Pin" />
                                <i className="material-icons">security</i>
                            </div>
                            <Link to="/" className="btn btn-success w-100">Unlock</Link>
                        </form>
                    </div>
                </main>
                <div className="ms-lock-screen-time">
                    <p>04:25</p>
                    <p>Friday, December 1</p>
                </div>
            </Fragment>
        );
    }
}

export default Content;