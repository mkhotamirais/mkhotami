const JsArray = () => {
  return (
    <pre>{`
const arrInherit = ["a", "b", ["aa", "bb", ["aaa", "bbb"]]];
const arr = ["a", "b", "c"];

// 1. get and change arr value
// .length
// [num]|.at(num)|[num][num]|[num][num][num-n]
// [num] = "newVal"

const arrLength = arrInherit.length;
const arrIndex0 = arrInherit[0];
const arrIndex21 = arrInherit[2][1];
const arrAt3 = arrInherit.at(1);
const arrNewVal = (arrInherit[0] = "aa");
console.log(arrLength, arrIndex0, arrIndex21, arrAt3, arrNewVal, arrInherit);

// 2. arr to string
// .join(separator)
// .toString()
const arrJoin = arr.join(", ");
const arrTostring = arr.toString();
console.log(arrJoin);
console.log(arrTostring);

// 3. change old arr:
// .push(item1, item-n)
// .pop()
// .unshift(item1, item-n)
// .shift()
const arrPop = arr.pop();
console.log(arr, arrPop);
const arrShift = arr.shift();
console.log(arrShift, arr);
const arrPush = arr.push("c", "d");
console.log(arr, arrPush);
const arrUnshift = arr.unshift("z", "a");
console.log(arr, arrUnshift);

// 4. splice, sort, reverse
// .splice(index, howMany, newItem1, newItem-n)
// .sort(compareFunction = optional)
// .reverse(compareFunction = optional)
console.log(arr, arr.reverse());
console.log(arr, arr.sort());
const arrSplice = arr.splice(2, 2, "e", "f");
console.log(arr);
console.log(arrSplice);

// 5. proving array
// Array.isArray(arr)
// arr instanceOf Array
const isArray = Array.isArray(arr);
const instanceArr = arr instanceof Array;
console.log(isArray, instanceArr);

// 6. .map, .filter
const names = ["ahmad", "abdul", "siti"];
names.map((item, i) => console.log(i + 1, item));
const namesFilter = names.filter((item, i) => item.includes("a"));
console.log(namesFilter);
    `}</pre>
  );
};

export default JsArray;
