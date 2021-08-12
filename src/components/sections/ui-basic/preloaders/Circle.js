import React, { Component } from 'react';

class Circle extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Circle Preloaders</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="spinner spinner-5" />
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-11">
                                <div className="ms-circle1 ms-circle" />
                                <div className="ms-circle2 ms-circle" />
                                <div className="ms-circle3 ms-circle" />
                                <div className="ms-circle4 ms-circle" />
                                <div className="ms-circle5 ms-circle" />
                                <div className="ms-circle6 ms-circle" />
                                <div className="ms-circle7 ms-circle" />
                                <div className="ms-circle8 ms-circle" />
                                <div className="ms-circle9 ms-circle" />
                                <div className="ms-circle10 ms-circle" />
                                <div className="ms-circle11 ms-circle" />
                                <div className="ms-circle12 ms-circle" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-2">
                                <div className="double-bounce1" />
                                <div className="double-bounce2" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="spinner spinner-8">
                                <div className="ms-circle1 ms-child" />
                                <div className="ms-circle2 ms-child" />
                                <div className="ms-circle3 ms-child" />
                                <div className="ms-circle4 ms-child" />
                                <div className="ms-circle5 ms-child" />
                                <div className="ms-circle6 ms-child" />
                                <div className="ms-circle7 ms-child" />
                                <div className="ms-circle8 ms-child" />
                                <div className="ms-circle9 ms-child" />
                                <div className="ms-circle10 ms-child" />
                                <div className="ms-circle11 ms-child" />
                                <div className="ms-circle12 ms-child" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Circle;