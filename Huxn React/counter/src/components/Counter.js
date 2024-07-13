import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const isIncrement = () => {
    setCount(count + 1);
  };

  const isDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-8xl">{count}</h1>
      <div className="w-96 flex justify-between items-center mt-20">
        <button
          className="size-16 rounded-full text-4xl bg-[#141517]"
          onClick={isIncrement}
        >
          +
        </button>
        <button
          className="size-16 rounded-full text-4xl bg-[#141517]"
          onClick={isDecrement}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
