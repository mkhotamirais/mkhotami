import { FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setQ, setQuery, setTop } from "../../../app/client-app/newsapiSlice";

export const NewsapiQ = () => {
  const { q, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery({ ...query, queryObj: { q } }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <input
        type="search"
        value={q}
        onChange={(e) => dispatch(setQ(e.target.value))}
        placeholder="Search here"
        className="border rounded p-1 focus:outline-none bg-inherit"
      />
      <button type="submit" className="w-8 flex items-center justify-center bg-cyan-500 text-white hover:opacity-70 rounded">
        <FaSearchengin />
      </button>
    </form>
  );
};

export const NewsapiTop = () => {
  const { top, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setTop(e.target.value));
    dispatch(setQuery({ ...query, top: e.target.value }));
  };

  return (
    <Pilih id="top" value={top} onChange={handleChange}>
      <option value="">top category</option>
      <option value="top-headlines">Top Headlines</option>
      <option value="everything">Everything</option>
    </Pilih>
  );
};

const Pilih = ({ id, value, onChange, children }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div>
      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`${dark ? "bg-slate-800" : "bg-white"} p-1 border rounded mb-2`}
      >
        {children}
      </select>
    </div>
  );
};
Pilih.propTypes;
