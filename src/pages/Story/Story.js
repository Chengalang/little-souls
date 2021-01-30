import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Story.css';
import michael from './michael.png';

function Story()
{
    return (
        <div className="Story">
            <Container fluid>
                <Row className="Story-introduction">
                    <Col md={12} className="introduction-main">
                        <Row  style={{ width: "70%", maxWidth: "1200px" }}>
                            <Col className="introduction-main-header">
                                <h1>Our Story</h1>
                                <h2>The foundation was born from loss...</h2>
                                <p>
                                    Little Souls at Rest Foundation was created after we lost our son, Michael. I was at a routine appointment when the doctor told me that there was no heart beat. We delivered our beautiful baby boy, Michael, on July 27, 2018. The room went silent and we stared in amazement at our son. He was physically complete in every way. He only needed time to grow. Only 6 ounces, and yet he was a part of our family forever, and we were in love. After a few minutes of intense emotions, we were faced with the reality of making funeral arrangements. We tried to get as many of the burial arrangements done the night before, but we had so many questions. Little did we know, there was no streamlined process for babies like Michael. He was born before 20 weeks and weighed less than 350 grams. There were little to no burial resources for babies like him, and we were left to try to figure out how to make arrangements for him on our own.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="Story-statement">
                        <Row style={{ width: "50%" }}>
                            <Col className="Story-statement-details">
                                <img src={michael} alt="Michael" width="154" height="203" />
                                <p>
                                    Little Souls at Rest was founded so all babies, no matter how small, are able to have a resting place. We also offer a streamlined burial process to families so they can focus on their grief. We are honored to help every family that comes to Little Souls at Rest for help.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="Story-mission">
                    <Col md={12} className="Story-col">
                        <Row style={{ width: "90%" }}>
                            <Col md={{ span: 8, offset: 2 }} className="Story-col-details">
                                <br />
                                <p>
                                    We buried Michael the following Tuesday, near the most beautiful tree, and next to my friend's son. It was truly a gift, offered through many wonderful people.
                                    <br /><br />
                                    Two weeks after being in a fog, I knew my husband, Alfred, and I had the obligation of giving back what we had been given. Every family should have the right to bury their child and it should not cause heartache - in the most difficult of times - to make those arrangements.
                                    <br /><br />
                                    We realized that very few families would find the same resources that were made available to us. We wanted to provide the same level of support for others and could only do so by creating something new.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="Story-banner">
                    <Col>
                        <h2>This is what the foundation does</h2> <br /><br />
                        <h1>This is Little Souls at Rest Foundation</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Story;
