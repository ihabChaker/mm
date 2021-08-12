import React, { Component } from 'react';

class Patienttimeline extends Component {
    render() {
        return (
            <div className="col-xl-6 col-lg-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Patient Timeline</h6>
                    </div>
                    <div className="ms-panel-body">
                        <ul className="ms-activity-log">
                            <li>
                                <div className="ms-btn-icon btn-pill icon btn-info">
                                    <i className="fa fa-wheelchair" />
                                </div>
                                <h6>Patient Admission</h6>
                                <span> <i className="material-icons">event</i>1 January, 2021</span>
                                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                            </li>
                            <li>
                                <div className="ms-btn-icon btn-pill icon btn-primary">
                                    <i className="fa fa-user-md" />
                                </div>
                                <h6>Treatment Starts</h6>
                                <span> <i className="material-icons">event</i>5 January, 2021</span>
                                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                            </li>
                            <li>
                                <div className="ms-btn-icon btn-pill icon btn-success">
                                    <i className="fa fa-check" />
                                </div>
                                <h6>Patient Discharge</h6>
                                <span> <i className="material-icons">event</i>15 March, 2021</span>
                                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patienttimeline;