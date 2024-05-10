import { useState } from "react";
import OmdbModalView from "./OmdbModalView";

const OmdbItems = ({ item }) => {
  const [modalViewId, setModalViewId] = useState(null);

  const onClose = () => {
    setModalViewId(null);
  };

  const openMovie = () => {
    setModalViewId(item?.imdbID);
  };

  return (
    <>
      <div onClick={openMovie} className="border cursor-pointer rounded-lg overflow-hidden relative">
        <div className="z-30 absolute right-1 top-1 bg-slate-500 text-white text-xs rounded p-1">{item?.Year}</div>
        <div className="z-30 absolute left-1 top-1 bg-slate-500 text-white text-xs rounded p-1">{item?.Type}</div>
        <figure className="h-56">
          <img
            src={item?.Poster}
            alt={item?.Title || "no image"}
            className="w-full h-full object-cover hover:scale-95 hover:object-contain transition-all duration-500"
          />
        </figure>
        <div className="text-sm text-center flex items-start justify-center mt-1">{item?.Title}</div>
      </div>
      <OmdbModalView itemId={item?.imdbID} modalViewId={modalViewId} onClose={onClose} />
    </>
  );
};
OmdbItems.propTypes;

export default OmdbItems;
