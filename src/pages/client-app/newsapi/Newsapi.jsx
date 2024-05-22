import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../app/client-app/newsapiSlice";
import { CardGrid, Err, Loading } from "../../../components/Components";
import NewsapiItems from "./NewsapiItems";
import { NewsapiQ, NewsapiTop } from "./NewsapiQuery";

const Newsapi = () => {
  const { data, status, error, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(query));
  }, [dispatch, query]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data && data.length > 0) {
      const renderedData = data && data.map((item) => <NewsapiItems key={item?.publishedAt} item={item} />);
      content = <CardGrid>{renderedData}</CardGrid>;
    } else content = <div className="text-center italic mt-5">no data</div>;
  }

  return (
    <div>
      Newsapi
      <div className="mb-2">
        <NewsapiQ />
      </div>
      <div className="mb-2">
        <NewsapiTop />
      </div>
      {content}
    </div>
  );
};

export default Newsapi;
