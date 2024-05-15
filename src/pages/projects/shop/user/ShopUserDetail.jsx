import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../../../app/api/userApiSlice";
import { FaEnvelope, FaIdCard, FaUser, FaUserGear, FaVenusMars } from "react-icons/fa6";

const ShopUserDetail = () => {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);

  return (
    <div>
      Detail User {data?.username}
      <div className="border rounded p-2 flex flex-col gap-2">
        <div className="text-xs flex gap-1 items-center">
          <FaIdCard />
          {data?._id?.substring(0, 15)}..
        </div>
        <div className="flex gap-1 items-center">
          <FaUser />
          {data?.username}
        </div>
        <div className="flex gap-1 items-center">
          <FaEnvelope />
          {data?.email}
        </div>
        <div className="flex gap-1 items-center">
          <FaVenusMars />
          {data?.gender}
        </div>
        <div className="flex gap-1 items-center">
          <FaUserGear />
          {data?.role}
        </div>
      </div>
    </div>
  );
};

export default ShopUserDetail;
