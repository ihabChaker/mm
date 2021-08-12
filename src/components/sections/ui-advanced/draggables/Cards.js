import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

const cardblock = [
    { img: 'assets/img/basic/card-1.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-2.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-3.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
    { img: 'assets/img/basic/card-4.jpg', title: 'This is a card Title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc velit, dictum eget nulla a, sollicitudin rhoncus orci. Vivamus nec commodo turpis.' },
]

class Cards extends Component {
    // Dragging
    componentDidMount() {
        this.$node = $(this.refs.sortable);
        this.$node.sortable({
            opacity: this.props.opacity,
        });
    }
    shouldComponentUpdate() {
        return false;
    }
    constructor(props) {
        super(props);
        this.state = { isEnabled: true };
    }
    handleOnChange(event, ui) {
        console.log('DOM changed!', event, ui);
    }
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Draggable Cards</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row ms-sortable" ref="sortable">
                        {cardblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6" onChange={this.handleOnChange}>
                                <div className="ms-card">
                                    <div className="ms-card-img">
                                        <img src={process.env.PUBLIC_URL+'/'+item.img} alt="card_img" />
                                    </div>
                                    <div className="ms-card-body">
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;