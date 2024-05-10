const JsClass = () => {
  return (
    <pre>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>class</title>
  </head>
  <body>
    <h1>class</h1>
    <script>
      class Kelas {
        constructor(nama, umur) {
          this.nama = nama;
          this.umur = umur;
        }
        panggil(nama) {
          return "halo " + nama + " dan " + this.nama;
        }
      }
      const Ahmad = new Kelas("ahmad");
      console.log(Ahmad.panggil("abdul"), new Kelas("siti").panggil("ayu"));

      // Prototype array
      let angka1 = [2, 1, 3];
      // di belakang layar, yang terjadi adalah constructor function
      //   let angka2 = new Array()
      //   function Arrray(){
      //     let this = Object.create(Array.prototype)
      //   }
      console.log("buka array lalu lihat prototype");
      console.log(angka1);
    </script>
  </body>
</html>
    `}</pre>
  );
};

export default JsClass;
