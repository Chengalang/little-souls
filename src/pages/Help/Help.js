import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Help.css';

function Help()
{
    return (
        <div className="help">

            <section className="help-banner">
                <Container>
                    <Row>
                        <Col>
                            <h3><i>We are with you through the whole process</i></h3>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="help-steps">
                <Container>
                    <Row className="help-step-1">
                        <Col xs={12} lg={4}>
                            <h4>1. Please fill out the form</h4>
                        </Col>
                        <Col xs={12} lg={8}>
                            <p>
                                Using your cell phone or computer click
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf4Om_lJdWOFzVVLGQWPv6A14UfMt_WSKzF_rmZuYG8M0lhoA/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > here
                                </a>
                                <br />
                                Please complete the form with as much detail as possible, so we can best deteremine how to assist you.
                            </p>
                        </Col>
                    </Row>
                    <Row className="help-step-2">
                        <Col xs={12} lg={4}>
                            <h4>2. We will contact you</h4>
                        </Col>
                        <Col xs={12} lg={8}>
                            <p>
                                Once a form has been submitted, a team member from Little Souls will contact you via phone to <br />
                                discuss your next steps with you <br />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="help-emergency">
                <span><strong>For immediate assistance, please call (321) 501 - 1369</strong></span>
            </div>
        </div>
    );
}

export default Help;
