import React from "react";
import Image from "../assets/error-404-06.jpeg";

const notFound = () => {
  return (
    <>
      <img src={Image} style={{ maxHeight: "80vh" }} />
    </>
  );
};

export default notFound;
