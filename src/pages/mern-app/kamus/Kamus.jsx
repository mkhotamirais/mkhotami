import { KamusQuerySearch, KamusQuerySort, KamusQueryTime } from "./KamusQuery";
import { useSelector } from "react-redux";
import { useGetKamusQuery } from "../../../app/api/kamusApiSlice";
import { Err, Loading } from "../../../components/Components";
import KamusItems from "./KamusItems";

const Kamus = () => {
  const { queryResult } = useSelector((state) => state.kamus);
  const { data, isLoading, isError, isSuccess, error } = useGetKamusQuery(queryResult || "sort=name");

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <KamusItems key={item?._id} item={item} />);
      content = (
        <div>
          <div className="flex flex-col gap-1 my-2">{renderedData}</div>
        </div>
      );
    } else content = <div className="text-center mt-3 italic">no content</div>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <div>Kamus</div>
      </div>
      <div>
        <KamusQuerySearch />
      </div>
      <div className="flex gap-1 items-center">
        <KamusQuerySort />
        <KamusQueryTime />
      </div>
      {content}
    </div>
  );
};

export default Kamus;
