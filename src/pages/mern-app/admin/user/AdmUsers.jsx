import { useGetUsersQuery } from "../../../../app/api/userApiSlice";
import { CardGrid, Err, Loading } from "../../../../components/Components";
import AdmUserItems from "./AdmUserItems";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const AdmUsers = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery();
  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <AdmUserItems key={item?._id} item={item} />);
      content = <CardGrid>{renderedData}</CardGrid>;
    } else content = <div className="italic mt-3 text-center">no content</div>;
  }
  return (
    <div className="my-2">
      <div className="flex justify-between my-1">
        <div>Admin Kamus</div>
        <Link to="post" className="border rounded-full p-2 flex items-center justify-center text-sm">
          <FaPlus />
        </Link>
      </div>
      {content}
    </div>
  );
};

export default AdmUsers;
