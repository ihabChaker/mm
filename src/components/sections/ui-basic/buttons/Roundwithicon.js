import React, { Component } from 'react';

class Roundwithicon extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Round Buttons with Icon</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-{'{'}state{'}'}</code> for different button states and <code>.has-icon</code> for icon buttons </p>
                    <button type="button" className="btn btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                    <button type="button" className="btn btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                    <button type="button" className="btn btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                    <button type="button" className="btn btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                    <button type="button" className="btn btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                    <button type="button" className="btn btn-info has-icon"><i className="flaticon-information" /> Info</button>
                    <button type="button" className="btn btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                    <button type="button" className="btn btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                </div>
            </div>
        );
    }
}

export default Roundwithicon;