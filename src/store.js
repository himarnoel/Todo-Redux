import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/Todo/todo";

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
