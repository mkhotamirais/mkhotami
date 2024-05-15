import { useEffect, useState } from "react";
import Todo1Add from "./Todo1Add";
import Todo1Items from "./Todo1Items";

// const initialTodo = [
//   { id: "1", text: "todo1", done: false },
//   { id: "2", text: "todo2", done: true },
//   { id: "3", text: "todo3", done: true },
// ];

const Todo1 = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("todo1")) || []);
  }, []);

  const checkedLength = data.filter((d) => d.checked).length;
  useEffect(() => {
    if (checkedLength !== data.length) setCheckedAll(false);
    else setCheckedAll(true);
  }, [checkedLength, data]);

  const setResult = (result) => {
    setData(result);
    localStorage.setItem("todo1", JSON.stringify(result));
  };

  const addTodo = (e) => {
    e.preventDefault();
    setMsg("");
    if (text) {
      const id = data.reduce((acc, d) => (acc = acc > d.id ? acc : d.id), 0);
      const createdAt = new Date().toISOString();
      const updatedAt = new Date().toISOString();
      const result = [...data, { id: id + 1, text, checked: false, createdAt, updatedAt }];
      setResult(result);
      setText("");
      setMsg(`Ok: add ${text} success`);
    } else setMsg(`Err: Data harus diisi`);
  };

  const deleteTodo = (item) => {
    setMsg("");
    const result = data.filter((d) => d.id !== item.id);
    setMsg(`Ok: Delete ${item.text} success`);
    setResult(result);
  };

  const checkedId = (id) => {
    setMsg("");
    const result = data.map((d) => (d.id === id ? { ...d, checked: !d.checked } : d));
    setResult(result);
  };

  const editTodo = (e, item, text) => {
    e.preventDefault();
    const otherData = data.filter((d) => d.id !== item.id);
    const match = data.find((d) => d.id === item.id);
    match.text = text;
    match.updatedAt = new Date().toISOString();
    const result = [...otherData, match];
    setResult(result);
    setIsEdit(false);
    setMsg(`Ok: Update ${match.text} success`);
  };

  const deleteAllChecked = () => {
    const result = data.filter((d) => !d.checked);
    if (result.length === 0) setMsg(`Ok: Success delete all data, total deleted ${data.length} data`);
    else setMsg(`Ok: Delete ${data.length - result.length} data success`);
    setResult(result);
  };

  const checkedAllData = () => {
    setMsg("");
    setCheckedAll((prev) => !prev);
    const result = data.map((d) => (checkedAll ? { ...d, checked: false } : { ...d, checked: true }));
    setResult(result);
  };

  return (
    <div className="border rounded p-3 flex flex-col gap-1">
      <Todo1Add text={text} setText={setText} addTodo={addTodo} setMsg={setMsg} />
      {msg && msg.startsWith("Ok") ? (
        <div className="text-cyan-500 italic text-center">{msg}</div>
      ) : msg && msg.startsWith("Err") ? (
        <div className="text-red-500 italic text-center">{msg}</div>
      ) : null}
      {data.length > 0 ? (
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
          <div className="flex flex-col gap-1">
            {data
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((item) => (
                <Todo1Items
                  key={item?.id}
                  item={item}
                  deleteTodo={deleteTodo}
                  checkedId={checkedId}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  setText={setText}
                  editTodo={editTodo}
                  setMsg={setMsg}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="text-center italic">Data kosong</div>
      )}
    </div>
  );
};

export default Todo1;
