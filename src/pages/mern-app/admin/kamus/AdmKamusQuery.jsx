import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setQueryObject, setQueryResult, setQuerySortObj } from "../../../../app/features/kamusSlice";

export const KamusQuerySearch = () => {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQueryObject({ q }));
    dispatch(setQueryResult());
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex my-1 gap-1">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search here"
          className="w-full border rounded focus:outline-none p-1 bg-inherit"
        />
        <button type="submit" className="w-12 border rounded flex items-center justify-center text-lg hover:opacity-70">
          <FaSearchengin />
        </button>
      </form>
    </div>
  );
};

export const KamusQuerySort = () => {
  const { dark } = useSelector((state) => state.basic);
  const { querySortString } = useSelector((state) => state.kamus);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setQuerySortObj({ [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (querySortString) {
      dispatch(setQueryObject({ sort: querySortString }));
      dispatch(setQueryResult());
    }
  }, [dispatch, querySortString]);

  return (
    <div>
      <select
        name="sort"
        id="sort"
        onChange={handleChange}
        className={`${dark ? "bg-slate-800" : "bg-white"} border rounded p-1`}
      >
        <option value={""}>sort</option>
        <option value={"name"}>a-z</option>
        <option value={"-name"}>z-a</option>
      </select>
    </div>
  );
};

export const KamusQueryTime = () => {
  const { dark } = useSelector((state) => state.basic);
  const { querySortString } = useSelector((state) => state.kamus);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setQuerySortObj({ [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (querySortString) {
      dispatch(setQueryObject({ sort: querySortString }));
      dispatch(setQueryResult());
    }
  }, [dispatch, querySortString]);

  return (
    <select
      name="createdAt"
      id="createdAt"
      onChange={handleChange}
      className={`${dark ? "bg-slate-800" : "bg-white"} border rounded p-1`}
    >
      <option value={""}>created</option>
      <option value={"createdAt"}>latest created</option>
      <option value={"-createdAt"}>oldest created</option>
    </select>
  );
};
