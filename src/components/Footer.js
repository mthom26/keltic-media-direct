import React from 'react';
import Link from 'gatsby-link';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import contentfulIcon from '../images/contentfulIcon.svg';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center p-3">
      <Row>
        <Col md={4}>
          <a href="https://www.contentful.com/" target="_blank">
            <img src={contentfulIcon} alt="Contentful Icon" height="35px"/>
          </a>
          <hr className="bg-primary d-md-none w-50"/>
        </Col>
        <Col md={4}>
          <p className="mb-2 font-weight-bold">Contact</p>
          <hr className="bg-primary w-25 my-2 d-none d-md-block"/>
          <p className="m-0">email@email.com</p>
          <p className="m-0">phone number</p>
          <hr className="bg-primary d-md-none w-50"/>
        </Col>
        <Col md={4}>
          <p>Social Icons</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
