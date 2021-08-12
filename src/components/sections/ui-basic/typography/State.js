import React, { Component } from 'react';

class State extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>State Typography</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.ms-text-{'{'}state{'}'}</code> in any text element</p>
                        <p className="ms-text-primary">This is a primary color text | The quick brown fox jumps over the lazy dog</p>
                        <p className="ms-text-secondary">This is a secondary color text | The quick brown fox jumps over the lazy dog</p>
                        <p className="ms-text-success">This is a success color text | The quick brown fox jumps over the lazy dog</p>
                        <p className="ms-text-info">This is an info color text | The quick brown fox jumps over the lazy dog</p>
                        <p className="ms-text-danger">This is a danger color text | The quick brown fox jumps over the lazy dog</p>
                        <p className="ms-text-warning">This is a warning color text | The quick brown fox jumps over the lazy dog</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default State;