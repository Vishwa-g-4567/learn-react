import React, { useState } from "react";

const ToggleButtonColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  };
  return (
    <>
      <div
        style={{ backgroundColor: bgColor, color: textColor }}
        className="h-screen flex flex-col justify-center items-center"
      >
        <button
          style={{
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
          className="absolute top-5 right-5 px-5 py-2.5 bg-transparent rounded"
          onClick={handleClick}
        >
          {bgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
        </button>
        <h1 className="text-7xl font-bold leading-[80px]">
          Welcome To A Real World
        </h1>
      </div>
    </>
  );
};

export default ToggleButtonColor;
