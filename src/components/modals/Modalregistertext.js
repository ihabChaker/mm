import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const slide = [
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
    { title: 'Welcome Back!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper ligula, nec scelerisque eros. Curabitur vitae erat ac eros accumsan commodo.' },
];

function Modalregistertext() {
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
                        <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/prebuilt-pages/default-login">Login</Link> </p>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default Modalregistertext;