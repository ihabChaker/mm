import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav, Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar';

import people5 from '../../../../assets/img/dashboard/employee-list/employee-(1).jpg';

// Chats
const singlechat = [
    {
        img: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        notification: 3,
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '2 Hours ago',
        away: true,
        online: false,
        offline: false,
        busy: false,
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(3).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '3 Hours ago',
        away: false,
        online: true,
        offline: false,
        busy: false,
    }
    ,
    {
        img: 'assets/img/dashboard/employee-list/employee-(4).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '12 Hours ago',
        away: false,
        online: false,
        offline: true,
        busy: false,
    }
    ,
    {
        img: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: 'Yesterday',
        away: false,
        online: false,
        offline: false,
        busy: true,
    }
    ,
    {
        img: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '3 Days ago',
        away: false,
        online: true,
        offline: false,
        busy: false,
    }
    ,
    {
        img: 'assets/img/dashboard/employee-list/employee-(6).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '3 Days ago',
        away: false,
        online: true,
        offline: false,
        busy: false,
    }
    ,
    {
        img: 'assets/img/dashboard/employee-list/employee-(7).jpg',
        notification: '',
        name: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        recivetime: '3 Days ago',
        away: false,
        online: true,
        offline: false,
        busy: false,
    }
];
const groupchat = [
    {
        img: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        name: 'James Zathila',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        moreuser: [
            {
                img: 'assets/img/dashboard/employee-list/employee-(2).jpg',
            },
            {
                img: 'assets/img/dashboard/employee-list/employee-(3).jpg',
            },
            {
                img: 'assets/img/dashboard/employee-list/employee-(4).jpg',
            },
        ],
        totaluser: '+ 12 more'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        name: 'Raymart Sandiago',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        moreuser: [
            {
                img: 'assets/img/dashboard/employee-list/employee-(6).jpg',
            },
            {
                img: 'assets/img/dashboard/employee-list/employee-(7).jpg',
            },
        ],
        totaluser: ''
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(8).jpg',
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc',
        moreuser: [
            {
                img: 'assets/img/dashboard/employee-list/employee-(1).jpg',
            },
            {
                img: 'assets/img/dashboard/employee-list/employee-(2).jpg',
            },
            {
                img: 'assets/img/dashboard/employee-list/employee-(3).jpg',
            },
        ],
        totaluser: '+ 4 more'
    },
];
const contactschat = [
    {
        img: 'assets/img/dashboard/employee-list/employee-(4).jpg',
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        name: 'Raymart Sandiago',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(6).jpg',
        name: 'Micheal John',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(7).jpg',
        name: 'Heather Brown',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(8).jpg',
        name: 'Mila Freign',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
    {
        img: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        name: 'James Zathila',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc'
    },
];
class Sidebar extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-body py-3 px-0">
                        <div className="ms-chat-container">
                            <div className="ms-chat-header px-3">
                                <div className="ms-chat-user-container media clearfix">
                                    <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                        <img src={people5} className="ms-img-round" alt="people" />
                                    </div>
                                    <div className="media-body ms-chat-user-info mt-1">
                                        <h6>John Doe</h6>
                                        <Dropdown>
                                            <Dropdown.Toggle as={NavLink} className="text-disabled has-chevron fs-12 p-0">
                                                Available
              </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <ul>
                                                    <li className="ms-dropdown-list">
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Busy</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Away</span>
                                                            </div>
                                                        </Link>
                                                        <Link className="media p-2" to="#">
                                                            <div className="media-body">
                                                                <span>Offline</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <form className="ms-form my-3" method="post">
                                    <div className="ms-form-group my-0 mb-0 has-icon fs-14">
                                        <input type="search" className="ms-form-input w-100" name="search" placeholder="Search for People and Groups" />
                                        <i className="flaticon-search text-disabled" />
                                    </div>
                                </form>
                            </div>
                            <div className="ms-chat-body">
                                <Tab.Container defaultActiveKey="chats">
                                    <Nav variant="tabs" className="nav nav-tabs tabs-bordered d-flex nav-justified px-3">
                                        <Nav.Item>
                                            <Nav.Link eventKey="chats">Chats</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="groups">Groups</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="chats">
                                            <Scrollbar className="ms-scrollable">
                                                {singlechat.length > 0 ? singlechat.map((item, index) => (
                                                    <li key={index} className="ms-chat-user-container ms-open-chat ms-deletable p-3 media clearfix">
                                                        {
                                                            item.away === true ?
                                                                <div className="ms-chat-status ms-status-away ms-has-new-msg ms-chat-img mr-3 align-self-center">
                                                                    {
                                                                        item.notification > 0 || item.notification !== '' ? <span className="msg-count">{item.notification}</span> : ''
                                                                    }
                                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                                </div>
                                                                : ''
                                                        }
                                                        {
                                                            item.online === true ?
                                                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                                                    {
                                                                        item.notification > 0 || item.notification !== '' ? <span className="msg-count">{item.notification}</span> : ''
                                                                    }
                                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                                </div>
                                                                : ''
                                                        }
                                                        {
                                                            item.offline === true ?
                                                                <div className="ms-chat-status ms-status-offline ms-chat-img mr-3 align-self-center">
                                                                    {
                                                                        item.notification > 0 || item.notification !== '' ? <span className="msg-count">{item.notification}</span> : ''
                                                                    }
                                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                                </div>
                                                                : ''
                                                        }
                                                        {
                                                            item.busy === true ?
                                                                <div className="ms-chat-status ms-status-busy ms-chat-img mr-3 align-self-center">
                                                                    {
                                                                        item.notification > 0 || item.notification !== '' ? <span className="msg-count">{item.notification}</span> : ''
                                                                    }
                                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                                </div>
                                                                : ''
                                                        }
                                                        <div className="media-body ms-chat-user-info mt-1">
                                                            <h6>{item.name}</h6> <span className="ms-chat-time">{item.recivetime}</span>
                                                            <p>{item.message}</p>
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={NavLink} className="ms-hoverable-dropdown toggle-icon-none">
                                                                    <i className="material-icons">more_vert</i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                                                    <ul>
                                                                        <li className="ms-dropdown-list">
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Archive</span>
                                                                                </div>
                                                                            </Link>
                                                                            <Link className="media p-2" to="#">
                                                                                <div className="media-body">
                                                                                    <span>Pin</span>
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
                                                        </div>
                                                    </li>
                                                )) : <li className="ms-chat-user-container ms-open-chat p-3 media clearfix justify-content-center">No chats available</li>}
                                            </Scrollbar>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="groups">
                                            <Scrollbar className="ms-scrollable">
                                                {groupchat.map((item, i) => (
                                                    <li key={i} className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                        <div className="ms-chat-img mr-3 align-self-center">
                                                            <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                        </div>
                                                        <div className="media-body ms-chat-user-info mt-1">
                                                            <h6>{item.name}</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                            <p>{item.text}</p>
                                                            <ul className="ms-group-members clearfix mt-3 mb-0">
                                                                {item.moreuser.map((user, i) => (
                                                                    <li key={i}> <img src={process.env.PUBLIC_URL + "/" + user.img} alt="member" /> </li>
                                                                ))}
                                                                {
                                                                    item.totaluser > 0 || item.totaluser !== '' ? <li className="ms-group-count"> {item.totaluser} </li> : ''
                                                                }
                                                            </ul>
                                                        </div>
                                                    </li>
                                                ))}
                                            </Scrollbar>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="contacts">
                                            <Scrollbar className="ms-scrollable">
                                                {contactschat.map((item, i) => (
                                                    <li key={i} className="ms-chat-user-container ms-open-chat p-3 media clearfix">
                                                        <div className="ms-chat-img mr-3 align-self-center">
                                                            <img src={process.env.PUBLIC_URL + "/" + item.img} className="ms-img-round" alt="people" />
                                                        </div>
                                                        <div className="media-body ms-chat-user-info mt-1">
                                                            <h6>{item.name}</h6> <Link to="#" className="ms-chat-time"> <i className="flaticon-chat" /> </Link>
                                                            <p>{item.text}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </Scrollbar>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;