const Todo1Add = ({ text, setMsg, setText, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="flex gap-1">
      <input
        onFocus={() => setMsg("")}
        autoFocus
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-inherit border rounded p-1 w-full focus:outline-cyan-300"
        placeholder="add todo"
      />
      <button type="submit" className="border rounded bg-cyan-500 text-white px-2 hover:opacity-70">
        Add
      </button>
    </form>
  );
};
Todo1Add.propTypes;

export default Todo1Add;
