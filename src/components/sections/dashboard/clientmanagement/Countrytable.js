import React, { Component } from 'react';

const countrytable = [
    {
        countryflag: 'assets/img/dashboard/widgets/country-1.jpg',
        entrance: 725,
        bouncerate: 17.24,
        exits: 7.65,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-2.jpg',
        entrance: 890,
        bouncerate: 12.90,
        exits: 9.12,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-3.jpg',
        entrance: 729,
        bouncerate: 20.75,
        exits: 14.29,
    },
    {
        countryflag: 'assets/img/dashboard/widgets/country-4.jpg',
        entrance: 316,
        bouncerate: 32.09,
        exits: 10.99,
    },
];

class Countrytable extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-widget ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Users By Country</h6>
                        <p>Your user base based on country</p>
                    </div>
                    <div className="ms-panel-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Country</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Percentage</th>
                                        <th scope="col">Exits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countrytable.map((item, i) => (
                                        <tr key={i}>
                                            <th scope="row"> <img src={process.env.PUBLIC_URL + "/" + item.countryflag} alt="flags" /></th>
                                            <td>{item.entrance}</td>
                                            <td>{item.bouncerate}%</td>
                                            <td>{item.exits}%</td>
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

export default Countrytable;