import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaIdCard, FaPenToSquare, FaTrash, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ShopAdmUserModalDel from "./ShopAdmUserModalDel";

const ShopAdmUserItems = ({ item }) => {
  const [IdModalDel, setIdModalDel] = useState(null);
  const onClose = () => {
    setIdModalDel(null);
  };
  return (
    <div className="text-sm border rounded p-2 transition-all duration-150 cursor-pointer flex flex-col gap-1 overflow-hidden">
      <div className="text-xs flex gap-1 items-center">
        <FaIdCard />
        {item?._id?.substring(0, 15)}..
      </div>
      <div className="flex gap-1 items-center">
        <FaUser />
        {item?.username}
      </div>
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
        <ShopAdmUserModalDel onClose={onClose} itemId={item?._id} modalId={IdModalDel} item={item} />
      </div>
    </div>
  );
};
ShopAdmUserItems.propTypes;

export default ShopAdmUserItems;
