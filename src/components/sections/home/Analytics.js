import React, { Component } from 'react';

class Analytics extends Component {
    render() {
        return (
            <div className="col-xl-6 col-lg-12">
                <div className="ms-panel ms-device-sessions ms-quick-mic">
                    <div className="ms-panel-header">
                        <h6>Hospital Birth &amp; Death Analytics</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-4 col-6 ms-device">
                                <i className="material-icons">airline_seat_flat</i>
                                <h4>Birth</h4>
                                <p className="ms-text-primary">45.07%</p>
                                <span className="ms-text-primary">201,434</span>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-4 col-6 ms-device">
                                <i className="material-icons">airline_seat_individual_suite</i>
                                <h4>Death</h4>
                                <p className="ms-text-danger">29.05%</p>
                                <span className="ms-text-danger">134,693</span>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-4 col-6 ms-device">
                                <i className="material-icons">accessible</i>
                                <h4>Accidents</h4>
                                <p className="ms-text-warning">18.43%</p>
                                <span className="ms-text-warning">81,525</span>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '45.07%' }} aria-valuenow="45.07" aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '29.05%' }} aria-valuenow="29.05" aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25.48%' }} aria-valuenow="25.48" aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytics;