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
import "./App.css";

const App = (props) => {
  const [products, setProducts] = useState([]);
  console.log(props);
  useEffect(() => {
    readProducts();
  }, []);

  // useEffect(() => {

  //     let currentArr = products.find(
  //       (product) => product.user_id == props.current_user.id
  //     );
  //     setCurrentUserProducts(currentArr);
  //   }
  // }, [props]);

  const readProducts = () => {
    fetch("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <BrowserRouter>
      <Container
        className="bg-light border mx-auto m-2"
        fluid="md"
        style={{ display: "block", width: "70vw", backgroundColor: "gray" }}
      >
        <Row className="bg-light" style={{ maxHeight: "12vh" }}>
          <Header {...props} />
        </Row>
        <Row
          className="bg-light border"
          style={{ display: "flex", minHeight: "75vh" }}
        >
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/index"
              element={<ProductIndex products={products} />}
            ></Route>
            <Route
              path="/index/:userId"
              element={<ProductUserIndex products={products} />}
            ></Route>
            <Route
              path="/show/:id"
              element={<ProductShow products={products} />}
            ></Route>
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
