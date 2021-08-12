import React, { Component } from 'react';

class Defaultwithicon extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Default with Icon Alerts</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="alert alert-success" role="alert">
                        <i className="flaticon-tick-inside-circle" /> <strong>Well done!</strong> You successfully read this important alert message.
    </div>
                    <div className="alert alert-info" role="alert">
                        <i className="flaticon-information" /> <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
                    <div className="alert alert-warning" role="alert">
                        <i className="flaticon-alert" /> <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
                    <div className="alert alert-danger" role="alert">
                        <i className="flaticon-alert-1" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                    <div className="alert alert-brand" role="alert">
                        <i className="flaticon-diamond" /> <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                </div>
            </div>
        );
    }
}

export default Defaultwithicon;