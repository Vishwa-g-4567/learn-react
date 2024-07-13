import React from "react";
import { FaPlus } from "react-icons/fa";

const AddMovieListItem = ({
  movieInputText,
  setMovieInputText,
  inputRef,
  handleSubmit,
}) => {
  return (
    <form
      className="w-full flex justify-center items-center fixed top-28"
      onSubmit={handleSubmit}
    >
      <label htmlFor="movieName" className="absolute -left-[9999px]">
        Add Movie Name
      </label>
      <input
        type="text"
        id="movieName"
        className="bg-gray-300 w-80 h-14 border border-none focus:ring-0 text-gray-900 rounded-l-lg p-4 outline-none"
        placeholder="Add Movie Name"
        value={movieInputText}
        onChange={(e) => setMovieInputText(e.target.value)}
        ref={inputRef}
        autoFocus
        required
      />
      <button
        type="submit"
        onClick={() => inputRef.current.focus()}
        className="h-14 rounded-r-lg pr-4 bg-gray-300 text-blue-500 "
        aria-label="Add Movie Name"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddMovieListItem;
