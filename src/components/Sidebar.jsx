import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenBubble, removeOpenNav, removeOpenSidebar, toggleOpenSidebar } from "../app/features/basicSlice";
import usePath from "../hooks/usePath";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const homeMenus = [
  { href: "/home", text: "reference" },
  { href: "/home/css-tips", text: "css tips" },
  { href: "/home/simple-webpage", text: "simple webpage" },
  { href: "/home/vanilla-components", text: "vanilla components" },
  { href: "/home/react-carousel", text: "react carousel" },
  { href: "/home/react-accordion", text: "react accordion" },
  { href: "/home/react-pagination", text: "react pagination" },
];

const basicMenus = [
  { href: "/basic", text: "html" },
  { href: "/basic/css", text: "css" },
  { href: "/basic/javascript", text: "javascript" },
  { href: "/basic/php", text: "php" },
  { href: "/basic/vcs", text: "vcs" },
  { href: "/basic/vscode", text: "vscode" },
  { href: "/basic/typescript", text: "typescript" },
];

const mernMenus = [
  { href: "/mern", text: "referensi" },
  { href: "/mern/mongodb", text: "mongodb" },
  { href: "/mern/mysql", text: "mysql" },
  { href: "/mern/express", text: "express" },
  { href: "/mern/reactjs", text: "reactjs" },
  { href: "/mern/nodejs", text: "nodejs" },
];

const publicApisMenus = [
  { href: "/public-apis", text: "resource api" },
  { href: "/public-apis/omdbapi", text: "omdbapi" },
  { href: "/public-apis/jsonplaceholder", text: "jsonplaceholder" },
  { href: "/public-apis/fakestoreapi", text: "fakestoreapi" },
  { href: "/public-apis/sisko", text: "sisko" },
  { href: "/public-apis/newsapi", text: "newsapi" },
];

const miniProjectsMenus = [
  { href: "/mini-projects", text: "todo" },
  { href: "/mini-projects/kamus-mini", text: "kamus mini" },
];

export const AsideBtn = ({ className }) => {
  const dispatch = useDispatch();
  const { openNav } = useSelector((state) => state.basic);

  const handleClick = () => {
    dispatch(toggleOpenSidebar());
    if (openNav) dispatch(removeOpenNav());
  };
  return (
    <button onClick={handleClick} className={`block sm:hidden ${className}`}>
      <FaBars />
    </button>
  );
};
AsideBtn.propTypes;

export const AsideLinks = ({ className }) => {
  const [sidebarActive, setSidebarActive] = useState(0);
  const { path } = usePath();
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([]);
  const { openBubble } = useSelector((state) => state.basic);
  const handleClick = () => {
    dispatch(removeOpenSidebar());
    if (openBubble) dispatch(removeOpenBubble());
  };
  useEffect(() => {
    setSidebarActive(path[2]);
  }, [path]);

  useEffect(() => {
    if (path[1] === "home") setMenus(homeMenus);
    else if (path[1] === "basic") setMenus(basicMenus);
    else if (path[1] === "mern") setMenus(mernMenus);
    else if (path[1] === "public-apis") setMenus(publicApisMenus);
    else if (path[1] === "mini-projects") setMenus(miniProjectsMenus);
  }, [path]);

  useEffect(() => {
    setSidebarActive(path[2]);
  }, [path]);

  return (
    <>
      <div className="capitalize pb-3 font-medium">{path[1] && path[1].split("-").join(" ")} menu</div>
      <div className={`${className} flex flex-col`}>
        {menus.map((menu, i) => (
          <NavLink
            onClick={handleClick}
            to={menu.href}
            key={i}
            className={`${
              sidebarActive === menu.href.split("/")[2] ? "text-cyan-500" : ""
            } hover:text-cyan-500 py-1 capitalize`}
          >
            {menu.text}
          </NavLink>
        ))}
      </div>
    </>
  );
};
AsideLinks.propTypes;

export const AsideMain = ({ className }) => {
  return (
    <div className={`hidden sm:block ${className}`}>
      <AsideLinks />
    </div>
  );
};
AsideMain.propTypes;

export const AsideCollapse = ({ className }) => {
  const { dark, openSidebar } = useSelector((state) => state.basic);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`z-40 sm:hidden ${className} ${dark ? "bg-slate-800" : "bg-white"} ${
        openSidebar ? "scale-x-100" : "scale-x-0"
      } origin-left p-3 fixed top-16 bottom-0 left-0 w-3/4 shadow border-r rounded-r-lg transition-all duration-150`}
    >
      <AsideLinks />
    </div>
  );
};
AsideCollapse.propTypes;
