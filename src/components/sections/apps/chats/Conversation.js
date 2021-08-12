import React, { Component } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import userimg from '../../../../assets/img/dashboard/employee-list/employee-(5).jpg';

const phonetip = (
    <Tooltip>
        Call
    </Tooltip>
);
const videotip = (
    <Tooltip>
        Video Call
    </Tooltip>
);
const invitetip = (
    <Tooltip>
        Add to Chat
    </Tooltip>
);
const currentUserId = 1;

const chats = [
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        userId: 1,
        time: '10:33 pm',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        userId: 2,
        time: '10:33 pm',
        message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words"
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        userId: 1,
        time: '10:36 pm',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget orci ex.'
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        userId: 2,
        time: '10:41 pm',
        message: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        userId: 2,
        time: '10:41 pm',
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        userId: 1,
        time: '10:44 pm',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        userImg: 'assets/img/dashboard/employee-list/employee-(5).jpg',
        userId: 2,
        time: '11:01 pm',
        message: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
    },

]
class Conversation extends Component {
    render() {
        return (
            <div className="col-xl-8 col-md-12">
                <div className="ms-panel ms-chat-conversations ms-widget">
                    <div className="ms-panel-header">
                        <div className="ms-chat-header justify-content-between">
                            <div className="ms-chat-user-container media clearfix">
                                <div className="ms-chat-status ms-status-online ms-chat-img mr-3 align-self-center">
                                    <img src={userimg} className="ms-img-round" alt="people" />
                                </div>
                                <div className="media-body ms-chat-user-info mt-1">
                                    <h6>John Doe</h6>
                                    <span className="text-disabled fs-12">
                                        Active Now
                                    </span>
                                </div>
                            </div>
                            <ul className="ms-list ms-list-flex ms-chat-controls">
                                <OverlayTrigger placement="top" overlay={phonetip}>
                                    <li> <i className="material-icons">local_phone</i>
                                    </li>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={videotip}>
                                    <li> <i className="material-icons">videocam</i>
                                    </li>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={invitetip}>
                                    <li> <i className="material-icons">person_add</i>
                                    </li>
                                </OverlayTrigger>
                            </ul>
                        </div>
                    </div>
                    <Scrollbar className="ms-panel-body ms-scrollable">
                        {chats.map((item, i) => (
                            <div key={i} className={item.userId === currentUserId ? 'ms-chat-bubble ms-chat-message media clearfix ms-chat-outgoing' : 'ms-chat-bubble ms-chat-message media clearfix ms-chat-incoming'}>
                                { i === 0 || (i !== 0 && chats[i - 1].userId !== item.userId) ? <div className="ms-chat-status ms-status-online ms-chat-img">
                                    <img src={process.env.PUBLIC_URL + "/" + item.userImg} className="ms-img-round" alt="people" />
                                </div> : ''}
                                <div className="media-body">
                                    <div className="ms-chat-text">
                                        <p> {item.message}</p>
                                    </div>
                                    {i === chats.length - 1 || (i + 1 <= chats.length - 1 && chats[i + 1].userId !== item.userId) ? <p className="ms-chat-time">{item.time}</p> : ''}
                                </div>
                            </div>
                        ))}
                    </Scrollbar>
                    <div className="ms-panel-footer p-4">
                        <div className="ms-chat-textbox">
                            <ul className="ms-list-flex mb-0">
                                <li className="ms-chat-vn"><i className="material-icons">mic</i> </li>
                                <li className="ms-chat-input">
                                    <input type="text" name="msg" placeholder="Enter Message" />
                                </li>
                                <ul className="ms-chat-text-controls ms-list-flex">
                                    <li> <i className="material-icons">tag_faces</i> </li>
                                    <li> <i className="material-icons">attach_file</i> </li>
                                    <li> <i className="material-icons">camera_alt</i> </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conversation;