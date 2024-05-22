import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../app/client-app/jpSlice";
import { CardGrid, Err, Loading } from "../../../../components/Components";
import JpUserItem from "./JpUserItem";

const JpUser = () => {
  const dispatch = useDispatch();
  const { dataUsers: data, statusUsers: status, errorUsers: error } = useSelector((state) => state.jp);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <JpUserItem key={item?.id} item={item} />);
    content = <CardGrid>{renderedData}</CardGrid>;
  }
  return (
    <div>
      <div>User</div>
      {content}
    </div>
  );
};

export default JpUser;
