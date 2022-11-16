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

const ProductIndex = ({ products }) => {
  return (
    <Row style={{ display: "flex", flexWrap: "wrap", paddingRight: "4rem" }}>
      {products?.map((product, idx) => (
        <Col key={idx} style={{ width: "15rem", margin: "2rem" }}>
          <Card
            style={{
              width: "15rem",
              margin: "2rem",
            }}
          >
            <img alt="Sample" src={product.image} />
            <CardBody>
              <CardTitle tag="h5">{product.title}</CardTitle>
              <CardText className="text-left"> Ð: {product.price}</CardText>
              <a href={`/show/${product.id}`}>
                <Button>Buy</Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductIndex;
