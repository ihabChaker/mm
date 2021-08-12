import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/">Basic UI Elements</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Tabs</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default Breadcrumb;