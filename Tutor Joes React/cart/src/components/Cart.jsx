import React, { useState } from "react";

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <>
      <h1 className="text-2xl font-semibold">
        Number of items in the cart {cartCount}
      </h1>
      <button
        type="button"
        className="px-5 py-2.5 bg-slate-500 rounded-lg"
        onClick={handleCart}
      >
        Cart
      </button>
    </>
  );
};

export default Cart;
