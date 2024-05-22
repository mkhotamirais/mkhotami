import { useDispatch, useSelector } from "react-redux";
import { CardGrid, Err, Loading } from "../../../components/Components";
import SiskoItems from "./SiskoItems";
import { SiskoCartLink, SiskoSearch, SiskoSort } from "./SiskoQuery";
import { useEffect } from "react";
import { getSiskoProducts } from "../../../app/client-app/siskoSlice";

const Sisko = () => {
  const { data, status, error, query } = useSelector((state) => state.sisko);
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiskoProducts(query));
  }, [query, dispatch]);
  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "error") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <SiskoItems key={item?.id} item={item} />);
    content = <CardGrid>{renderedData}</CardGrid>;
  }

  return (
    <div>
      <div>Sistem toko</div>
      <div
        className={`z-30 flex justify-between items-center gap-2 mb-2 sticky top-16 py-1 ${
          dark ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2">
          <SiskoSearch />
          <SiskoSort />
        </div>
        <SiskoCartLink />
      </div>
      {content}
    </div>
  );
};

export default Sisko;
