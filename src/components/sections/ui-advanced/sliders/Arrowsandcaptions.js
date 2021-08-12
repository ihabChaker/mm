import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const slide = [
    { img: 'assets/img/advance/slider-2-1040x300.jpg', title: 'Orange Sunset', text: 'Lorem Ipsum asit dolor kimet' },
    { img: 'assets/img/advance/slider-3-1040x300.jpg', title: 'Purple Skies', text: 'Lorem Ipsum asit dolor kimet' },
    { img: 'assets/img/advance/slider-1-1040x300.jpg', title: 'Night Light', text: 'Lorem Ipsum asit dolor kimet' },
];

class Arrowsandcaptions extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Slider with Arrows and Captions</h6>
                </div>
                <div className="ms-panel-body">
                    <p className="ms-directions">Use <code>interval={'{'}number{'}'}</code> in <code>.carousel</code> to enable autoplay and specify a specific time between each slide</p>
                    <Carousel className="ms-arrow-slider" indicators={false}>
                        {slide.map((item, i) => (
                            <Carousel.Item key={i}>
                                <img className="d-block w-100" src={process.env.PUBLIC_URL+'/'+item.img} alt="Third slide" />
                                <Carousel.Caption className="d-none d-md-block">
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Arrowsandcaptions;