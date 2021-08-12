import React, { Component } from 'react';

const pageview = [
    { pagename: 'Admin Home', url: 'site.com/admin/', traffic: 7.65, impression: 17.24, positive: true },
    { pagename: 'Crypto Dashboard', url: 'site.com/admin/dashboard/crypto', traffic: 9.12, impression: 12.24, positive: false },
    { pagename: 'Widgets Page', url: 'site.com/admin/widgets', traffic: 14.29, impression: 32.04, positive: true },
    { pagename: 'Buttons Page', url: 'site.com/admin/pages/buttons', traffic: 12.25, impression: 20.75, positive: false },
    { pagename: 'Web Analaytics', url: 'site.com/admin/dashboard/web-analytics', traffic: 4.65, impression: 13.38, positive: true },
];
class Pageviews extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Page Views by Title</h6>
                    <p>Keep track of the pages being viewed</p>
                </div>
                <div className="ms-panel-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover thead-light">
                            <thead>
                                <tr>
                                    <th scope="col">Page Name</th>
                                    <th scope="col">Page URL</th>
                                    <th scope="col">Average Traffic</th>
                                    <th scope="col">Impressions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageview.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.pagename}</td>
                                        <td>{item.url}</td>
                                        <td>{item.traffic}%</td>
                                        {item.positive === true ? <td className="ms-text-success">+{item.impression}%</td> : <td className="ms-text-danger">-{item.impression}%</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pageviews;