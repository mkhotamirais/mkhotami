import { FaUser, FaIdCard, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JpUserItem = ({ item }) => {
  return (
    <Link to={`detail/${item?.id}`} className="border rounded shadow p-2 hover:scale-95 transition-all duration-150">
      <div className="flex items-center gap-1">
        <FaIdCard />
        {item?.id}
      </div>
      <div className="flex items-center gap-1">
        <FaUser />
        {item?.name}
      </div>
      <div className="flex items-center gap-1">
        <FaEnvelope />
        {item?.email}
      </div>
      <div className="flex items-center gap-1">
        <FaPhone />
        {item?.phone}
      </div>
    </Link>
  );
};
JpUserItem.propTypes;

export default JpUserItem;
