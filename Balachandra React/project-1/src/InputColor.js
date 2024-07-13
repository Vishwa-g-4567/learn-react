import React from "react";
import colorNames from "colornames";

const InputColor = ({
  currentColorInputText,
  setCurrentColorInputText,
  setCurrentHexCode,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className="absolute -left-[9999px]" htmlFor="addColorName">
        Add Color Name
      </label>
      <input
        className="bg-white w-72 md:w-96 h-14 border border-black focus:ring-0 text-gray-900 rounded-lg p-4 outline-none"
        type="text"
        placeholder="Add Color Name"
        value={currentColorInputText}
        onChange={(e) => {
          setCurrentColorInputText(e.target.value);
          setCurrentHexCode(colorNames(e.target.value));
        }}
        autoFocus
        required
      />
    </form>
  );
};

export default InputColor;
