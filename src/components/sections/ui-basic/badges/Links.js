import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-btn-display">
                    <div className="ms-panel-header">
                        <h6>Badges with Links</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Wrap in an <code>a</code> tag</p>
                        <Link to="/" className="badge badge-primary">Primary</Link>
                        <Link to="/" className="badge badge-secondary">Secondary</Link>
                        <Link to="/" className="badge badge-success">Success</Link>
                        <Link to="/" className="badge badge-danger">Danger</Link>
                        <Link to="/" className="badge badge-warning">Warning</Link>
                        <Link to="/" className="badge badge-info">Info</Link>
                        <Link to="/" className="badge badge-light">Light</Link>
                        <Link to="/" className="badge badge-dark">Dark</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Links;