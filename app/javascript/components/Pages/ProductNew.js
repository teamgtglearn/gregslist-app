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
    <Form
      className="p-5 m-5 border shadow"
      style={{ width: "62vw", backgroundColor: "#ded8d1" }}
    >
      <FormGroup row>
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
      <FormGroup row>
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
      <FormGroup row>
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
      <FormGroup row>
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
      <Button onClick={handleSubmit}> Add Product</Button>
    </Form>
  );
};

export default ProductNew;
