import React, { Component } from 'react';

class Roundoutline extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Round Outline Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-outline-{'{'}state{'}'}</code> for different outline states</p>
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-outline-success">Success</button>
                    <button type="button" className="btn btn-outline-danger">Danger</button>
                    <button type="button" className="btn btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-outline-info">Info</button>
                    <button type="button" className="btn btn-outline-light">Light</button>
                    <button type="button" className="btn btn-outline-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Roundoutline;