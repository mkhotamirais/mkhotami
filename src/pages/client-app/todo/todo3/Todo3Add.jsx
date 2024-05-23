import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../app/features/todoSlice";
import toast from "react-hot-toast";

const Todo3Add = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!text || text == "") {
      toast.error("input tidak boleh kosong");
      return;
    }
    dispatch(addTodo({ text }));
    setText("");
    toast.success(`add ${text} success`);
  };
  return (
    <form onSubmit={handleAdd} className="flex gap-1 mb-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add todo"
        className="border rounded focus:outline-cyan-300 w-full bg-inherit p-1"
      />
      <button type="submit" className="border rounded px-2 bg-cyan-500 hover:opacity-70">
        add
      </button>
    </form>
  );
};

export default Todo3Add;
