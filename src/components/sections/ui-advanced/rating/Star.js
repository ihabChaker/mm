import React, { Component } from 'react';

class Star extends Component {
    
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Star Rating</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered">
                                <li className="ms-rating-item"> <i className="material-icons">star_border</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star_border</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star_border</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill">
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill rating-circle">
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-bordered rating-circle">
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item"> <i className="material-icons">star</i> </li>
                                <li className="ms-rating-item rated"> <i className="material-icons">star</i> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Star;