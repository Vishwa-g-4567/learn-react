import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const id = todos.length + 1;
  const handleSubmit = () => {
    setTodos((todos) => todos.concat({ id: id, text: input }));
    setInput("");
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="bg-[#fcfff3] rounded-lg p-14">
      <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          className="p-4 bg-[#f5f9eb] w-72 rounded-s-full mr-2.5"
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="bg-[#454545] rounded-full px-5 py-2.5 text-white -ml-10"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <ul className="mt-12">
        {todos.map(({ id, text }) => (
          <>
            <li
              key={id}
              className="flex rounded-full justify-between items-center bg-[#f5f9eb] px-5 py-2 m-2.5"
            >
              {text}
              <button
                className="bg-[#454545] size-10 rounded-full"
                onClick={() => removeTodo(id)}
              >
                X
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
