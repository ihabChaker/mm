import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function Checkout() {
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
                    <h6>Checkout Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} className="clearfix" onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom16">
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
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom17">
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
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom18">
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
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom19">
                                <Form.Label>Phone Number</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Phone Number"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a number.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom20">
                                <Form.Label>Country</Form.Label>
                                <InputGroup>
                                    <Form.Control as="select">
                                        <option value>01</option>
                                        <option value>02</option>
                                        <option value>03</option>
                                        <option value>04</option>
                                        <option value>05</option>
                                        <option value>06</option>
                                        <option value>07</option>
                                        <option value>08</option>
                                        <option value>09</option>
                                        <option value>10</option>
                                        <option value>11</option>
                                        <option value>12</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Please select a Country.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom21">
                                <Form.Label>State</Form.Label>
                                <InputGroup>
                                    <Form.Control as="select">
                                        <option value>2020</option>
                                        <option value>2021</option>
                                        <option value>2022</option>
                                        <option value>2023</option>
                                        <option value>2024</option>
                                        <option value>2025</option>
                                        <option value>2026</option>
                                        <option value>2027</option>
                                        <option value>2028</option>
                                        <option value>2029</option>
                                        <option value>2030</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Please select a State.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom22">
                                <Form.Label>City</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="City"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a city.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom23">
                                <Form.Label>Zip code</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Zip code"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide a ZIP.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" className="mb-0" controlId="validationCustom24">
                                <Form.Label>Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Address"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide an Address.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="d-block float-right">Save and Continue</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;