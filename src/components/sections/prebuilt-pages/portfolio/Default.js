import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const portfolio = [
    { 
        photo: 'assets/img/portfolio/gallery-1-700x270.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: 'assets/img/portfolio/gallery-1-700x540.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: 'assets/img/portfolio/gallery-2-700x540.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: 'assets/img/portfolio/gallery-2-700x270.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: 'assets/img/portfolio/gallery-3-700x270.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
    {
        photo: 'assets/img/portfolio/gallery-3-700x540.jpg',
        title: "Minimal Cup with Coffee",
        likes: "(950)",
        comments: "(150)",
    },
]
class Default extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Default Portfolio</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="ms-portfolio card-columns">
                        {portfolio.map((item, i) => (
                            <Link key={i} className="card ms-portfolio-item" to="#">
                                <img src={process.env.PUBLIC_URL + "/" + item.photo} alt="Card" />
                                <div className="ms-portfolio-item-content">
                                    <h4>{item.title}</h4>
                                    <div className="item-content-inner">
                                        <span> <i className="material-icons">thumb_up</i> {item.likes} </span>
                                        <span> <i className="material-icons">chat_bubble</i> {item.comments} </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;