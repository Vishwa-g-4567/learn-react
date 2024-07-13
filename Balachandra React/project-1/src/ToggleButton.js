import React from "react";

const ToggleButton = ({ isDarkText, setIsDarkText }) => {
  return (
    <button
      onClick={() => setIsDarkText(!isDarkText)}
      className="w-72 md:w-96 h-14 rounded-lg bg-blue-500 text-white font-medium"
      type="button"
    >
      Toggle Text Color
    </button>
  );
};

export default ToggleButton;
