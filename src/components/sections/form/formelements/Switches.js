import React, { Component } from 'react';

class Switches extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Toggle Switches</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.ms-switch-{'{'}state{'}'}</code> in <code>.ms-switch-slider</code></p>
                        <form>
                            <ul className="ms-list d-flex">
                                <li className="ms-list-item pl-0">
                                    <label className="ms-switch">
                                        <input type="checkbox" />
                                        <span className="ms-switch-slider round" />
                                    </label>
                                    <span> Normal </span>
                                </li>
                                <li className="ms-list-item">
                                    <label className="ms-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="ms-switch-slider round" />
                                    </label>
                                    <span> Checked </span>
                                </li>
                                <li className="ms-list-item">
                                    <label className="ms-switch">
                                        <input type="checkbox" disabled />
                                        <span className="ms-switch-slider round" />
                                    </label>
                                    <span> Disabled </span>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="ms-list ms-list-display">
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-primary round" />
                                            </label>
                                            <span> Primary </span>
                                        </li>
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-secondary round" />
                                            </label>
                                            <span> Secondary </span>
                                        </li>
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-success round" />
                                            </label>
                                            <span> Success </span>
                                        </li>
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-danger round" />
                                            </label>
                                            <span> Danger </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="ms-list ms-list-display">
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-warning round" />
                                            </label>
                                            <span> Warning </span>
                                        </li>
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-info round" />
                                            </label>
                                            <span> Info </span>
                                        </li>
                                        <li>
                                            <label className="ms-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="ms-switch-slider ms-switch-dark round" />
                                            </label>
                                            <span> Dark </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Switches;