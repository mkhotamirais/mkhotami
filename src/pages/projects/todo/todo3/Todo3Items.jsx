// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { FaCheck, FaPenToSquare, FaTrashCan, FaXmark } from "react-icons/fa6";
import { deleteTodo, updateTodo } from "../../../../app/features/todoSlice";
import toast from "react-hot-toast";
import { useState } from "react";

const Todo3Items = ({ item, isEdit, setIsEdit }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(item.text);

  const onDelete = () => {
    dispatch(deleteTodo({ id: item.id }));
    toast.success(`delete ${item.text} success`);
  };

  const cancel = () => {
    setIsEdit(null);
    setNewText(item.text);
  };

  const handleEdit = () => {
    let result = { ...item, text: newText, updatedAt: new Date().toISOString() };
    dispatch(updateTodo(result));
    setIsEdit(null);
    toast.success(`update ${item.text} success`);
  };

  const handleChecked = () => {
    let result = { ...item, checked: !item.checked };
    dispatch(updateTodo(result));
  };

  return (
    <div className="border rounded p-1 flex gap-2">
      <input type="checkbox" checked={item.checked} onChange={handleChecked} />
      <div className={`${item.checked ? "line-through" : ""} flex items-center justify-between w-full`}>
        {isEdit === item.id ? (
          <input
            autoFocus
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border-none focus:outline-none bg-inherit"
          />
        ) : (
          <div onClick={() => setIsEdit(item.id)} className="w-full hover:cursor-text">
            {item.text}
          </div>
        )}
        <div className="text-sm min-w-max">{moment(item.createdAt).fromNow()}</div>
      </div>
      <div className="flex gap-3">
        {isEdit === item.id ? (
          <>
            <button onClick={handleEdit} className="text-green-500 hover:opacity-70">
              <FaCheck />
            </button>
            <button onClick={cancel} className="text-red-500 hover:opacity-70">
              <FaXmark />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEdit(item.id)} className="text-green-500 hover:opacity-70">
              <FaPenToSquare />
            </button>
            <button onClick={onDelete} className="text-red-500 hover:opacity-70">
              <FaTrashCan />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
Todo3Items.propTypes;

export default Todo3Items;
