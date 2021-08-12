import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Style2 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Pagination Section 2</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.active-round</code> in active <code>.page-item</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item active-round"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.active-circle</code> in active <code>.page-item</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item active-circle"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6">
                            <p className="ms-directions">Use <code>.active-bordered</code> in active <code>.page-item</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-pill">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item active-bordered"><Link className="page-link" to="#">5</Link></li>
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

export default Style2;