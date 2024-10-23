import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './reviewCard.css';

function ReviewCard() {
    return (
        <Container className="review-card-container">
            <Row>
                <Col xs={2}>
                    <Image src="user-image-url.jpg" roundedCircle className="user-image" />
                </Col>
                <Col xs={10}>
                    <div className="user-info">
                        <strong>Carrie wrote a review.</strong>
                        <p>3 days ago</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="taco-image-url.jpg" fluid className="review-image" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Leo’s Tacos</h5>
                    <div className="rating">
                        {/* Star icons and rating */}
                        <span>★★★★★</span>
                        <span>(3)</span>
                    </div>
                    <p>The best tacos in town! They were super yummy in my tummy!!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ReviewCard;
