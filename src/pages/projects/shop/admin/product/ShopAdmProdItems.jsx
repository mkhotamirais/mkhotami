import { useState } from "react";
import { Figure } from "../../../../../components/Components";
import { Link } from "react-router-dom";
import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import ShopAdmProdModalDel from "./ShopAdmProdModalDel";
const imageUrl = "https://mkhotami-server.vercel.app";

const ShopAdmProdItems = ({ item }) => {
  const [idModalDel, setIdModalDel] = useState(null);

  const onClose = () => {
    setIdModalDel(null);
  };

  return (
    <div className="border rounded-lg p-1 sm:p-3 flex flex-col gap-1 sm:gap-2">
      <div className="text-sm text-gray-500">ID: {item?._id?.substring(0, 10)}...</div>
      <Figure src={`${imageUrl}/${item?.imageUrl}`} alt={item?.imageName || "no image"} />
      <div className="capitalize font-medium text-base sm:text-lg">{item?.name}</div>
      <div className="text-lg sm:text-2xl">Rp{item?.price?.toLocaleString("id-ID")}</div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-3">
          <Link to={`update/${item?._id}`} className="text-cyan-500 hover:opacity-70">
            <FaPenToSquare />
          </Link>
          <Link to={`detail/${item?._id}`} className="text-yellow-500 hover:opacity-70">
            <FaExclamationCircle />
          </Link>
        </div>
        <button onClick={() => setIdModalDel(item?._id)} className="text-red-500 hover:opacity-70">
          <FaTrash />
        </button>
        <ShopAdmProdModalDel onClose={onClose} itemId={item?._id} modalId={idModalDel} item={item} />
      </div>
    </div>
  );
};
ShopAdmProdItems.propTypes;

export default ShopAdmProdItems;
