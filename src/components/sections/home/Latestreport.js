import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Latestreport extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh ms-widget">
                    <div className="ms-panel-header ms-panel-custome">
                        <h6>Latest Reports</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <ul className="ms-followers ms-list ms-scrollable">
                            <li className="ms-list-item media">
                                <div className="media-body mt-1">
                                    <h4>Ultrasound-2.pdf</h4>
                                    <Link to="#"><span className="fs-12">View Report</span></Link>
                                </div>
                                <button type="button" className="btn btn-success btn-sm" name="button">Download </button>
                            </li>
                            <li className="ms-list-item media">
                                <div className="media-body mt-1">
                                    <h4>Hypothermia.pdf</h4>
                                    <Link to="#"><span className="fs-12">View Report</span></Link>
                                </div>
                                <button type="button" className="btn btn-danger btn-sm" name="button">On Hold </button>
                            </li>
                            <li className="ms-list-item media">
                                <div className="media-body mt-1">
                                    <h4>Ultrasound.pdf</h4>
                                    <Link to="#"><span className="fs-12">View Report</span></Link>
                                </div>
                                <button type="button" className="btn btn-success btn-sm" name="button">Download </button>
                            </li>
                            <li className="ms-list-item media">
                                <div className="media-body mt-1">
                                    <h4>Heart-ECG.pdf</h4>
                                    <Link to="#"><span className="fs-12">View Report</span></Link>
                                </div>
                                <button type="button" className="btn btn-success btn-sm" name="button">Download</button>
                            </li>
                            <li className="ms-list-item media">
                                <div className="media-body mt-1">
                                    <h4>X-ray.pdf</h4>
                                    <Link to="#"><span className="fs-12">View Report</span></Link>
                                </div>
                                <button type="button" className="btn btn-danger btn-sm" name="button">On Hold </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Latestreport;