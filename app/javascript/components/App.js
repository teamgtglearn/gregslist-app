import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ProductEdit from "./Pages/ProductEdit";
import ProductShow from "./Pages/ProductShow";
import ProductIndex from "./Pages/ProductIndex";
import ProductNew from "./Pages/ProductNew";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Container
        className="bg-light border mx-auto m-2"
        fluid="md"
        style={{ display: "block", width: "70vw", backgroundColor: "gray" }}
      >
        <Row className="bg-light border" style={{ height: "15vh" }}>
          <Header />
        </Row>
        <Row className="bg-light border" style={{ height: "80vh" }}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/index" element={<ProductIndex />}></Route>
            <Route path="/show" element={<ProductShow />}></Route>
            <Route path="/edit" element={<ProductEdit />}></Route>
            <Route path="/new" element={<ProductNew />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Row>
        <Row className="bg-light border">
          <Footer />
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
