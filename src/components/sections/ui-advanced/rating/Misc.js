import React, { Component } from 'react';

class Misc extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Misc. Rating</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating misc-number">
                                <li className="ms-rating-item"> <i>5</i> </li>
                                <li className="ms-rating-item"> <i>4</i> </li>
                                <li className="ms-rating-item rated"> <i>3</i> </li>
                                <li className="ms-rating-item rated"> <i>2</i> </li>
                                <li className="ms-rating-item rated"> <i>1</i> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating rating-fill misc-checks">
                                <li className="ms-rating-item"> <i /> </li>
                                <li className="ms-rating-item"> <i /> </li>
                                <li className="ms-rating-item"> <i /> </li>
                                <li className="ms-rating-item rated"> <i /> </li>
                                <li className="ms-rating-item rated"> <i /> </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating misc-blocks">
                                <li className="ms-rating-item" />
                                <li className="ms-rating-item rated" />
                                <li className="ms-rating-item rated" />
                                <li className="ms-rating-item rated" />
                                <li className="ms-rating-item rated" />
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <ul className="ms-star-rating misc-square">
                                <li className="ms-rating-item" />
                                <li className="ms-rating-item" />
                                <li className="ms-rating-item" />
                                <li className="ms-rating-item" />
                                <li className="ms-rating-item rated"> <i /> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Misc;