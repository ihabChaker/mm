import React, { Component } from 'react';

class Outline extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Outline Badges</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.badge-outline-{'{'}state{'}'}</code> for different states</p>
                        <span className="badge badge-outline-primary">Primary</span>
                        <span className="badge badge-outline-secondary">Secondary</span>
                        <span className="badge badge-outline-success">Success</span>
                        <span className="badge badge-outline-danger">Danger</span>
                        <span className="badge badge-outline-warning">Warning</span>
                        <span className="badge badge-outline-info">Info</span>
                        <span className="badge badge-outline-light">Light</span>
                        <span className="badge badge-outline-dark">Dark</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Outline;