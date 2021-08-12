import React, { Component } from 'react';

const facebookfeed = [
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(3).jpg',
        name: 'Rakhan Potik',
        postdatetime: '24 January at 9:04 pm',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        postimg: 'assets/img/basic/card-1.jpg',
        likes: 485,
        comment: 48,
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        name: 'Rakhan Potik',
        postdatetime: '24 January at 9:04 pm',
        post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        postimg: 'assets/img/basic/card-2.jpg',
        likes: 485,
        comment: 48,
    },
];

class Facebookfeed extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Facebook Feed</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <ul className="ms-list ms-feed ms-facebook-feed">
                            {facebookfeed.map((item, i) => (
                                <li key={i} className="ms-list-item">
                                    <div className="media clearfix">
                                        <img src={process.env.PUBLIC_URL + "/" + item.userimg} className="ms-img-round ms-img-small" alt="people" />
                                        <div className="media-body">
                                            <h4 className="ms-feed-user">{item.name}</h4>
                                            <p>{item.postdatetime}</p>
                                        </div>
                                    </div>
                                    <p>{item.post}</p>
                                    <img className="ms-fb-feed-img" src={process.env.PUBLIC_URL + "/" + item.postimg} alt="post" />
                                    <div className="d-flex justify-content-between">
                                        <div className="ms-fb-post-meta">
                                            <i className="material-icons">thumb_up</i> <span>{item.likes} likes</span>
                                        </div>
                                        <div className="ms-fb-post-meta">
                                            <span>{item.comment} comments</span>
                                        </div>
                                    </div>
                                    <div className="ms-feed-controls">
                                        <span>
                                            <i className="material-icons">thumb_up</i> Like
                      </span>
                                        <span>
                                            <i className="material-icons">chat_bubble_outline</i> Comment
                      </span>
                                        <span>
                                            <i className="material-icons">share</i> Share
                      </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Facebookfeed;