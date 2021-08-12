import React, { Component } from 'react';

class Followers extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Social Media Followers</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <div className="ms-social-media-followers">
                            <div className="ms-social-grid">
                                <i className="fab fa-linkedin-in bg-linkedin" />
                                <p className="ms-text-dark">8,033</p>
                                <span>Followers</span>
                            </div>
                            <div className="ms-social-grid">
                                <i className="fab fa-twitter bg-twitter" />
                                <p className="ms-text-dark">8,039</p>
                                <span>Followers</span>
                            </div>
                        </div>
                        <div className="ms-social-media-followers">
                            <div className="ms-social-grid">
                                <i className="fab fa-facebook-f bg-facebook" />
                                <p className="ms-text-dark">8,039</p>
                                <span>Likes</span>
                            </div>
                            <div className="ms-social-grid">
                                <i className="fab fa-instagram bg-instagram" />
                                <p className="ms-text-dark">98,039</p>
                                <span>Followers</span>
                            </div>
                        </div>
                        <div className="ms-social-media-followers">
                            <div className="ms-social-grid">
                                <i className="fab fa-youtube bg-youtube" />
                                <p className="ms-text-dark">8,039</p>
                                <span>Subscribers</span>
                            </div>
                            <div className="ms-social-grid">
                                <i className="fab fa-google-plus-g bg-g-plus" />
                                <p className="ms-text-dark">98,039</p>
                                <span>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Followers;