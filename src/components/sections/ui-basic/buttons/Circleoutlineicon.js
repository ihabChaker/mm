import React, { Component } from 'react';

class Circleoutlineicon extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Circle Outline Icon Buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.btn-pill</code> for circle Icon buttons</p>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-primary"><i className="flaticon-diamond" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-secondary"><i className="flaticon-star" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-success"><i className="flaticon-tick-inside-circle" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-danger"><i className="flaticon-alert-1" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-warning"><i className="flaticon-alert" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-info"><i className="flaticon-information" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                        <button type="button" className="ms-btn-icon-outline btn-pill btn-dark"><i className="flaticon-reuse" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Circleoutlineicon;