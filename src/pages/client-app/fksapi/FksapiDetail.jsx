import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { emptyDataId, getFakeProductById } from "../../../app/client-app/fksapiSlice";
import { FaStar } from "react-icons/fa6";
import { Err, Loading } from "../../../components/Components";

const FksapiDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyDataId());
    dispatch(getFakeProductById(id));
  }, [dispatch, id]);
  const { dataId: data, statusId: status, errorId: error } = useSelector((state) => state.fksapi);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data) {
      content = (
        <>
          Detail {data?.title}
          <div className="flex flex-col sm:flex-row gap-3">
            <figure className="flex-1">
              <img
                src={data?.image}
                alt={data?.title || "no image"}
                className="scale-90 w-full h-full object-contain transition-all duration-500"
              />
            </figure>{" "}
            <div className="flex-1 border rounded p-3 flex flex-col gap-2">
              <div>
                <b>Id</b> : {data?.id}
              </div>
              <div>
                <b>Title</b> : {data?.title}
              </div>
              <div>
                <b>Price</b> : {data?.price}
              </div>
              <div className="flex items-center gap-1">
                <b>Rating</b> : {data?.rating?.rate} <FaStar className="inline" /> | {data?.rating?.count} sold
              </div>
              <div>
                <b>Description</b> : {data?.description}
              </div>
            </div>
          </div>
        </>
      );
    } else content = <div className="text-center italic">no content</div>;
  }
  return content;
};

export default FksapiDetail;
