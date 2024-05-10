const JsPrototype = () => {
  return (
    <pre>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>prototype</title>
  </head>
  <body>
    <h1>Prototype</h1>
    <script>
      function Fn1(nama, umur) {
        this.nama = nama;
        this.umur = umur;
      }
      const Ahmad = new Fn1("ahmad", 21);
      console.log(Ahmad.nama, Ahmad.umur);

      Fn1.prototype.panggil = function () {
        return "Halo " + this.nama;
      };
      const Abdul = new Fn1("abdul", 22);
      console.log(Abdul);
      console.log(Abdul.panggil());
    </script>
  </body>
</html>
    `}</pre>
  );
};

export default JsPrototype;
