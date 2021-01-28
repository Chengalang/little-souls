import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Family.css';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';

function Family()
{
    return (
        <div className="Family">
            <Container fluid>
                <Header />
                <Row className="Family-main">
                    <h1>Future place for Little Souls family</h1>
                </Row>
                <Footer />
            </Container>
        </div>
    );
}

export default Family;
