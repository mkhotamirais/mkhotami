import { useState } from "react";
import { kamusList } from "./kamusLIst";

const Kamus = () => {
  const [cari, setCari] = useState("");
  const renderedKamus = kamusList
    .filter((item) => item.text.includes(cari.toLowerCase().trim()))
    .filter((item, i) => i < 5)
    .map((item, i) => (
      <div key={i} className="border-b p-2 text-left">
        <span className="font-medium capitalize">{item.text}</span>: {item.description}
      </div>
    ));

  const handleChange = (e) => {
    setCari(e.target.value);
  };

  let content;
  if (cari.length > 0) {
    if (renderedKamus.length > 0) content = renderedKamus;
    else content = <div className="italic text-red-500">hasil tidak ditemukan</div>;
  } else content = <div>hasil pencarian kamus mini</div>;

  return (
    <div className="border flex flex-col p-2 rounded h-80">
      <input
        type="search"
        className="border rounded mb-2 w-full p-2 bg-inherit"
        placeholder="Cari kamus mini"
        onChange={handleChange}
      />
      <div className="border rounded-lg relative block overflow-y-scroll w-full h-full">
        <div className="p-2 flex flex-col absolute">{content}</div>
      </div>
    </div>
  );
};

export default Kamus;
