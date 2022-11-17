import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const ProductShow = ({ products }) => {
  const { id } = useParams();
  const currentProduct = products?.find((product) => product.id === +id);

  return (
    <div>
      <h2>ProductShow</h2>
      <div>
        {currentProduct && (
          <Card style={{ width: "20rem" }}>
            <img src={currentProduct.image} alt="image of a product" />
            <CardBody>
              <CardTitle tag="h5">
                <p>Title: {currentProduct.title}</p>
              </CardTitle>
              <CardSubtitle>
                <p>Description: {currentProduct.description}</p>
              </CardSubtitle>
              <CardSubtitle>
                <p>Price: {currentProduct.price}</p>
              </CardSubtitle>
              <NavLink to={"/index"} className="nav-link">
                <Button>Back to all Products</Button>
              </NavLink>
              {/* <NavLink to={`/edit/${currentProduct.id}`} className="nav-link">
             <Button>Edit Product</Button>
           </NavLink> */}
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductShow;
