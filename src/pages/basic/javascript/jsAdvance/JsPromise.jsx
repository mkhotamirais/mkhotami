const JsPromise = () => {
  return (
    <pre>{`
Asynchronous: cara eksekusi program untuk melihat output tanpa melihat urutan eksekusinya, yakni berjalan secara bersamaan
Synchronous: cara eksekusi secara berurutan
Javascript secara default eksekusi perintah secara synchronous kecuali untuk ajax, websocket, worker, file, db, animasi dll
Proses asynchronous murni tidak bisa dibuat, tapi simulaisnya bisa dengan fungsi setInterval dan setTimeout.
Asynchronous digunakan saat operasi file, koneksi ke db, websocket, realtime communication chatting dll.

Callback: fungsi yang dieksekusi melalu parameter
Fungsi yang parameternya callback disebut higher order function
Fungsi dalam javascript adalah object atau first class object yang artinya bisa dijadikan paramter, bisa disimpan ke dalam variable, memiliki properti dan method seperti object pada umumnya, bisa mengembalikan value dalam bentuk function.
--- Contoh dalam file .html ---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>promise</title>
    <button type="button" class="btn1">Get response</button>
    <p class="hasil">no data</p>
    <button type="button" class="btn2">Get response2</button>
    <p class="hasil2">no data2</p>
  </head>
  <body>
    <h1>promise</h1>
    <script>
      const getData = (kondisi) => {
        const Janji1 = new Promise((resolve, reject) => {
          kondisi
            ? setTimeout(() => {
                resolve("Response ditepati");
              }, 2000)
            : reject("Response ingkar");
        });
        return Janji1;
      };

      const btn = document.querySelector(".btn1");
      const hasil = document.querySelector(".hasil");
      const btn2 = document.querySelector(".btn2");
      const hasil2 = document.querySelector(".hasil2");

      btn.addEventListener("click", function () {
        btn.textContent = "loading...";
        const data = getData(true);
        data
          .then((res) => (hasil.textContent = res))
          .catch((err) => (hasil.textContent = err))
          .finally(() => (btn.textContent = "Get response"));
      });

      btn2.addEventListener("click", async () => {
        btn2.textContent = "loading...";
        try {
          const data = await getData(false);
          hasil2.textContent = data;
        } catch (err) {
          hasil2.textContent = err;
        } finally {
          btn2.textContent = "Get response2";
        }
      });
    </script>
  </body>
</html>

--- Contoh dalam file .js ---
let ditepati = true;
// let ditepati = false;
const Janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("response data ditepati");
  } else {
    reject("response data ingkar");
  }
});

console.log(Janji1);
Janji1.then((res) => console.log(res)).catch((err) => console.log(err));

let ditepati2 = true;
const Janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("response data ditepati");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("response data ingkar");
    }, 2000);
  }
});
console.log("mulai");
Janji2.then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("selesai loading"));
// supaya kelihatan proses asynchronousnya jalankan syntax ini
// console.log(Janji2.then(() => console.log(Janji2)));
console.log("selesai");

// promise.All
const data1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { nama: "ahmad", umur: 20 },
      { nama: "ayu", umur: 21 },
    ]);
  }, 3000);
});

const data2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { nama: "ahmad2", umur: 20 },
      { nama: "ayu2", umur: 21 },
    ]);
  }, 2500);
});

// data1.then((res) => console.log(res));
// data2.then((res) => console.log(res));

// promise all membuat waktu tunggu bersamaan
Promise.all([data1, data2]).then((res) => {
  const [data1, data2] = res;
  console.log(data1);
  console.log(data2);
});
    `}</pre>
  );
};

export default JsPromise;
