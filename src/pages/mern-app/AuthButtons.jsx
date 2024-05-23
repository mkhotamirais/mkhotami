import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeOpenAuth, removeOpenNav, toggleOpenAuth } from "../../app/features/basicSlice";
import toast from "react-hot-toast";
import {
  FaBook,
  FaRightFromBracket,
  FaRightToBracket,
  FaUser,
  FaUserGear,
  FaUserPlus,
  FaUserShield,
  FaUsers,
} from "react-icons/fa6";
import { useGetMeQuery, useSignoutMutation } from "../../app/api/authApiSlice";

const adminMenus = [
  { href: "adm-profile", text: "profile", icon: <FaUserGear /> },
  { href: "adm-user", text: "users", icon: <FaUsers /> },
  { href: "adm-kamus", text: "kamus", icon: <FaBook /> },
];

const userMenus = [{ href: "me", text: "profile", icon: <FaUserGear /> }];

const guestMenus = [
  { href: "signin", text: "login", icon: <FaRightToBracket /> },
  { href: "signup", text: "register", icon: <FaUserPlus /> },
];

export const AuthBtn = () => {
  const { data } = useGetMeQuery();
  let content;
  if (data) {
    if (data?.role === "admin") content = <AuthAdmin />;
    else if (data?.role === "user")
      content = (
        <>
          <AuthUser />
        </>
      );
    else content = <AuthDefault />;
  } else content = <AuthDefault />;

  return content;
};

const AuthBubble = ({ icon, menus, logoutBtn = true }) => {
  const { openAuth, dark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleOpenAuth());
    if (openNav) dispatch(removeOpenNav());
  };

  return (
    <div className="relative flex">
      <button onClick={handleClick}>{icon}</button>
      <div
        className={`${openAuth ? "scale-100" : "scale-0"} ${
          dark ? "bg-slate-900" : "bg-gray-50"
        } z-50 text-sm origin-top-right border shadow rounded-lg px-3 py-2 absolute top-full translate-y-2 right-0 transition-all duration-150`}
      >
        {menus.map((item, i) => (
          <NavLink
            onClick={() => dispatch(removeOpenAuth())}
            to={item.href}
            key={i}
            className={"flex gap-1 capitalize items-center rounded-b py-2 hover:text-cyan-500 border-b"}
          >
            {item?.icon} {item.text}
          </NavLink>
        ))}
        {logoutBtn && <AuthLogout />}
      </div>
    </div>
  );
};
AuthBubble.propTypes;

const AuthUser = () => <AuthBubble icon={<FaUser />} menus={userMenus} />;
const AuthAdmin = () => <AuthBubble icon={<FaUserShield />} menus={adminMenus} />;
const AuthDefault = () => <AuthBubble icon={<FaRightToBracket />} menus={guestMenus} logoutBtn={false} />;
const AuthLogout = () => {
  const [logout] = useSignoutMutation();
  const handleClick = () => {
    logout()
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.error);
      });
  };
  return (
    <a
      onClick={handleClick}
      href="/mern-app/signin"
      className="bg-slate-500 mt-2 text-white rounded px-3 p-1 flex items-center gap-1 hover:opacity-70"
    >
      <FaRightFromBracket />
      logout
    </a>
  );
};
