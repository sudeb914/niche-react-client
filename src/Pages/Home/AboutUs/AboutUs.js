import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div id='testimonial' style={{ background: '#F9EBEA' }} className='my-4'>
            <h2 className='ms-3'>Testimonial</h2>
            <Container>
                <Row>
                    <Col md='6' sm='12'>
                        <h2>Our Reputation Speaks</h2>
                        <h1 className='mcolor border-3 border-bottom'>for Itself</h1>
                        <div>
                            <p>CaLeader has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                            <p>For used vehicles, we calculate a fair retail price based on a detailed analysis of comparable current and previous car listings in a given market.</p>
                        </div>
                    </Col>
                    <Col md='6' sm='12'>
                        <img className='img-fluid' src="https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2019/09/img-parallax03-img01.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;