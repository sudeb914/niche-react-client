import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EachReview from './EachReview/EachReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://intense-crag-53623.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div style={{ background: '#E8DAEF' }}>
            <Container className='py-5'>
                <h3>Customers Satisfication</h3>
                <Row className='my-5'>
                    {
                        reviews.map(review => <EachReview review={review} key={review._id}></EachReview>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Review;