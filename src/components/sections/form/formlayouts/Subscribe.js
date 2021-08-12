import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function Subscribe() {
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
        <div className="col-md-12">
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                    <h6>Subscribe Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} className="clearfix" onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} xl="6" md="6" className="mb-0" controlId="validationCustom25">
                                <Form.Label>Full Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide full name</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} xl="6" md="6" className="mb-0" controlId="validationCustom26">
                                <Form.Label>Email Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide an email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="w-100 d-block">Subscribe Now</Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Subscribe;