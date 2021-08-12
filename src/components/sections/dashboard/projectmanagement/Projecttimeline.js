import React, { Component } from 'react';

class Projecttimeline extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Project Timeline</h6>
                    </div>
                    <div className="ms-panel-body">
                        <ul className="ms-activity-log">
                            <li>
                                <div className="ms-btn-icon btn-pill icon btn-success">
                                    <i className="flaticon-tick-inside-circle" />
                                </div>
                                <h6>Lorem ipsum dolor sit</h6>
                                <span> <i className="material-icons">event</i>1 January, 2018</span>
                                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                            </li>
                            <li>
                                <div className="ms-btn-icon btn-pill icon btn-danger">
                                    <i className="flaticon-alert-1" />
                                </div>
                                <h6>Lorem ipsum dolor sit</h6>
                                <span> <i className="material-icons">event</i>1 March, 2021</span>
                                <p className="fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, ula in sodales vehicula....</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projecttimeline;