import React from "react";
import Buttons from "./Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="ml-64 mt-5">
        <h2 className="ml-3 mb-5">Recommended</h2>
        <div className="flex ml-3">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
