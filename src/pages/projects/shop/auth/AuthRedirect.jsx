import { Navigate, Outlet } from "react-router-dom";
import { useGetMeQuery } from "../../../../app/api/userApiSlice";

const AuthRedirect = () => {
  const { data } = useGetMeQuery();
  console.log(data);
  return data ? <Navigate to="/projects/shop" replace /> : <Outlet />;
};

export default AuthRedirect;
