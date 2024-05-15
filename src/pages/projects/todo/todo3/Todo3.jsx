import { useDispatch, useSelector } from "react-redux";
import Todo3Add from "./Todo3Add";
import Todo3Items from "./Todo3Items";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { deleteChecked, updateAll } from "../../../../app/features/todoSlice";

const Todo3 = () => {
  const { todos } = useSelector((state) => state.todo);
  const [isEdit, setIsEdit] = useState(null);
  const [checkedAll, setCheckedAll] = useState(null);
  const dispatch = useDispatch();
  const checkedLength = todos.filter((d) => d.checked).length;

  const deleteAllChecked = () => {
    dispatch(deleteChecked());
    if (checkedLength < todos.length) {
      toast.success(`delete ${checkedLength} data success`);
    } else if (checkedLength === todos.length) {
      toast.success(`delete All data success`);
    }
    setCheckedAll(false);
  };

  const checkedAllData = () => {
    setCheckedAll((prev) => !prev);
    dispatch(updateAll({ checkedAll }));
  };

  return (
    <div className="border rounded p-3">
      <Todo3Add />
      {todos.length > 0 ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center my-2 mb-3 text-sm">
              <input type="checkbox" checked={checkedAll} onChange={checkedAllData} />
              <span>Checked All data</span>
            </div>
            {checkedLength > 0 && (
              <button
                onClick={deleteAllChecked}
                className="delete border rounded p-2 leading-none bg-red-500 text-white hover:opacity-50 text-xs sm:text-sm"
              >
                Delete All Checked
              </button>
            )}
          </div>
          <div className="flex gap-1 flex-col">
            {todos
              .slice()
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((item) => (
                <Todo3Items key={item.id} item={item} isEdit={isEdit} setIsEdit={setIsEdit} />
              ))}
          </div>
        </>
      ) : (
        <div className="text-center">Data kosong</div>
      )}
      <Toaster />
    </div>
  );
};

export default Todo3;
