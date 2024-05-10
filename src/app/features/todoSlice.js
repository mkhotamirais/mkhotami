import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const setLocal = (state) => {
  localStorage.setItem("todo3", JSON.stringify(state.todos));
};

// const todos = [
//   { id: "1", text: "todo1", checked: false },
//   { id: "2", text: "todo2", checked: true },
//   { id: "3", text: "todo3", checked: true },
// ];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todo3")) || [],
  },
  reducers: {
    addTodo(state, action) {
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
      const result = { id: uuidv4(), text: action.payload.text, checked: false, createdAt, updatedAt };
      state.todos.push(result);
      setLocal(state);
    },
    deleteTodo(state, action) {
      const others = state.todos.filter((item) => item.id !== action.payload.id);
      state.todos = others;
      setLocal(state);
    },
    updateTodo(state, action) {
      state.todos = state.todos.map((t) => (t.id === action.payload.id ? action.payload : t));
      setLocal(state);
    },
    updateAll(state, action) {
      state.todos = state.todos.map((t) => (action.payload.checkedAll ? { ...t, checked: false } : { ...t, checked: true }));
      setLocal(state);
    },
    deleteChecked(state) {
      state.todos = state.todos.filter((t) => !t.checked);
      setLocal(state);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateAll, deleteChecked } = todoSlice.actions;

export default todoSlice.reducer;
