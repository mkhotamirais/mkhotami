import { Navigate, Outlet } from "react-router-dom";
import { useGetMeQuery } from "../../../app/api/authApiSlice";

const ProtectedMe = () => {
  const { data } = useGetMeQuery();

  if (data?.role === "user") {
    return <Outlet />;
  } else if (data?.role === "" || data?.role === null) {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedMe;
