const JsFnBasic = () => {
  return (
    <pre>{`
// Function (Fn)
// Jenis fn: declaration fn, expression/anonimous fn, arrow fn
// refactoring: membuat syntax fungsi lebih efektif dan efisien
// self invoking fn
// recursive fn

// 1. declaration
console.log("1. declaration fn, param and default param");
function Fn10() {
  console.log("declaration fn log");
}
function Fn11() {
  return "declaration fn";
}
function Fn12(param) {
  const result = "Hello " + param;
  return result;
}
function Fn13(param1, param2 = "abdul") {
  return "Hello " + param1 + " and " + param2;
}
Fn10();
console.log(Fn11());
console.log(Fn12(), Fn12("ahmad"));
console.log(Fn13(), Fn13("ahmad"));

// 2. expression/anonimous
console.log("2. expression/anonimous fn");
const Fn20 = function () {
  console.log("expression fn log");
};
const Fn21 = function (param1, param2 = "abdul") {
  const result = "Hello " + param1 + " and " + param2;
  return result;
};
Fn20();
console.log(Fn21("ahmad"));

// 3. arrow
console.log("3. arrow fn");
const Fn30 = () => {
  return "arrow fn";
};
const Fn31 = () => "jika hanya return {} dan 'return' bisa dihilangkan";
const Fn32 = (param1, param2 = "abdul") => {
  const result = "Hello " + param1 + " and " + param2;
  const ket = "jika tidak hanya return maka {} dan 'return' tidak bisa dihilangkan";
  return result + ": " + ket;
};
console.log(Fn30());
console.log(Fn31());
console.log(Fn32("ahmad"));

// 4. self invoking fn + arrow + expression
console.log("4. Self invoking fn: fungsi yang menjalankan dirinya sendiri");
(function Fn4() {
  console.log("self invoking declaration");
})();
(function () {
  console.log("self invoking expression/anonimous");
})();
(() => console.log("self invoking arrow"))();

// 5. recursive fn
console.log("5. recursive fn: fungsi di dalam fungsi");
function Fn5() {
  function Fn5a() {
    return "halo";
  }
  return Fn5a();
}
console.log(Fn5());
    `}</pre>
  );
};

export default JsFnBasic;
