import { FaCartPlus, FaCartShopping, FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems, setQuery, setSearch, setSort } from "../../../app/client-app/siskoSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const SiskoSearch = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.sisko);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery({ search_name: search }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex border min-w-10 rounded">
      <input
        type="search"
        value={search}
        placeholder="Search here"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="p-1 w-full focus:outline-none bg-inherit"
      />
      <button
        type="submit"
        className="w-10 inline-flex border-l items-center justify-center hover:bg-cyan-600 hover:text-white"
      >
        <FaSearchengin />
      </button>
    </form>
  );
};

export const SiskoSort = () => {
  const { sort } = useSelector((state) => state.sisko);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuery({ sorting: sort }));
  }, [dispatch, sort]);
  return (
    <Pilih id="sort" onChange={(e) => dispatch(setSort(e.target.value))}>
      <option value="">Sort</option>
      <option value="Lates">Latest</option>
      <option value="cheapest">Cheapest</option>
      <option value="expensive">Expensive</option>
    </Pilih>
  );
};

export const SiskoCartLink = () => {
  const { count } = useSelector((state) => state.sisko);
  return (
    <Link to="cart" className="inline-block text-xl relative">
      <FaCartShopping />
      <div className="absolute text-xs -top-3 right-0 bg-red-500 text-white flex items-center justify-center p-[0.2rem] leading-none rounded">
        {count}
      </div>
    </Link>
  );
};

export const SiskoCartBtn = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const { id, name, photo, price, weight } = item;
    const data = { id, qty: 1, weight, name, photo, price };
    dispatch(setCartItems(data));
  };
  return (
    <button onClick={handleAddToCart}>
      <FaCartPlus />
    </button>
  );
};
SiskoCartBtn.propTypes;

const Pilih = ({ id, value, onChange, children }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div>
      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`${dark ? "bg-slate-800" : "bg-white"} p-1 border rounded`}
      >
        {children}
      </select>
    </div>
  );
};
Pilih.propTypes;
