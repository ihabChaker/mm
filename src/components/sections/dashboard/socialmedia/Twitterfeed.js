import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const twitterpost = [
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(3).jpg',
        name: 'Rakhan Potik',
        username: 'rakhan45',
        tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
        retweet: '1.9k',
        likes: '2.5k',
        tags: [
            {
                tag: 'design',
            },
            {
                tag: 'article',
            },
            {
                tag: 'interface',
            }
        ]
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(4).jpg',
        name: 'Rakhan Potik',
        username: 'rakhan45',
        tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
        retweet: '1.9k',
        likes: '2.5k',
        tags: [
            {
                tag: 'design',
            },
            {
                tag: 'article',
            },
            {
                tag: 'interface',
            }
        ]
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(1).jpg',
        name: 'Rakhan Potik',
        username: 'rakhan45',
        tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
        retweet: '1.9k',
        likes: '2.5k',
        tags: [
            {
                tag: 'design',
            },
            {
                tag: 'article',
            },
            {
                tag: 'interface',
            }
        ]
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(2).jpg',
        name: 'Rakhan Potik',
        username: 'rakhan45',
        tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
        retweet: '1.9k',
        likes: '2.5k',
        tags: [
            {
                tag: 'design',
            },
            {
                tag: 'article',
            },
            {
                tag: 'interface',
            }
        ]
    },
    {
        userimg: 'assets/img/dashboard/employee-list/employee-(6).jpg',
        name: 'Rakhan Potik',
        username: 'rakhan45',
        tweet: 'Thanks for sharing this awesome article with us, it is truly inspiring and an eye opener',
        retweet: '1.9k',
        likes: '2.5k',
        tags: [
            {
                tag: 'design',
            },
            {
                tag: 'article',
            },
            {
                tag: 'interface',
            }
        ]
    },
];

class Twitterfeed extends Component {
    render() {
        return (
            <div className="col-xl-4 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Twitter Feed</h6>
                    </div>
                    <div className="ms-panel-body p-0">
                        <ul className="ms-list ms-feed ms-twitter-feed">
                            {twitterpost.map((item, i) => (
                                <li key={i} className="ms-list-item">
                                    <div className="media clearfix">
                                        <img src={process.env.PUBLIC_URL + "/" + item.userimg} className="ms-img-round ms-img-small" alt="people" />
                                        <div className="media-body">
                                            <h4 className="ms-feed-user">{item.name}</h4>
                                            <p>@{item.username}</p>
                                            <p>
                                                <Link to="#" className="btn-link">@zurak</Link> {item.tweet}
                                            </p>
                                            <p>
                                                {item.tags.slice(0.3).map((item, i) => (
                                                    <Link key={i} to="#" className="btn-link">#{item.tag}</Link>
                                                ))}
                                            </p>
                                            <div className="ms-feed-controls">
                                                <span>
                                                    <i className="material-icons">reply</i>
                                                </span>
                                                <span>
                                                    <i className="material-icons">repeat</i> {item.retweet}
                                                </span>
                                                <span>
                                                    <i className="material-icons">favorite</i> {item.likes}
                                                </span>
                                            </div>
                                        </div>
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

export default Twitterfeed;