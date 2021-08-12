import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const tickets = [
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        username: 'Lorem ipsum dolor',
        date: 'February 24, 2021',
        query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
        comment: 16,
        attachment: 3,
        open: true,
        close: false,
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(4).jpg',
        username: 'Lorem ipsum dolor',
        date: 'February 24, 2021',
        query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
        comment: 11,
        attachment: 1,
        open: true,
        close: false,
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        username: 'Lorem ipsum dolor',
        date: 'February 24, 2021',
        query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus lectus a facilisis bibendum. Duis quis convallis sapien ... ',
        comment: 21,
        attachment: 5,
        open: false,
        close: true,
    },
];

class Supporttickets extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6>Recent Support Tickets</h6>
                                <p>Some of the recent support tickets</p>
                            </div>
                            <Link to="#" className="btn btn-primary"> View All</Link>
                        </div>
                    </div>
                    <div className="ms-panel-body p-0">
                        <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                            {tickets.map((item, i) => (
                                <li key={i} className="ms-list-item">
                                    <Link to="#" className="media clearfix">
                                        <img src={process.env.PUBLIC_URL + "/" + item.userimg} className="ms-img-round ms-img-small" alt="This is another feature" />
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h4 className="ms-feed-user mb-0">{item.username}</h4>
                                                {
                                                    item.open === true ? <span className="badge badge-success"> Open </span> : ''
                                                }
                                                {
                                                    item.close === true ? <span className="badge badge-danger"> Closed </span> : ''
                                                }
                                            </div>
                                            <span className="my-2 d-block"> <i className="material-icons">date_range</i> {item.date}</span>
                                            <p className="d-block"> {item.query} </p>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <div className="ms-feed-controls">
                                                    <span>
                                                        <i className="material-icons">chat</i> {item.comment}
                                                    </span>
                                                    <span>
                                                        <i className="material-icons">attachment</i> {item.attachment}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Supporttickets;