import React from 'react';
import {
    Button,
    Row,
    Col,
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import './Header.css';
import logo from './logo-header.png';

function Header()
{
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col>
                        <Navbar expand="md" className="Nav-header">
                            <Navbar.Brand href="/">
                                <img src={logo} alt="Logo" width="200" height="80" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/services">Our Services</Nav.Link>
                                    <Nav.Link href="/services/get-help">Get Help</Nav.Link>
                                    <Nav.Link href="/about">About Us</Nav.Link>
                                    <Nav.Link href="/souls-family">Little Souls Family</Nav.Link>
                                    <Nav.Link href="/our-story">Our Story</Nav.Link>
                                    <Button
                                        href="https://secure.egsnetwork.com/donate/1E1711C0C2AE41A"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="default"
                                        className="header-bt"
                                        style={{
                                            color: "#BC986A",
                                            backgroundColor: "#FBEEC1",
                                            borderStyle: "solid",
                                            borderWidth: "2px",
                                            borderColor: "#DAAD86",
                                            borderRadius: "10px",
                                            paddingTop: "8px",
                                        }}
                                    >DONATIONS</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
