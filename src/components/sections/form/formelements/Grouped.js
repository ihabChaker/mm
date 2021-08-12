import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Grouped extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-12">
                <div className="ms-panel ms-panel-fh">
                    <div className="ms-panel-header">
                        <h6>Grouped Elements</h6>
                    </div>
                    <div className="ms-panel-body">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <span className="input-group-text">example@example.com</span>
                                </div>
                            </div>
                            <div className="input-group">
                                <Dropdown className="input-group-prepend">
                                    <Dropdown.Toggle as={Button} className="btn-sm">Dropdown</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Link className="dropdown-item" to="#">Action</Link>
                                        <Link className="dropdown-item" to="#">Another action</Link>
                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                        <div role="separator" className="dropdown-divider" />
                                        <Link className="dropdown-item" to="#">Separated link</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grouped;