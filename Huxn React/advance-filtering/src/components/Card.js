import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, prevPrice, newPrice, reviews, star }) => {
  return (
    <>
      <div className="m-2 border-2 border-[#ededed] p-5 cursor-pointer rounded">
        <img className="w-52 mb-4" src={img} alt={title} />
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <div className="mb-4 flex items-center">
          {star}
          {star}
          {star}
          {star}
          <span className="text-sm ml-2.5">{reviews}</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="line-through mr-2.5">{prevPrice}</span>
            <span>{newPrice}</span>
          </div>
          <BsFillBagHeartFill className="text-[#535353]" />
        </div>
      </div>
    </>
  );
};

export default Card;
