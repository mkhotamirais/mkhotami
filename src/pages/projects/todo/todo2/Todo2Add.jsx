import { useContext, useState } from "react";
import { TodoContext } from "./Todo2Provider";
import { enqueueSnackbar } from "notistack";

const Todo2Add = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);
  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "added", text });
    setText("");
    enqueueSnackbar(`Add ${text} success`, { variant: "success" });
  };
  return (
    <form onSubmit={addTodo} className="flex gap-1 mb-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded p-1 focus:outline-cyan-300 w-full bg-inherit"
        placeholder="add todo"
      />
      <button type="submit" className="border rounded px-2 bg-cyan-500 text-white hover:opacity-70">
        Add
      </button>
    </form>
  );
};

export default Todo2Add;
