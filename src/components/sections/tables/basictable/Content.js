import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

// Tabledata Table
const tabledata = [
    {
        photo: 'assets/img/dashboard/doctor-1.jpg',
        id: "1",
        buyer: "Chihoo Hwang",
        service: "Wordpress Template",
        productid: "67384917",
    },
    {
        photo: 'assets/img/dashboard/doctor-2.jpg',
        id: "2",
        buyer: "Ajay Suryavanash",
        service: "Business Card",
        productid: "789393819",
    },
    {
        photo: 'assets/img/dashboard/doctor-3.jpg',
        id: "3",
        buyer: "John Doe",
        service: "App Customization",
        productid: "137893137",
    },
    {
        photo: 'assets/img/dashboard/doctor-4.jpg',
        id: "4",
        buyer: "Alesdro Guitto",
        service: "Dashboard Design",
        productid: "235193138",
    },
    {
        photo: 'assets/img/dashboard/doctor-5.jpg',
        id: "5",
        buyer: "Manbir Sahwny",
        service: "Theme Development",
        productid: "19938917",
    },
]

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <Breadcrumb />
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Default Table</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.table-bordered</code> in the <code>table</code></p>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.buyer}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Highlighted Table Head</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.thead-state</code> in the <code>table</code></p>
                                <div className="table-responsive">
                                    <table className="table table-bordered thead-primary">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.buyer}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Striped Table</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.table-striped</code> in the <code>table</code></p>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.buyer}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Hoverable Table</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Use <code>.table-hover</code> in the <code>table</code></p>
                                <div className="table-responsive">
                                    <table className="table table-hover thead-primary">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.buyer}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Table with Image</h6>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">User</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="ms-table-f-w"> <img src={process.env.PUBLIC_URL + "/" + item.photo} alt="people" /> {item.buyer} </td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Reponsive Table</h6>
                            </div>
                            <div className="ms-panel-body">
                                <p className="ms-directions">Wrap <code>table</code> in the <code>.table-responsive</code></p>
                                <div className="table-responsive">
                                    <table className="table thead-primary">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tabledata.map((item, i) => (
                                                <tr key={i}>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.buyer}</td>
                                                    <td>{item.service}</td>
                                                    <td>{item.productid}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;