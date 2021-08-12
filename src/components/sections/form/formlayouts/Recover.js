import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function Recover() {
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
                    <h6>Recover Password Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} className="clearfix" onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} xl="6" md="6" className="mb-0" controlId="validationCustom27">
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Username"
                                    />
                                    <Form.Control.Feedback type="invalid">Please provide username</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} xl="6" md="6" className="mb-0" controlId="validationCustom28">
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
                        <Button type="submit" className="w-100 d-block">Send Request</Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Recover;