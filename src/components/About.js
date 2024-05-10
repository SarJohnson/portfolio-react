import React from 'react';
import { Row, Col, Badge, Container } from 'react-bootstrap';
import '../App.css';

const About = () => {
  return (
    <Row className='projects-container'>
      <h1 className='projects-container-h2'>
        About
      </h1>
      <div>
      <Row>
        <Col>
          <img src='portrait.jpg' alt='Sarah Johnson portrait' className='portrait'/>
          <h3 className='projects-container-h2'>Skills</h3>
          <Container className="skills-table">
            <Row>
              <Col>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>HTML</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>CSS</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>JavaScript</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>MongoDB</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Node.js</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>React</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Bootstrap</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Angular</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>NoSQL</Badge></div>
              </Col>
              <Col>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>SQL</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Python</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Django</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>AWS</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Microsoft Suite</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Google Suite</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Ora</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Git</Badge></div>
                <div><Badge bg='secondary' style={{ fontSize: 15 }}>Postman</Badge></div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={8} className='mb-5'>
            <p>Hello! I'm a passionate and dedicated Junior Developer with a strong desire to explore the ever-evolving world of software development. My journey into the realm of coding began with a deep curiosity and a determination to solve real-world problems through technology.</p>
            <p>I have a solid foundation in programming languages such as HTML, CSS, and JavaScript, and I'm excited to continue building my skills in back-end development with languages like Python. My experience includes working on various projects, where I've contributed to creating web applications to deliver innovative solutions.</p>
            <p>What sets me apart is my unwavering commitment to learning. I thrive on challenges and eagerly embrace new technologies and methodologies to expand my knowledge. I believe that effective communication and teamwork are essential in software development, and I'm always eager to collaborate with fellow developers, designers, and stakeholders to deliver exceptional results.</p>
            <p>In addition to my technical skills, I bring a strong problem-solving mindset, attention to detail, and a genuine passion for creating user-friendly, efficient, and elegant code. My goal is not just to write code but to craft solutions that make a positive impact on the end users and the world at large.</p>
            <p>When I'm not at the keyboard, you'll often find me reading about the latest industry trends, experimenting with personal coding projects, or seeking out opportunities to further enhance my skill set. I'm enthusiastic about becoming a valued member of a dynamic development team where I can learn, grow, and contribute to exciting projects.</p>
            <p>I'm eager to embark on this journey of growth and discovery in the world of software development, and I'm excited to bring my enthusiasm, skills, and fresh perspective to the table. Let's collaborate and create exceptional software together.</p>
            <p>Feel free to reach out to me <a className='button' href='contact'>here</a> to discuss potential opportunities, projects, or just to chat about the exciting world of coding!</p>
        </Col>
      </Row>
      </div>
    </Row>
  );
};

export default About;