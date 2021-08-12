import React, { Component } from 'react';

class Roundicon extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Round Icon Buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.ms-btn-icon .btn-{'{'}state{'}'}</code> for different Icon states</p>
                        <button type="button" className="ms-btn-icon btn-primary"><i className="flaticon-diamond" /></button>
                        <button type="button" className="ms-btn-icon btn-secondary"><i className="flaticon-star" /></button>
                        <button type="button" className="ms-btn-icon btn-success"><i className="flaticon-tick-inside-circle" /></button>
                        <button type="button" className="ms-btn-icon btn-danger"><i className="flaticon-alert-1" /></button>
                        <button type="button" className="ms-btn-icon btn-warning"><i className="flaticon-alert" /></button>
                        <button type="button" className="ms-btn-icon btn-info"><i className="flaticon-information" /></button>
                        <button type="button" className="ms-btn-icon btn-light"><i className="flaticon-turn-notifications-off-button" /></button>
                        <button type="button" className="ms-btn-icon btn-dark"><i className="flaticon-reuse" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Roundicon;