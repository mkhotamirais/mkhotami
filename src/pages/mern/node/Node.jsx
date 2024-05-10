import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";
const nodeModuleMenus = [
  { href: "nodeFs", text: "fs" },
  { href: "nodeHttp", text: "http" },
  { href: "nodeOs", text: "os" },
  { href: "nodePath", text: "path" },
];

const nodeNpmMenus = [
  { href: "", text: "satu" },
  { href: "", text: "dua" },
];

const Node = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>Node</div>
        <Bubble menus={nodeModuleMenus} />
        <div>Module</div>
        <Bubble menus={nodeNpmMenus} />
        <div>Npm</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Node;
