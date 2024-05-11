import { FaBars, FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePath from "../hooks/usePath";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenBubble } from "../app/features/basicSlice";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";

export const Prev = ({ className }) => (
  <div className={`${className}`}>
    <Link to={-1} className="hover:text-cyan-600">
      <FaChevronLeft />
    </Link>
  </div>
);
Prev.propTypes;

export const Next = ({ className }) => (
  <div className={`${className}`}>
    <Link to={1} className="hover:text-cyan-600">
      <FaChevronRight />
    </Link>
  </div>
);
Next.propTypes;

export const Breadcrumb = ({ className }) => {
  const { path } = usePath();
  return (
    <div className={`${className} py-1 text-sm border-b overflow-x-scroll w-full`}>
      <div className="flex items-center gap-1">
        <div className="text-xs flex gap-3">
          <Prev />
          <Next />
        </div>
        <div className="flex">
          {path.map((item, i) => {
            let to;
            if (i === 0) to = "..";
            else if (item === "detail" || item === "update") to = "#";
            else to = "/" + location.pathname.split("/").splice(1, path.indexOf(item)).join("/");
            return (
              <Link to={to} key={i}>
                <div className="inline px-1 hover:text-cyan-500 hover:underline">{item.split("-").join(" ")}</div>
                {i < path.length - 1 && "/"}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Breadcrumb.propTypes;

export const Bubble = ({ menus, className }) => {
  const [bubbleActive, setBubbleActive] = useState(null);
  const { path } = usePath();
  const { openBubble, dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenBubble());
  };
  useEffect(() => {
    setBubbleActive(path[2]);
  }, [path]);
  return (
    <div className={`${className}`}>
      <button type="button" onClick={handleClick} className="flex">
        <FaBars />
      </button>
      <div
        className={`z-40 absolute ${dark ? "bg-slate-900" : "bg-white"} translate-y-1 ${
          openBubble ? "scale-100" : "scale-0"
        } origin-top-left overflow-hidden border p-2 px-3 rounded transition-all duration-150`}
      >
        <div className="flex flex-col">
          {menus.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className={`${bubbleActive === item.href ? "text-cyan-500" : ""} hover:text-cyan-500 py-1`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
Bubble.propTypes;

export const Tabs = ({ menus }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 py-2">
        {menus.map((item, i) => (
          <button
            onClick={() => setActive(i)}
            key={i}
            className={`${active === i ? "text-cyan-500" : ""} hover:text-cyan-500`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div>
        {menus.map((item, i) => (
          <div key={i} className={`${active === i ? "block" : "hidden"} text-center`}>
            <a href={item.href} target="_black" rel="noopener noreferrer" className="flex justify-center underline">
              {item.text}
              <FaExternalLinkAlt className="text-[0.5rem]" />
            </a>
            <div className="border rounded shadow">
              <iframe src={item.href} className="w-full h-72" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
Tabs.propTypes;

export const Modal = ({ children, onClose, itemId, modalId, closeBtn = false }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div
      onClick={onClose}
      className={`${
        modalId === itemId ? "z-50 bg-black bg-opacity-40" : "-z-10"
      } fixed inset-0 flex items-center justify-center transition-all duration-150`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${dark ? "bg-slate-900" : "bg-white"} ${
          modalId === itemId ? "scale-100" : "scale-0"
        } origin-top w-full sm:w-3/4 md:w-1/2 xl:w-1/3 mx-3 border rounded-lg p-4 relative transition-all duration-150`}
      >
        {closeBtn && (
          <>
            <div className="mr-8">ID: {itemId}</div>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-xl hover:text-red-500 transition-all duration-200"
            >
              <FaXmark />
            </button>
          </>
        )}
        {children}
      </div>
    </div>
  );
};
Modal.propTypes;

export const LoadingModal = ({ className }) => (
  <div className={`${className} z-50 fixed inset-0 flex justify-center items-center`}>
    <div className="bg-black bg-opacity-10 p-1 shadow-xl rounded-full text-white text-5xl">
      <PiSpinner className="animate-spin" />
    </div>
  </div>
);
LoadingModal.propTypes;

export const Loading = ({ className }) => (
  <div className={`${className} flex justify-center mt-8`}>
    <PiSpinner className="animate-spin text-3xl" />
  </div>
);
Loading.propTypes;

export const Err = ({ children = "Err", className }) => (
  <div className={`${className} flex justify-center text-red-500 mt-4 italic`}>{children}</div>
);
Err.propTypes;

export const CardGrid = ({ children = "CardGrid", className }) => (
  <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2`}>
    {children}
  </div>
);
CardGrid.propTypes;
