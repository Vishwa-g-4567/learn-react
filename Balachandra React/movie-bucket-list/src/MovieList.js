import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ currentMovieItem, handleCheck, handleDelete }) => {
  return (
    <ul className="list-none overflow-y-auto">
      {currentMovieItem.map((item) => {
        return (
          <MovieListItem
            item={item}
            key={item.id}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
