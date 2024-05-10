const JsFilterSort = () => {
  return (
    <pre>{`
// filter duplicate
const arrDuplicate = ["a", "b", "c", "a", "d", "f", "b", "d"];
const arrSingle = arrDuplicate.filter((item, i) => arrDuplicate.indexOf(item) === i);
console.log(arrDuplicate, arrSingle);

// filter biasa
const arrToSorting = [2, 10, 4, 30, 6, 50];
console.log(arrToSorting.sort());
arrToSorting.sort((a, b) => console.log(a, b, a - b));
const arrSort = arrToSorting.sort((a, b) => a - b);
console.log(arrSort);
    `}</pre>
  );
};

export default JsFilterSort;
