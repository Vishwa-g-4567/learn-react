import React from "react";

const SearchMovieListItem = ({
  currentSearchMovieItem,
  setSearchMovieItem,
}) => {
  return (
    <form
      className="w-full flex justify-center items-center fixed top-44"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="movieName" className="absolute -left-[9999px]">
        Search Movie Name
      </label>
      <input
        type="text"
        id="searchMovie"
        className="bg-gray-300 w-[372px] h-14 border border-none focus:ring-0 text-gray-900 rounded-lg p-4 outline-none"
        placeholder="Search Movie"
        value={currentSearchMovieItem}
        onChange={(e) => setSearchMovieItem(e.target.value)}
      />
    </form>
  );
};

export default SearchMovieListItem;
