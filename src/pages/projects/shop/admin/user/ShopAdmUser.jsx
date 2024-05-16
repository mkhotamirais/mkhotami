import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../../../../app/api/userApiSlice";
import { CardGrid, Err, Loading } from "../../../../../components/Components";
import ShopAdmUserItems from "./ShopAdmUserItems";
import { FaPlusCircle } from "react-icons/fa";

const ShopAdmUser = () => {
  const { data = [], isLoading, isError, isSuccess, error } = useGetUsersQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <ShopAdmUserItems key={item?._id} item={item} />);
      content = <CardGrid>{renderedData}</CardGrid>;
    } else content = <div className="text-center italic mt-5">no content</div>;
  }

  return (
    <div>
      <div className="flex gap-2 items-center">
        <div>User</div>
        <Link to="post" className="text-cyan-500 hover:opacity-70 inline">
          <FaPlusCircle />
        </Link>
      </div>
      {content}
    </div>
  );
};

export default ShopAdmUser;
