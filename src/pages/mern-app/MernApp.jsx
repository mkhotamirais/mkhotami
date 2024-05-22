import { Outlet } from "react-router-dom";
import { AuthBtn } from "./AuthButtons";

const MernApp = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <div>Mern App</div>
        <div className="text-xl">
          <AuthBtn />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MernApp;
