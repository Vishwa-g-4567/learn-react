import React, { useReducer } from "react";

const Todo = () => {
  const initialState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { id: Date.now(), name: action.payload }];
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.payload);
      case "UPDATE_TASK":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.newName }
            : item
        );
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold">Task List {state.length}</h3>
        <label htmlFor="task">Enter Task</label>
        <input
          type="text"
          id="task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: "ADD_TASK", payload: e.target.value });
            }
          }}
        />
        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                      id: todo.id,
                      newName: prompt("Enter the update name", todo.name),
                    },
                  })
                }
              >
                Update
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: todo.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
