import React, { Component } from 'react';

import userbanner from '../../../assets/img/portfolio/gallery-4-760x260.jpg';
import userimg from '../../../assets/img/dashboard/doctor-1.jpg';

class Profilewidget extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-card ms-widget ms-profile-widget ms-card-fh br-0">
                    <div className="ms-card-img">
                        <img src={userbanner} alt="card_img" />
                    </div>
                    <img src={userimg} className="ms-img-large ms-img-round ms-user-img" alt="people" />
                    <div className="ms-card-body">
                        <h2>Anny Farisha</h2>
                        <span>Doctor</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        <button type="button" className="btn btn-primary btn-sm" name="button"><i className="material-icons">person_add</i> Assign</button>
                        <ul className="ms-profile-stats">
                            <li>
                                <h3 className="ms-count">5790</h3>
                                <span>Operations</span>
                            </li>
                            <li>
                                <h3 className="ms-count">4.8</h3>
                                <span>Medical Rating</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profilewidget;