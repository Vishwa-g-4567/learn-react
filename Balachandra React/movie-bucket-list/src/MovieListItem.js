import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const MovieListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li
      key={item.id}
      className="flex flex-grow items-center gap-2 my-1 p-2 bg-gray-300 before:content-['\2008'] rounded-lg"
    >
      <input
        type="checkbox"
        name={item.title}
        id={item.title}
        className="min-w-12 min-h-12 me-1"
        checked={item.check}
        onChange={() => handleCheck(item.id)}
      />
      <label
        htmlFor={item.title}
        style={item.check ? { textDecoration: "line-through" } : null}
        className="flex-grow"
      >
        {item.title}
      </label>
      <FaRegTrashAlt
        role="button"
        tabIndex="0"
        className="text-red-600 min-w-12 h-9 cursor-pointer"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.title}`}
      />
    </li>
  );
};

export default MovieListItem;
