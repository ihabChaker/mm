import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div className="ms-panel ms-btn-display">
                <div className="ms-panel-header">
                    <h6>Square Buttons</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>.btn-square</code> for square buttons</p>
                    <button type="button" className="btn btn-square btn-primary">Primary</button>
                    <button type="button" className="btn btn-square btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-square btn-success">Success</button>
                    <button type="button" className="btn btn-square btn-danger">Danger</button>
                    <button type="button" className="btn btn-square btn-warning">Warning</button>
                    <button type="button" className="btn btn-square btn-info">Info</button>
                    <button type="button" className="btn btn-square btn-light">Light</button>
                    <button type="button" className="btn btn-square btn-dark">Dark</button>
                </div>
            </div>
        );
    }
}

export default Square;