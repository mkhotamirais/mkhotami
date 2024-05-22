import { FaBars, FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenBubble, removeOpenNav, removeOpenSidebar, toggleOpenNav } from "../app/features/basicSlice";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import usePath from "../hooks/usePath";

const navMenus = [
  { href: "home", text: "home" },
  { href: "basic", text: "basic" },
  { href: "mern", text: "mern" },
  { href: "client-app", text: "client app" },
  { href: "mern-app", text: "mern app" },
];

export const NavBtn = () => {
  const dispatch = useDispatch();
  const { openNav, openSidebar, openBubble } = useSelector((state) => state.basic);
  const handleClick = () => {
    dispatch(toggleOpenNav());
    if (openSidebar) dispatch(removeOpenSidebar());
    if (openBubble) dispatch(removeOpenBubble());
  };

  return (
    <button onClick={handleClick} className={`block sm:hidden ${openNav ? "rotate-180" : ""} transition-all duration-150`}>
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};
export const NavLinks = ({ className }) => {
  const [navActive, setNavActive] = useState("home");
  const { path } = usePath();
  const dispatch = useDispatch();
  useEffect(() => {
    setNavActive(path[1]);
  }, [path]);
  return navMenus.map((item, i) => (
    <NavLink
      onClick={() => dispatch(removeOpenNav())}
      key={i}
      to={item.href}
      className={`${navActive === item.href ? "text-cyan-500" : ""} ${className} capitalize hover:text-cyan-500`}
    >
      {item.text}
    </NavLink>
  ));
};
NavLinks.propTypes;

export const NavMain = () => {
  return (
    <div className="hidden sm:flex gap-4 w-full">
      <NavLinks />
    </div>
  );
};
export const NavCollapse = () => {
  const { openNav } = useSelector((state) => state.basic);
  return (
    <div
      className={`z-50 fixed top-16 w-full bg-inherit ${
        openNav ? "scale-y-100" : "scale-y-0"
      } origin-top flex sm:hidden flex-col p-4 border-b rounded-b-lg shadow transition-all duration-150`}
    >
      <NavLinks className="py-2 border-b" />
    </div>
  );
};
