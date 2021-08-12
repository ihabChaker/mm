import React, { Component } from 'react';

class Pillwithicon extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Pill Buttons with Icon</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-pill</code> for pill icon buttons</p>
                    <button type="button" className="btn btn-pill btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                    <button type="button" className="btn btn-pill btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                    <button type="button" className="btn btn-pill btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                    <button type="button" className="btn btn-pill btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                    <button type="button" className="btn btn-pill btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                    <button type="button" className="btn btn-pill btn-info has-icon"><i className="flaticon-information" /> Info</button>
                    <button type="button" className="btn btn-pill btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                    <button type="button" className="btn btn-pill btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                </div>
            </div>
        );
    }
}

export default Pillwithicon;