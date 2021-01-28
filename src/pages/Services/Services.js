import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import tombstone from './tombstone.png';
import michaelHeart from './michael-heart.png';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';

function Services()
{
    return (
        <div className="Services">
            <Container fluid>
                <Header />

                <Row className="Services-banner">
                    <h1><i>Little Souls at Rest Foundation is Here to Help</i></h1>
                </Row>

                <Row className="Services-introduction">
                    <Col md={{ span: 4, offset: 1 }} className="intro-main">
                        <span>
                            Helping to find each little soul their resting place <img src={michaelHeart} alt="Michael"  />
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col className="Services-statement">
                        <Row style={{ width: "70%" }}>
                            <Col className="Services-statement-details">
                                <img src={tombstone} alt="Tombstone" width="461" height="334" />
                                <p>
                                    While we serve families experiencing loss, our mission
                                    and heart is to serve and honor the precious little
                                    souls. We honor their life by helping and walking with
                                    their families to provide a dignified resting place
                                <br /><br />
                                    Our mission is accomplished when we are able to
                                    provide and stand with the families to honor and
                                    witness their precious soul in a dignified burial and
                                    resting place
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="Services-details">
                    <Col md={12} className="details-one">
                        <ul className="details-list-one">
                            <li>Burial Process</li>
                            <li>Burial Options</li>
                            <li>Cemetery Plot</li>
                            <li>Ceremony Time and Place</li>
                        </ul>
                    </Col>
                    <Col md={12} className="details-two">
                        <ul className="details-list-two">
                            <li>Referrals and Financial Assistance through Trappist</li>
                            <li>First point of contact</li>
                        </ul>
                    </Col>
                    <Col md={12} className="details-three">
                        <ul className="details-list-three">
                            <li>Hospital Staff Guidance and Direction</li>
                            <li>Hospital and Cemetery Arrangements and Coordination</li>
                        </ul>
                    </Col>
                    <Col md={12} className="details-four">
                        <ul className="details-list-four">
                            <li>Coordination of the casket/urn</li>
                            <li>Financial assistance for burial</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="Services-process">
                    <Col md={12} className="col-main-process-one">
                        <Row style={{ width: "60%" }}>
                            <Col className="col-detail-process-one">
                                <h2><i>We want you to know how sorry we are for your loss</i></h2><br />
                                <p>
                                    Most funeral homes and cemeteries are designed to handle losses above 23 weeks. Finding funeral homes and cemeteries that work with families experiencing miscarriage, stillbirth, and infant death can be time-consuming, frustrating, and expensive. We have the resources to make this difficult time easier for you and your family.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="col-main-process-two">
                        <Row style={{ width: "50%" }}>
                            <Col md={3} style={{ color: "#7A8F3A" }}><h5><b>Burial Process</b></h5></Col>
                            <Col md={8}>
                                <span style={{ fontSize: "18px" }}>When you are ready, we will walk with you through your loss and provide a seamless burial plan for your baby</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="col-main-process-three">
                        <Row style={{ width: "50%" }}>
                            <Col md={3} style={{ color: "#7A8F3A" }}><h5><b>Cemetery Plots</b></h5></Col>
                            <Col md={8}>
                                <span style={{ fontSize: "18px" }}>Little Souls at Rest provides cemetery plots in the following areas:</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="col-main-process-four">
                        <Row style={{ width: "25%", paddingLeft: "20px"}}>
                            <p>
                                <b>Crypt*</b>: Calvary Hill Funeral Home in Dallas, Texas <br />
                                <b>Individual Plots</b>: Pilot Pointe area with Shay Memorial <br />
                            </p>
                            <span style={{ fontSize: "12px" }}>
                                *Burial spaces in the crypt are not individual. Your baby will be carefully laid to rest with other babies who are also in the crypt.
                            </span>
                        </Row>
                    </Col>
                    <Col md={12} className="col-main-button">
                        <Button
                            variant="light"
                            href="/services/get-help"
                            className="col-button"
                            style={{
                                backgroundColor: "#7A8F3A",
                                color: "#FFFFFF",
                                fontSize: "18px",
                                paddingTop: "20px"
                            }}
                        >
                            <i>To find out more on the process please click here</i>
                        </Button>
                    </Col>
                </Row>

                <Footer />
            </Container>
        </div>
    );
}

export default Services;
