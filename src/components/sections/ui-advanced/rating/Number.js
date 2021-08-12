import React, { Component } from 'react';

class Number extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Number Rating</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered letter-rating">
                                <li className="ms-rating-item"> <i>5</i> </li>
                                <li className="ms-rating-item"> <i>4</i> </li>
                                <li className="ms-rating-item rated"> <i>3</i> </li>
                                <li className="ms-rating-item rated"> <i>2</i> </li>
                                <li className="ms-rating-item rated"> <i>1</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill letter-rating">
                                <li className="ms-rating-item"> <i>5</i> </li>
                                <li className="ms-rating-item"> <i>4</i> </li>
                                <li className="ms-rating-item"> <i>3</i> </li>
                                <li className="ms-rating-item"> <i>2</i> </li>
                                <li className="ms-rating-item rated"> <i>1</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill rating-circle letter-rating">
                                <li className="ms-rating-item"> <i>5</i> </li>
                                <li className="ms-rating-item"> <i>4</i> </li>
                                <li className="ms-rating-item"> <i>3</i> </li>
                                <li className="ms-rating-item rated"> <i>2</i> </li>
                                <li className="ms-rating-item rated"> <i>1</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered rating-circle letter-rating">
                                <li className="ms-rating-item"> <i>5</i> </li>
                                <li className="ms-rating-item rated"> <i>4</i> </li>
                                <li className="ms-rating-item rated"> <i>3</i> </li>
                                <li className="ms-rating-item rated"> <i>2</i> </li>
                                <li className="ms-rating-item rated"> <i>1</i> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Number;