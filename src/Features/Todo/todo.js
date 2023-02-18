import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { id: nanoid(), text },
        };
      },
    },
  },
});
//For dispact to make all actions available
export const { addTodo } = todoSlice.actions;

//to configure store
export default todoSlice.reducer;
