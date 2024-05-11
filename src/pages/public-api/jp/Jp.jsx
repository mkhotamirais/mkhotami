import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";

const jpMenus = [
  { href: "jpposts", text: "Posts" },
  { href: "jpusers", text: "Users" },
];
const Jp = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <Bubble menus={jpMenus} />
        <div>Jsonplaceholder</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Jp;
