import React, { Component } from 'react';

const recentbuyers = [
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(3).jpg',
        username: 'Chihoo Hwang',
        servicename: 'Wordpress Template',
        productid: 67384917
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        username: 'Ajay Suryavanash',
        servicename: 'Business Card',
        productid: 789393819
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        username: 'John Doe',
        servicename: 'App Customization',
        productid: 137893137
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(4).jpg',
        username: 'Alesdro Guitto',
        servicename: 'Dashboard Design',
        productid: 235193138
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        username: 'Manbir Sahwny',
        servicename: 'Theme Development',
        productid: 19938917
    },
];

class Recentbuyers extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Recent Buyers</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover thead-light">
                                <thead>
                                    <tr>
                                        <th scope="col">User</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Product ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentbuyers.map((item, i) => (
                                        <tr key={i}>
                                            <td className="ms-table-f-w"> <img src={process.env.PUBLIC_URL + "/" + item.userimg} alt="people" /> {item.username} </td>
                                            <td>{item.servicename}</td>
                                            <td>{item.productid}</td>
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

export default Recentbuyers;