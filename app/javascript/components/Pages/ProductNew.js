import React from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductNew = ({ addProducts, props: { current_user } }) => {
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({});

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
      user_id: current_user.id,
    });
  };

  const handleSubmit = () => {
    addProducts(newProduct);
    navigate(`/index/${current_user.id}`);
  };

  return (
    <div
      className="m-5 d-flex flex-column align-items-center"
      style={{ width: "85%" }}
    >
      <Form
        className="pt-5 pb-3 mt-3 border border-light shadow"
        style={{
          backgroundColor: "#ded8d1",
          width: "85%",
          borderRadius: "10px",
        }}
      >
        <FormGroup className="d-flex justify-content-center">
          <Label for="title" sm={2}>
            Product Title
          </Label>
          <Col sm={6}>
            <Input
              id="title"
              name="title"
              placeholder="type here..."
              type="text"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex justify-content-center">
          <Label for="description" sm={2}>
            Product Description
          </Label>
          <Col sm={6}>
            <Input
              id="description"
              name="description"
              placeholder="type here..."
              type="textarea"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex justify-content-center">
          <Label for="title" sm={2}>
            Product Price
          </Label>
          <Col sm={6}>
            <Input
              id="price"
              name="price"
              placeholder="type here..."
              type="text"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex justify-content-center">
          <Label for="image" sm={2}>
            Image URL
          </Label>
          <Col sm={6}>
            <Input
              id="image"
              name="image"
              placeholder="type here..."
              type="text"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <div className="d-flex justify-content-center mt-5">
          <Button onClick={handleSubmit}> Add Product</Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductNew;
