import React, { Component } from 'react';

class Pilloutline extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Pill Outline Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-pill</code> for pill outline buttons</p>
                    <button type="button" className="btn btn-pill btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-pill btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-pill btn-outline-success">Success</button>
                    <button type="button" className="btn btn-pill btn-outline-danger">Danger</button>
                    <button type="button" className="btn btn-pill btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-pill btn-outline-info">Info</button>
                    <button type="button" className="btn btn-pill btn-outline-light">Light</button>
                    <button type="button" className="btn btn-pill btn-outline-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Pilloutline;