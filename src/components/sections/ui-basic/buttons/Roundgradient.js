import React, { Component } from 'react';

class Roundgradient extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Round Gradient Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-gradient-{'{'}state{'}'}</code> for different gradient states</p>
                    <button type="button" className="btn btn-gradient-primary">Primary</button>
                    <button type="button" className="btn btn-gradient-secondary">Secondary</button>
                    <button type="button" className="btn btn-gradient-success">Success</button>
                    <button type="button" className="btn btn-gradient-danger">Danger</button>
                    <button type="button" className="btn btn-gradient-warning">Warning</button>
                    <button type="button" className="btn btn-gradient-info">Info</button>
                    <button type="button" className="btn btn-gradient-light">Light</button>
                    <button type="button" className="btn btn-gradient-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Roundgradient;