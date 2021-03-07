import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import servicesBackground from './services-background.png';
import michaelHeart from './michael-heart.png';


function Services()
{
    return (
        <div className="services">

            <section>
                <Container fluid>
                    <Row className="services-banner">
                        <h1><i>Little Souls at Rest Foundation is Here to Help</i></h1>
                    </Row>
                </Container>
            </section>

            <section className="services-hero">
                <div className="services-introduction">
                    <img className="services-bg-image" alt="Services Background" src={servicesBackground} />
                </div>
            </section>

            <section>
                <Container className="services-banner-2">
                    <Row className="services-banner-2-row-1">
                        <h3>Helping to find each little soul their resting place </h3>
                        <img src={michaelHeart} alt="Michael"  />
                    </Row>
                    <Row className="services-banner-2-row-2">
                        <h3>by provide assistance in the following areas</h3>
                    </Row>
                </Container>
            </section>

            <section className="services-details">
                <Container fluid>
                    <Row className="details-row">
                        <Col xs={12}>
                            <ul>
                                <li>First Point of Contact</li>
                                <li>Grief Resources</li>
                            </ul>
                        </Col>
                        <Col xs={12}>
                            <ul>
                                <li>Burial Process</li>
                                <li>Burial Options</li>
                                <li>Cemetery Plot</li>
                                <li>Ceremony Time and Place</li>
                            </ul>
                        </Col>
                        <Col xs={12}>
                            <ul>
                                <li>Coordination of the casket/urn</li>
                                <li>Financial Assistance for Burial</li>
                            </ul>
                        </Col>
                        <Col xs={12}>
                            <ul>
                                <li>Hospital Staff Guidance and Direction</li>
                                <li>Hospital and Cemetery Arrangements and Coordination</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="services-process">
                <Container>
                    <Row className="process-row-1">
                        <Col className="process-col-1">
                            <h2><i>We Are Sorry For Your Loss</i></h2>
                            <br />
                            <p>
                                Most funeral homes and cemeteries are designed to handle losses above 20 weeks. Finding funeral homes and cemeteries that work with families experiencing a loss up to 20 weeks of pregnancy can be time-consuming, frustrating, and expensive. We have the resources to make this difficult time easier for you and your family.
                            </p>
                        </Col>
                    </Row>
                    <Row className="process-row-2">
                        <Col xs={12} md={{ span: 10, offset: 1 }} className="process-col-2">
                            <Row>
                                <Col md={3} className="col-2-inner"><h4><b>Burial Process</b></h4></Col>
                                <Col xs={12} md={8} className="col-2-inner-2">
                                    <span>
                                        When you are ready, we will walk with you through your loss and provide a seamless burial plan for your baby
                                    </span>
                                </Col>
                                <Col md={3} className="col-2-inner"><h4><b>Cemetery Plots</b></h4></Col>
                                <Col xs={12} md={8} className="col-2-inner-2">
                                    <span>
                                        Little Souls at Rest provides cemetery plots in the following areas:
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="process-row-3">
                        <Col md={2}>
                            <h4><b>Texas</b></h4>
                        </Col>
                        <Col md={6}>
                            <p>
                                <b>Crypt*</b>: Calvary Hill Funeral Home in Dallas, Texas
                                <br />
                                <b>Individual Plots</b>: Pilot Pointe area with Slay Memorial
                            </p>
                            <span>
                                *Burial spaces in the crypt are not individual. Your baby will be carefully laid to rest with other babies who are also in the crypt.
                            </span>
                        </Col>
                    </Row>
                    <Row className="process-row-3">
                        <Col md={2}>
                            <h4><b>All States</b></h4>
                        </Col>
                        <Col md={6}>
                            <p>We also help, find, and coordinate cemetery plots and cremation in your area</p>
                        </Col>
                    </Row>

                    <Row className="process-bt">
                        <Button
                            variant="light"
                            href="/services/get-help"
                            className="col-button"
                            style={{
                                backgroundColor: "#7A8F3A",
                                color: "#FFFFFF",
                                fontSize: "20px",
                                padding: "20px"
                            }}
                        >
                            <i>To find out more on the process please click here</i>
                        </Button>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Services;
