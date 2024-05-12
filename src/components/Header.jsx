import { useDispatch, useSelector } from "react-redux";
import { NavBtn, NavMain } from "./Navbar";
import { toggleDark } from "../app/features/basicSlice";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa6";

const Header = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <header className={`z-40 ${dark ? "bg-slate-800" : "bg-white"} h-16 sticky top-0 border-b px-3 lg:px-12`}>
      <div className="flex h-full justify-between items-center gap-5 lg:gap-10">
        <Logo />
        <NavMain />
        <div className="flex text-xl gap-4 items-center">
          <DarkMode />
          <SourceCode />
          <NavBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;

export const Logo = () => {
  return (
    <a href="/" className="flex flex-col">
      <div className="text-xl font-medium">Mkhotami</div>
      <div className="text-sm">Vercel</div>
    </a>
  );
};

export const DarkMode = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleDark())} className="w-5 h-5 overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-150`} />
    </button>
  );
};

export const SourceCode = () => {
  return (
    <a href="https://github.com/mkhotamirais/mkhotami">
      <FaGithub />
    </a>
  );
};
