import React, { Component } from 'react';

class Round extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Round Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-{'{'}state{'}'}</code> for different states</p>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-light">Light</button>
                    <button type="button" className="btn btn-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Round;