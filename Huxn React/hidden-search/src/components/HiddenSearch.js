import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState();
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "show") {
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="show h-screen flex flex-col justify-center items-center transition-all duration-75 ease-in"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
    >
      {showInput ? (
        <input
          type="text"
          className="p-3 bg-transparent border-white rounded shadow shadow-[rgb(35,35,35)] "
          placeholder="Search..."
        />
      ) : (
        <FaSearch
          className="cursor-pointer"
          onClick={() => setShowInput(true)}
        />
      )}
    </section>
  );
};

export default HiddenSearch;
