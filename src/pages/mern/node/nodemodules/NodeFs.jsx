const NodeFs = () => {
  return (
    <div>
      <pre>{`
davegray
const fs = require("fs");
const path = require("path");

// coba satu per satu syntax di bawah dengan mengomentari yang lainnya

fs.writeFile(path.join(__dirname, "newFile.txt"), "this is new file content", (err, data) => {
if (err) throw err;
console.log("Write file success");
});

fs.readFile(path.join(__dirname, "newFile.txt"), "utf-8", (err, data) => {
if (err) throw err;
console.log(data);
});

fs.appendFile(path.join(__dirname, "newAppend.txt"), "\nthis is append file", (err, data) => {
if (err) throw err;
console.log("Append file can create new file");
});

fs.appendFile(path.join(__dirname, "newAppend.txt"), "\nthis is append file addition", (err, data) => {
if (err) throw err;
console.log("Append file can update existing file");
});

fs.mkdir(path.join(__dirname, "newDir"), (err) => {
if (err) throw err;
console.log("Create directory success");
});

if (fs.existsSync(path.join(__dirname, "newDir"))) {
fs.rmdir(path.join(__dirname, "newDir"), (err) => {
  if (err) throw err;
  console.log("Remove directory success");
});
}

fs.unlinkSync(path.join(__dirname, "newFile.txt"));

if (fs.existsSync(path.join(__dirname, "newAppend.txt"))) fs.unlinkSync(path.join(__dirname, "newAppend.txt"));

// ------- file besar
const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "fileBesar.txt"), { encoding: "utf-8" });
const ws = fs.createWriteStream(path.join(__dirname, "files", "fileBesarCopy.txt"));

// kedua cara di bawah hasilnya sama
// cara 1
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// cara 2
rs.pipe(ws);

  `}</pre>
    </div>
  );
};

export default NodeFs;
