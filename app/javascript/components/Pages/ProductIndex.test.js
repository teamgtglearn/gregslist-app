import React from "react";
import { render } from "@testing-library/react";
import ProductIndex from "./ProductIndex";

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<ProductIndex />, div);
  });
});
