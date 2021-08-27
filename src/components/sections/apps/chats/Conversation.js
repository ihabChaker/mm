import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import userimg from '../../../../assets/img/dashboard/employee-list/employee-(5).jpg';
import axios from "axios"
import { requestFirebaseNotificationPermission, onMessageListener } from "../../../../firebase/firebaseInit"
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

export default function () {
    const [token, settoken] = useState("")

    const [file, setfile] = useState("")
    const fileChangeHandler = (e) => {
        setfile(e.target.files[0])
    }
    requestFirebaseNotificationPermission()
        .then((firebaseToken) => {
            // eslint-disable-next-line no-console
            // console.log(firebaseToken);
            settoken(firebaseToken)
        })
        .catch((err) => {
            return err;
        });


    // window.addEventListener('focus', () => {
    //     console.log("focused again")
    //     axios.post("http://localhost:5000/v1/message/get-messages", { discussionId: users.reciverUserId > users.currentUserId ? users.reciverUserId + users.currentUserId : users.currentUserId + users.reciverUserId }, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(result => {

    //         setchats([...result.data.message])
    //     }).catch(err => {
    //         console.log(err.message)
    //     })
    // });
    const [users, setusers] = useState({ currentUserId: 1, reciverUserId: 2 })

    const [chats, setchats] = useState([])
    const scrollBarReff = useRef(null)
    onMessageListener()
        .then((payload) => {
            console.log(payload)
            setchats([...chats, {
                userImg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
                userId: 2,
                time: '10:44 pm',
                message: payload.notification.body
            }])
            const { title, body } = payload.data;
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        });


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
                <input id="id-user" placeholder="current user" onChange={e => {
                    setusers({ ...users, currentUserId: e.target.value })
                }} />
                <input id="id-destination" placeholder="destination user" onChange={e => {
                    setusers({ ...users, reciverUserId: e.target.value })

                }} />
                <button onClick={e => {
                    console.log(users.reciverUserId > users.currentUserId ? users.reciverUserId + users.currentUserId : users.currentUserId + users.reciverUserId)
                    axios.post("http://localhost:5000/v1/message/get-messages", { discussionId: users.reciverUserId > users.currentUserId ? users.reciverUserId + users.currentUserId : users.currentUserId + users.reciverUserId }, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(result => {
                        console.log(result.data)

                        setchats([...result.data.message])
                    }).catch(err => {
                        console.log(err.message)
                    })
                }}>charge chat </button>
                <button onClick={e => {
                    axios.post("http://localhost:5000/v1/auth/subscribe", { token, id: users.currentUserId }, {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(result => {
                        console.log(result)
                    }).catch(err => {
                        console.log(err)
                    })
                }}>save token </button>

                <Scrollbar className="ms-panel-body ms-scrollable" containerRef={ref => scrollBarReff.current = ref} >
                    {chats.map((item, i) => (
                        <div key={i} className={item.userId == users.currentUserId ? 'ms-chat-bubble ms-chat-message media clearfix ms-chat-outgoing' : 'ms-chat-bubble ms-chat-message media clearfix ms-chat-incoming'}>
                            {i === 0 || (i !== 0 && chats[i - 1].userId != item.userId) ? <div className="ms-chat-status ms-status-online ms-chat-img">
                                <img src={process.env.PUBLIC_URL + "/" + item.userImg} className="ms-img-round" alt="people" />
                            </div> : ''}
                            <div className="media-body">
                                <div className="ms-chat-text">
                                    <p> {item.message}</p>
                                    {item.filePath ? <p> <a href={item.filePath} download>{item.filePath.split("/").pop()}</a></p> : <span></span>}

                                </div>
                                {i === chats.length - 1 || (i + 1 <= chats.length - 1 && chats[i + 1].userId !== item.userId) ? <p className="ms-chat-time">{item.time}</p> : ''}
                            </div>
                        </div>
                    ))}
                </Scrollbar>
                <div className="ms-panel-footer p-4">
                    <div className="ms-chat-textbox">
                        <ul className="ms-list-flex mb-0">
                            <li className="ms-chat-vn"><i className="material-icons fa-flip-horizontal" onClick={(e) => {
                                const input = document.querySelector("#message-input")
                                setchats([...chats, {
                                    userImg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
                                    userId: users.currentUserId,
                                    time: '10:44 pm',
                                    message: input.value,

                                }])
                                const formData = new FormData()
                                if (file != "") formData.append("file", file)
                                formData.append("message", input.value)
                                formData.append("time", '10:44 pm')
                                formData.append("userId", users.currentUserId)
                                formData.append("reciverUserId", users.reciverUserId)
                                formData.append("discussionId", users.reciverUserId > users.currentUserId ? users.reciverUserId + users.currentUserId : users.currentUserId + users.reciverUserId)
                                formData.append("userImg", 'assets/img/dashboard/employee-list/employee-(2).jpg')
                                axios.post("http://localhost:5000/save", formData, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                }).then(result => {
                                    console.log(result)
                                }).catch(err => {
                                    console.log(err)
                                })
                                input.value = ""
                                console.log(scrollBarReff)
                                scrollBarReff.current.scrollTop = scrollBarReff.current.scrollHeight
                            }}>send</i> </li>
                            <li className="ms-chat-input">
                                <input type="text" name="msg" placeholder="Enter Message" id="message-input" />
                                <input type="file" name="file" onChange={fileChangeHandler} />
                            </li>
                            <ul className="ms-chat-text-controls ms-list-flex">
                                <li> <i className="material-icons">tag_faces</i> </li>
                                <li> <i className="material-icons">attach_file</i>  </li>
                                <li> <i className="material-icons">camera_alt</i> </li>
                                <li ><i className="material-icons">mic</i> </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}


