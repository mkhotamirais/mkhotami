import moment from "moment";
import { FaEnvelope, FaUser, FaUserClock, FaUserTag } from "react-icons/fa6";

const AdmUserItems = ({ item }) => {
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
      <div className="flex items-center gap-2">
        <FaEnvelope />
        {item?.email}
      </div>
      <div className="flex items-center gap-2">
        <FaUserClock />
        Created {moment(item?.createdAt).fromNow()}
      </div>
      <div className="flex items-center gap-2">
        <FaUserClock />
        Updated {moment(item?.updatedAt).fromNow()}
      </div>
    </div>
  );
};
AdmUserItems.propTypes;

export default AdmUserItems;
