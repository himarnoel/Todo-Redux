import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo } from "./Features/Todo/todo";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  
  // Makes the array available
  const todos = useSelector((state) => state.todos);

  const addTodoHandler = (event) => {
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="px-10 bg-blue-200 py-10 flex-col flex items-center justify-center">
      <div className="mb-4 ">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Todo
        </label>
        <div className="flex w-full  justify-center items-center">
          {" "}
          <input
            className="appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo"
            type="text"
            placeholder="Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {todos.map((todo, i) => (
          <div
            key={i}
            className="w-64 rounded-xl h-10 mt-5   shadow-sm bg-blue-500 text-white flex justify-center items-center"
          >
            <p> {todo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
