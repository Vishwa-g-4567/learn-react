import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <aside className="w-1/6 fixed h-full border-r border-r-[#f3f3f3] flex flex-col whitespace-nowrap items-center">
      <h1 className="text-2xl mb-12 mt-7">
        <TiShoppingCart className="-scale-x-[1]" />
      </h1>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </aside>
  );
};

export default Sidebar;
