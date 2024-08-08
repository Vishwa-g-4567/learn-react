import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-2xl font-semibold">Count : {count}</h1>
      <button
        className="px-2.5 py-1 mr-2.5 rounded bg-gray-500"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="px-2.5 py-1 rounded bg-gray-500"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </>
  );
};

export default App;
