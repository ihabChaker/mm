import React, { Component } from 'react';

class Squarewithicon extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Square Buttons with Icon</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-square</code> for square icon buttons</p>
                    <button type="button" className="btn btn-square btn-primary has-icon"><i className="flaticon-diamond" /> Primary</button>
                    <button type="button" className="btn btn-square btn-secondary has-icon"><i className="flaticon-star" /> Secondary</button>
                    <button type="button" className="btn btn-square btn-success has-icon"><i className="flaticon-tick-inside-circle" /> Success</button>
                    <button type="button" className="btn btn-square btn-danger has-icon"><i className="flaticon-alert-1" /> Danger</button>
                    <button type="button" className="btn btn-square btn-warning has-icon"><i className="flaticon-alert" /> Warning</button>
                    <button type="button" className="btn btn-square btn-info has-icon"><i className="flaticon-information" /> Info</button>
                    <button type="button" className="btn btn-square btn-light has-icon"><i className="flaticon-turn-notifications-off-button" /> Light</button>
                    <button type="button" className="btn btn-square btn-dark has-icon"><i className="flaticon-reuse" /> Dark</button>
                </div>
            </div>
        );
    }
}

export default Squarewithicon;