import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Default extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Default Breadcrumbs</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <p className="ms-directions">Use <code>.breadcrumb-arrow-sep</code> for an arrow seperator</p>
                                <ol className="breadcrumb breadcrumb-arrow-sep">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <p className="ms-directions">Use <code>.breadcrumb-dark</code> for a dark background</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark breadcrumb-arrow-sep">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-dark">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;