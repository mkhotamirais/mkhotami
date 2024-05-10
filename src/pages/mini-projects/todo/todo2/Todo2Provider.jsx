import { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
      const result = [...todos, { id: uuidv4(), text: action.text, done: false, createdAt, updatedAt }];
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "changed": {
      const result = todos.map((t) => (t.id === action.todo.id ? action.todo : t));
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "changedAll": {
      const result = todos.map((t) => (action.checkedAll ? { ...t, done: false } : { ...t, done: true }));
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "deleted": {
      const result = todos.filter((t) => t.id !== action.item.id);
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    case "deletedChecked": {
      const result = todos.filter((d) => !d.done);
      localStorage.setItem("todo2", JSON.stringify(result));
      return result;
    }
    default: {
      throw Error(`Unknown action ${action.type}`);
    }
  }
};

// const initialTodo = [
//   { id: "0", text: "hamad", done: true },
//   { id: "1", text: "abdul", done: false },
//   { id: "2", text: "siti", done: false },
// ];
const initialTodo = JSON.parse(localStorage.getItem("todo2")) || [];

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [checkedAll, setCheckedAll] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <TodoContext.Provider value={{ todos, dispatch, checkedAll, setCheckedAll, isEdit, setIsEdit }}>
      {children}
    </TodoContext.Provider>
  );
};
TodoProvider.propTypes;

export default TodoProvider;
