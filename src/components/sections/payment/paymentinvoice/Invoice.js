import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const invoicelist = [
    {
        id: 1,
        servicename: 'Visting Charges',
        qty: 1,
        price: 100
    },
    {
        id: 2,
        servicename: 'Medicines',
        qty: 10,
        price: 69
    },
    {
        id: 3,
        servicename: 'X-ray Reports',
        qty: 4,
        price: 600
    },
    {
        id: 4,
        servicename: 'MRI',
        qty: 2,
        price: 245
    }
];
const priceTotal = invoicelist.reduce((totalPrice, item) => totalPrice + item.price*item.qty, 0);
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
                                <h5>Hospital Memo</h5>
                                <p>Anny.123@example.com</p>
                                <p className="mb-0">1642 Cambridge Drive, Phoenix, 85029 Arizona</p>
                                <p className="mb-0">Arizona</p>
                                <p>Phoenix</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right">
                            <ul className="invoice-date">
                                <li>Invoice Date : Saturday, Dec 08 2021</li>
                                <li>Due Date : Sunday, Dec 16 2021</li>
                            </ul>
                        </div>
                    </div>
                    {/* Invoice Table */}
                    <div className="ms-invoice-table table-responsive mt-5">
                        <table className="table table-hover text-right thead-light">
                            <thead>
                                <tr className="text-capitalize">
                                    <th className="text-center w-5">id</th>
                                    <th className="text-left">Item Name</th>
                                    <th>Qty</th>
                                    <th>Unit Cost</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoicelist.map((item, i) => (
                                    <tr key={i}>
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-left">{item.servicename}</td>
                                        <td>{item.qty}</td>
                                        <td>${item.price}</td>
                                        <td>${item.qty * item.price}</td>
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
                        <Button type="button" className="mr-2" onClick={() => window.print()}>Print Invoice</Button>
                        <Button type="button">Send Invoice</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Invoice;