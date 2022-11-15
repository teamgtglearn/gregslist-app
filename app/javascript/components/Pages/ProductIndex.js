import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const ProductIndex = () => {
  return (
    <Row>
      <Col md={4}>
        <Card
          style={{
            width: "10rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Happy Toy</CardTitle>
            <CardText className="text-left">$524</CardText>
            <Button>Buy</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductIndex;
