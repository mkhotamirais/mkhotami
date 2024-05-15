import { FaRightToBracket, FaUser, FaUserShield, FaUserPlus, FaRightFromBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleOpenBubbleAuth } from "../../../app/features/basicSlice";
import { useGetMeQuery, useSignoutMutation } from "../../../app/api/userApiSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const signinMenus = [
  { href: "signin", text: "signin", icon: <FaRightToBracket /> },
  { href: "signup", text: "signup", icon: <FaUserPlus /> },
];

const userMenus = [
  { href: "profile", text: "profile", icon: <FaUser /> },
  { href: "profile", text: "apa lagi", icon: <FaUser /> },
];

const adminMenus = [
  { href: "", text: "profile", icon: <FaUser /> },
  { href: "", text: "product", icon: <FaUser /> },
];

export const BtnAuth = () => {
  const { data } = useGetMeQuery();
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  let content;
  if (!data) {
    content = <BubbleAuth menus={signinMenus} icon={<FaRightToBracket />} isLogin={false} />;
  } else {
    if (data?.role === "user") content = <BubbleAuth icon={<FaUser />} menus={userMenus} />;
    else if (data?.role === "admin") content = <BubbleAuth icon={<FaUserShield />} menus={adminMenus} />;
  }
  return content;
};

const BubbleAuth = ({ className, menus, icon, isLogin = true }) => {
  const { openBubbleAuth, dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <button onClick={() => dispatch(toggleOpenBubbleAuth())}>{icon}</button>
      <div
        className={`${className} ${dark ? "bg-slate-900" : "bg-white"} ${
          openBubbleAuth ? "scale-100" : "scale-0"
        } origin-top-right absolute right-0 top-full border rounded p-3 transition-all duration-150`}
      >
        {menus.map((item, i) => (
          <Link to={item.href} key={i} className="flex items-center gap-2 py-1 hover:text-cyan-500">
            {item.icon}
            {item.text}
          </Link>
        ))}
        {isLogin && <SignoutBtn />}
      </div>{" "}
    </div>
  );
};
BubbleAuth.propTypes;

export const SignoutBtn = () => {
  const [logout] = useSignoutMutation();
  const handleClick = () => {
    logout()
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        window.location.href = "/projects/shop";
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <button onClick={handleClick} className="flex gap-2 items-center py-1">
      <FaRightFromBracket />
      <div>Signout</div>
    </button>
  );
};
