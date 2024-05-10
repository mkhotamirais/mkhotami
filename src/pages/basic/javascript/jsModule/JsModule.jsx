const JsModule = () => {
  return (
    <div>
      <div>JsModule</div>
      <pre>{`
--- es5Index.js
const module1 = require("./es5Module1");
const { nama, umur } = require("./es5Module1");
const { nama: n, umur: u } = require("./es5Module1");
const module2 = require("./es5Module2");
const { nama: n2, umur: u2 } = require("./es5Module2");
const { Fn, Obj } = require("./es5Module3");

console.log("moduleEs5");

console.log(module1);
console.log(module1.nama, module1.umur);
console.log(nama, umur);
console.log(n, u);

console.log(module2);
console.log(module2.nama, module2.umur);
console.log(n2, u2);

console.log(Fn("ahmad"));
console.log(Obj.nama, Obj.Panggil("ayu"));
    `}</pre>
      <pre>{`
--- es5Module1.js
exports.nama = "ahmad";
exports.umur = 20;
    `}</pre>
      <pre>{`
--- es5Module2.js
const nama = "ahmad2";
const umur = 22;

module.exports = {
  nama,
  umur,
};
    `}</pre>
      <pre>{`
--- es5Module3.js
const Fn = (param) => "Halo " + param;

const Obj = {
  nama: "ahmad",
  Panggil(param) {
    return "Halo " + param + " saya " this.nama;
  },
};

module.exports = { Fn, Obj };
    `}</pre>
      <pre>{`
------

--- es6Index.mjs
import asal, { nama, umur } from "./es6Module.mjs";

console.log(nama, umur);
console.log(asal);
    `}</pre>
      <pre>{`
--- es6Module.mjs
export const nama = "ahmad";
export const umur = "abdul";

const asal = "jakarta";
export default asal;
    `}</pre>
    </div>
  );
};

export default JsModule;
