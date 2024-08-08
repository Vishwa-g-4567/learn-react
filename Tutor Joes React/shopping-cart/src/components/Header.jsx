import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <nav className="w-full h-[50px] flex justify-between bg-[#222] items-center px-5">
      <Link to={"/"}>
        <h1 className="text-2xl text-white">Food Cart</h1>
      </Link>
      <ul className="inline-flex text-white gap-2.5">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            View Cart{" "}
            <span className="size-6 inline-block text-center leading-6 bg-[yellowgreen] rounded-full">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
