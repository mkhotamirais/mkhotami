import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiSpinner } from "react-icons/pi";
import { Prev } from "../../../components/Components";
import { H2 } from "../../../components/Tags";

const AuthLayout = ({ children, onSubmit, title, isLoading }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div className={`z-50 ${dark ? "" : ""} mt-5 flex items-center justify-center`}>
      <div className={`${dark ? "bg-slate-800" : "bg-white"} border rounded-lg mx-3 p-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3`}>
        <div className={`w-fit pt-1 pb-2 flex items-center gap-2`}>
          <Prev />
          <H2>{title}</H2>
        </div>
        <form onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="bg-cyan-600 hover:opacity-70 rounded p-2 text-white capitalize w-full flex justify-center"
          >
            {isLoading ? (
              <PiSpinner className="animate-spin my-1" />
            ) : title === "login" ? (
              "login"
            ) : title === "register" ? (
              "register"
            ) : null}
          </button>
        </form>
        <div className="mt-2">
          {title === "login" && (
            <p>
              Do not have an account?{" "}
              <Link className="text-cyan-600 hover:underline" to="../signup">
                signup
              </Link>
            </p>
          )}
          {title === "register" && (
            <p>
              Already have an account?{" "}
              <Link className="text-cyan-600 hover:underline" to="../signin">
                signin
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
AuthLayout.propTypes;

export default AuthLayout;
