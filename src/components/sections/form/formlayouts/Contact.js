import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function Contact() {
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
                    <h6>Contact Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="clearfix">
                        <Form.Row>
                            <Form.Group as={Col} xl="6" md="12" className="mb-3" controlId="validationCustom07">
                                <Form.Label>Full Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide full name.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} xl="6" md="12" controlId="validationCustom08">
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
                            <Form.Group as={Col} md="12" className="mb-0" controlId="validationCustom09">
                                <Form.Label>Message</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        as="textarea" rows={5}
                                        required
                                        placeholder="Message"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide a valid message.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="float-right">Sign In</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;