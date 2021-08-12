import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Style3 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Pagination Section 3</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.pagination-pill</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-pill">
                                    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item active-bordered"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.pagination-input</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-input pagination-pill">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><input type="number" name="paginationNum" defaultValue /> </li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.pagination-light</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-light has-gap">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">5</Link></li>
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

export default Style3;