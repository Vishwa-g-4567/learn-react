import React from "react";

const Input = ({ handleChange, value, title, name }) => {
  return (
    <>
      <div className="block relative mr-16 cursor-pointer">
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <label className="absolute size-5 ml-3 top-0 cursor-pointer">
          {title}
        </label>
      </div>
    </>
  );
};

export default Input;
