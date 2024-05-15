import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";
import { BtnAuth } from "./ShopAuth";

const shopMenus = [
  { href: "", text: "home" },
  { href: "user", text: "user" },
  { href: "product", text: "product" },
];

const Shop = () => {
  return (
    <div>
      <div className="flex justify-between border-b rounded py-2 my-1">
        <div>
          <div className="flex items-center gap-2">
            <Bubble menus={shopMenus} />
            <div>shop</div>
          </div>
        </div>
        <BtnAuth />
      </div>
      <Outlet />
    </div>
  );
};

export default Shop;
