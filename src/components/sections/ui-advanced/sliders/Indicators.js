import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const slide = [
    { img: 'assets/img/advance/slider-2-1040x300.jpg' },
    { img: 'assets/img/advance/slider-3-1040x300.jpg' },
    { img: 'assets/img/advance/slider-1-1040x300.jpg' },
];

class Indicators extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Slider with Indicators</h6>
                    </div>
                    <div className="ms-panel-body">
                        <Carousel className="ms-indicator-slider" controls={false}>
                            {slide.map((item, i) => (
                                <Carousel.Item key={i}>
                                    <img className="d-block w-100" src={process.env.PUBLIC_URL+'/'+item.img} alt="slide" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Indicators;