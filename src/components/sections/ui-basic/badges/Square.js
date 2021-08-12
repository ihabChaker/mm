import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Badge Square</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.badge-square</code> for square badges</p>
                        <span className="badge badge-square badge-primary">Primary</span>
                        <span className="badge badge-square badge-secondary">Secondary</span>
                        <span className="badge badge-square badge-success">Success</span>
                        <span className="badge badge-square badge-danger">Danger</span>
                        <span className="badge badge-square badge-warning">Warning</span>
                        <span className="badge badge-square badge-info">Info</span>
                        <span className="badge badge-square badge-light">Light</span>
                        <span className="badge badge-square badge-dark">Dark</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Square;