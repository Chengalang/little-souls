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
        <div className="about">

            <section className="about-banner">
                <Container fluid>
                    <h1>Meet the Team</h1>
                </Container>
            </section>

            <section className="team-section-1">
                <Container>
                    <Row className="team-row-1">
                        <Col xs={6} lg={3}>
                            <img src={jenaVoz} id="jenaV" alt="Jena Vozzella" />
                            <h4>Jena Vozzella</h4>
                            <span>Founder and President</span>
                        </Col>
                        <Col xs={6} lg={3}>
                            <img src={chrisInm} id="chrisI" alt="Chris Inman" />
                            <h4>Chris Inman</h4>
                            <span>Vice President</span>
                        </Col>
                        <Col xs={6} lg={3}>
                            <img src={cathyInm} id="cathyI" alt="Cathy Inman" />
                            <h4>Cathy Inman</h4>
                            <span>Secretary</span>
                        </Col>
                        <Col xs={6} lg={3}>
                            <img src={loriArm} id="loriA" alt="Lori Armstrong" />
                            <h4>Lori Armstrong</h4>
                            <span>Director of Social Affairs</span>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="team-section-2">
                <Container>
                    <Row className="team-row-2">
                        <Col xs={6} lg={4}>
                            <img src={paigeEng} id="paigeE" alt="Paige Engle" />
                            <h4>Paige Engle</h4>
                            <span>Board Member</span>
                        </Col>
                        <Col xs={6} lg={4}>
                            <img src={lauraRic} id="lauraR" alt="Laura Ricketts" />
                            <h4>Laura Ricketts</h4>
                            <span>Board Member</span>
                        </Col>
                        <Col
                            xs={{ span: 6, offset: 3}}
                            lg={{ span: 4, offset: 0 }}
                            className="last-member"
                        >
                            <img src={alfredVoz} id="alfredV" alt="Alfred Vozzella" />
                            <h4>Alfred Vozzella</h4>
                            <span>Board Member</span>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-message">
                <Container>
                    <Row>
                        <p>

                        </p>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default About;
