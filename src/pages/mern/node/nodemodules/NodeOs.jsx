const NodeOs = () => {
  return (
    <div>
      <pre>{`
os davegray
// --- comment 1
console.log("hello world");
console.log(global);

// --- comment 2
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// --- comment 3
const { add, substract, multiply, divide } = require("./math");
console.log(add(6, 2));
console.log(substract(6, 2));
console.log(multiply(6, 2));
console.log(divide(6, 2));
  `}</pre>
    </div>
  );
};

export default NodeOs;
