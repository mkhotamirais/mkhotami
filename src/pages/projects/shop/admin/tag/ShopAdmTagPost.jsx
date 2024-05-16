import { useState } from "react";
import { usePostTagMutation } from "../../../../../app/api/tagApiSlice";
import { FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { PiSpinner } from "react-icons/pi";
import { setIsEditTag } from "../../../../../app/features/editSlice";
import { useDispatch } from "react-redux";

const ShopAdmTagPost = () => {
  const [name, setName] = useState("");
  const [postTag, { isLoading }] = usePostTagMutation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    postTag({ name })
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        setName("");
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-1 w-full">
      <input
        type="text"
        value={name}
        placeholder="add tag"
        onChange={(e) => setName(e.target.value)}
        onFocus={() => dispatch(setIsEditTag(null))}
        className="border rounded p-1 focus:outline-cyan-500 w-full bg-inherit"
      />
      <button className="border rounded w-10 flex items-center justify-center bg-cyan-500 text-white text-sm hover:opacity-70">
        {isLoading ? <PiSpinner className="animate-spin" /> : <FaPlus />}
      </button>
    </form>
  );
};

export default ShopAdmTagPost;
