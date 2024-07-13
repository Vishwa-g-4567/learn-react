import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-blue-500 p-4 flex justify-center items-center w-full">
      <h1>{title}</h1>
    </header>
  );
};

Header.default = {
  title: "Movie Bucket List",
};

export default Header;
