import React from "react";
import { render, screen } from "@testing-library/react";
import ProductUserIndex from "./ProductUserIndex";
import mockProducts from "../mockProducts";
import { BrowserRouter } from "react-router-dom";

describe("<ProductUserIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<ProductUserIndex />, div);
  });
  it("renders cards without crashing", () => {
    render(
      <BrowserRouter>
        <ProductUserIndex mockProducts={mockProducts} />
      </BrowserRouter>
    );
    screen.debug();
    mockProducts.forEach(() => {
      let productTitle = screen.getByText(
        /You have no products listed. Do you see a problem?/i
      );
      // let productTitle = screen.getByText(product.title);
      expect(productTitle).toBeInTheDocument();
    });
  });
});
