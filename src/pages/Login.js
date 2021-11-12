import React, { Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cuate2 from "../assets/images/cuate-2.png";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Login() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <div className="login position-relative text-white">
        <Container>
          <h1 className="main-title">Login First Please!</h1>
          <Row>
            <Col lg={5} className="d-none d-lg-block">
              <div className="w-100 rounded-3 mt-5 pe-5">
                <img src={Cuate2} alt="cuate" className="img-fluid" />
              </div>
            </Col>
            <Col lg={7}>
              <Form className="login-form text-dark fw-normal">
                <h3 className="mb-4">Input your data!</h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="py-3"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="py-3"
                  />
                </Form.Group>

                <Button
                  variant="main-button w-100 py-3 mt-4 rounded-lg"
                  type="submit"
                >
                  Login
                </Button>
                <p className="mt-3">
                  Dont have an account yet?{" "}
                  <Link to="/registration">Sign up</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
