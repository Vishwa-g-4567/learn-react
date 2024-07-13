import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";
import apiRequest from "./ApiRequest";

function App() {
  const API_URL = "http://localhost:3500/currentMovieItem";

  const [currentMovieItem, setCurrentMovieItem] = useState([]);

  const [movieInputText, setMovieInputText] = useState("");

  const [currentSearchMovieItem, setSearchMovieItem] = useState("");

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentMovieItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const movieListItems = await response.json();
        setCurrentMovieItem(movieListItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchCurrentMovieItem())();
    }, 2000);
  }, []);

  const inputRef = useRef();

  const addMovieListItem = async (movieInputText) => {
    const id = currentMovieItem.length
      ? currentMovieItem[currentMovieItem.length - 1].id + 1
      : 1;
    const addNewMovieListItem = { id: id, title: movieInputText, check: false };
    const movieListItems = [...currentMovieItem, addNewMovieListItem];
    setCurrentMovieItem(movieListItems);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewMovieListItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    let movieListItems = currentMovieItem.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setCurrentMovieItem(movieListItems);
    const myMovieListItem = movieListItems.filter(
      (movieListItem) => movieListItem.id === id
    );
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ check: myMovieListItem[0].check }),
    };
    const REQURL = `${API_URL}/${id}`;
    const result = await apiRequest(REQURL, updateOptions);
    if (result) setFetchError(result);
  };
  const handleDelete = async (id) => {
    let movieListItems = currentMovieItem.filter((item) => item.id !== id);
    setCurrentMovieItem(movieListItems);
    const deleteOptions = {
      method: "DELETE",
    };
    const REQURL = `${API_URL}/${id}`;
    const result = await apiRequest(REQURL, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovieListItem(movieInputText);
    setMovieInputText("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen m-auto text-center text-4xl">
      <Header title="Movie Bucket List" />
      <Content
        currentMovieItem={currentMovieItem.filter((currentMovieItem) =>
          currentMovieItem.title
            .toLowerCase()
            .includes(currentSearchMovieItem.toLowerCase())
        )}
        currentMovieCheck={currentMovieItem.filter((currentMovieItem) => {
          return currentMovieItem.check;
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        movieInputText={movieInputText}
        setMovieInputText={setMovieInputText}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
        currentSearchMovieItem={currentSearchMovieItem}
        setSearchMovieItem={setSearchMovieItem}
        fetchError={fetchError}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
