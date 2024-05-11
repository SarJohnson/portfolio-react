import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  return (
    <Row className="intro">
      <Col className="intro-col">
        <div className="intro-title">
          Full-Stack Web Developer</div>
          <img src='blob.png' alt='blob' className='blob'></img>      
        <p className="intro-text">    
          Hi, I'm Sarah.
          <br/>
          I am a web developer in Winter Haven, FL available for a full-time or part-time work (in person, hybrid, or remote).
          <br/>
          <a href="Sarah-Johnson-Resume.pdf" class="button" download>Download my CV</a>
        </p>
      </Col>
    </Row>
  );
};

export default Home;

