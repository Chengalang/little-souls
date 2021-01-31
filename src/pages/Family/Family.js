import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Family.css';

function Family()
{
    return (
        <div className="family">
            <Container fluid>
                <Row className="family-main">
                    <h1>Future place for Little Souls family</h1>
                </Row>
            </Container>
        </div>
    );
}

export default Family;
