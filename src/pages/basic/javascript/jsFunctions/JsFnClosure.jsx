const JsFnClosure = () => {
  return (
    <pre>{`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>closure</title>
  </head>
  <body>
    <h1>closure</h1>
    <ul>
      <li>
        scope + recursive: sebuah fungsi rekursif, fungsi terdalam akan terus mencari variabel yang dibutuhkan hingga fungsi
        terluar, jika ada maka itulah closure
      </li>
      <li>Closure dapat dilihat di inspect element dengan console.dir(), buka scope</li>
    </ul>
    <script>
      const Fn1 = () => {
        let name = "ahmad";
        const fungsi261 = () => name;
        console.dir(fungsi261);
      };
      Fn1();
      const Fn2 = () => {
        let name = "ahmad";
        console.dir(() => name);
      };
      Fn2();
      (() => {
        let outer = "ahmad";
        console.dir(() => outer);
      })();
    </script>
  </body>
</html>
    `}</pre>
  );
};

export default JsFnClosure;
