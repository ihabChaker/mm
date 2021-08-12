import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

import facebook from '../../../../assets/img/others/facebook.png';
import google from '../../../../assets/img/others/google.png';

function Content(props) {
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
        <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
                <div className="ms-auth-col">
                    <div className="ms-auth-bg" />
                </div>
                <div className="ms-auth-col">
                    <div className="ms-auth-form">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <p>Please enter personal information to continue</p>
                            <Form.Row>
                                <Form.Group as={Col} md="6" className="mb-0" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="John"
                                        />
                                        <Form.Control.Feedback type="valid"> Looks Good.</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="6" className="mb-0" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Deo"
                                        />
                                        <Form.Control.Feedback type="valid"> Looks Good.</Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide a valid email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide a password.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label className="ms-checkbox-wrap">
                                    <input className="form-check-input" type="checkbox" defaultValue />
                                    <i className="ms-checkbox-check" />
                                </Form.Label>
                                <span> Agree to terms and conditions</span>
                            </Form.Group>
                            <Button type="submit" className="mt-4 d-block w-100">Create Account</Button>
                            <span className="d-block text-center my-4">Or</span>
                            <button type="button" className="btn mt-4 d-block w-100 btn-social-login"> <img src={facebook} alt="" /> <span>Signup with Facebook</span> </button>
                            <button type="button" className="btn mt-4 d-block w-100 btn-social-login"> <img src={google} alt="" /> <span>Signup with Google</span> </button>
                            <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/prebuilt-pages/default-login">Login</Link> </p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;