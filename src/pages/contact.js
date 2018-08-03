import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Keltic Media Direct - Contact</title>
      </Helmet>
    
      <Container style={{ marginTop: '56px'}} className="mb-5">
        <Row className="py-5">
          <Col className="text-center" md={{ size: 6, offset: 3 }}>
            <h2>Contact</h2>
            <hr />
            <Form action={`https://formspree.io/kelticmediadirect@gmail.com`} method="POST">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
              <Input type="text" name="_gotcha" style={{ display: 'none' }}/>
              <Button className="mt-5" color="primary" size="lg" block>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;