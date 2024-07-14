import React from "react";
import DefaultInput from "./DefaultInput";
import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <h2 className="text-xl mt-2 mb-3">Price</h2>
      <DefaultInput handleChange={handleChange} />
      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - 100"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - 150"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test"
      />
    </>
  );
};

export default Price;
