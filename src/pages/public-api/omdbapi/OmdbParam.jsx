import { FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { reset, setParams, setPlot, setS, setType, setY } from "../../../app/public-api/omdbapiSlice";
import { useEffect } from "react";

export const OmdbReset = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>reset</button>;
};

export const OmdbSearch = () => {
  const { s } = useSelector((state) => state.omdbapi);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setParams({ s }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-2">
        <input
          type="text"
          value={s}
          onChange={(e) => dispatch(setS(e.target.value))}
          placeholder="Search here"
          className="border rounded bg-inherit p-1"
        />
        <button
          type="submit"
          className="focus:outline-none border w-8 rounded self-grow flex items-center justify-center bg-cyan-500 text-white hover:opacity-70"
        >
          <FaSearchengin />
        </button>
      </form>
    </div>
  );
};

export const OmdbType = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.omdbapi);
  useEffect(() => {
    dispatch(setParams({ type }));
  }, [dispatch, type]);

  return (
    <div>
      <select name="type" id="type" className="p-1 border rounded mb-2" onChange={(e) => dispatch(setType(e.target.value))}>
        <option value="">type</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
    </div>
  );
};

export const OmdbY = () => {
  const dispatch = useDispatch();
  const { y } = useSelector((state) => state.omdbapi);
  useEffect(() => {
    dispatch(setParams({ y }));
  }, [dispatch, y]);
  let tahun = [];
  let tahunIni = new Date().getFullYear();
  for (let i = tahunIni; i >= 1990; i--) {
    tahun.push(i);
  }
  return (
    <div>
      <select name="y" id="y" className="p-1 border rounded mb-2" onChange={(e) => dispatch(setY(e.target.value))}>
        <option value="">year</option>
        {tahun.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
    </div>
  );
};

export const OmdbPlot = () => {
  const dispatch = useDispatch();
  const { plot } = useSelector((state) => state.omdbapi);
  useEffect(() => {
    dispatch(setParams({ plot }));
  }, [dispatch, plot]);

  return (
    <div>
      <select name="plot" id="plot" className="p-1 border rounded mb-2" onChange={(e) => dispatch(setPlot(e.target.value))}>
        <option value="">plot</option>
        <option value="short">short</option>
        <option value="full">full</option>
      </select>
    </div>
  );
};
