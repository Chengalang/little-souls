import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';

function Home()
{
    return (
        <div className="Home">
            <Container fluid className="Home-main">
                <Header />
                <Row className="Home-introduction">
                    <Col md={{ span: 4, offset: 8 }} className="Main-introduction">
                        <p style={{ padding: "0 30px 0 30px" }}>
                            We are here to provide <i>immediate</i> burial needs to mothers and families suffering a loss of a baby up to 20 weeks of pregnancy
                        </p>
                        <div>
                            <Button variant="info" href="/our-story">Our Story</Button>
                            <Button
                                variant="primary"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSf4Om_lJdWOFzVVLGQWPv6A14UfMt_WSKzF_rmZuYG8M0lhoA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Help
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="Home-mission">
                    <div className="Main-mission">
                        <h3 style={{ opacity: "0.6" }}>Our Mission</h3>
                        <hr style={{ maxWidth: "250px", minWidth: "150px", borderTop: "3px solid rgba(0, 0, 0, 0.1)" }}/>
                        <p style={{ maxWidth: "900px", padding: "25px 20px 0px 20px"}}>
                            At Little Souls at Rest Foundation, we believe that all babies, no matter how small, deserve to have their lives honored by being laid to rest with dignity. It is our mission to help provide burial resources following the loss of a baby up to 20 weeks of pregnancy
                        </p>
                        <span style={{ opacity: "0.75" }}>
                            <b>If your family needs help, please click
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf4Om_lJdWOFzVVLGQWPv6A14UfMt_WSKzF_rmZuYG8M0lhoA/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                > here
                                </a>
                            </b>
                        </span>
                    </div>
                </Row>
                <Row className="Home-details">
                    <Col md={7} className="Main-details">
                        <h2 style={{ opacity: "0.6", marginBottom: "20px" }}>Who we serve</h2>
                        <hr style={{ maxWidth: "250px", marginBottom: "20px", minWidth: "150px", borderTop: "3px solid rgba(0, 0, 0, 0.1)" }}/>
                        <p style={{ padding: "0px 60px 0px 60px"}}>
                            We serve mothers and families by providing immediate resources and options for the burial of their babies. We know that loss in any circumstance is painful and that babies should be treated with dignity and respect, no matter how small. Every family should have the option of burying their baby, regardless of their financial circumstances; our services allow parents to focus on grieving, and honoring their little ones, rather than on funeral arrangements and high costs.
                        </p>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}

export default Home;
