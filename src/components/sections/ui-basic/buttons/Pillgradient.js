import React, { Component } from 'react';

class Pillgradient extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Pill Gradient Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-pill</code> for pill gradient buttons</p>
                    <button type="button" className="btn btn-pill btn-gradient-primary">Primary</button>
                    <button type="button" className="btn btn-pill btn-gradient-secondary">Secondary</button>
                    <button type="button" className="btn btn-pill btn-gradient-success">Success</button>
                    <button type="button" className="btn btn-pill btn-gradient-danger">Danger</button>
                    <button type="button" className="btn btn-pill btn-gradient-warning">Warning</button>
                    <button type="button" className="btn btn-pill btn-gradient-info">Info</button>
                    <button type="button" className="btn btn-pill btn-gradient-light">Light</button>
                    <button type="button" className="btn btn-pill btn-gradient-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Pillgradient;