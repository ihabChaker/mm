import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const portfolio = [
    {
        photo: 'assets/img/portfolio/gallery-3-700x270.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: 'assets/img/portfolio/gallery-1-700x540.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: 'assets/img/portfolio/gallery-2-700x540.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: 'assets/img/portfolio/gallery-2-700x270.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: 'assets/img/portfolio/gallery-1-700x270.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
    {
        photo: 'assets/img/portfolio/gallery-3-700x540.jpg',
        name: "Minimal Cup with Coffee",
        desc: "Portfolio - Showcase",
    },
]
class Minimal extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Minimal Portfolio</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="ms-portfolio ms-portfolio-minimal card-columns">
                        {portfolio.map((item, i) => (
                            <Link key={i} className="card ms-portfolio-item" to="#">
                                <img src={process.env.PUBLIC_URL + "/" + item.photo} alt="Card" />
                                <div className="ms-portfolio-item-content">
                                    <h4>{item.name}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Minimal;