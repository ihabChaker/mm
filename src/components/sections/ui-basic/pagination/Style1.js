import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Style1 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Pagination Section 1</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.has-gap</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination has-gap">
                                    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.pagination-round</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-round has-gap">
                                    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.pagination-circle</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-circle has-gap">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style1;