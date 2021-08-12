import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


const statbox = [
    {
        icon: 'email',
        title: 'Email Message',
        text: 'Email App',
        notification: 5
    },
    {
        icon: 'person',
        title: 'Follow Request',
        text: 'User Profile',
        notification: 5
    },
    {
        icon: 'show_chart',
        title: 'New Sales',
        text: 'Sales',
        notification: 3
    },
    {
        icon: 'graphic_eq',
        title: 'Voicemail',
        text: 'Chat App',
        notification: 2
    },
];
class Notifications extends Component {
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

export default Notifications;