import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSiskoProductSingle } from "../../../app/client-app/siskoSlice";
import { Err, Loading } from "../../../components/Components";
import moment from "moment";

const SiskoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiskoProductSingle(id));
  }, [dispatch, id]);
  const { dataId: data, statusId: status, errorId: error } = useSelector((state) => state.sisko);
  useEffect(() => {
    console.log(data);
  }, [data]);
  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data) {
      content = (
        <>
          <div className="capitalize">Detail {data?.product_name}</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <figure className="flex-1">
              <img
                src={`https://sistemtoko.com/img/user/demo/product/${data?.product_img}`}
                alt={data?.product_img || "no image"}
                className="scale-95"
              />
            </figure>
            <div className="flex-1 border rounded p-3 shadow">
              <div>
                <b>Id</b> {data?.product_id}
              </div>
              <div>
                <b>Name</b> {data?.product_name}
              </div>
              <div>
                <b>Price</b> {data?.product_price}
              </div>
              <div>
                <b>Qty</b> {data?.product_qty_stock}
              </div>
              <div>
                <b>Status</b> {data?.product_status}
              </div>
              <div>
                <b>Weight</b> {data?.product_weight}
              </div>
              <div>
                <b>Created</b> {moment(data?.createdAt).fromNow()}
              </div>
              <div>
                <b>Updated</b> {moment(data?.updatedAt).fromNow()}
              </div>
            </div>
          </div>
        </>
      );
    } else content = <div className="text-center mt-3 italic">no data</div>;
  }
  return content;
};

export default SiskoDetail;
