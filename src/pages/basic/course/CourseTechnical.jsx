export default function CourseTechnical() {
  return (
    <div>
      <div>
        <b>Technical</b>
      </div>
      <div>
        <div>
          Slicing? Slateless component? cara simpan data user login? 3 komponen redux? HOC React? funcsi DOM? Redux? API &
          cara konsum API dari db tempat lain? synchronous & asynchronous? fungsi cookies dan localstorage dalam login?
          fungsi method POST, GET, PUT, PATCH, DELETE? jelaskan 1 portofolio yang kompleks penbuatannya dan penyelesaiannya.
        </div>
        <div>
          <p>
            Slicing: adalah proses pemecahan desain UI menjadi komponen-komponen kecil yang reusable. tujuannya agar lebih
            modular, terstruktur dan mudah dikelola. Prinsip dasarnya: 1. identifikasi komponen untuk dipisah; 2. pisahkan
            berdasarkan fungsi dan tampilan, ada presentational components yang bertanggung jawab untuk tampilan dan
            container components yang untuk logika bisnis; 3. komposisi komponen, gabungkan komponen sesua kebutuha; 4. props
            untuk kirim data ke child; 5. modular dan reusable; 6. file struktur, misalnya komponent yang sejenis dimasukan
            ke dalam satu folder.
          </p>
          <br />
          <p>
            Stateless component: komponen yang tidak memiliki state internal sendiri, hanya terima data dari parent
            component. hanya bertugas merender UI statis atau UI yang hanya bergantung pada props, tanpa perubahan internal.
          </p>
          <br />
          <p>
            cara simpan data user login dilakukan dengan menyimpan token di browser (cookie atau local storage) yang diterima
            dari response server saat login. token tersebut berisi data user login yang di generate di sisi server oleh
            library jwt.
          </p>
          <br />
          <p>
            3 komponen utama react redux: 1. Store: wadah pusat menyimpan seluruh state, jadi hanya ada satu stor di setiap
            app; 2. Actions: object js yang mengirim data dari app ke store, setiap action memiliki type dan bisa memiliki
            payload sebagai data tambahan; 3. Reducers: fungsi yang menentukan bagaimana state aplikasi berubah sebagai
            response terhadap action yang dikirim ke store. Reducer menerima state sebelumnya dan action sebagai argumen lalu
            mengembalikan state baru. Reducers harus merupakan fungsi murni artinya tidak boleh mengubah state yang ada dan
            harus mengembalikans tate baru.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
