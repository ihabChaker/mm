import React, { Component } from 'react';

class Gradient extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Gradient Badges</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.badge-gradient-{'{'}state{'}'}</code> for different states</p>
                        <span className="badge badge-gradient-primary">Primary</span>
                        <span className="badge badge-gradient-secondary">Secondary</span>
                        <span className="badge badge-gradient-success">Success</span>
                        <span className="badge badge-gradient-danger">Danger</span>
                        <span className="badge badge-gradient-warning">Warning</span>
                        <span className="badge badge-gradient-info">Info</span>
                        <span className="badge badge-gradient-light">Light</span>
                        <span className="badge badge-gradient-dark">Dark</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gradient;