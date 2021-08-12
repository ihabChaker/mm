import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const addtasktip = (
    <Tooltip>
        Add a Task to this block
    </Tooltip>
);

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            task: '',
            tasktitle: '',
            lastActiveBox: -1,
            taskbox: [
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
                {
                    maintitle: 'Task Block Title',
                    tasklist: [
                        { title: 'Task to do', state: false },
                        { title: 'Task to do', state: false },
                    ]
                },
            ]
        }
        // Task box
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // task list
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this)
        this.handleSubmitTask = this.handleSubmitTask.bind(this)
    }
    // Task box
    handleChange(event) {
        this.setState({ tasktitle: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.tasktitle !== '' && this.state.tasktitle !== undefined) {
            this.state.taskbox.unshift({ maintitle: this.state.tasktitle, tasklist: [] })
            this.setState({ taskbox: this.state.taskbox })
        }
        this.setState({ tasktitle: '' })
    }
    removeTaskbox(index) {
        if (window.confirm("Are you sure you want to delete this task box?")) {
            this.state.taskbox.splice(index, 1)
            this.setState({ taskbox: this.state.taskbox })
        }
    }
    // Task list
    handleChangeTask(event) {
        this.setState({ task: event.target.value })
    }
    handleSubmitTask(e) {
        e.preventDefault();
        if (this.state.task !== '' && this.state.task !== undefined) {
            this.state.taskbox[this.state.lastActiveBox].tasklist.push({ title: this.state.task, state: false })
            this.setState({ tasklist: this.state.taskbox[this.state.lastActiveBox].tasklist })
        }
        this.setState({ show: false, task: '' })
    }
    removeTask(i) {
        if (window.confirm("Are you sure you want to delete this task?")) {
            this.state.taskbox[i].tasklist.splice(i, 1)
            this.setState({ tasklist: this.state.taskbox[i].tasklist })
        }
    }
    // Modal
    handleShow(index) {
        this.setState({ show: true, lastActiveBox: index });
    }
    handleClose() {
        this.setState({ show: false });
    }
    // taskstate
    toggleTaskState(task) {
        task.state = !task.state;
        this.setState({ tasklist: this.state.taskbox.tasklist })
    }

    render() {
        // task list
        this.state.taskbox.tasklist || [].map((task, i) => (
            <li key={i} className={task.state ? 'ms-list-item ms-to-do-task ms-deletable task-complete' : 'ms-list-item ms-to-do-task ms-deletable'}>
                <label className="ms-checkbox-wrap ms-todo-complete">
                    <input type="checkbox" onClick={(e) => this.toggleTaskState(task)} />
                    <i className="ms-checkbox-check" />
                </label>
                <span> {task.title} </span>
                <button type="submit" className="close" onClick={event => this.removeTask(i, event)}><i className="flaticon-trash ms-delete-trigger"> </i></button>
            </li>
        ))
        // task box
        const taskbox = (this.state.taskbox || []).map((taskBox, index) => (
            <div key={index} className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                <div className="ms-card">
                    <div className="ms-card-header clearfix">
                        <h6 className="ms-card-title">{taskBox.maintitle}</h6>
                        <OverlayTrigger placement="left" overlay={addtasktip}>
                            <button className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled" onClick={(e) => this.handleShow(index)}>add</i> </button>
                        </OverlayTrigger>
                    </div>
                    <div className="ms-card-body">
                        <ul className="ms-list ms-task-block">
                            {/* task list */}
                            {taskBox.tasklist.map((task, i) => (
                                <li key={i} className={task.state ? 'ms-list-item ms-to-do-task ms-deletable task-complete' : 'ms-list-item ms-to-do-task ms-deletable'}>
                                    <label className="ms-checkbox-wrap ms-todo-complete">
                                        <input type="checkbox" onClick={(e) => this.toggleTaskState(task)} />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> {task.title} </span>
                                    <button type="submit" className="close" onClick={e => this.removeTask(i, e)}><i className="flaticon-trash ms-delete-trigger"> </i></button>
                                </li>
                            ))}
                            {this.state.task && this.state.lastActiveBox === index ?
                                <li className='ms-list-item ms-to-do-task ms-deletable'>
                                    <label className="ms-checkbox-wrap ms-todo-complete">
                                        <input type="checkbox" />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> {this.state.task} </span>
                                    <button type="submit" className="close"><i className="flaticon-trash ms-delete-trigger"> </i></button>
                                </li> : ''
                            }
                        </ul>
                    </div>
                    <div className="ms-card-footer clearfix">
                        <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </Link>
                        <Link to="#" className="text-disabled  ms-delete-trigger float-right" onClick={event => this.removeTaskbox(index, event)}> <i className="flaticon-trash"> </i> Delete </Link>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-body">
                                <div className="row">
                                    <div className="col-xl-3 col-md-12">
                                        <form className="ms-add-task-block-2" onSubmit={this.handleSubmit}>
                                            <div className="form-group d-flex m-0 fs-14 clearfix">
                                                <input type="text" className="form-control mr-2 fs-14 float-left" name="tasktitle" value={this.state.tasktitle} onChange={this.handleChange} />
                                                <button type="submit" className="ms-btn-icon bg-primary float-right"><i className="material-icons text-disabled">add</i></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-xl-4 col-md-6">
                                        <ul className="ms-todo-options">
                                            <li><Link to="#" className="ms-text-primary"> All Tasks </Link></li>
                                            <li><Link to="#" className="text-disabled"> Completed </Link></li>
                                            <li><Link to="#" className="text-disabled"> Archived </Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <ul className="ms-todo-options ms-todo-nav">
                                            <li><Link to="#" className="ms-text-warning"> <i className="material-icons">playlist_add_check</i> Remove Completed </Link></li>
                                            <li><Link to="#" className="ms-text-danger"> <i className="material-icons">delete</i> Clear All </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ms-todo-list">
                    {this.state.tasktitle &&
                        <div className="col-xl-4 col-md-6 col-sm-12 ms-deletable">
                            <div className="ms-card">
                                <div className="ms-card-header clearfix">
                                    <h6 className="ms-card-title">{this.state.tasktitle}</h6>
                                    <OverlayTrigger placement="left" overlay={addtasktip}>
                                        <button className="ms-add-task-to-block ms-btn-icon float-right"> <i className="material-icons text-disabled">add</i> </button>
                                    </OverlayTrigger>
                                </div>
                                <div className="ms-card-body">
                                    <ul className="ms-list ms-task-block">

                                    </ul>
                                </div>
                                <div className="ms-card-footer clearfix">
                                    <Link to="#" className="text-disabled mr-2"> <i className="flaticon-archive"> </i> Archive </Link>
                                    <Link to="#" className="text-disabled ms-delete-trigger float-right"> <i className="flaticon-trash"> </i> Delete </Link>
                                </div>
                            </div>
                        </div>
                    }
                    {taskbox}
                </div>
                <Modal show={this.state.show} className="on-load-modal" onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header className="bg-secondary">
                        <h5 className="modal-title has-icon text-white"> New Task</h5>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form name="sendTask" onSubmit={this.handleSubmitTask}>
                        <Modal.Body>
                            <div className="ms-form-group">
                                <label>Task Title</label>
                                <input type="text" className="form-control" name="task" value={this.state.task} onChange={this.handleChangeTask} />
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

export default Content;