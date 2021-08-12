import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const addtasktip = (
    <Tooltip>
        Add a Task to this block
    </Tooltip>
); 
class Todobox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            count: 0,
            task: '',
            tasks: [
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                },
                {
                    name: 'Lorem ipsum dolor sit amet',
                    state: false
                }
            ]
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ task: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        if( this.state.task !== '' && this.state.task !== undefined ){
            this.state.tasks.push({ name: this.state.task, state: false })
            this.setState({ tasks: this.state.tasks })
            this.handleClose()
        }
    }
    removeTask(index) {
        if (window.confirm("Are you sure you want to delete this task?")) {
        this.state.tasks.splice(index, 1)
        this.setState({ tasks: this.state.tasks })
        }
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleClose() {
        this.setState({ show: false, task: '' });
    }
    toggleTaskState(item) {
        item.state = !item.state;
        this.setState({ tasks: this.state.tasks })
    }
    render() {
        const tasks = ( this.state.tasks || []).map((item, index) => (
            <li key={index} className={item.state ? 'ms-list-item ms-to-do-task ms-deletable task-complete' : 'ms-list-item ms-to-do-task ms-deletable'}>
                <label className="ms-checkbox-wrap ms-todo-complete">
                    <input type="checkbox" onClick={(e) => this.toggleTaskState(item)} />
                    <i className="ms-checkbox-check" />
                </label>
                <span>{item.name} </span>
                <button className="close" name="removeTask" onClick={event => this.removeTask(index, event)}><i className="flaticon-trash ms-delete-trigger"> </i></button>
            </li>
        )) 
        return (
            <div className="col-xl-6 col-md-12 ms-deletable ms-todo-list">
                <div className="ms-card ms-widget ms-card-fh">
                    <div className="ms-card-header clearfix">
                        <h6 className="ms-card-title">Git tasks</h6>
                        <OverlayTrigger placement="left" overlay={addtasktip}>
                            <button type="button" className="ms-add-task-to-block ms-btn-icon float-right" onClick={this.handleShow}><i className="material-icons text-disabled">add</i></button>
                        </OverlayTrigger>
                    </div>
                    <div className="ms-card-body">
                        <ul className="ms-list ms-task-block">
                            {tasks}
                            {this.state.task &&
                                <li className="ms-list-item ms-to-do-task ms-deletable">
                                    <span>{this.state.task}</span>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                        <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </Link>
                        <Link to="#" className="text-disabled ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete </Link>
                    </div>
                </div>
                <Modal show={this.state.show} className="on-load-modal" onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header className="bg-secondary">
                        <h5 className="modal-title has-icon text-white"> New Task</h5>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form name="sendTask" onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <div className="ms-form-group">
                                <label>Task Title</label>
                                <input type="text" className="form-control" name="task" value={this.state.task} onChange={this.handleChange} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                            <button type="submit" name="addTask" className="btn btn-secondary shadow-none"  >Add Task</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Todobox;