import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

// To do
const todolist = [
    { img: 'assets/img/dashboard/doctor-1.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/dashboard/doctor-2.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { img: 'assets/img/dashboard/doctor-3.jpg', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
];

class Withimages extends Component {
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
            <div className="col-md-6">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Sortable List with Images</h6>
                    </div>
                    <div className="ms-panel-body">
                        <ul className="ms-list ms-droppable ms-sortable" ref="sortable">
                            {todolist.map((item, i) => (
                                <li key={i} className="ms-list-item bordered media ms-draggable" onChange={this.handleOnChange}>
                                    <img className="ms-img-round" src={process.env.PUBLIC_URL+'/'+item.img} alt="people" />
                                    <div className="media-body">
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
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

export default Withimages;