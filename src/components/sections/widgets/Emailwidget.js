import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import people from '../../../assets/img/dashboard/patient-1.jpg';

class Emailwidget extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh ms-widget ms-email-widget">
                    <div className="ms-panel-header">
                        <div className="media clearfix">
                            <div className="mr-3 align-self-center">
                                <img src={people} className="ms-img-small ms-img-round" alt="people" />
                            </div>
                            <div className="media-body">
                                <h6>Heather Brown</h6>
                            </div>
                            <ul className="ms-email-options">
                                <li><Link to="#" className="text-disabled"> <i className="material-icons">local_offer</i> Tags </Link></li>
                                <li><Link to="#" className="text-disabled"> <i className="material-icons">folder</i> Folders </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ms-panel-body">
                        <form method="post" className="clearfix">
                            <div className="form-group mb-4">
                                <input type="text" className="form-control" placeholder="Recipients" />
                                <div className="ms-cc">
                                    <i className="material-icons">person</i> CC &amp; BCC
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <input type="email" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group mb-2">
                                <textarea rows={5} className="form-control" placeholder="Message" defaultValue={""} />
                            </div>
                            <button className="btn btn-warning float-right" type="submit">Send Mail</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Emailwidget;