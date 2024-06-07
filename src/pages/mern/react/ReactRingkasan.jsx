import ReactStyling from "./ReactStyling";
import ReactClass from "./hooks/edwReactClass/ReactClass";

const ReactRingkasan = () => {
  return (
    <section>
      <div>Ringkasan</div>
      <article>
        <p>React is a javascript library for building UI. used for build SPA, allows us to create reusable UI component</p>
        <p>
          ReactJs adalah library js untuk UI Web App, beda dengan React Native (framework js untuk mobile app).
          Library/Pustaka perlu library pendukung seperti react-router. Prinsipnya component based, declarative, learn once
          write anywhere. Menggunakan Firtual Dom, era sebelumnya dengan js native atau jquery. Extensi .jsx (javascript x
          html). Oleh Jordan Walke, FB. Populer, komunitas besar aktif, open source, ikut trend js modern, banyak digunakan
          perusahan. Tools: nodejs, jpn, vercel, gihub. Cara istall bisa dengan Vite atau Cra.
        </p>
        <p>
          Component adalah bagian terkecil React App, tersusun dari elements, konsepnya mirip fungsi. Tipe data component:
          props, state. Statefull (class component) stateless (functional component direkomendasikan). Props adalah properti
          atau variable dari luar komponen untuk komunikasi parent ke child. State adalah properti private menempel pada
          komponen dan hanya bisa dimodifikasi di lingkup komponen. Props hanya berlaku di Stateless (functional component).
          State tersedia di Stateless dan Statefull (class component). Satu component sebaiknya memiliki satu tugas.
        </p>
        <p>
          Rendering variable dengan kuruang kurawal, dibutuhkan saat looping (rendering list array dengan map), conditional
          rendering (if, else, sort circuit evalutation && ||), komunikasi komponen. Form validasi. Lifecycle siklus hidup
          statefull <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">lihat diagram</a>.
          componentDidMout (pertama render); componentDidUpdate (setelah render, kapan diupdate); componentWillUnmount (kapan
          akan dicopot). Router dengan library react-router-dom. State management dengan library redux mengumpulkan state di
          global state, pisahkan logic dan view, dispatch cara untuk jalankan reducer (action creator), redux thunk untuk
          asynchronous
        </p>
        <p>
          Hook adalah cara agar bisa akses lifecycle component dengan stateless. Sebelumnya hanyal stateful yang punya state
          dan akses lifecycle. Tapi stateleff punya side effect (efek samping) untuk buat seolah stateless bersifat stateful.
          ReactJs akui performa stateless lebih cepat. Aturannya hanya bisa dipanggil di top level function. macamnya:
          useState, useEffect, useReducer, customHook.
        </p>
        <div>ReactStyling</div>
        <ReactStyling />
        <div>React Class</div>
        <ReactClass />
      </article>
    </section>
  );
};

export default ReactRingkasan;
