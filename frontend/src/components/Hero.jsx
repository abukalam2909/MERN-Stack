import React from 'react';
import {Container, Button, Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className='home-hero text-white d-flex align-items-center'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6}>
                <h1 className="display-4 fw-bold">Product Manager</h1>
                <p className="lead">
                Effortlessly manage your products with our all-in-one tool.
                Create, view, edit, and delete products — fast, simple, and
                reliable.
                </p>
                <Link to="/products">
                    <Button variant="light" className="mt-">
                        Explore Products
                    </Button>
                </Link>
            </Col>
            <Col xs={12} md={6} className="text-center">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/1533/1533926.png"
                    alt="Product Management"
                    className="img-fluid mt-4 mt-md-0"
                    style={{maxWidth: '70%', height: 'auto'}}
                />
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Hero