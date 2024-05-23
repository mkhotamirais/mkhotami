import { Link } from "react-router-dom";
import { useGetKamusQuery } from "../../../../app/api/kamusApiSlice";
import { Err, Loading } from "../../../../components/Components";
import { FaPlus } from "react-icons/fa6";
import AdmKamusItems from "./AdmKamusItems";
import { KamusQuerySearch, KamusQuerySort, KamusQueryTime } from "./AdmKamusQuery";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdmKamus = () => {
  const { queryResult } = useSelector((state) => state.kamus);
  const { data, isLoading, isError, isSuccess, error } = useGetKamusQuery(queryResult || "sort=name");

  useEffect(() => {
    console.log(queryResult);
    console.log(isLoading);
    console.log(isSuccess);
  }, [queryResult, isLoading, isSuccess]);

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <AdmKamusItems key={item?._id} item={item} />);
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
        <div>Admin Kamus</div>
        <Link to="post" className="border rounded-full p-2 flex items-center justify-center text-sm">
          <FaPlus />
        </Link>
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

export default AdmKamus;
