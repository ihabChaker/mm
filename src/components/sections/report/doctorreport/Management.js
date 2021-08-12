import React, { Component, Fragment } from 'react';

const managementbar = [
    {
        title: 'OPD',
        percent: 25
    },
    {
        title: 'NEW PATIENT',
        percent: 50
    },
    {
        title: 'LABORATORY TEST',
        percent: 75
    },
    {
        title: 'TREATMENT',
        percent: 100
    },
    {
        title: 'DISCHARGE',
        percent: 75
    },
];

class Management extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header header-mini">
                    <div className="d-flex justify-content-between">
                        <h6>Hospital Management</h6>
                    </div>
                </div>
                <div className="ms-panel-body">
                    {managementbar.map((item, i) => (
                        <Fragment key={i}>
                            <h6>{item.title}</h6>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ "width": (item.percent) + '%' }} aria-valuenow={item.percent} aria-valuemin={0} aria-valuemax={100}>{item.percent}%</div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

export default Management;