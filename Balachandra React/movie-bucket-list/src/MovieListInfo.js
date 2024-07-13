import React from "react";

const MovieListInfo = ({ currentMovieItem, currentMovieCheck }) => {
  return (
    <p className="mt-44 mb-3 w-[372px] flex items-center justify-evenly text-sm">
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{`${
        currentMovieItem.length
      } ${currentMovieItem.length > 1 ? "Bucket Lists" : "Bucket List"}`}</span>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{`${currentMovieCheck.length} Complete`}</span>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{`${
        currentMovieItem.length - currentMovieCheck.length
      } Incomplete`}</span>
    </p>
  );
};

export default MovieListInfo;
