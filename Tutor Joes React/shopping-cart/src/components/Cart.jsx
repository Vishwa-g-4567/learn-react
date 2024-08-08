import React, { useContext, useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import { DataContext } from "../App";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <h1 className="text-2xl font-semibold">Cart Products</h1>
      <div className="flex flex-wrap gap-5 py-2.5">
        {cart.map((product) => (
          <div
            className="w-[428px] h-[150px] relative flex gap-5 items-center border border-[#ccc] rounded"
            key={product.id}
          >
            <div className="w-[200px] h-full p-2.5">
              <img
                className="w-full h-full object-cover rounded"
                src={product.img}
                alt={product.name}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-[#777] font-medium">Price Rs: {product.amt}</p>
            </div>
            <button
              type="button"
              className="absolute end-2.5 top-2.5"
              onClick={() =>
                setCart(cart.filter((cart) => cart.id !== product.id))
              }
            >
              <MdClear />
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold">Total Amount Rs. {total}</h2>
    </>
  );
};

export default Cart;
