import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../../app/client-app/omdbapiSlice";
import { CardGrid, Err, Loading } from "../../../components/Components";
import OmdbItems from "./OmdbItems";
import { OmdbPlot, OmdbReset, OmdbSearch, OmdbType, OmdbY } from "./OmdbParam";

const Omdbapi = () => {
  const { data, status, error, params } = useSelector((state) => state.omdbapi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(params));
  }, [dispatch, params]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <OmdbItems key={item?.imdbID} item={item} />);
      content = <CardGrid>{renderedData}</CardGrid>;
    } else content = <div className="italic text-center">no content</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <OmdbSearch />
        <OmdbReset />
      </div>
      <div className="flex gap-1">
        <OmdbType />
        <OmdbY />
        <OmdbPlot />
      </div>
      {content}
    </div>
  );
};

export default Omdbapi;
