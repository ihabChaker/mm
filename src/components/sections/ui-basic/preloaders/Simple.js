import React, { Component } from 'react';

class Simple extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Simple Preloaders</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="spinner spinner-1" />
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-7">
                                <div className="bounce1" />
                                <div className="bounce2" />
                                <div className="bounce3" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-3">
                                <div className="rect1" />
                                <div className="rect2" />
                                <div className="rect3" />
                                <div className="rect4" />
                                <div className="rect5" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-4">
                                <div className="cube1" />
                                <div className="cube2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Simple;