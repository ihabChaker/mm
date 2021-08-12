import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Arrow extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Arrow Breadcrumbs</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="ms-directions">Use <code>.has-gap</code> and <code>.breadcrumb-arrow</code> for a gap between items and arrow shape breadcrumb</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow has-gap">
                                    <li className="breadcrumb-item" aria-current="page"> <Link to="/"><i className="material-icons">home</i> Home</Link> </li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <p className="ms-directions">Use <code>.has-bg</code> for a background color for non-active items, <code>.has-bg-active</code> for active items</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow has-gap has-bg">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow has-bg ">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow has-bg-active">
                                    <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <p className="ms-directions">Use <code>.first-rounded</code> for rounded edges on the first item</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow has-gap first-rounded">
                                    <li className="breadcrumb-item" aria-current="page"> <Link to="/"><i className="material-icons">home</i> Home</Link> </li>
                                    <li className="breadcrumb-item"><Link to="/">Library</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <p className="ms-directions">Use <code>.has-shadow</code> for a shadow effect on items</p>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-arrow first-rounded has-shadow">
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

export default Arrow;