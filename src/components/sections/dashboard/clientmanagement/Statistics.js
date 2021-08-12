import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const statbox = [
    {
        icon: 'folder',
        title: 'My Products',
        text: 'Manage Products',
        notification: 6
    },
    {
        icon: 'people',
        title: 'My Clients',
        text: 'Manage Users',
        notification: 5
    },
    {
        icon: 'help',
        title: 'Support Tickets',
        text: 'View Tickets',
        notification: 3
    },
    {
        icon: 'graphic_eq',
        title: 'Management',
        text: 'Manage Product',
        notification: 2
    },
];

class Statistics extends Component {
    render() {
        return (
            <Fragment>
                {statbox.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6">
                        <Link to="#">
                            <div className="ms-panel ms-widget ms-panel-hoverable has-border ms-has-new-msg ms-notification-widget">
                                <span className="msg-count">{item.notification}</span>
                                <div className="ms-panel-body media">
                                    <i className="material-icons">{item.icon}</i>
                                    <div className="media-body">
                                        <h6>{item.title}</h6>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Statistics;