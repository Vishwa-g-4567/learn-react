import React from "react";

const DefaultInput = ({ handleChange }) => {
  return (
    <>
      <div className="block relative mr-16 cursor-pointer mb-1">
        <input type="radio" onChange={handleChange} name="test" value="" />
        <label className="absolute size-5 ml-3 top-0 cursor-pointer">All</label>
      </div>
    </>
  );
};

export default DefaultInput;
