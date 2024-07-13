import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const calculate = () => {
    let answer = eval(inputValue);
    setInputValue(answer);
  };
  const clear = () => {
    setInputValue("");
  };
  const setZero = () => {
    setInputValue("0");
  };
  return (
    <>
      <form className="relative grid gap-1">
        <input
          type="text"
          className="col-span-4 text-right p-2.5 text-lg rounded-lg"
          value={inputValue}
          autoFocus
        />
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white"
          onClick={() => display("%")}
        >
          %
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white"
          onClick={() => setZero()}
        >
          CE
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white"
          onClick={() => clear()}
        >
          C
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white"
          onClick={() => display("/")}
        >
          /
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white "
          onClick={() => display("7")}
        >
          7
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("8")}
        >
          8
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("9")}
        >
          9
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("*")}
        >
          *
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("4")}
        >
          4
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("5")}
        >
          5
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("6")}
        >
          6
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("-")}
        >
          -
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("1")}
        >
          1
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("2")}
        >
          2
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("3")}
        >
          3
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("+")}
        >
          +
        </span>
        <span className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  ">
          +/-
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white  "
          onClick={() => display("0")}
        >
          0
        </span>
        <span
          className="grid size-14 rounded-md bg-[#292929] active:opacity-50 place-items-center border border-black/10 text-white "
          onClick={() => display(".")}
        >
          .
        </span>
        <span
          className="grid size-14 rounded-md bg-sky-500 active:bg-sky-500/50 place-items-center border border-black/10 text-white"
          onClick={() => calculate()}
        >
          =
        </span>
      </form>
    </>
  );
};

export default Calculator;
