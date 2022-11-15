import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const Header = () => {
  return (
    <Row>
      <Col md={6} style={{ display: "flex", alignItems: "center" }}>
        GREGS HEAD GOES HERE
      </Col>
      <Col md={6} style={{ display: "flex", alignItems: "center" }}>
        <Form>
          <Row className="pr-o">
            <Col md={5}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="your email"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="your password"
                  type="password"
                />
              </FormGroup>
            </Col>
            <Col
              md={2}
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
              }}
            >
              <FormGroup>
                <Button
                  color="success"
                  size="sm"
                  style={{ height: "2.3rem", fontSize: "0.7rem" }}
                >
                  Sign in
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Header;
