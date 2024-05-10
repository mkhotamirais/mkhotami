const JsObject = () => {
  return (
    <pre>{`
// 1. Tiga cara membuat object: object literal, function declaration (object literal inside function), constructor function (using this)
console.log("1. Object literal");
const obj11 = {};
obj11.nama = "ahmad1";
obj11.umur = 1;
console.log(obj11.nama, obj11.umur);

const obj12 = { nama: "ahmad2", umur: 2 };
console.log(obj12.nama, obj12.umur);
// add or update value
obj12.nama = "ahmad2 updated";
obj12.asal = "jakarta";
console.log(obj12.nama, obj12.umur, obj12.asal);

// 2. Function declaration
console.log("2. Function Declaration");
const Fn1 = (nama, umur) => {
  const obj = {
    nama: nama,
    umur: umur,
  };
  return obj;
};
const Ahmad = Fn1("ahmad", 1);
const Abdul = Fn1("abdul", 2);
console.log(Ahmad.nama, Ahmad.umur, Abdul.nama, Abdul.umur);

// 3. Constructor Function
console.log("3. Constructor Function, tidak bisa pakai arrow function, disarankan pakai class (akan dibahas nanti)");
function Fn2(nama, umur) {
  //   let this = Object.create(Fn2.prototype)
  this.nama = nama;
  this.umur = umur;
  //   return this
}
const Siti = new Fn2("siti", 21);
const Ayu = new Fn2("ayu", 22);
console.log(Siti.nama, Siti.umur, Ayu.nama, Ayu.umur);

// 4. Object create
const obj3 = { nama: "ahmad", umur: 21 };
const obj4 = Object.create(obj3);
obj4.asal = "jakarta";
console.log(obj4.nama, obj4.umur, obj4.asal, obj3.asal);

// 5. Object to arr & object to string & object method
const obj5 = { nama: "ahmad", umur: 21 };

const obj6 = {
  nama: "abdul",
  panggil1: function (nama) {
    return "Halo " + nama + " dan " + this.nama;
  },
  panggil2(nama) {
    return \n"Halo es6 " + nama + " dan + "this.nama;
  },
};
({ nama, umur } = { nama: "ahmad", umur: 25 });
console.log(obj6.panggil1("siti"), nama, umur);

const objToArr1 = Object.values(obj5);
const objToArr2 = Object.values(obj6);
// JSON.stringify can't convert method of object; Anonimous object by destructuring
const objToStr1 = JSON.stringify(obj5);
const objToStr2 = JSON.stringify(obj6);
console.log(objToArr1);
console.log(objToArr2);
console.log(objToStr1);
console.log(objToStr2);
    `}</pre>
  );
};

export default JsObject;
