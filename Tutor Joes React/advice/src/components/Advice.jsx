import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="text-white text-center">
      <h3 className="text-lg font-semibold">{advice}</h3>
      <button
        type="button"
        className="bg-[#182C61] px-5 py-2.5 rounded my-5"
        onClick={getAdvice}
      >
        Get Advice
      </button>
      <p>
        <span className="mr-1">You have read</span>
        <b className="text-[#2C3A47] bg-white size-5 p-2 rounded-full">
          {` ${count} `}
        </b>
        <span className="ml-1">pieces of advice</span>
      </p>
    </div>
  );
};

export default Advice;
