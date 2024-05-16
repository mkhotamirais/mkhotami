import { FaCheck, FaPenToSquare, FaTrashCan, FaXmark } from "react-icons/fa6";
import { Err, Loading } from "../../../../../components/Components";
import toast from "react-hot-toast";
import { PiSpinner } from "react-icons/pi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditTag } from "../../../../../app/features/editSlice";
import { useDeleteTagMutation, useGetTagsQuery, useUpdateTagMutation } from "../../../../../app/api/tagApiSlice";
import ShopAdmTagPost from "./ShopAdmTagPost";

const ShopAdmTag = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetTagsQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isError) content = <Err>{error}</Err>;
  else if (isSuccess) {
    if (data && data?.length > 0) {
      const renderedData = data && data.map((item) => <ShopAdmTagItems key={item?._id} item={item} />);
      content = <div className="border rounded p-1 my-2">{renderedData}</div>;
    } else content = <div>no content</div>;
  }
  return (
    <div className="w-full sm:w-2/3 md:w-1/2">
      Tag List
      <ShopAdmTagPost />
      {content}
    </div>
  );
};
export default ShopAdmTag;

const ShopAdmTagItems = ({ item }) => {
  const [deleteTag, { isLoading: loadDeleteTag }] = useDeleteTagMutation();
  const [updateTag, { isLoading: loadUpdateTag }] = useUpdateTagMutation();
  const [name, setName] = useState(item?.name);
  const { isEditTag } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteTag(item?._id)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  const handleEdit = () => {
    updateTag({ id: item?._id, name })
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        dispatch(setIsEditTag(null));
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    handleEdit(item?._id);
  };

  const handleCancel = () => {
    dispatch(setIsEditTag(null));
    setName(item?.name);
  };

  return (
    <div className="border my-1 rounded p-1 flex justify-between gap-2">
      <div className="w-full hover:cursor-text" onClick={() => dispatch(setIsEditTag(item?._id))}>
        {isEditTag === item?._id ? (
          <form onSubmit={handleEditSubmit} className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus={true}
              className="focus:outline-none"
            />
            <button type="submit" className="absolute -z-50">
              submit
            </button>
          </form>
        ) : (
          item?.name
        )}
      </div>
      {isEditTag === item?._id ? (
        <div className="min-w-max flex items-center gap-3">
          <button onClick={handleEdit}>
            {loadUpdateTag ? (
              <PiSpinner className="animate-spin" />
            ) : (
              <FaCheck className="text-green-500 hover:opacity-70" />
            )}
          </button>
          <button onClick={handleCancel}>
            <FaXmark className="text-red-500 hover:opacity-70" />
          </button>
        </div>
      ) : (
        <div className="min-w-max flex items-center gap-3">
          <button onClick={() => dispatch(setIsEditTag(item?._id))}>
            <FaPenToSquare className="text-green-500 hover:opacity-70" />
          </button>
          <button onClick={handleDelete}>
            {loadDeleteTag ? (
              <PiSpinner className="animate-spin" />
            ) : (
              <FaTrashCan className="text-red-500 hover:opacity-70" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};
ShopAdmTagItems.propTypes;
