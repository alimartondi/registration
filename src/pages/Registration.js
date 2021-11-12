import React, { Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Cuate from "../assets/images/cuate.png";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Registration() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <div className="main position-relative text-white text-start pb-3">
        <Container>
          <h1 className="main-title">Form Registration</h1>
          <Row>
            <Col lg={5} className="d-none d-lg-block">
              <div className="w-100 rounded-3 mt-5 pe-5">
                <img src={Cuate} alt="cuate" className="img-fluid" />
              </div>
            </Col>
            <Col lg={7}>
              <Form className="registration-form text-dark fw-normal">
                <h3 className="mb-4">Input your data!</h3>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        className="py-3"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Last name"
                        className="py-3"
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                <Form.Label>Select city</Form.Label>
                <Form.Select className="mb-3 py-3" aria-label="city-select">
                  <option>Select city</option>
                  <option value="1">Jakarta</option>
                  <option value="2">Bandung</option>
                  <option value="3">Surabaya</option>
                  <option value="4">Medan</option>
                  <option value="5">Jogjakarta</option>
                </Form.Select>
                <Form.Label>Select province</Form.Label>
                <Form.Select className="mb-3 py-3" aria-label="province-select">
                  <option>Select province</option>
                  <option value="1">DKI Jakarta</option>
                  <option value="2">Jawa Barat</option>
                  <option value="3">Jawa Timur</option>
                  <option value="4">Sumatera Utara</option>
                </Form.Select>
                <Button
                  variant="main-button w-100 py-3 mt-4 rounded-3"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}
