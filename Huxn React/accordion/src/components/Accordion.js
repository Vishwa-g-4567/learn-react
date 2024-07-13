import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="m-5 p-5 bg-[rgb(73,73,73)]">
      <div
        className="flex justify-between w-[40rem] cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex justify-between w-[35rem]">{title}</div>
        <p className="text-2xl">{isActive ? "-" : "+"}</p>
      </div>
      {isActive && (
        <p className="w-[35rem] px-0 py-5 leading-6 text-justify">{content}</p>
      )}
    </section>
  );
};

export default Accordion;
