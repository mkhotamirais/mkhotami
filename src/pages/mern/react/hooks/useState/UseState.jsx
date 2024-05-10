import { useState } from "react";

export const UseState = () => {
  return (
    <div>
      <div>useState</div>
      <p>
        useState, react v-16.8.0. Untuk membuat state dibutuhkan variable dan updaternya. Parameter updaternya harus berupa
        nilai, tapi bisa juga fungsi callback asalkan kembalikan nilai
      </p>
      <div>state counter</div>
      <StateCounter />
    </div>
  );
};

export const StateCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border flex p-2 rounded leading-none">
      <button onClick={() => setCount((prev) => prev - 1)} className="border p-1">
        -
      </button>
      <div className="border rounded p-2">{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)} className="border p-1">
        +
      </button>
    </div>
  );
};
