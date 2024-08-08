import React, { useContext } from "react";
import { DataContext } from "../App";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(DataContext);
  const name =
    product.name.length >= 21
      ? product.name.substring(0, 20) + "..."
      : product.name;
  return (
    <div className="w-[300px] h-[310px] border border-[#ccc] rounded">
      <div className="w-full h-[200px] px-2.5 pt-2.5">
        <img
          className="w-full h-full rounded object-cover"
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="p-2.5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-[#777] font-medium">Price : {product.amt}</p>
        {cart.includes(product) ? (
          <button
            type="button"
            className="mt-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() =>
              setCart(cart.filter((cart) => cart.id !== product.id))
            }
          >
            Remove from Cart
          </button>
        ) : (
          <button
            type="button"
            className="mt-1 px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
            onClick={() => setCart([...cart, product])}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
