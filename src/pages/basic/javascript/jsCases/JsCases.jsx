import JsFilterArrayObject from "./JsFilterArrayObject";
import JsFilterSort from "./JsFilterSort";

const JsCases = () => {
  return (
    <article>
      <h2>JsCases</h2>
      <ul className="list-inside list-disc">
        <li>
          <b>filter duplicate and sorting</b> Sorting Array (When sort() compares two values, it sends the values to the
          compare function, and sorts the values according to the returned (negative, zero, positive) value.)
          <JsFilterSort />
        </li>
        <li>
          <b>filter array of object</b>
          <JsFilterArrayObject />
        </li>
        <li>find max value in array of object</li>
        <pre>{`
// ------ Cara 1
const data = [{id: 1, value: 2},{id: 2, value: 4},{id: 3, value: 7},];
const maxVal = data.reduce((acc, d) => acc = acc > d.value ? acc : d.value, 0);
const maxVal2 = Math.max(...data.map((data) => data.value));
console.log(maxVal, maxVal2)
        `}</pre>
      </ul>
    </article>
  );
};

export default JsCases;
