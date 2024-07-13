import React from "react";
/* import { useState, useEffect } from "react"; */

const UnusedContent = () => {
  /* const greetings = ["Hi", "Hello", "Welcome"];
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(greetings[0]);

  function isadd() {
    setCount(count + 1);
  }

  function issub() {
    setCount(count - 1);
  }

  function handleGreetings() {
    let int = Math.floor(Math.random() * 3);
    setGreeting(greetings[int]);
  } */

  /* const greetings = ["Hi", "Hello", "Welcome"];
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 1500); // 10000 milliseconds = 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [greetings.length]);

  useEffect(() => {
    setCurrentGreeting(greetings[index]);
  }, [index, greetings]); */

  /* useEffect(() => {
    JSON.parse(localStorage.getItem("movie_list"));
  }, []); */

  /* const saveLocalStorage = (movieListItems) => {
    localStorage.setItem("movie_list", JSON.stringify(movieListItems));
  }; */

  /* saveLocalStorage(movieListItems); */

  return (
    <main className="w-full flex flex-col flex-grow justify-center items-center overflow-y-auto">
      {/* <span className="mb-4">{greeting} All!</span>
      <button
        type="button"
        onClick={handleGreetings}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 self-center"
      >
        Change Text
      </button>
      <div className="flex items-center justify-center p-4 gap-4">
        <button
          type="button"
          onClick={isadd}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 self-center"
        >
          +
        </button>
        <span>{count}</span>
        <button
          type="button"
          onClick={issub}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          -
        </button>
      </div> */}

      {/* <p>{currentGreeting} All!</p> */}
    </main>
  );
};

export default UnusedContent;
