import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const JpUserDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.jp.dataUsers?.find((p) => p.id.toString() === id));
  let content;
  if (post) {
    content = (
      <>
        <div>Detail {post?.name}</div>
        <div className="border rounded shadow p-3">
          <div>
            <b>Id</b> {post?.id}
          </div>
          <div>
            <b>Name</b> : {post?.name}
          </div>
          <div>
            <b>Username</b> : {post?.username}
          </div>
          <div>
            <b>Phone</b> : {post?.phone}
          </div>
          <div>
            <b>Email</b> : {post?.email}
          </div>
          <div>
            <b>Website</b> : {post?.website}
          </div>
          <div>
            <b>Email</b> : {post?.email}
          </div>
          <div>
            <b>Company</b> : {post?.company?.name}, {post?.company?.catchPhrase}, {post?.company?.bs},
          </div>
          <div>
            <b>Address</b> : {post?.address?.suite}, {post?.address?.street}, {post?.address?.city}, {post?.address?.zipcode}
            ,
          </div>
        </div>
      </>
    );
  }
  return content;
};

export default JpUserDetail;
