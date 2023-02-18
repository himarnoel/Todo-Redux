import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <div>
        <div className="w-64 rounded-xl h-10 mt-5   shadow-sm bg-blue-500 text-white flex justify-center items-center">
          Wash Plate
        </div>
      </div>
    </div>
  );
}

export default App;
