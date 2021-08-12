import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
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
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Login Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="12" className="mb-3" controlId="validationCustom05">
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
                            <Form.Group as={Col} md="12" className="mb-2" controlId="validationCustom06">
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
                                    <input className="form-check-input" type="checkbox" defaultValue/>
                                    <i className="ms-checkbox-check" />
                                </label>
                                <span> Remember Password </span>
                            </div>
                        </div>
                        <Button type="submit" className="mt-4 d-block w-100">Sign In</Button>
                        <p className="mb-0 mt-3">Don't have an account? <Link className="btn-link" to="#">Create an Account</Link> </p>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;