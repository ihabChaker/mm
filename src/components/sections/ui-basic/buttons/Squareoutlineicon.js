import React, { Component } from 'react';

class Squareoutlineicon extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Square Outline Icon Buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.btn-square</code> for square Icon buttons</p>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-primary"><i className="flaticon-diamond" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-secondary"><i className="flaticon-star" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-success"><i className="flaticon-tick-inside-circle" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-danger"><i className="flaticon-alert-1" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-warning"><i className="flaticon-alert" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-info"><i className="flaticon-information" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-square btn-dark"><i className="flaticon-reuse" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Squareoutlineicon;