import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePath from "../../../../hooks/usePath";

const JpPostItems = ({ item }) => {
  const { path } = usePath();
  const user = useSelector((state) => state.jp.dataUsers?.find((u) => u.id === item?.userId));

  return (
    <Link
      to={!path[3] ? `jpposts/detail/${item?.id}` : `detail/${item?.id}`}
      className="border rounded shadow p-2 hover:scale-95 transition-all duration-150"
    >
      <div className="capitalize font-medium">{item?.title?.substring(0, 30)}..</div>
      <div className="flex items-center gap-2">
        <FaUser />
        {user?.name}
      </div>
    </Link>
  );
};
JpPostItems.propTypes;

export default JpPostItems;
