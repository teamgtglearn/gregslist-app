import React from "react";
import { NavLink } from "react-router-dom";
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
            className="shadow"
            style={{
              width: "15rem",
              margin: "2rem",
            }}
          >
            <NavLink to={"/show/" + product.id} style={{ display: "flex" }}>
              <img id="product-card-image" alt="Sample" src={product.image} />
            </NavLink>
            <CardBody
              style={{
                backgroundColor: "#ded8d1",
              }}
            >
              <CardTitle tag="h5">{product.title}</CardTitle>
              <CardText className="text-left"> Ð: {product.price}</CardText>
              <a href={`/show/${product.id}`}>
                <Button>Contact Seller</Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductIndex;
