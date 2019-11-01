import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import classes from "./LandingPage.module.css";
import aroyOutside from "../../images/aroy-thai-outside.jpg";

const LandingPage = props => {
  return (
    <>
      <div>
        <h2>
          <u>Landing Page</u>
        </h2>
      </div>

      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <div className={classes.RestaurantLogo}>
        <a
          href="https://www.google.com/maps/dir/30.6855936,-88.0607232/aroy+thai+mobile+al/@30.6853044,-88.0609304,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x889a4e31e0df0617:0xea586a29df7bcbb4!2m2!1d-88.0569448!2d30.6857583"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={aroyOutside} alt="AroyThai" />
        </a>
      </div>
    </>
  );
};

export default LandingPage;
