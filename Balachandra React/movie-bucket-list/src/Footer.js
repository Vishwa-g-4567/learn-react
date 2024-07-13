import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="bg-blue-500 p-4 flex justify-center items-center w-full">
      <p>Copyright &copy; {year.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
