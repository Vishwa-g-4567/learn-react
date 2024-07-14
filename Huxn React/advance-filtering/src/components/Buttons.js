import React from "react";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="rounded px-5 py-2.5 mr-2 bg-transparent border-[0.6px] border-[#ccc] text-[#323232]"
    >
      {title}
    </button>
  );
};

export default Buttons;
