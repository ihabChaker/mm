import React, { Component } from 'react';

class Checkboxes extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Checkboxes</h6>
                    </div>
                    <div className="ms-panel-body">
                        <p className="ms-directions">Use <code>.ms-checkbox-{'{'}state{'}'}</code> in <code>.ms-checkbox-wrap</code></p>
                        <form>
                            <ul className="ms-list d-flex">
                                <li className="ms-list-item pl-0">
                                    <label className="ms-checkbox-wrap">
                                        <input type="checkbox" defaultValue />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> Normal </span>
                                </li>
                                <li className="ms-list-item">
                                    <label className="ms-checkbox-wrap">
                                        <input type="checkbox" defaultValue defaultChecked />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> Checked </span>
                                </li>
                                <li className="ms-list-item">
                                    <label className="ms-checkbox-wrap">
                                        <input type="checkbox" defaultValue disabled defaultChecked />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> Disabled </span>
                                </li>
                            </ul>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="ms-list ms-list-display">
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-primary">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Primary </span>
                                        </li>
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-secondary">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Secondary </span>
                                        </li>
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-success">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Success </span>
                                        </li>
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-danger">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Danger </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="ms-list ms-list-display">
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-warning">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Warning </span>
                                        </li>
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-info">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
                                            </label>
                                            <span> Info </span>
                                        </li>
                                        <li>
                                            <label className="ms-checkbox-wrap ms-checkbox-dark">
                                                <input type="checkbox" defaultValue defaultChecked />
                                                <i className="ms-checkbox-check" />
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

export default Checkboxes;