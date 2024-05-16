import { Outlet } from "react-router-dom";
import { Bubble } from "../../../components/Components";
import { BtnAuth } from "./ShopAuth";

const shopMenus = [
  { href: "", text: "home" },
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
      <div className="my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
