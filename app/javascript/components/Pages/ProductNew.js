import React from "react";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";

const ProductNew = () => {
  return (
    <Form className="p-5 m-5">
      <FormGroup row>
        <Label for="title" sm={2}>
          Product Title
        </Label>
        <Col sm={6}>
          <Input
            id="title"
            name="tile"
            placeholder="type here..."
            type="text"
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
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default ProductNew;
