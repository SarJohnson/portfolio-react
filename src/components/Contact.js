import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='projects-container'>
      <h2 className='projects-container-h2'>Contact Me</h2>
    <Row className="my-5 d-flex justify-content-center">
      <Col md={8} className="">
        <Form>
          <Form.Group>
            <Form.Label className="mt-3" style={{ color: "white" }}>Name</Form.Label>
            <Form.Control type="text" name="from_name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-3" style={{ color: "white" }}>Email</Form.Label>
            <Form.Control type="email" name="from_email" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="mt-3" style={{ color: "white" }}>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" />
          </Form.Group>
          <Button className="contact-button my-3" variant="outline-info" type="submit" onClick={() => window.location = 'mailto:sej17b@my.fsu.edu'}>Submit</Button>
        </Form>
      </Col>
    </Row>
    </div>
  );
};

export default Contact;
