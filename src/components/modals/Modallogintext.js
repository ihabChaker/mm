import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const slide = [
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
];

function Modallogintext() {
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
        <div className="ms-auth-container">
            <div className="ms-auth-col">
                <div className="ms-auth-bg">
                    <Carousel className="ms-auth-slider ms-indicator-slider" controls={false}>
                        {slide.map((item, i) => (
                            <Carousel.Item key={i}>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="ms-auth-col">
                <div className="ms-auth-form">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h1>Login to Account</h1>
                        <p>Please enter your email and password to continue</p>
                        <Form.Group className="mb-3" controlId="validationCustom01">
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
                        <Form.Group className="mb-2" controlId="validationCustom02">
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
                            <span> Remember Password </span>
                            <Form.Label className="d-block mt-3">
                                <Link to="#" className="btn-link">Forgot Password?</Link>
                            </Form.Label>
                        </Form.Group>
                        <Button type="submit" className="mt-4 d-block w-100">Sign In</Button>
                        <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/prebuilt-pages/default-register">Create Account</Link> </p>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default Modallogintext;