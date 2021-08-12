import React, { Component } from 'react';

import portfolio from '../../../../assets/img/dashboard/doctor-banner-1000x370.jpg';
import people from '../../../../assets/img/dashboard/doctor-2.jpg';

class Profile extends Component {
    render() {
        return (
            <div className="col-lg-6 col-md-12">
                <div className="ms-card ms-widget ms-profile-widget ms-card-fh">
                    <div className="ms-card-img">
                        <img src={portfolio} alt="card_img" />
                    </div>
                    <img src={people} className="ms-img-large ms-img-round ms-user-img" alt="people" />
                    <div className="ms-card-body">
                        <h2>Anny Farisha</h2>
                        <span>Doctor</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        <button type="button" className="btn btn-gradient-primary" name="button"><i className="material-icons">person_add</i> Follow</button>
                        <ul className="ms-profile-stats">
                            <li>
                                <h3 className="ms-count">5790</h3>
                                <span>Followers</span>
                            </li>
                            <li>
                                <h3 className="ms-count">4.8</h3>
                                <span>User Rating</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;