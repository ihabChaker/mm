import React, { Component, Fragment } from 'react';
import { Dropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const socialcards = [
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/doctor-1.jpg',
        time: '30 seconds ago',
        title: 'This is a card Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-1.jpg',
        likes: 982,
        comments: 785
    },
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/doctor-3.jpg',
        time: '30 seconds ago',
        title: 'This is a card Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-2.jpg',
        likes: 982,
        comments: 785
    },
    {
        username: 'John Doe',
        userimg: 'assets/img/dashboard/doctor-5.jpg',
        time: '30 seconds ago',
        title: 'This is a card Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.',
        postimg: 'assets/img/basic/card-3.jpg',
        likes: 982,
        comments: 785
    },
];


class Socialcards extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-12">
                    <h2 className="section-title">Social Post Cards</h2>
                </div>
                {socialcards.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-body">
                                <div className="media fs-14">
                                    <div className="mr-2 align-self-center">
                                        <img src={process.env.PUBLIC_URL+'/'+item.userimg} className="ms-img-round" alt="people" />
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
                                <img src={process.env.PUBLIC_URL+'/'+item.postimg} alt="card_img" />
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
            </Fragment>
        );
    }
}

export default Socialcards;