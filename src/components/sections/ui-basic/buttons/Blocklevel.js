import React, { Component } from 'react';

class Blocklevel extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Block Level Buttons</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.btn-block</code> for block level buttons</p>
                        <button type="button" className="btn btn-block btn-primary">Primary</button>
                        <button type="button" className="btn btn-block btn-secondary">Secondary</button>
                        <button type="button" className="btn btn-block btn-success">Success</button>
                        <button type="button" className="btn btn-block btn-danger">Danger</button>
                        <button type="button" className="btn btn-block btn-light">Danger</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blocklevel;