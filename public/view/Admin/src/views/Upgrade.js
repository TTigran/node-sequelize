import React from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col, Form,
} from "react-bootstrap";

function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Products</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Image:</label>
                        <Form>
                          <Form.File
                              id="custom-file"
                              label="Custom file input"
                              custom
                          />
                        </Form>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Discount percent:</label>
                        <Form.Control
                            defaultValue=""
                            placeholder="Discount percent:"
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Price:</label>
                        <Form.Control
                            defaultValue=""
                            placeholder="Price:"
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address:</label>
                        <Form.Control
                            defaultValue=""
                            placeholder="Store Address"
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>By Order: </label>
                        <Form.Control
                            defaultValue=""
                            placeholder="City"
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Total: </label>
                        <Form.Control
                            defaultValue=""
                            placeholder="Total: "
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Product Code: </label>
                        <Form.Control
                            placeholder="Product Code"
                            type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Product:</label>
                        <Form.Control
                            cols="80"
                            defaultValue=""
                            placeholder="Aboute"
                            rows="4"
                            as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
