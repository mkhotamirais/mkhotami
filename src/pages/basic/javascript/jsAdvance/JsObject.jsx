const JsObject = () => {
  return (
    <pre>{`
// 1. Tiga cara membuat object: object literal, function declaration (object literal inside function), constructor function (using this)
// 1. object literal
const obj = {};
obj.id = 1;
obj.name = "object literal"
const obj = { id: 1, name: "object literal" };
obj12.name = "name changed";
obj12.detail = "detail added";
console.log(obj, obj.id, obj.name)

// 2. function declaration
const Fn = (id, name) => {
  const obj = { id: id, name: name };
  return obj;
};
const Person1 = Fn(1, "person1");
const Person2 = Fn(2, "person1");
console.log(Person1, Person2, Person1.id, Person1.name);

// 3. Constructor Function, tidak bisa pakai arrow function, disarankan pakai Class.
function Fn(id, name) {
  //   let this = Object.create(Fn2.prototype)
  this.id = id;
  this.name = name;
  //   return this
}
const Siti = new Fn(1, "siti");
const Ayu = new Fn(2, "ayu");
console.log(Siti, Ayu, Siti.id, Siti.name);

// 4. Object create
const objA = { id: 1, name: "objectA" };
const objB = Object.create(objA);
obj4.asal = "jakarta";
console.log(objA, objB, objB.);

// 5. Object method &, Object to arr & object to string;
const objA = { nama: "ahmad", umur: 21 };
const objB = {
  nama: "abdul",
  panggil1: function (name) {return "this is es5 method with property" + this.name},
  panggil2(name) {return \n"This is es6 method with property" + this.name;},
  panggil3() => "This is arrow function without property, no this"
};
({ nama, umur } = { nama: "ahmad", umur: 25 }); // anonimous object by destructuring;
console.log(objB.panggil1("ahmad"), nama, umur);

const objToArr1 = Object.values(obj5);
const objToArr2 = Object.values(obj6);
// JSON.stringify can't convert method of object; Anonimous object by destructuring
const objToStr1 = JSON.stringify(obj5);
const objToStr2 = JSON.stringify(obj6);
console.log(objToArr1, objToArr2, objToStr1, objToStr2);
    `}</pre>
  );
};

export default JsObject;
