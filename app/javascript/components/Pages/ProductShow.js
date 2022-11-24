import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
} from "reactstrap";

const ProductShow = ({ products, props }) => {
  const { id } = useParams();
  const currentProduct = products?.find((product) => product.id === +id);

  return (
    <div className="d-flex justify-content-center">
      {currentProduct && (
        <Card
          className="mt-3 border-light shadow"
          style={{ maxWidth: "30rem", height: "40rem", borderRadius: "15px" }}
        >
          <img
            id="show-image"
            src={currentProduct.image}
            alt="image of a product"
          />
          <CardBody
            style={{
              backgroundColor: "#ded8d1",
              borderEndStartRadius: "15px",
              borderEndEndRadius: "15px",
            }}
          >
            <CardTitle tag="h5">
              <p>Title: {currentProduct.title}</p>
            </CardTitle>
            <CardSubtitle>
              <p>Description: {currentProduct.description}</p>
            </CardSubtitle>
            <CardSubtitle>
              <p>Price: Ð {currentProduct.price}</p>
            </CardSubtitle>
            <Row className="d-flex justify-content-center">
              <Button
                className="mb-3 bg-primary w-75"
                onClick={() => {
                  props.current_user
                    ? (window.location.href = `mailto:${props.current_user.email}`)
                    : (window.location.href = `https://gregs-list-app.herokuapp.com/users/sign_in`);
                }}
              >
                Contact Seller
              </Button>

              <NavLink
                to={"/index"}
                className="nav-link d-flex justify-content-center"
              >
                <Button className="w-75">Back to all Products</Button>
              </NavLink>
            </Row>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ProductShow;
