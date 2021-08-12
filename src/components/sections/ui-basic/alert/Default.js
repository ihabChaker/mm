import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Default Alerts</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.alert-{'{'}state{'}'}</code> for default alert states</p>
                    <div className="alert alert-success" role="alert">
                        <strong>Well done!</strong> You successfully read this important alert message.
    </div>
                    <div className="alert alert-info" role="alert">
                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
                    <div className="alert alert-warning" role="alert">
                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
                    <div className="alert alert-danger" role="alert">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                    <div className="alert alert-brand" role="alert">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
                </div>
            </div>
        );
    }
}

export default Default;