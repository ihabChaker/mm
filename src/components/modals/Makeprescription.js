import React, { useState } from 'react';
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

function Makeprescription() {
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
        <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-bshadow-none">
                <div className="ms-panel-header">
                    <h6>Patient Information</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom01">
                                <Form.Label>Patient Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Patient Name"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom02">
                                <Form.Label>Date Of Birth</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="number"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom03">
                                <Form.Label>Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Add Address"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom04">
                                <Form.Label>Phone no.</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Phone No."
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom05">
                                <Form.Label>Medication</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Acetaminophen"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom06">
                                <Form.Label>Period Of medication</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="4" className="mb-3" controlId="validationCustom07">
                                <Form.Label>Appointment With</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Doctor Name"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" variant="warning" className="mt-4 d-inline w-20 mr-2">Save Prescription</Button>
                        <Button type="button" className="mt-4 d-inline w-20">Save &amp; Print</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Makeprescription;