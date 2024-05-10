const Php = () => {
  return (
    <div>
      <div>php</div>
      <ul className="list-inside list-disc">
        <li>Php adalah bahasa pemrograman khusus untuk web, open soruce, berjalan di server</li>
        <li>
          Alasan belajar php: 1. relatif mudah untuk pemula; 2. pre-requisite: html dan css; 3. gratis dan open source{" "}
          <a href="https://www.php.net/downloads.php" className="underline">
            download php
          </a>{" "}
          ; 4. dukungan komunitas; 5. dokumentasi lengkap{" "}
          <a href="https://www.php.net/manual/en/index.php" className="underline">
            dokumentasi php
          </a>
          ; 6. dibuat khusus untuk web; 7. kebanyakan website yang ada{" "}
          <a href="https://w3techs.com/" className="underline">
            popular program
          </a>
          ; 8. banyak web besar yang dibuat dengan php: fb, yahoo, wikipedia, flickr. 9. banyak cms (content management
          system) nya: wordpress, joomla, drupal, moodle. 10. banyak framework php: codeigniter, cakephp, laravel, yii,
          symfony
        </li>
        <li>
          <b>yang dipelajari</b>: client-side vs server-side; static vs dinamic website; persiapan lingkungan; sintaks php;
          array; request method; studi kasus web sederhana; db; crud; login & registrasi; session & cookie; ajax; upload
          file; reporting; web hosting; <b>tools</b> code editor, web server, web browser, db server; icon php: elePHPant
          vincent pontier. <b>karakteristik</b> karakteristik: ekstensi .php, syntax dalam delimiter/tag php, digunakan
          bersamaan html (html dalam php atau sebaliknya) mengikuti kaidah C
        </li>
        <li>
          <b>sejarah</b> oleh Rasmus Lerdorf 1994. Awalnya tidak bermaksud membuat php, hanya membuat program dengan bahasa C
          untuk kelola web pribadinya (personal home page) jadi php awalnya Personal Home Page. di dalamnya ada form
          terhubung ke db maka namanya PHP/FI (personal home page/form interpreter). ternyata banyak diminati orang lain
          sehingga dia buat open source namanya PHP Tools v.1 1995 - PHP Tools, v.2, 1997. dari sana, banyak yang
          mengembangkan hingga ada Zeev Suraski & Andi Gutmans PHP 3 1998 dengan perusahaan ZenD Technologies. Dua orang ini
          berjasa membuat parser (program untuk membaca syntax php) lalu namanya berubah menjadi PHP (PHP Hypertext
          Preprocessor) - PHP 4 2000 dengan Zend Engine (mesin interpreter pengelola php) - PHP 5 2004 (update terbesar,
          sudah ada fitur OOP, dan PDO dengan ZenD engine 2). 2008 PHP 4 berhenti dikembangkan (Gerakan GoPHP5), tadinya baik
          PHP 4 maupun PHP 5 dikembangkan karena banyak server yang masih PHP 4, PHP 6 ditunda dan diabaikan karena masalah
          unicode (untuk suport berbagai bahasa di dunia) maka PHP 5.4 2010 - PHP7 2014 dengan ZenD engine 3
        </li>
        <li>
          client-side: html css js semua pemrosesannya terjadi di sisi client atau komputer masing masing. server-side,
          client mengirim http request ke web server (apache, iis, nginx, tomcat, lighttpd, dll) jika server menerima. ada
          bahasa pemrograman yang berjalan di sisi server (php, asp, ruby, python). contohnya di dalam website ada struktur
          html sederhana, jika di halaman tersebut ada bahasa php maka web server akan mengeksekusi dahulu syntax php lalu
          dicetak.
        </li>
        <li>
          jadi bahasa pemrograman server tidak bisa dicontek/dilihat karena pemrosesannya terjadi di server, skrip bahasa
          pemrograman server bisa terhubung ke database sehingga website menjadi dinamis.{" "}
          <a href="https://httpd.apache.org/download.cgi" className="underline">
            download apache
          </a>
          ,{" "}
          <a href="https://www.php.net/downloads.php" className="underline">
            download php
          </a>{" "}
          <a href="https://dev.mysql.com/downloads/" className="underline">
            download mysql
          </a>
        </li>
      </ul>
      <div>Persiapan lingkungan</div>
      <ul className="list-inside list-disc">
        <li>
          download xampp, open control panel (start apache and mysql); open explorer on control panel (htdocs) create file
          name.php type{" "}
          <pre>{`<?php echo "hello world"; var_dump("hello world") open url: http://localhost/foldername/file.php ?>
        `}</pre>
        </li>
        <li>
          jika tidak mau repot instal dan konfigurasi satu-satu maka cukup install all in one packages yaitu WAMP, MAMP,
          LAMP, XAMPP. w window, a apache, m mysql, p php, m macintosh, l linux, xampp bisa diinstall untuk semua sistem
          operasi,{" "}
          <a href="https://www.apachefriends.org/download.html" className="underline">
            {" "}
            download xampp
          </a>{" "}
          (x cross platform a apache m mariadb p php p perl). Mysql dibeli sand (yang membuat java) sand dibeli oracle, jadi
          mysql hak ciptanya dimiliki oracle, jadi oepn sorucenya mysql itu mariadb
        </li>
        <li>
          setelah install xampp, buka xampp control panel lalu jalankan apache, lalu buka web browser dan ketik di url
          `localhost` enter. maka akan terbuka dashboard xampp. localhost itu sama saja dengan folder htdocs, ketika dibuka,
          server akan mencari apakah ada file index.php atau index.html, kalau tidak ada tampilkan seluruh isi foldernya.
          kalau mau masuk ke folder tertentu masukan saja path relatif terhadap htdocs misal http://localhost/phpdasar
        </li>
        <li>
          Semua file php kita harus disimpan di folder htdocs C:\xampp\htdocs. mari kita mula dengan membuat folder phpbasic
        </li>{" "}
        <li>
          <b>php basic</b> integer, singel quote, double quote, multiline string, heredoc/nowdoc, $var, $$var, constat,
          scope, local/global/static, GLOBALS, variable reference, array, map, nested, concat, operator (arithmetic,
          assignment, comparison, logic, increment, decrement); expression, statement and block, if else, switch case,
          shorten if : ternary, nullish coalescing; loop for, do, while, break, continue, foreach; function, parameter,
          anonimous function, use, arrow, callable, call_user_func, built-in function: join, explode, implode, strtoloser,
          trim, substr, rsort, array_keys, array_values, is_string, is_array; require, include, require once, include once
        </li>
        <li>
          <b>php oop</b>
          class, property, method, object new, constructor, destructor, visibility (public/private/protected), type
          declaration ? for null, self::[constant]; inheritance parent child extends parent, object type; overriding function
          and overriding constructor; namespace import use alias as group use declaration
        </li>
      </ul>
    </div>
  );
};

export default Php;
