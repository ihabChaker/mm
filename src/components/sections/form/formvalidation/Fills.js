import React, { useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function Fills() {
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
        <div className="ms-panel">
            <div className="ms-panel-header">
                <h6>Validation with Fills</h6>
            </div>
            <div className="ms-panel-body">
                <p className="ms-directions">Use <code>.validation-fill</code> in <code>.needs-validation</code></p>
                <Form noValidate validated={validated} className="validation-fill" onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom07">
                            <Form.Label>First name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="John"
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom08">
                            <Form.Label>Last name</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Doe"
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom09">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="validationCustom10">
                            <Form.Label>City</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="City"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="3" className="mb-3" controlId="validationCustom11">
                            <Form.Label>State</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="State"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a valid State.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="3" className="mb-3" controlId="validationCustom12">
                            <Form.Label>Zip</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Zip"
                                />
                                <Form.Control.Feedback type="invalid">Please provide a valid Zip.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <div className="form-check pl-0">
                            <label className="ms-checkbox-wrap">
                                <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
                                <i className="ms-checkbox-check" />
                            </label>
                            <span> Agree to terms and conditions </span>
                        </div>
                    </Form.Group>
                    <Button type="submit" >Submit form</Button>
                </Form>
            </div>
        </div>
    );
}

export default Fills;