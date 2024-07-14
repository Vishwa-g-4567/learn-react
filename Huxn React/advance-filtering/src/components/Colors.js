import React from "react";
import DefaultInput from "./DefaultInput";
import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <h2 className="text-xl mt-2 mb-3">Color</h2>
      <DefaultInput handleChange={handleChange} />
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        color="black"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        color="blue"
        name="test"
      />
      <Input handleChange={handleChange} value="red" title="Red" name="test" />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        color="green"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        color="white"
        name="test"
      />
    </>
  );
};

export default Colors;
