import React from "react";

const ChangeBoxBgColor = ({
  currentColorInputText,
  currentHexCode,
  isDarkText,
}) => {
  return (
    <div
      style={{
        backgroundColor: currentColorInputText,
        color: isDarkText ? "#000" : "#fff",
      }}
      className="flex flex-col justify-center items-center text-3xl border border-black shadow-lg rounded-full size-72 md:size-96"
    >
      <p>{currentColorInputText ? currentColorInputText : "Empty Value"}</p>
      <p>{currentHexCode ? currentHexCode : null}</p>
    </div>
  );
};

export default ChangeBoxBgColor;
