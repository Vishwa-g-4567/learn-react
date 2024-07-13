import React, { useContext } from "react";
import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";
import DataContext from "./context/DataContext";

const Header = ({ title }) => {
  const { width } = useContext(DataContext);
  return (
    <header className="w-full bg-[#66d8f5] p-4 flex justify-between items-center">
      <h1 className="text-2xl">{title}</h1>
      {width < 640 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
