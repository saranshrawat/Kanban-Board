// global/slice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            status: "todo"
          }
        };
      }
    },

    moveTask(state, action) {
      const { id, status } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.status = status;
    }
  }
});

export const { addTodo, moveTask } = globalSlice.actions;
export default globalSlice.reducer;