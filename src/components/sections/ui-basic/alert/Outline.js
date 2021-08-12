import React, { Component } from 'react';

class Outline extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Outline Alerts</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.alert-outline</code> for default alert states</p>
                    <div className="alert alert-success alert-outline" role="alert">
                        <strong>Well done!</strong> You successfully read this important alert message.
    </div>
                    <div className="alert alert-info alert-outline" role="alert">
                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
                    <div className="alert alert-warning alert-outline" role="alert">
                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
                    <div className="alert alert-danger alert-outline" role="alert">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                    <div className="alert alert-brand alert-outline" role="alert">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                </div>
            </div>
        );
    }
}

export default Outline;