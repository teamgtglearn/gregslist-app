import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const ProductUserIndex = ({ products }) => {
  const [currentUserProducts, setCurrentUserProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    checkCurrentUserProducts();
  }, [products]);

  const checkCurrentUserProducts = () => {
    let currentArr = products?.filter((product) =>
      product.user_id == id ? product : null
    );
    if (currentArr?.length > 0) return setCurrentUserProducts(currentArr);
  };
  return (
    <Row style={{ display: "flex", flexWrap: "wrap", paddingRight: "4rem" }}>
      {currentUserProducts.length !== 0 ? (
        currentUserProducts.map((product, idx) => (
          <Col key={idx} style={{ width: "15rem", margin: "2rem" }}>
            <Card
              style={{
                width: "15rem",
                minHeight: "25",
                margin: "2rem",
              }}
            >
              <NavLink to={"/show/" + product.id} style={{ display: "flex" }}>
                <img id="product-card-image" alt="Sample" src={product.image} />
              </NavLink>

              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardText className="text-left"> Ð: {product.price}</CardText>
                <Row className="d-flex justify-content-around">
                  <Col className="d-flex justify-content-start">
                    <a href={`/delete/${product.id}`}>
                      <Button>Delete</Button>
                    </a>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <a href={`/edit/${product.id}`}>
                      <Button>Edit</Button>
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))
      ) : (
        <>"You have no products listed. Do you see a problem?"</>
      )}
    </Row>
  );
};

export default ProductUserIndex;
