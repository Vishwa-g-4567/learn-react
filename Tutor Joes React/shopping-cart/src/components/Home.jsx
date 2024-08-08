import React, { useState } from "react";
import data from "../assets/product.json";
import Product from "./Product";

const Home = () => {
  const [products] = useState(data);
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
