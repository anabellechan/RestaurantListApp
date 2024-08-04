import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MyNavbar from './Navbar';

const AboutUs = () => {
  return ( 
    <div>            <MyNavbar/> 
    <Container className="mt-5">  
      <Row>
        <Col>
          <h1>About Us</h1>
          <p><h2>
            Welcome to Food List, your number one source for finding the best restaurants around. 
            We're dedicated to giving you the very best of dining options, with a focus on quality, customer service, and uniqueness.
            </h2></p>
          <p><h2>
            Founded in 2024, Food List has come a long way from its beginnings. When we first started out, 
            our passion for providing the best dining experiences drove us to start our own business.
            </h2></p>
          <p><h2>
            We hope you enjoy our restaurant listings as much as we enjoy offering them to you. If you have any questions or comments, 
            please don't hesitate to contact us.
            </h2></p>
          <p><h2>
            Sincerely,
            </h2><br /> <h2>
            The Food List Team
            </h2>
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default AboutUs;