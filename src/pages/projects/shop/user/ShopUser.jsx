import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../../../app/api/userApiSlice";
import { CardGrid, Err, Loading } from "../../../../components/Components";
import ShopUserItems from "./ShopUserItems";
import { FaPlusCircle } from "react-icons/fa";

const ShopUser = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <ShopUserItems key={item?._id} item={item} />);
      content = <CardGrid>{renderedData}</CardGrid>;
    } else content = <div className="text-center italice mt-5">no content</div>;
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

export default ShopUser;
