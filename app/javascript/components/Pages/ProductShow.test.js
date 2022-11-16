import React from "react";
import { render } from "@testing-library/react";
import ProductShow from "./ProductShow";

describe("<ProductIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<ProductShow />, div);
  });
});
