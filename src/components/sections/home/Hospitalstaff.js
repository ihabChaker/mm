import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const stafflist = [
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Anny',
        designation: 'Doctor'
    },
    {
        img: 'assets/img/dashboard/doctor-2.jpg',
        name: 'Jude',
        designation: 'Surgeon'
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Jordan',
        designation: 'Doctor'
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Micheal',
        designation: 'Nurse'
    },
    {
        img: 'assets/img/dashboard/doctor-2.jpg',
        name: 'Rough',
        designation: 'Doctor'
    },
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Lilly',
        designation: 'Surgeon'
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Sameul',
        designation: 'Surgeon'
    },
    {
        img: 'assets/img/dashboard/doctor-4.jpg',
        name: 'Ricky',
        designation: 'Doctor'
    },
    {
        img: 'assets/img/dashboard/doctor-1.jpg',
        name: 'Venus',
        designation: 'Doctor'
    },
    {
        img: 'assets/img/dashboard/doctor-3.jpg',
        name: 'Johan',
        designation: 'Nurse'
    },
];

class Hospitalstaff extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="col-xl-6 col-lg-12">
                <div className="ms-panel">
                    <div className="ms-panel-header d-flex justify-content-between">
                        <h6>Hospital Staff</h6>
                        <div className="ms-slider-arrow">
                            <Link to="#" className="prev-item" onClick={this.previous}>
                                <i className="far fa-caret-square-left" />
                            </Link>
                            <Link to="#" className="next-item" onClick={this.next}>
                                <i className="far fa-caret-square-right" />
                            </Link>
                        </div>
                    </div>
                    <Slider className="ms-panel-body p-0 ms-medical-overview-slider" ref={c => (this.slider = c)}  {...settings}>
                        {stafflist.map((item, i) => (
                            <div key={i} className="ms-crypto-overview">
                                <Link to="#" className="ms-profile">
                                    <img src={process.env.PUBLIC_URL+'/'+item.img} className="ms-img-large ms-img-round ms-user-img mx-auto d-block" alt="people" />
                                    <div className="ms-card-body">
                                        <h5>{item.name}</h5>
                                        <span>{item.designation}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Hospitalstaff;