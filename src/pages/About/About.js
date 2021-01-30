import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

import jenaVoz from './Jena_Vozzella.png';
import chrisInm from './Chris_Inman.png';
import cathyInm from './Cathy_Inman.png';
import loriArm from './Lori_Armstrong.png';
import lauraRic from './Laura_Ricketts.png';
import alfredVoz from './Alfred_Vozzella.png';
import paigeEng from './Paige_Engle.png';

// Test Col size
// style={{ backgroundColor: "#F60C5B" }}
// style={{ backgroundColor: "#4C0CF6" }}

function About()
{
    return (
        <div className="About">
            <Container fluid>


                <h1>Meet the Team</h1>

                <Row>
                    <Col md={12} className="About-team-one-main">
                        <Row className="About-team-one">
                            <Col md sm={6} xs={6}>
                                <img src={jenaVoz} alt="Jena Vozzella" />
                                <h4>Jena Vozzella</h4>
                                <span>Founder and President</span>
                            </Col>
                            <Col md sm={6} xs={6}>
                                <img src={chrisInm} alt="Chris Inman" />
                                <h4>Chris Inman</h4>
                                <span>Vice President</span>
                            </Col>
                            <Col md sm={6} xs={6}>
                                <img src={cathyInm} alt="Cathy Inman" />
                                <h4>Cathy Inman</h4>
                                <span>Secretary</span>
                            </Col>
                            <Col md sm={6} xs={6}>
                                <img src={loriArm} alt="Lori Armstrong" />
                                <h4>Lori Armstrong</h4>
                                <span>Director of Social Affairs</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="About-team-two-main">
                        <Row className="About-team-two">
                            <Col md sm={6} xs={6}>
                                <img src={lauraRic} alt="Laura Ricketts" />
                                <h4>Laura Ricketts</h4>
                                <span>Board Member</span>
                            </Col>
                            <Col md sm={6} xs={6}>
                                <img src={alfredVoz} alt="Alfred Vozzella" />
                                <h4>Alfred Vozzella</h4>
                                <span>Board Member</span>
                            </Col>
                            <Col md sm={6} xs={6}>
                                <img src={paigeEng} alt="Paige Engle" />
                                <h4>Paige Engle</h4>
                                <span>Board Member</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="About-statement">
                    <div className="Statement-body">
                        <p>
                            Every Family should have the right to bury their child and it should not cause Heartache - in the most difficult times to make those arrangements. We realize that very few families would find the same resources that were made available to us. We wanted to provide the same level of support for others and could only do so by creating the Little Souls at Rest Foundation.
                        </p>
                    </div>
                </Row>

            </Container>
        </div>
    );
}

export default About;
