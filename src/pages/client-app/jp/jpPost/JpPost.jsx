import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../app/client-app/jpSlice";
import { CardGrid, Err, Loading } from "../../../../components/Components";
import JpPostItems from "./JpPostItems";

const JpPost = () => {
  const dispatch = useDispatch();
  const { dataPosts: data, statusPosts: status, errorPosts: error } = useSelector((state) => state.jp);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <JpPostItems key={item?.id} item={item} />);
    content = <CardGrid>{renderedData}</CardGrid>;
  }

  return (
    <div>
      Post
      {content}
    </div>
  );
};

export default JpPost;
