import React from 'react';
import { Card, Col } from 'react-bootstrap';

const EachReview = ({ review }) => {
    const { name, info, img } = review;
    return (
        <Col>
            <Card style={{ width: '10rem', background: 'inherit' }} className="mb-3 m-auto border-0">
                <Card.Img  className='rounded-circle w-50' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EachReview;