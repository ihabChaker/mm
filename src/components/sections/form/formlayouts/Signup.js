import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Signup() {
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
        <div className="col-xl-6 col-md-12">
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Signup Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue="John"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue="Doe"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom03">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom04">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <div className="form-group">
                            <div className="form-check pl-0">
                                <label className="ms-checkbox-wrap">
                                    <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" />
                                    <i className="ms-checkbox-check" />
                                </label>
                                <span> Agree to terms and conditions </span>
                            </div>
                        </div>
                        <Button type="submit" className="mt-4 d-block w-100">Create Account</Button>
                        <p className="mb-0 mt-3">Already Have an account? <Link className="btn-link" to="#">Login to Account</Link> </p>
                    </Form>
                </div>
            </div>
        </div>
    )
}
