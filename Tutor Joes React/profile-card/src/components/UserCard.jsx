import React from "react";

const UserCard = ({ name, city, description, skills, online, profile }) => {
  return (
    <>
      <div className="bg-[#353b48] rounded text-[#b3b8cd] shadow shadow-[rgb(0,0,0,0.75)] pt-8 w-[350px] max-w-full text-center relative">
        <span
          className={`text-[#232e39] rounded text-sm font-bold px-2 py-1 absolute top-8 left-8 ${
            online ? "bg-[greenyellow]" : "bg-[#febb0b]"
          }`}
        >
          {online ? "ONLINE" : "OFFLINE"}
        </span>
        <img
          className="border-4 border-white rounded-full p-2 mx-auto cursor-pointer"
          src={profile}
          alt="placeholder img"
        />
        <h3 className="text-lg font-bold my-2.5">{name}</h3>
        <h3 className="text-lg font-bold my-2.5">{city}</h3>
        <p className="text-sm leading-5 text-center my-2.5">{description}</p>
        <div className="flex justify-center gap-2.5">
          <button className="bg-[#0984e3] hover:bg-transparent border border-[#0984e3] rounded text-white font-medium px-6 py-2.5">
            Message
          </button>
          <button className="bg-transparent hover:bg-[#0984e3] border border-[#0984e3] rounded text-white font-medium px-6 py-2.5">
            Following
          </button>
        </div>
        <div className="bg-[#2f3640] text-left px-4 py-2 mt-4">
          <h6 className="text-xs font-bold my-2">Skills</h6>
          <ul className="list-none">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="border border-[#595180] inline-block rounded p-2 ml-2 mb-2 text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserCard;
