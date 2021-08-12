import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function Addform() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel">
                <div className="ms-panel-header ms-panel-custome">
                    <h6>Add Nurse</h6>
                    <Link to="/human-resource/nurse-list" className="ms-text-primary">Nurse List</Link>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
                                <Form.Label>First Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter First Name"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
                                <Form.Label>Last Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Last Name"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom03">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter Email Address"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom04">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Enter Password"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom05">
                                <Form.Label>Mobile</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Mobile No."
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom06">
                                <Form.Label>Picture Upload</Form.Label>
                                <InputGroup>
                                    <Form.File
                                        label="Choose file..."
                                        lang="en"
                                        custom
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom07">
                                <Form.Label>Address</Form.Label>
                                <InputGroup>
                                    <Form.Control as="textarea" placeholder="Add Address" rows={3} />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <ul className="ms-list d-flex">
                                    <li className="ms-list-item pl-0">
                                        <label className="ms-checkbox-wrap">
                                            <input type="radio" name="radioExample" defaultValue />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Active </span>
                                    </li>
                                    <li className="ms-list-item">
                                        <label className="ms-checkbox-wrap">
                                            <input type="radio" name="radioExample" defaultValue defaultChecked />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Inactive </span>
                                    </li>
                                </ul>
                            </Form.Group>
                        </Form.Row>
                        <Button type="reset" variant="warning" className="mt-4 d-inline w-20 mr-2">Reset</Button>
                        <Button type="submit" className="mt-4 d-inline w-20">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Addform;