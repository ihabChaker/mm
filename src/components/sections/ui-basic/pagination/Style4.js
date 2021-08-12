import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Style4 extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Pagination Section 4</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="ms-directions">Use <code>.pagination-expanded</code> in <code>.pagination</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-expanded">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">6</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                    <li className="page-item-expanded">
                                        <span className="text-disabled go-to-page">Go to Page</span>
                                        <input type="number" name="paginationNum2" defaultValue />
                                        <Link to="#" className="go-to-page">Go <i className="material-icons">keyboard_arrow_right</i> </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-12">
                            <p className="ms-directions">Use <code>.has-shadow</code> in <code>.pagination-expanded</code></p>
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-expanded has-shadow">
                                    <li className="page-item"><Link className="page-link" to="#">«</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">6</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">»</Link></li>
                                    <li className="page-item-expanded">
                                        <span className="text-disabled go-to-page">Go to Page</span>
                                        <input type="number" name="paginationNum3" defaultValue />
                                        <Link to="#" className="go-to-page">Go <i className="material-icons">keyboard_arrow_right</i> </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style4;