import React, { useEffect } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductEdit = ({products,updateProduct, props: { current_user }}) => {
  const { id } = useParams()
  const [editPrd , setEditPrd] = useState({})
  const navigate = useNavigate();


  useEffect( () => {
    const editProduct = products.find(product => product.id == id)
    setEditPrd(editProduct)
  },[products])


  console.log(editPrd)
  const handleChange = (e) => {
    setEditPrd({
      ...editPrd,
      [e.target.name]: e.target.value,
      user_id: current_user.id,
    });
  }

  const handleSubmit = () => {
    console.log(editPrd)
    updateProduct(editPrd,id)
    navigate(`/index/${current_user.id}`)
  }

  return (
  <div>
    <h2>
      ProductEdit
      </h2>
    <Form className="p-5 m-5">
      <FormGroup row>
        <Label for="title" sm={2}>
          Product Title
        </Label>
        <Col sm={6}>
          <Input
            id="title"
            name="title"
            type="text"
            value={editPrd?.title}
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
            value={editPrd?.description}
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
            value={editPrd?.price}
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
            value={editPrd?.image}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <Button onClick={handleSubmit}> Edit Product</Button>
    </Form>
    </div>
)};

export default ProductEdit;
