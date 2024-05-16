import { Navigate, Outlet } from "react-router-dom";
import { useGetMeQuery } from "../../../../app/api/userApiSlice";
import { Loading } from "../../../../components/Components";

const ProtectedUser = () => {
  const { data, isLoading, isSuccess, isError } = useGetMeQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Navigate to="/projects/shop" />;
  else if (isSuccess) {
    if (data.role === "user") content = <Outlet />;
    else content = <Navigate to="/projects/shop" />;
  }

  return content;
};

export default ProtectedUser;
