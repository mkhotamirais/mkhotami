import Todo1 from "./todo1/Todo1";
import Todo2 from "./todo2/Todo2";
import TodoProvider from "./todo2/Todo2Provider";
import Todo3 from "./todo3/Todo3";

const Todo = () => {
  return (
    <div>
      <div>Todo (data disimpan di localStorage)</div>
      <div>Todo with (useState, useEffect)</div>
      <Todo1 />
      <div>Todo with (useState, useEffect, useReducer, useContext)</div>
      <TodoProvider>
        <Todo2 />
      </TodoProvider>
      <div>Todo with (Redux)</div>
      <Todo3 />
    </div>
  );
};

export default Todo;
