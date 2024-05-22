import { useGetUsersQuery } from "../../../../app/api/userApiSlice";
import { CardGrid, Err, Loading } from "../../../../components/Components";
import AdmUserItems from "./AdmUserItems";

const AdmUsers = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUsersQuery();
  console.log(data);
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
    <div>
      AdmUsers
      {content}
    </div>
  );
};

export default AdmUsers;
