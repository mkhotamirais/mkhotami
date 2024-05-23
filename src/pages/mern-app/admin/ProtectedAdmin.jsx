import { Navigate, Outlet } from "react-router-dom";
import { useGetMeQuery } from "../../../app/api/authApiSlice";

const ProtectedAdmin = () => {
  const { data } = useGetMeQuery();

  if (data?.role === "admin") {
    return <Outlet />;
  } else if (data?.role === "" || data?.role === null) {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedAdmin;
