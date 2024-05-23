import { FaUser, FaUserTag, FaPenToSquare, FaTrashCan, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import AdmUserModalDel from "./AdmUserModalDel";

const AdmUserItems = ({ item }) => {
  const [idModalDel, setIdModalDel] = useState(null);
  const openModal = () => {
    setIdModalDel(item?._id);
  };
  const onClose = () => {
    setIdModalDel(null);
  };

  return (
    <div className="border rounded p-2">
      <div className="flex items-center gap-2">
        <FaUser />
        {item?.username}
      </div>
      <div className="flex items-center gap-2">
        <FaUserTag />
        {item?.role}
      </div>
      <div className="flex gap-3 mt-2">
        <Link to={`detail/${item?._id}`} className="text-blue-500 hover:opacity-70">
          <FaEye />
        </Link>
        <Link to={`update/${item?._id}`} className="text-green-500 hover:opacity-70">
          <FaPenToSquare />
        </Link>
        <button onClick={openModal} className="text-red-500 hover:opacity-70">
          <FaTrashCan />
        </button>
        <AdmUserModalDel item={item} onClose={onClose} modalId={idModalDel} />
      </div>{" "}
    </div>
  );
};
AdmUserItems.propTypes;

export default AdmUserItems;
