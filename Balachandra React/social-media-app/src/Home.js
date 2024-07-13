import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import Feed from "./Feed";
import Loading from "./Loading";
import FetchError from "./FetchError";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="w-92 flex flex-col items-center justify-center flex-grow p-4">
      {isLoading && <Loading />}
      {!isLoading && fetchError && <FetchError fetchError={fetchError} />}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="mt-8">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
