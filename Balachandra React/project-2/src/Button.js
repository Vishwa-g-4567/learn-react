import React from "react";

const Button = ({ buttonText, reqType, setReqType, setIsLoading }) => {
  return (
    <button
      type="button"
      className={`flex-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
        buttonText === reqType
          ? "bg-gradient-to-br from-transparent to-transparent bg-black"
          : null
      }`}
      onClick={() => {
        setReqType(buttonText);
        setIsLoading(true);
      }}
    >
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
