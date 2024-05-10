import { useContext, useState } from "react";
import { TodoContext } from "./Todo2Provider";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
import { enqueueSnackbar } from "notistack";
import moment from "moment";

const Todo2Items = ({ item, isEdit, setIsEdit }) => {
  const { dispatch } = useContext(TodoContext);
  const [newText, setNewText] = useState(item.text);

  const handleDelete = (item) => {
    dispatch({ type: "deleted", item });
    enqueueSnackbar(`delete ${item.text} success`, { variant: "success" });
  };

  const handleChecked = (todo) => {
    let result = { ...todo, done: !todo.done };
    dispatch({ type: "changed", todo: result });
  };

  const handleCancel = () => {
    setIsEdit(null);
  };

  const editTodo = (todo) => {
    let result = { ...todo, text: newText, updatedAt: new Date().toISOString() };
    dispatch({ type: "changed", todo: result });
    enqueueSnackbar(`Update ${item.text} success`, { variant: "success" });
    setIsEdit(null);
  };

  return (
    <div className="border rounded p-1 gap-2 flex justify-between">
      <input type="checkbox" checked={item.done} onChange={() => handleChecked(item)} />
      <div className={`${item.done ? "line-through" : ""} flex items-center justify-between w-full`}>
        {isEdit === item.id ? (
          <input
            autoFocus
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="capitalize w-full bg-inherit focus:outline-none"
          />
        ) : (
          <div onClick={() => setIsEdit(item.id)} className="capitalize w-full hover:cursor-text">
            {item.text}
          </div>
        )}
        <div className="text-sm min-w-max">{moment(item.createdAt).fromNow()}</div>
      </div>
      <div className="flex gap-3">
        {isEdit === item.id ? (
          <>
            <button onClick={() => editTodo(item)} className="text-green-500 hover:opacity-70">
              <FaCheck />
            </button>
            <button onClick={handleCancel} className="text-red-500 hover:opacity-70">
              <FaXmark />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEdit(item.id)} className="text-green-500 hover:opacity-70">
              <FaPenToSquare />
            </button>
            <button onClick={() => handleDelete(item)} className="text-red-500 hover:opacity-70">
              <FaTrashAlt />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
Todo2Items.propTypes;

export default Todo2Items;
