import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiskoCartBtn } from "./SiskoQuery";

const SiskoItems = ({ item }) => {
  return (
    <div className="border rounded overflow-hidden shadow">
      <Link to={`detail/${item?.id}`}>
        <figure className="h-56">
          <img
            src={item?.photo}
            alt={item?.name || "no image"}
            className="w-full h-full object-cover hover:scale-95 hover:object-contain transition-all duration-500"
          />
        </figure>
      </Link>
      <div className="p-2">
        <div className="capitalize text-sm">{item?.name}</div>
        <div className="text-lg">Rp{item?.price}</div>
        <div className="flex gap-2 py-3 justify-around">
          <Link to={`detail/${item?.id}`}>
            <FaExclamationCircle />
          </Link>
          <SiskoCartBtn item={item} />
        </div>
      </div>
    </div>
  );
};
SiskoItems.propTypes;

export default SiskoItems;
