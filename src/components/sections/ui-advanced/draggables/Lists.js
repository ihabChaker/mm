import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import Progress from './Progress';

// To do
const todolist = [
    { icon: 'border_color', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
    { icon: 'rss_feed', title: 'Parious Versions has evolved over the years', text: 'It is a long established fact that a reader will be distracted by the content' },
];

class Lists extends Component {
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
                    <h6>Draggable Lists</h6>
                    <p>Drag and Drop Items between both Lists</p>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="section-title">To Do</h6>
                            <ul className="ms-list ms-sortable-list" ref="sortable">
                                {todolist.map((item, i) => (
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
                        <Progress/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;