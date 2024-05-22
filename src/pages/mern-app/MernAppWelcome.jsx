import { useGetMeQuery } from "../../app/api/authApiSlice";

const MernAppWelcome = () => {
  const { data } = useGetMeQuery();
  return <div>Welcome {data?.username}</div>;
};

export default MernAppWelcome;
