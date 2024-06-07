import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";
import JsTheory from "./jsTheory/JsTheory";

const jsMenus = [
  { href: "", text: "home" },
  { href: "jsbasic", text: "basic" },
  { href: "jsadvance", text: "advance" },
  { href: "jsmodule", text: "module" },
  { href: "jsfunction", text: "function" },
  { href: "jscases", text: "cases" },
];

const Javascript = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <Bubble menus={jsMenus} />
        <div>Javascript</div>
      </div>
      <JsTheory />
      <Outlet />
    </div>
  );
};

export default Javascript;
