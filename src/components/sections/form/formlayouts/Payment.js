import React, { useState } from 'react';
import { Form, Col, InputGroup, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const cvvtip = (
    <Tooltip>
        3 digit number at the back of your card
    </Tooltip>
);
const paymentmethod = [
    { img: 'assets/img/payment/payment-payoneer.png' },
    { img: 'assets/img/payment/payment-visa.png' },
    { img: 'assets/img/payment/payment-paypal.png' },
    { img: 'assets/img/payment/payment-master.png' },
];
function Payment() {
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
                    <h6>Payment Form</h6>
                </div>
                <div className="ms-panel-body">
                    <Form noValidate validated={validated} className="clearfix" onSubmit={handleSubmit}>
                        <Form.Row>
                            <div as={Col} md="12" className="mb-3">
                                <Form.Label>Payment Method</Form.Label>
                                <ul className="ms-payment-container">
                                    {paymentmethod.map((item, i) => (
                                        <li key={i}>
                                            <div className="ms-radio-img">
                                                <input type="radio" name="payment-method" defaultValue />
                                                <div className="ms-payment-img">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="payment" />
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} xl="6" md="12" className="mb-3" controlId="validationCustom11">
                                <Form.Label>Card Holder Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Card Holder Name"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide full name</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} xl="6" md="12" controlId="validationCustom12">
                                <Form.Label>Card Number</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Card Number"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide number.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-0" as={Col} xl="4" md="12" controlId="validationCustom13">
                                <Form.Label>Month</Form.Label>
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
                                    <Form.Control.Feedback type="invalid"> Please select a Month.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-0" as={Col} xl="4" md="12" controlId="validationCustom14">
                                <Form.Label>Year</Form.Label>
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
                                    <Form.Control.Feedback type="invalid"> Please select a Year.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-0" as={Col} xl="4" md="12" controlId="validationCustom15">
                                <OverlayTrigger placement="left" overlay={cvvtip}>
                                    <Form.Label>CVV <i className="material-icons">info_outline</i></Form.Label>
                                </OverlayTrigger>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="CVV"
                                    />
                                    <Form.Control.Feedback type="invalid"> Please provide your CVV.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" className="float-right">Save and Continue</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Payment;