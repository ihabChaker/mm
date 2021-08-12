import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel ms-panel-fh ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Badges within buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <button type="button" className="btn btn-primary" name="button">Notifications <span className="badge badge-pill badge-outline-primary">4</span></button>
                        <button type="button" className="btn btn-secondary" name="button">Edit <span className="badge badge-pill badge-outline-secondary">4</span></button>
                        <button type="button" className="btn btn-warning" name="button">Warnings <span className="badge badge-pill badge-outline-warning">8</span></button>
                        <button type="button" className="btn btn-danger" name="button">Alerts <span className="badge badge-pill badge-outline-danger">25</span></button>
                        <button type="button" className="btn btn-info" name="button">Info <span className="badge badge-pill badge-outline-info">16</span></button>
                        <button type="button" className="btn btn-light" name="button">Users <span className="badge badge-pill badge-outline-light">7</span></button>
                        <button type="button" className="btn btn-dark" name="button">Messages <span className="badge badge-pill badge-outline-dark">104</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;