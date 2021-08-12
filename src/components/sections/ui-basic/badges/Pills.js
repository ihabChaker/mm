import React, { Component } from 'react';

class Pills extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Badge Pills</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.badge-pill</code> for pill badges</p>
                        <span className="badge badge-pill badge-primary">Primary</span>
                        <span className="badge badge-pill badge-secondary">Secondary</span>
                        <span className="badge badge-pill badge-success">Success</span>
                        <span className="badge badge-pill badge-danger">Danger</span>
                        <span className="badge badge-pill badge-warning">Warning</span>
                        <span className="badge badge-pill badge-info">Info</span>
                        <span className="badge badge-pill badge-light">Light</span>
                        <span className="badge badge-pill badge-dark">Dark</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pills;