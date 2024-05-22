import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const JpPostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.jp.dataPosts?.find((p) => p.id.toString() === id));
  const user = useSelector((state) => state.jp.dataUsers?.find((p) => p.id === post?.userId));

  let content;
  if (post) {
    content = (
      <div className="border rounded p-2 shadow">
        <div>
          <b>Id</b> : {post?.id}
        </div>
        <div>
          <b>Title</b> : {post?.title}
        </div>
        <div>
          <b>By</b> :{" "}
          <Link to={`../../jpusers/detail/${user?.id}`} className="hover:underline">
            {user?.name}
          </Link>
        </div>
        <div>
          <b>Body</b> : {post?.body}
        </div>
      </div>
    );
  }
  return (
    <div>
      Detail {post?.title}
      {content}
    </div>
  );
};

export default JpPostDetail;
