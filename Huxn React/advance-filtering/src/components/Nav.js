import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="flex w-5/6 justify-between items-center p-5 border-b border-b-[#f3f3f3] relative left-[16.666667%]">
      <div>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className="search-input px-5 ml-5 py-2.5 bg-[#f7f6f6] rounded-full relative w-64"
          placeholder="Enter your search shoes..."
        />
      </div>
      <div className="flex justify-center mr-5 items-center gap-5">
        <a href="#">
          <FiHeart className="size-6 text-[#494949]" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="size-6 text-[#494949]" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="size-6 text-[#494949]" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
