import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      //action.payload is the new state
      const todo = {
        id: uuid(),
        text: action.payload,
      };
      state.push(todo);
    },
  },
});
//For dispact to make all actions available
export const { addTodo } = todoSlice.actions;

//to configure store
export default todoSlice.reducer;
