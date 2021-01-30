import React from 'react';
import {
    Button,
    Row,
    Col,
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import './HeaderButtons.css';

function HeaderButtons()
{
    return (
        <Container fluid>
            <Row className="header-mobile-buttons hidden-lg">
                <Col xs={6} style={{ backgroundColor: "#A4B173" }}>
                    <a
                        href="https://secure.egsnetwork.com/donate/1E1711C0C2AE41A"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h4>DONATIONS</h4>
                    </a>
                </Col>
                <Col xs={6} style={{ backgroundColor: "#0092E6" }}>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf4Om_lJdWOFzVVLGQWPv6A14UfMt_WSKzF_rmZuYG8M0lhoA/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h4>GET HELP</h4>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default HeaderButtons;
