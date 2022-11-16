import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ProductEdit from "./Pages/ProductEdit";
import ProductShow from "./Pages/ProductShow";
import ProductIndex from "./Pages/ProductIndex";
import ProductNew from "./Pages/ProductNew";
import AboutUs from "./Pages/AbuoutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import data from "./mockProducts";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Container
        className="bg-light border mx-auto m-2"
        fluid="md"
        style={{ display: "block", width: "70vw", backgroundColor: "gray" }}
      >
        <Row className="bg-light" style={{ maxHeight: "12vh" }}>
          <Header />
        </Row>
        <Row className="bg-light" style={{ height: "3vh" }}>
          <Navigation />
        </Row>
        <Row
          className="bg-light"
          style={{ display: "flex", minHeight: "75vh" }}
        >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/index"
              element={<ProductIndex products={data} />}
            ></Route>
            <Route path="/show" element={<ProductShow />}></Route>
            <Route path="/edit" element={<ProductEdit />}></Route>
            <Route path="/new" element={<ProductNew />}></Route>
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
