const JsFnNoArrow = () => {
  return (
    <pre>{`
// Arrow function tidak bisa menggunakan konsep hoisting, artuments dan this
// 1. Hoisting
// a. (creatian phase = execution phase) fungsi secara default didefinisikan undefined
// b. setiap fungsi yang dibuat di mana saja akan dibaca terlebih dahulu (diangkat ke atas) lalu program membaca perintah lain"
// c. var menggunakan konsep hoisting sedangkan let tidak;
console.log(Fn1());
function Fn1() {
  return "hoisting, syntax fungsi ditaruh setelah pemanggilan";
}

// 2. Arguments: parameter apapun yang dikirimkan akan diteriman oleh Object Arguments
function Fn2() {
  return "Arguments, " + arguments[0] + " " + arguments[1] + " " + arguments[2];
}
console.log(Fn2("ahmad", "abdul", "siti"));

console.log(
  "4. This: method objek yang menggunakan key this, artinya aksesnya hanya terbatas pada objek itu saja, karena dengan objek maka tidak menggunakan konsep hoisting juga"
);
    `}</pre>
  );
};

export default JsFnNoArrow;
