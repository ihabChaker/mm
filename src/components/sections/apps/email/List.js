import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar';

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emaillist: [
                {
                    img: 'assets/img/dashboard/employee-list/employee-(2).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(4).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: true,
                    attachment: true,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(6).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(8).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(1).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(3).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(5).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: true,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(7).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: false,
                    attachment: false,
                },
                {
                    img: 'assets/img/dashboard/employee-list/employee-(2).jpg',
                    name: 'Jhon Deo',
                    subject: '[WordPress] New Comment',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
                    time: '2 Hours ago',
                    pinned: true,
                    attachment: false,
                }
            ]
        }
    }
    pinnedToggle(item) {
        item.pinned = !item.pinned;
        this.setState({ emaillist: this.state.emaillist })
    }
    render() {
        return (
            <div className="ms-email-content">
                <Scrollbar className="ms-scrollable">
                    {this.state.emaillist.map((item, i) => (
                        <li key={i} className={item.pinned ? 'media ms-email clearfix pinned' : 'media ms-email clearfix'}>
                            <div className="ms-email-controls">
                                <label className="ms-checkbox-wrap">
                                    <input type="checkbox" defaultValue />
                                    <i className="ms-checkbox-check" />
                                </label>
                                <i className="material-icons ms-pin-email" onClick={(e) => this.pinnedToggle(item)}>flag</i>
                            </div>
                            <div className="ms-email-img mr-3 ">
                                <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                            </div>
                            <div className="media-body ms-email-details">
                                <span className="ms-email-sender">{item.name}</span>
                                <h6 className="ms-email-subject">{item.subject}</h6> <span className="ms-email-time">
                                    {
                                        item.attachment === true ? <Link to="#"><i className="material-icons">attachment</i></Link> : ''
                                    }
                                    {item.time}</span>
                                <p className="ms-email-msg">{item.text}</p>
                            </div>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle as={NavLink} className="ms-hoverable-dropdown p-0 toggle-icon-none"><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right">
                                    <ul>
                                        <li className="ms-dropdown-list">
                                            <Link className="media p-2" to="#">
                                                <div className="media-body">
                                                    <span>Mark as read</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2 ms-pin-email" to="#">
                                                <div className="media-body">
                                                    <span>Flag</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="media-body">
                                                    <span>Archive</span>
                                                </div>
                                            </Link>
                                            <Link className="media p-2" to="#">
                                                <div className="media-body">
                                                    <span>Delete</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    ))}
                </Scrollbar>
            </div>
        );
    }
}

export default List;