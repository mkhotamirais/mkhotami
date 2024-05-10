import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
import moment from "moment";
import { useState } from "react";

const Todo1Items = ({ item, setMsg, deleteTodo, checkedId, isEdit, setIsEdit, editTodo }) => {
  const [newText, setNewText] = useState(item.text);

  const onCancel = () => {
    setNewText(item.text);
    setIsEdit(null);
  };

  return (
    <div key={item.id} className="border p-1 gap-3 rounded flex justify-between">
      <div className="capitalize gap-2 flex w-full">
        <input type="checkbox" checked={item.checked} onChange={() => checkedId(item.id)} />
        <div className={`${item?.checked ? "line-through" : null} inline-flex items-center justify-between w-full`}>
          {isEdit === item.id ? (
            <input
              onFocus={() => setMsg(null)}
              autoFocus
              className="bg-inherit w-full capitalize focus:outline-none"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <div onClick={() => setIsEdit(item.id)} className="w-full hover:cursor-text">
              {item.text}
            </div>
          )}
          <div className="min-w-max italic text-sm">{moment(item.createdAt).fromNow()}</div>
        </div>
      </div>
      <div className="flex gap-3">
        {isEdit === item.id ? (
          <>
            <button onClick={(e) => editTodo(e, item, newText)} className="text-green-500 hover:opacity-70">
              <FaCheck />
            </button>
            <button onClick={onCancel} className="text-red-500 hover:opacity-70">
              <FaXmark />
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEdit(item.id)} className="text-green-500 hover:opacity-70">
              <FaPenToSquare />
            </button>
            <button onClick={() => deleteTodo(item)} className="text-red-500 hover:opacity-70">
              <FaTrashAlt />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
Todo1Items.propTypes;

export default Todo1Items;
