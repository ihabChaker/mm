import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Headings Typography</h6>
                    </div>
                    <div className="ms-panel-body">
                        <h1>Heading 1</h1>
                        <p>Roboto Medium 24px</p>
                        <h2>Heading 2</h2>
                        <p>Roboto Medium 18px</p>
                        <h3>Heading 3</h3>
                        <p>Roboto Medium 14px</p>
                        <h4>Heading 4</h4>
                        <p>Roboto Regular 14px</p>
                        <h5>Heading 5</h5>
                        <p>Roboto Medium 13px</p>
                        <h6>Heading 6</h6>
                        <p>Roboto Regular 14px</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;