import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const cardblock = [
    { img: 'assets/img/basic/card-1.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-2.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-3.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-4.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
]

class Imagewithbutton extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-12">
                    <h2 className="section-title">Image Card with Button</h2>
                </div>
                {cardblock.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                        <div className="ms-card">
                            <div className="ms-card-img">
                                <img src={process.env.PUBLIC_URL+'/'+item.img} alt="card_img" />
                            </div>
                            <div className="ms-card-body">
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                                <Link to="#" className="btn btn-primary btn-block">Learn More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        );
    }
}

export default Imagewithbutton;