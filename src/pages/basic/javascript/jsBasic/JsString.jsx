const JsString = () => {
  return (
    <pre>{`
const str = "abcde 1234 bcdef 2345";
// 1. return number
// .length
// .indedOf(searchVal, start = 0)
// .lastIndedOf(searchVal, start = 0)
// .search(searchVal = str|regex)

const indexOfB = str.indexOf("b");
const indexOfB2 = str.indexOf("b", 2);
const searchA = str.search("a");
const searchB = str.search("b");
const searchG = str.search("g");
// const matchC = str.match(/c/g);
console.log(indexOfB, indexOfB2, searchA, searchB, searchG);

// 2. return string
// [num]|[str.length-1]|charAt(num)
// .replace(searchVal = str|regex, newVal)
// .replaceALl(searchVal = str|regex, newVal)
// .slice(start = 0, end = length)
// .slice(-num) slice from end
// .substring(start = 0, end = num)
// .trim()
// .trimStart()
// .trimEnd()
// .toUppserCase() .toLowerCase
// .concat(str1, str2, str3)
const index0 = str.charAt(0);
const replaceB = str.replace("b", "B");
const replaceAllC = str.replaceAll("c", "C");
const slice3 = str.slice(3);
const slice13 = str.slice(1, 3);
const sliceMin3 = str.slice(-3);
const substring310 = str.substring(3, 10);
const concatAhmad = str.concat(" ahmad", " abdul");
console.log(index0);
console.log(replaceB);
console.log(replaceAllC);
console.log(slice3);
console.log(slice13);
console.log(sliceMin3);
console.log(substring310);
console.log(concatAhmad);

// 3. return boolean
// .includes(serchVal, start = 0)
// .startsWith(serchVal, start = 0)
// .endsWith(serchVal, start = 0)
const boolA = str.includes("x");
const boolStart = str.startsWith("a");
console.log(boolA, boolStart);

// 4. str to arr
// .split(separator, limit)
// .match(searchVal = str|regex)
const split310 = str.split(" ", 2);
const matchB = str.match(/b/g);
console.log(split310);
console.log(matchB);
    `}</pre>
  );
};

export default JsString;
