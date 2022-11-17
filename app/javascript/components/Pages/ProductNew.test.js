import React from "react";
import { render, screen } from "@testing-library/react";
import ProductNew from "./ProductNew";
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'



describe("<ProductNew />", (props) => {
    
  it("renders without crashing", () => {
    let newUser = {current_user: {id: 1, email: 'guandoge@chan.com', created_at: '2022-11-14T21:09:21.582Z', updated_at: '2022-11-14T21:09:21.582Z'}}
    render(
        <BrowserRouter>
            <ProductNew current_user={newUser} />
        </BrowserRouter>
    );
    // screen.debug()
    // screen.logTestingPlaygroundURL()
  });

  it("renders the form text", () => {
    let newUser = {current_user: {id: 1, email: 'guandoge@chan.com', created_at: '2022-11-14T21:09:21.582Z', updated_at: '2022-11-14T21:09:21.582Z'}}


    render(
    <BrowserRouter>
     <ProductNew current_user={newUser}/>
    </BrowserRouter>
   )
    const newTitle = screen.getByText("Product Title")
    expect(newTitle).toBeInTheDocument()
    const newDescription = screen.getByText("Product Description")
    expect(newDescription).toBeInTheDocument()
    const newPrice = screen.getByText("Product Price")
    expect(newPrice).toBeInTheDocument()
    const newImage = screen.getByText("Image URL")
    expect(newImage).toBeInTheDocument()
  })

});