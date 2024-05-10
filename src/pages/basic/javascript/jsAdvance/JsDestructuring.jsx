const JsDestructuring = () => {
  return (
    <pre>{`
// 1. Rest Parameter / spread operator
console.log("1. Rest paramter");
const arr = ["a", "b", "c"];
const str = "ahmad";
console.log(arr, ...arr);
console.log(str, ...str);

((...val) => console.log(val))(arr);
((...val) => console.log(val))(["a", "b", "c"]);
((...val) => console.log(val))(...arr);
((...val) => console.log(val))("a", "b", "c");
((...val) => console.log(val))("abc");
((...val) => console.log(val))(..."abc");

// 2. Destructuring
// destructuring array
console.log("2. Destructuring");
const a = "ahmad";
const b = "budi";
[c, d] = ["cinta", "dinda"];
const [e, f] = ["eka", "faiza"];
const names = ["gita", "hani"];
const [g, h] = names;
[j, i] = ["intan", "john"];
[j, i] = [i, j];
const ages = [1, 2, 3];
const [k, , l] = ages;
console.log(c, d, e, f, g, h, i, j, k, l);

// destructuring object
const obj = { nama: "ahmad", umur: 1 };
const { nama, umur } = obj;
const { nama2, umur2 } = { nama2: "ahmad2", umur2: 2 };
console.log(nama, umur, nama2, umur2);

// alias
const obj2 = { nama: "ahmad2", umur: 2 };
const { nama: n2, umur: u2 } = obj2;
console.log(n2, u2);

// rest
const obj3 = { nama: "ahmad3", umur: 3, asal: "jakarta", gender: "laki-laki", pasangen: "ayu" };
const { nama: n3, umur: u3, ...sisa } = obj3;
console.log(n3, u3, sisa);

// recursive obj
const obj4 = { nama: "ahmad4", umur: 4, asal: { city: "jakarta", country: "indonesia" } };
const {
  nama: n4,
  umur: u4,
  asal: { city: cty, country: cry },
} = obj4;
console.log(n4, u4, cty, cry);

// refactor obj
({ nama5, umur5 } = { nama5: "ahmad5", umur5: 5 });
console.log(nama5, umur5);

// destruct function
const obj5 = { nama: "ahmad5", umur: 5, asal: { kota: "jakarta", negara: "indonesia" } };
function Fn1({ nama, umur, asal: { kota, negara } }) {
  console.log("Hello " + nama + ", " + umur + " dari " + kota + ", " + negara);
}
Fn1(obj5);
    `}</pre>
  );
};

export default JsDestructuring;
