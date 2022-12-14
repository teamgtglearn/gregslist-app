import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ProductEdit from "./Pages/ProductEdit";
import ProductShow from "./Pages/ProductShow";
import ProductIndex from "./Pages/ProductIndex";
import ProductUserIndex from "./Pages/ProductUserIndex";
import ProductNew from "./Pages/ProductNew";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "../../assets/stylesheets/App.css";

const App = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    readProducts();
  }, []);
  const readProducts = () => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  const addProducts = (newProduct) => {
    fetch("/products", {
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readProducts())
      .catch((errors) => console.log("errors", errors));
  };

  const updateProduct = async (editPrd, id) => {
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPrd),
    };
    await fetch(`/products/${id}`, settings);
    readProducts();
  };

  const deleteProduct = (id) => {
    fetch(`/products/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => readProducts())
      .catch((errors) => console.log(errors));
  };

  return (
    <BrowserRouter>
      <Container
        className="bg-gray border mx-auto m-0"
        fluid="md"
        style={{ display: "block", width: "70vw", height: "100vh" }}
      >
        <Row className="bg-light" style={{ minHeight: "13vh" }}>
          <Header {...props} />
        </Row>
        <Row
          className="bg-light border"
          style={{
            display: "flex",
            justifyContent: "center",
            minHeight: "85vh",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/index"
              element={<ProductIndex products={products} />}
            ></Route>
            <Route
              path="/index/:id"
              element={
                <ProductUserIndex
                  products={products}
                  deleteProduct={deleteProduct}
                />
              }
            ></Route>
            <Route
              path="/show/:id"
              element={<ProductShow products={products} props={props} />}
            ></Route>
            <Route
              path="/edit/:id"
              element={
                <ProductEdit
                  products={products}
                  props={props}
                  updateProduct={updateProduct}
                />
              }
            ></Route>
            <Route
              path="/new"
              element={<ProductNew addProducts={addProducts} props={props} />}
            ></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Row>
        <Row className="bg-light">
          <Footer />
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
