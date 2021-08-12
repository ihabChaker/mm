import React, { Component } from 'react';

class Heart extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Heart Rating</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered heart-rating">
                                <li className="ms-rating-item"> <i className="material-icons">favorite_border</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite_border</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill heart-rating">
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill rating-circle heart-rating">
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered rating-circle heart-rating">
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">favorite</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">favorite</i> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Heart;