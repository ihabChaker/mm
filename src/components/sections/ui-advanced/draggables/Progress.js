import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

// Progress
const progresslist = [
    { icon: 'devices', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'fingerprint', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'graphic_eq', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
];
class Progress extends Component {
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
                <h6 className="section-title">In Progress</h6>
                <ul className="ms-list ms-droppable ms-sortable-list" ref="sortable">
                    {progresslist.map((item, i) => (
                        <li key={i} className="ms-list-item bordered media" onChange={this.handleOnChange}>
                            <i className="material-icons align-self-center">{item.icon}</i>
                            <div className="media-body">
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Progress;