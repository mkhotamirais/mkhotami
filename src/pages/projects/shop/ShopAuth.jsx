import {
  FaRightToBracket,
  FaUser,
  FaUserShield,
  FaUserPlus,
  FaRightFromBracket,
  FaUserGroup,
  FaCartShopping,
  FaTag,
  FaList,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleOpenBubbleAuth } from "../../../app/features/basicSlice";
import { useGetMeQuery, useSignoutMutation } from "../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import usePath from "../../../hooks/usePath";

const signinMenus = [
  { href: "signin", text: "signin", icon: <FaRightToBracket /> },
  { href: "signup", text: "signup", icon: <FaUserPlus /> },
];

const userMenus = [
  { href: "user-profile", text: "profile", icon: <FaUser /> },
  { href: "profile", text: "apa lagi", icon: <FaUser /> },
];

const adminMenus = [
  { href: "adm-profile", text: "profile", icon: <FaUser /> },
  { href: "adm-product", text: "product", icon: <FaCartShopping /> },
  { href: "adm-user", text: "user", icon: <FaUserGroup /> },
  { href: "adm-category", text: "category", icon: <FaList /> },
  { href: "adm-tag", text: "tag", icon: <FaTag /> },
];

export const BtnAuth = () => {
  const { data } = useGetMeQuery();

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
  const [active, setActive] = useState("");
  const { openBubbleAuth, dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const { path } = usePath();

  useEffect(() => {
    setActive(path[3]);
  }, [path]);
  return (
    <div className="relative">
      <button onClick={() => dispatch(toggleOpenBubbleAuth())} className="text-lg">
        {icon}
      </button>
      <div
        className={`${className} ${dark ? "bg-slate-900" : "bg-white"} ${
          openBubbleAuth ? "scale-100" : "scale-0"
        } origin-top-right absolute right-0 top-full border rounded p-2 shadow transition-all duration-150`}
      >
        {menus.map((item, i) => (
          <Link
            to={item.href}
            key={i}
            className={`${
              active === item.href ? "text-cyan-500" : ""
            } flex text-sm items-center gap-2 py-2 hover:text-cyan-500`}
          >
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
    <button
      onClick={handleClick}
      className="flex gap-2 items-center text-sm py-1 bg-slate-500 p-2 rounded text-white hover:opacity-70"
    >
      <FaRightFromBracket />
      <div>Signout</div>
    </button>
  );
};
