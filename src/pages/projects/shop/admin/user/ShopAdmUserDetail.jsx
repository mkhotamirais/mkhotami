import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../../../../app/api/userApiSlice";
import { FaEnvelope, FaIdCard, FaUser, FaUserGear, FaVenusMars } from "react-icons/fa6";
import { Err, Loading } from "../../../../../components/Components";

const ShopAdmUserDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess, error } = useGetUserByIdQuery(id);

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    content = (
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
            {data?.gender || "-"}
          </div>
          <div className="flex gap-1 items-center">
            <FaUserGear />
            {data?.role}
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default ShopAdmUserDetail;
