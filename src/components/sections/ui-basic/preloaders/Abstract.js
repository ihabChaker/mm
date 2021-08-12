import React, { Component } from 'react';

class Abstract extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Abstract Shape preloaders</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="spinner spinner-9">
                                    <div className="ms-cube ms-cube1" />
                                    <div className="ms-cube ms-cube2" />
                                    <div className="ms-cube ms-cube3" />
                                    <div className="ms-cube ms-cube4" />
                                    <div className="ms-cube ms-cube5" />
                                    <div className="ms-cube ms-cube6" />
                                    <div className="ms-cube ms-cube7" />
                                    <div className="ms-cube ms-cube8" />
                                    <div className="ms-cube ms-cube9" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="spinner spinner-10">
                                    <div className="ms-cube1 ms-cube" />
                                    <div className="ms-cube2 ms-cube" />
                                    <div className="ms-cube4 ms-cube" />
                                    <div className="ms-cube3 ms-cube" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="spinner spinner-6">
                                    <div className="dot1" />
                                    <div className="dot2" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="spinner spinner-12">
                                    <div className="ms-cube1 ms-cube" />
                                    <div className="ms-cube2 ms-cube" />
                                    <div className="ms-cube4 ms-cube" />
                                    <div className="ms-cube3 ms-cube" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Abstract;