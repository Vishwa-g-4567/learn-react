import React from "react";
import Input from "./Input";
import DefaultInput from "./DefaultInput";

const Category = ({ handleChange }) => {
  return (
    <>
      <h2 className="text-xl mb-3">Category</h2>
      <DefaultInput handleChange={handleChange} />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </>
  );
};

export default Category;
