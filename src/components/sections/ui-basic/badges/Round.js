import React, { Component } from 'react';

class Round extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Round Badges</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.badge-{'{'}state{'}'}</code> for different states</p>
                        <span className="badge badge-primary">Primary</span>
                        <span className="badge badge-secondary">Secondary</span>
                        <span className="badge badge-success">Success</span>
                        <span className="badge badge-danger">Danger</span>
                        <span className="badge badge-warning">Warning</span>
                        <span className="badge badge-info">Info</span>
                        <span className="badge badge-light">Light</span>
                        <span className="badge badge-dark">Dark</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Round;