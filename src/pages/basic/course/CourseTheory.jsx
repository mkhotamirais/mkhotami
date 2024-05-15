const CourseTheory = () => {
  return (
    <div>
      <div>
        <b>Teori</b>
      </div>
      <div>
        <ul className="list-disc list-inside">
          <li>
            Synchronous & Asynchronous: Synchronous cara eksekusi program secara blocking; Asynchronous eksekusi program
            secara blocking. Blocking: tidak menjalankan task selanjutnya jika task sebelumnya belum selesai. Non-blocking
            tetap menjalankan task selanjutnya walau task sebelumnya belum selesai. untuk melihat visualisasinya, jalankan
            codenya di{" "}
            <a href="https://www.jsv9000.app/" className="underline">
              Js Visualizer
            </a>{" "}
            terdapat call stack, task queue dan microtask queue
          </li>
          <li>
            Hook: cara agar functional component bisa akses state dan lifecycle yang dimiliki class component. Sebenarya Hook
            tidak punya lifecycle tapi punya side effect (efek samping). dengan efek samping itu kita bisa membuat seolah
            olah functional komponen itu bersifat seperti class component. Manfaatnya, performa lebih cepat. Aturannya: hanya
            boleh dipanggi di top level function, harus dipanggil dari fungsi component / custom hook, tidak bisa dipakai di
            class component; berikut sebagian hook useState, useEffect, useContext, useReducer, useRef; mengenai state
            management bisa dilakukan dengan prop, useContext, dan redux;
          </li>
          <li>
            express middleware: Pada dasarnya express adalah serangkaian fungsi middleware. fungsi middleware adalah fungsi
            yang mempunyai akses ke objek reqest, response dan fungsi middleware berikutnya dalam siklus request-response.
            Jadi middleware adalah fungsi yang berjalan di antara request dan response. disebut middleware karena dieksekusi
            di tengah antara mengirim request dan menerima response. Tipe middleware: application-level, router-level,
            error-handling, built-in, third-party; req dan res express: siklus reqeust-response dimulai ketika user mengirim
            Request ke server; express app akan menerima request sehingga menciptakan object req dan res; lalu fungsi
            middleware dieksekusi sehingga dapat memanipulasi data sesuai kebutuhan urutan eksekusinya: express.json() -
            customMiddleware - Route handler; opsi selain express: beberapa framework yang digunakan di atas nodejs:{" "}
            <a href="https://expressjs.com/">express</a>, <a href="https://koajs.com/">koa</a>,{" "}
            <a href="https://sailsjs.com/">sails</a>, <a href="https://loopback.io/">loopback</a>,{" "}
            <a href="https://hapi.dev/">hapi</a>, <a href="https://nestjs.com/">nest</a>,{" "}
            <a href="https://adonisjs.com/">adonis</a>
          </li>
          <li>
            nosql: NoSql (not only sql) yakni database selain sql, tentu sangat banyak jenisnya / tipenya: key-value store ex
            redis; document base ex mongodb; coulumn-oriented db ex Cassandra; graph db ex neo4. NoSql: scheemaless/flexible
            schema yakni blueprint database yang menentukan bagaimana data akan disimpan; denormalizatin; non-relational
            database (tidak menganut primary key, foreign key dll); unstructured, semi-structured, structured data. konsep
            denormalization (embedded document), misal data pertama ada 2 fileld (nama, umur) data kedua ada 3 field (nama,
            umur, asal). terminologi: sql/nosql; db/db; table/collection;row or record/document; column or field/field.
            MongoDb adalah db berbasis document yang memiliki skalabilitas dan fleksibilitas yang kita inginkan dan vitur
            query dan indexing yang kita butuhkan. alasan menggunakan mongodb: format datanya JSON (BSON) binary json; kareja
            json itu javascript; sebagai teknologi pendukung MERN, MEVN, MEAN; ada pun sql ada beberapa tipe (rdbms dll)
          </li>
          <li>
            libraries: (axios, casl, redux, multer) axios adalah promise-based http client for node.js and the browser.
            Isomorphic dapat berjalan di browser dan nodejs dengan codebase yang sama. Fungsinya, di server menggunakan
            native node.js http module, di client menggunakan XMLHttpRequest, intersep dan transformasi request dan response,
            cancel request; casl adalah pustaka JavaScript otorisasi isomorfik yang membatasi sumber daya apa yang boleh
            diakses oleh klien tertentu; Redux adalah wadah state yang dapat diprediksi untuk javascript app. Membantu
            menulis aplikasi yang prilakunya konsisten. Fungsinya untuk mengelola state (state management) dengan
            mengumpulkannya di global state, controlnya terpusat, juga memisahkan antara logic dan view agar reusable.
            dibutuhkan saat aplikasi semakin besar dan kompleks. modern web app direpresentasikan dengan pohon komponen
            kompleks yang membagi dan membuat data; multer
          </li>
          <li>
            flex dan grid: flex: adalah model layout 1 dimensi (baris atau kolom) yang dapat mengatur jarak dan penjajaran
            antar item dalam sebuah kontainer. kondisi flex dimungkinkan jika terdapat container (parent) dan item-itemnya
            (child). ketika items diatur secara horizontal disebut main-axis. vertical cross-axis. lebar container main size.
            tingginya cross size. titik awal kiri itu main start. akhir kanan main end. titik awal atas cross start. titik
            akhir bawah cross end. Container inilah yang diberi display flex. grid: adalah model layout berbentuk grid 2
            dimensi (baris dan kolom). kondisi grid dimungkinkan jika terdapat container (parent) dan item-itemnya (child).
            container inilah yang diberi display grid
          </li>
          <li>Pelajari juga: client dan server side, SPA single page application, error status (400, 409, 403, 500 dll)</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseTheory;
