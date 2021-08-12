import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <div className="d-flex justify-content-between">
                            <div className="ms-header-text">
                                <h6>Social Activity</h6>
                                <p>Quick overview on your social media platforms</p>
                            </div>
                            <button type="button" className="btn btn-outline-primary ms-graph-metrics" name="button">Add New Account</button>
                        </div>
                    </div>
                    <div className="ms-panel-body pb-0">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="ms-card card-twitter ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Total Tweets</h6>
                                            <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 12,039</p>
                                            <p className="fs-12">48% From Last 24 Hours</p>
                                        </div>
                                    </div>
                                    <i className="fab fa-twitter-square" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="ms-card card-linkedin ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Total Followers</h6>
                                            <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 3,819</p>
                                            <p className="fs-12">48% From Last 24 Hours</p>
                                        </div>
                                    </div>
                                    <i className="fab fa-linkedin" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="ms-card card-facebook ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Total Likes</h6>
                                            <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 9,289</p>
                                            <p className="fs-12">48% From Last 24 Hours</p>
                                        </div>
                                    </div>
                                    <i className="fab fa-facebook" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="ms-card card-instagram ms-widget ms-infographics-widget">
                                    <div className="ms-card-body media">
                                        <div className="media-body">
                                            <h6>Total Followers</h6>
                                            <p className="ms-card-change"> <i className="material-icons">arrow_upward</i> 7,658</p>
                                            <p className="fs-12">48% From Last 24 Hours</p>
                                        </div>
                                    </div>
                                    <i className="fab fa-instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;