import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Help.css';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';

function Help()
{
    return (
        <div className="Help">
            <Container fluid>
                <Header />
                <Row className="Help-main">
                    <div className="Help-banner">
                        <h3><i>We are here to be with you throughout the whole process</i></h3>
                    </div>
                    <div className="Help-steps">
                        <h4>1. Please fill out the form</h4>
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
                        <br />
                        <h4>2. We will contact you</h4>
                        <p>
                            Once a form has been submitted, a team member from Little Souls will contact you via phone to <br />
                            discuss your next steps with you <br />
                        </p>
                    </div>
                    <div className="Help-emergency">
                        <p>
                            If you find yourself needing immediate assistance, you can call <br />
                            directly: 321 - 501 - 1369
                        </p>
                    </div>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}

export default Help;
