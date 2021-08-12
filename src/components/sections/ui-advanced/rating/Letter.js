import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Letter Rating</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered letter-rating">
                                <li className="ms-rating-item rated"> <i>E</i> </li>
                                <li className="ms-rating-item rated"> <i>D</i> </li>
                                <li className="ms-rating-item rated"> <i>C</i> </li>
                                <li className="ms-rating-item rated"> <i>B</i> </li>
                                <li className="ms-rating-item rated"> <i>A</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill letter-rating">
                                <li className="ms-rating-item"> <i>E</i> </li>
                                <li className="ms-rating-item"> <i>D</i> </li>
                                <li className="ms-rating-item"> <i>C</i> </li>
                                <li className="ms-rating-item"> <i>B</i> </li>
                                <li className="ms-rating-item rated"> <i>A</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill rating-circle letter-rating">
                                <li className="ms-rating-item"> <i>E</i> </li>
                                <li className="ms-rating-item rated"> <i>D</i> </li>
                                <li className="ms-rating-item rated"> <i>C</i> </li>
                                <li className="ms-rating-item rated"> <i>B</i> </li>
                                <li className="ms-rating-item rated"> <i>A</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered rating-circle letter-rating">
                                <li className="ms-rating-item"> <i>E</i> </li>
                                <li className="ms-rating-item"> <i>D</i> </li>
                                <li className="ms-rating-item"> <i>C</i> </li>
                                <li className="ms-rating-item rated"> <i>B</i> </li>
                                <li className="ms-rating-item rated"> <i>A</i> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Letter;