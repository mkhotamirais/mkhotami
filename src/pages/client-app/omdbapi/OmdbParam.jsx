import { FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { reset, setParams, setPlot, setS, setType, setY } from "../../../app/client-app/omdbapiSlice";
import { useEffect } from "react";

export const OmdbReset = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(reset())} className="bg-cyan-500 text-white hover:opacity-70 rounded p-1 px-2">
      reset
    </button>
  );
};

export const OmdbSearch = () => {
  const { s } = useSelector((state) => state.omdbapi);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setParams({ s }));
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
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
  );
};

export const OmdbType = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.omdbapi);
  useEffect(() => {
    dispatch(setParams({ type }));
  }, [dispatch, type]);

  return (
    <Pilih id="type" value={type} onChange={(e) => dispatch(setType(e.target.value))}>
      <option value="">type</option>
      <option value="movie">movie</option>
      <option value="series">series</option>
      <option value="episode">episode</option>
    </Pilih>
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
    <Pilih id="y" value={y} onChange={(e) => dispatch(setY(e.target.value))}>
      <option value="">year</option>
      {tahun.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
      <option value="series">series</option>
      <option value="episode">episode</option>
    </Pilih>
  );
};

export const OmdbPlot = () => {
  const dispatch = useDispatch();
  const { plot } = useSelector((state) => state.omdbapi);
  useEffect(() => {
    dispatch(setParams({ plot }));
  }, [dispatch, plot]);

  return (
    <Pilih id="plot" value={plot} onChange={(e) => dispatch(setPlot(e.target.value))}>
      <option value="">plot</option>
      <option value="short">short</option>
      <option value="full">full</option>
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
