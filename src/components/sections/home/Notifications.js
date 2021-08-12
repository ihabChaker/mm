import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const notificationblock = [
    {
        title: 'Doctors',
        count: 4567,
        icon: 'stethoscope'
    },
    {
        title: 'Nurses',
        count: 4567,
        icon: 'user-plus'
    },
    {
        title: 'Patients',
        count: 4567,
        icon: 'wheelchair'
    },
    {
        title: 'Pharmacists',
        count: 4567,
        icon: 'briefcase-medical'
    },
];

class Notifications extends Component {
    render() {
        return (
            <Fragment>
                {notificationblock.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6 col-sm-6">
                        <Link to="#">
                            <div className="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
                                <div className="ms-card-body media">
                                    <div className="media-body">
                                        <h6 className="bold">{item.title}</h6>
                                        <p className="ms-card-change"> {item.count}</p>
                                    </div>
                                </div>
                                <i className={"ms-icon-mr fas fa-" + item.icon + ""} />
                            </div>
                        </Link>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Notifications;