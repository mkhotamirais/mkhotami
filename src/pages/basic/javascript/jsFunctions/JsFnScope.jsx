const JsFnScope = () => {
  return (
    <pre>{`
// Scope
// a. variable luar fungsi bisa diakses di dalam fungsi
// b. variable dalam fungsi tidak bisa diakses di luar fungsi karena javascript block scope

let nama1 = "ahmad";
let nama2;
const Fn1 = () => nama1;
const Fn2 = () => {
  let nama2 = "abdul";
  return nama2;
};
const Fn3 = () => {
  nama1 = "abdul";
  return nama1;
};
console.log(Fn1(), nama2, Fn3());
    `}</pre>
  );
};

export default JsFnScope;
