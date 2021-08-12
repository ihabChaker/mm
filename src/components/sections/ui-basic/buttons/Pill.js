import React, { Component } from 'react';

class Pill extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Pill Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-pill</code> for pill buttons</p>
                    <button type="button" className="btn btn-pill btn-primary">Primary</button>
                    <button type="button" className="btn btn-pill btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-pill btn-success">Success</button>
                    <button type="button" className="btn btn-pill btn-danger">Danger</button>
                    <button type="button" className="btn btn-pill btn-warning">Warning</button>
                    <button type="button" className="btn btn-pill btn-info">Info</button>
                    <button type="button" className="btn btn-pill btn-light">Light</button>
                    <button type="button" className="btn btn-pill btn-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Pill;