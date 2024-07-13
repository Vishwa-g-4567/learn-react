import React from "react";
import MovieList from "./MovieList";
import AddMovieListItem from "./AddMovieListItem";
import SearchMovieListItem from "./SearchMovieListItem";
import MovieListInfo from "./MovieListInfo";
import FetchInfo from "./FetchInfo";

const Content = ({
  currentMovieItem,
  currentMovieCheck,
  handleCheck,
  handleDelete,
  movieInputText,
  setMovieInputText,
  inputRef,
  handleSubmit,
  currentSearchMovieItem,
  setSearchMovieItem,
  fetchError,
  isLoading,
}) => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center overflow-y-auto">
      <AddMovieListItem
        movieInputText={movieInputText}
        setMovieInputText={setMovieInputText}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
      />
      <SearchMovieListItem
        currentSearchMovieItem={currentSearchMovieItem}
        setSearchMovieItem={setSearchMovieItem}
      />
      {currentMovieItem.length ? (
        <>
          <MovieListInfo
            currentMovieItem={currentMovieItem}
            currentMovieCheck={currentMovieCheck}
          />
          <MovieList
            currentMovieItem={currentMovieItem}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <FetchInfo isLoading={isLoading} fetchError={fetchError} />
      )}
    </main>
  );
};

export default Content;
