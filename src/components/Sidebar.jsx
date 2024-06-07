import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeOpenNav, removeOpenSidebar, toggleOpenSidebar } from "../app/features/basicSlice";
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
  { href: "/home/library-components", text: "library components" },
  { href: "/home/trynew-components", text: "trynew components" },
];

const basicMenus = [
  { href: "/basic", text: "html" },
  { href: "/basic/css", text: "css" },
  { href: "/basic/javascript", text: "javascript" },
  { href: "/basic/php", text: "php" },
  { href: "/basic/vcs", text: "vcs" },
  { href: "/basic/vscode", text: "vscode" },
  { href: "/basic/typescript", text: "typescript" },
  { href: "/basic/course", text: "course" },
  { href: "/basic/umum", text: "umum" },
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
  { href: "/client-app", text: "resource api" },
  { href: "/client-app/todo", text: "todo" },
  { href: "/client-app/omdbapi", text: "omdbapi" },
  { href: "/client-app/jsonplaceholder", text: "jsonplaceholder" },
  { href: "/client-app/fakestoreapi", text: "fakestoreapi" },
  { href: "/client-app/sisko", text: "sisko" },
  { href: "/client-app/newsapi", text: "newsapi" },
];

const miniProjectsMenus = [
  { href: "/mern-app", text: "welcome" },
  { href: "/mern-app/kamus", text: "kamus" },
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
  const [sidebarActive, setSidebarActive] = useState("");
  const { path } = usePath();
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([]);
  const handleClick = () => {
    dispatch(removeOpenSidebar());
  };
  useEffect(() => {
    setSidebarActive(path[2]);
  }, [path]);

  useEffect(() => {
    if (path[1] === "home") setMenus(homeMenus);
    else if (path[1] === "basic") setMenus(basicMenus);
    else if (path[1] === "mern") setMenus(mernMenus);
    else if (path[1] === "client-app") setMenus(publicApisMenus);
    else if (path[1] === "mern-app") setMenus(miniProjectsMenus);
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
