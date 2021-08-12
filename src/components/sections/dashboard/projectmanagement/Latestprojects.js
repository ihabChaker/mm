import React, { Component } from 'react';
import { Dropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const projects = [
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/employee-list/employee-(3).jpg',
        time: '30 seconds ago',
        title: 'This is a project name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-1.jpg',
        likes: 982,
        comments: 785
    },
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/employee-list/employee-(7).jpg',
        time: '30 seconds ago',
        title: 'This is a project name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-2.jpg',
        likes: 982,
        comments: 785
    },
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/employee-list/employee-(6).jpg',
        time: '30 seconds ago',
        title: 'This is a project name',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-3.jpg',
        likes: 982,
        comments: 785
    },
];

class Latestprojects extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Latest Projects</h6>
                        <p>Some of your latest works</p>
                    </div>
                    <div className="ms-panel-body">
                        <div className="row">
                            {projects.map((item, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="ms-card">
                                        <div className="ms-card-body">
                                            <div className="media fs-14">
                                                <div className="mr-2 align-self-center">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.userimg} className="ms-img-round" alt="people" />
                                                </div>
                                                <div className="media-body">
                                                    <h6>{item.username}</h6>
                                                    <Dropdown className="dropdown float-right">
                                                        <Dropdown.Toggle as={NavLink} className="p-0 toggle-icon-none"><i className="material-icons">more_vert</i></Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu-right">
                                                            <li className="ms-dropdown-list">
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Comment</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Share</span>
                                                                    </div>
                                                                </Link>
                                                                <Link className="media p-2" to="#">
                                                                    <div className="media-body">
                                                                        <span>Favorite</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <p className="fs-12 my-1 text-disabled">{item.time}</p>
                                                </div>
                                            </div>
                                            <h6>{item.title}</h6>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="ms-card-img">
                                            <img src={process.env.PUBLIC_URL + "/" + item.postimg} alt="card_img" />
                                        </div>
                                        <div className="ms-card-footer text-disabled d-flex">
                                            <div className="ms-card-options">
                                                <i className="material-icons">favorite</i> {item.likes}
                                            </div>
                                            <div className="ms-card-options">
                                                <i className="material-icons">comment</i> {item.comments}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Latestprojects;