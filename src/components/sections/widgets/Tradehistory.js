import React, { Component } from 'react';

const tradelist = [
    { price: 7860.24, icon: 'BTC', amount: 0.528, date: '12.11.2021' },
    { price: 3360.14, icon: 'ETH', amount: 0.215, date: '12.11.2021' },
    { price: 1264.99, icon: 'BTC', amount: 0.117, date: '12.11.2021' },
    { price: 3789.31, icon: 'PPC-alt', amount: 0.217, date: '12.11.2021' },
    { price: 3789.31, icon: 'PPC-alt', amount: 0.217, date: '12.11.2021' },
];

class Tradehistory extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-widget ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Trade History</h6>
                        <p>View your trade history</p>
                    </div>
                    <div className="ms-panel-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover thead-light">
                                <thead>
                                    <tr>
                                        <th scope="col">Price ($)</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tradelist.map((item, i) => (
                                    <tr key={i}>
                                        <td>${item.price}</td>
                                        <td><i className={"cc "+ item.icon +""} />{item.amount}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tradehistory;