import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const invoiceproductlist = [
    {
        id: 1,
        productname: 'HTML 5 Template',
        qty: 1,
        cost: 30
    },
    {
        id: 2,
        productname: 'Wordpress Template',
        qty: 1,
        cost: 69
    },
    {
        id: 3,
        productname: 'PSD Template',
        qty: 2,
        cost: 19
    },
    {
        id: 4,
        productname: 'Code Snipper',
        qty: 2,
        cost: 9
    },
];
const priceTotal = invoiceproductlist.reduce((totalPrice, item) => totalPrice + item.cost*item.qty, 0);
class Invoice extends Component {
    
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header header-mini">
                    <div className="d-flex justify-content-between">
                        <h6>Invoice</h6>
                        <h6>#135178</h6>
                    </div>
                </div>
                <div className="ms-panel-body">
                    {/* Invoice To */}
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="invoice-address">
                                <h3>Reciever: </h3>
                                <h5>Anny Farisha</h5>
                                <p>Anny.123@example.com</p>
                                <p className="mb-0">1642 Cambridge Drive, Phoenix, 85029 Arizona</p>
                                <p className="mb-0">Arizona</p>
                                <p>Phoenix</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <ul className="invoice-date">
                                <li>Invoice Date : Saturday, April 07 2021</li>
                                <li>Due Date : Sunday, April 19 2021</li>
                            </ul>
                        </div>
                    </div>
                    {/* Invoice Table */}
                    <div className="ms-invoice-table table-responsive mt-5">
                        <table className="table table-hover text-right thead-light">
                            <thead>
                                <tr className="text-capitalize">
                                    <th className="text-center w-5">id</th>
                                    <th className="text-left">description</th>
                                    <th>qty</th>
                                    <th>Unit Cost</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceproductlist.map((item, i) => (
                                    <tr key={i}>
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-left">{item.productname}</td>
                                        <td>{item.qty}</td>
                                        <td>${item.cost}</td>
                                        <td>${item.qty * item.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={4}>Total Cost: </td>
                                    <td>${priceTotal}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="invoice-buttons text-right">
                        <Link to="#" className="btn btn-primary mr-2" onClick={() => window.print()}>Print Invoice</Link>
                        <Link to="#" className="btn btn-primary">Send Invoice</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Invoice;