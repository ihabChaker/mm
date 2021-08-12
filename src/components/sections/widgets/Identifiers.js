import React, { Component, Fragment } from 'react';

class Identifiers extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-4">
                    <div className="ms-panel ms-widget ms-identifier-widget bg-danger">
                        <div className="ms-panel-header header-mini">
                            <h6>Danger</h6>
                        </div>
                        <div className="ms-panel-body">
                            <div className="text-center">
                                <i className="flaticon-alert-1" />
                                <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="ms-panel ms-widget ms-identifier-widget bg-warning">
                        <div className="ms-panel-header header-mini">
                            <h6>Warning</h6>
                        </div>
                        <div className="ms-panel-body">
                            <div className="text-center">
                                <i className="flaticon-alert" />
                                <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="ms-panel ms-widget ms-identifier-widget bg-info">
                        <div className="ms-panel-header header-mini">
                            <h6>Info</h6>
                        </div>
                        <div className="ms-panel-body">
                            <div className="text-center">
                                <i className="flaticon-information" />
                                <p>Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Identifiers;