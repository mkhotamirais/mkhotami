const Mys = () => {
  return (
    <div>
      <div>Mysql</div>
      <ul className="list-inside list-disc">
        <li>
          Mysql adalah RDBMD yang digunaan secara luas, gratis, open source, cocok untuk aplikasi kecil maupun besar, lintas
          platform, pertama rilis 1995, dipegang Oracle,{" "}
        </li>
        <li>
          RDBMS adalah dasar untuk semua sistem database modern seperti MySQL, Microsoft SQL Server, Oracle, dan Microsoft
          Access.
        </li>
        <li>
          buka xampp control panel pastikan mysql aktif. buka explorer C:\xampp\mysql\bin cari mysql.exe lalu buka jika tidak
          terbuka, cara lain adalah dengan langsung membuka terminal lalu ketik `mysql -u root -p` entar dua kali
        </li>
        <li>
          Syntax
          <pre>{`
SHOW DATABASES;
CREATE DATABASE db_name;
USE db_name
CREATE TABLE table_name (
  id int primary key auto_increment,
  name varchar(100),
  age int(2),
)
SHOW TABLES
DESCRIBE table_name
DROP TABLE table_name
DROP DATABASE db_name

SELECT <columns> FROM <table_name> <options>
  <columns>: [*] | [columnA, columnB] | [columnN]
  <options>: WHERE | ORDER BY | LIMIT
    WHERE <conditions(operators|null)>
      <operators>: = > < >= <= <> (not equal) BETWEEN LIKE IN
      contoh: WHERE nama = 'ahmad' | WHERE id < 5
      <null>: <columns> IS NULL | IS NOT NULL
      contoh: WHERE nama IS NULL
    ORDER BY ASC | DESC
    LIMIT number OFFSET number
SELECT DISTINCT <columns> FROM table_name             
  // only distinct/different value
SELECT <functions>(<columns>) FROM table_name
  <functions>: MAX | MIN | COUNT | AVG | SUM
  contoh: MAX(id)
aliases

INSERT INTO table_name (columnA, columnB, columnN) VALUES (valueA, valueB, valueN)
INSERT INTO table_name VALUES (null, urutanA, urutanB)
  // table_name tanpa () valuesnya harus berurutan, jika ada nilai default bisa diberi null

UPDATE table_name SET columnA='valueA', columnB='valueB', columnN='valueN' WHERE <conditions>
  // jika tanpa operator WHERE maka akan diubah semua yang terseleksi

DELETE FROM table_name WHERE <conditions>
  // jika tanpa operator WHERE maka akan dihapus semua yang terseleksi

          `}</pre>
        </li>
      </ul>

      <div>Mysql Eduwork</div>
      <ul className="list-disc list-inside">
        <li>
          MySql tergolong dalam bahasa SQL. Database adalah kumpulan data yang disimpan secara sistematik hingga dapat
          digunakan kembali. Data adalah representasi dari objek yang ada di kehidupan seperti manusia, peristiwa, konsep,
          keadaan dll.
        </li>
        <li>
          Manfaat memudahkan pengelolaan data, akses data karena menggunakan bahasa universal SQL, pengamanan data, sharing
          data karena data bersifat terpusat
        </li>
        <li>
          lihat ranking DBMS (database management system){" "}
          <a href="https://db-engines.com/en/ranking" className="underline">
            ranking dbms
          </a>
        </li>
        <li>
          Model db: Hierarcical db: mekanisme di mana data dihubungkan menggunakan pointer sehingga membentuk struktur
          seperti pohon
        </li>
        <li>
          network db: mekanisme menyimpan data pada model menggunakan konsep jaringan, yakni kumpulan recordnya dihubungkan
          pointer membentuk ring. Konsep ini berkembang 1960-an dan tidak digunakan lagi.
        </li>
        <li>
          relational db: menyempurnakan model sebelumnya. Konsepnya mengharuskan data terstruktur dan tersimpan dalam bentuk
          tabel di mana tabel tersebut dapat saling berhubungan. Model ini muncul sekitar 1970-an dan banyak digunakan sampai
          sekarang
        </li>
        <li>
          NoSQL db: not only sql. Menyimpan data tidak dalam bentuk tabular sebagaimana relational db, namun berbentuk selain
          itu: document, key-value, graph. Muncul tahun 2000-an seiring berkembangnya internet dan big-data
        </li>
        <li>
          level: external: digunakan untuk mempermudah user dalam akses db tanpa harus mengerti mekanisme di dalamnya. User
          hanya dapat akses
        </li>
        <li>
          level: konseptual: menggambarkan keseluruhan db yang merupakan gabungan info dari berbagai sudut pandang pengguna
          terhadap db. Seperti semua entitas (table) atribut dan relasi, batasan data, integritas keamanan data, info
          semantik tentang data
        </li>
        <li>
          level: internal: menggambarkan bagaimana data disimpan di dalam media penyimpanan komputer secara fisik, yakni
          alokasi ruang media penyimpanan untuk data dan index, deskripsi untuk record yang disimpan, penempatan record,
          kompresi dan enkripsi data
        </li>
        <li>
          bahasa db: adalah query nama panjangnya structure query language (SQL). berdasar fungsinya dikelompokkan jadi 3
          jenis: Data Definition Language (DDL) untuk edit struktur tabel, buat, hapus. Data Manipulation Language (DML)
          untuk menampilkan, menamba, edit, hapus baris data. Data Control Language (DCL) untuk mengatur hak akses pengguna
        </li>
        <div>MySql query</div>
        <ul>
          <li>download dan install xampp, buka xampp control panel, jalankan apache dan mysql</li>
          <li>berikut cara operasi mysql di terminal</li>
          <pre>{`
--- masuk terminal mysql
c:> mysql -u root -p                masuk mysql dengan username 'root' dan password kosong, jika diminta password kosonkan saja, kecuali jika authentication nya disetting
mysql> SET PASSWORD FOR root@localhost = PASSWORD('new_password')     ubah password
mysql> CREATE DATABASE dbeduwork    membuat db baru
mysql> CREATE TABLE user (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR NOT NULL,
age INT
)
mysql> INSERT INTO users (name, age) VALUES ("ahmad", 20)
mysql> DELETE FROM users WHERE id=3
mysql> UPDATE users SET nama="ayu", age="23" WHERE id=3
mysql> SHOW TABLES
mysql> SHOW DATABASES
mysql> DESCRIBE table_name
mysql> SELECT * FROM users
mysql> SELECT name FROM users WHERE age=20
mysql> SELECT * FROM users WHERE name LIKE "%mad%
AND OR
mysql>
mysql>

`}</pre>
        </ul>
        <pre>{`

CREATE DATABASE new_db
--- membuat table
CREATE TABLE tbl (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
age NUMBER
--- masukkan data
INSERT INTO tbl (name, age) VALUES ('ahmad', 30)
)
--- delete data
DELETE FROM tbl WHERE id=3
--- ubah data
UPDATE tbl SET name="abdul" age=10 WHERE id=3
      `}</pre>
      </ul>
      <div>Connection</div>
      <ul className="list-disc list-inside">
        <li>
          Koneksi express ke db dibutuhkan driver, yang paling populer mysql dan mysql2. Manfaatnya memahami ORM (object
          relational mapping) dan sequelize
        </li>
        <li>
          api adalah software penghubung aplikasi. Restful api adalah mekanisme pertukaran data antara client server melalui
          HTTP/HTTPS dengan perantara URL. HTTP: get, post, upt/patch, delete. Data dari client dapat berupa form data atau
          json, response server bisa berupa json atau xml
        </li>
      </ul>
      <div>Relational</div>
      <ul className="list-inside list-disc">
        <li>
          relasi adalah cara desain db berdasar persyaratan dan kebutuhan yang sudah diketahui. Manfaatnya untuk pengembangan
          dan menentukan arah sistem
        </li>
        <li>
          primary key dan foreign key: primary key sifatnya unik sebagai representasi data dalam satu kolom. foreign key
          digunakan untuk membuat relasi antar tabel
        </li>
        <li>
          Time relasi: One to One (satu baris data tabel pertama hanya berhubungan satu baris pada tabel kedua), One to Many,
          (satu baris data tabel pertama berhubungan dengan lebih dari satu baris pada tabel kedua), Many to Many (lebih dari
          satu baris data tabel pertama berhubungan dengan lebih dari satu baris pada tabel kedua) sehingga menghasilkan
          tabel perantara sebagai tempat menyimpan foreign key dari masing masing tabel.{" "}
          <a href="https://www.mysqltutorial.org/getting-started-with-mysql/mysql-sample-database/" className="underline">
            sample database
          </a>
        </li>
        <li>
          tipe join: inner join (menampilkan data yang beririsan saja, jadi tidak akan ada data null), left join (menampilkan
          data table kiri dan data yang beririsan, walaupun datanya null), right join (menampilkan data tabel kanan dan data
          yang beririsan walaupun datanya null), full join (menampilkan semua data)
        </li>
      </ul>
    </div>
  );
};

export default Mys;
