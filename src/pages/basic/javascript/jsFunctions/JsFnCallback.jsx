const JsFnCallback = () => {
  return (
    <pre>{`
// Higher Order fn: fungsi yang parameternya fungsi lain yang disebut callback
// berikut 5 contoh fungsi yang sama

// kasus pertama
function Fn11(cb) {
  return cb();
}
function Fn12() {
  console.log("halo1");
}
Fn11(Fn12);

// kasus kedua
function Fn21(cb) {
  return cb();
}
Fn21(function fungsi2() {
  console.log("halo2");
});

// kasus ketiga
const Fn31 = (cb) => cb();
const Fn32 = () => console.log("halo3");
Fn31(Fn32);

// kasus keempat
const Fn4 = (cb) => cb();
Fn4(() => console.log("halo4"));

// kasus kelima
((cb) => cb())(() => console.log("halo5"));
    `}</pre>
  );
};

export default JsFnCallback;
