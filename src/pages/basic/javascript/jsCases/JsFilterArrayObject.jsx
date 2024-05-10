const JsFilterArrayObject = () => {
  return (
    <pre>{`
// ------- part 1
const arr = [
  [{ id: "1a", nama: "ahmad" }],
  [
    { id: "2a", nama: "abdul" },
    { id: "1a", nama: "ahmad" },
    { id: "3a", nama: "siti" },
  ],
  [{ id: "1a", nama: "ahmad" }],
];
const newArr = [];
const il = [];
let ilMax = 0;
arr.map((item, i) => {
  il.push(item.length);
  ilMax = il.reduce((a, b) => Math.max(a, b));
  for (let i = 0; i < ilMax; i++) {
    if (item[i]) {
      newArr.push(item[i]);
    }
  }
});

const ids = newArr.map((o) => o.id);
const filtered = newArr.filter(({ id }, index) => !ids.includes(id, index + 1));

console.log(filtered);

// ------- part 2
const arr = [
  {
    nama: "ahmad",
    teman: [
      {
        id: 1,
        namaTeman: "abdul",
      },
    ],
  },
  {
    nama: "ahmad",
    teman: [
      {
        id: 1,
        namaTeman: "abdul",
      },
      {
        id: 2,
        namaTeman: "siti",
      },
    ],
  },
  {
    nama: "ayu",
    teman: [
      {
        id: 2,
        namaTeman: "siti",
      },
    ],
  },
];

const arr2 = arr.filter((item) => {
  return item.nama == "ahmad";
});
const arr3 = arr2.map((item) => {
  return item.teman;
});
const arr4 = [];
const il = [];
let ilMax = 0;
arr3.map((item) => {
  il.push(item.length);
  ilMax = il.reduce((a, b) => Math.max(a, b));
  for (let i = 0; i < ilMax; i++) {
    if (item[i]) {
      arr4.push(item[i]);
    }
  }
});
const ids = arr4.map((o) => o.id);
const filtered = arr4.filter(({ id }, index) => !ids.includes(id, index + 1));
console.log(arr2);
console.log(arr3);
console.log(filtered);
    `}</pre>
  );
};

export default JsFilterArrayObject;
