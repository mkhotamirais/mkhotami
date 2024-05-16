import { useState } from "react";
import { usePostCategoryMutation } from "../../../../../app/api/categoryApiSlice";
import { FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { PiSpinner } from "react-icons/pi";
import { setIsEditCat } from "../../../../../app/features/editSlice";
import { useDispatch } from "react-redux";

const ShopAdmCatPost = () => {
  const [name, setName] = useState("");
  const [postCategory, { isLoading }] = usePostCategoryMutation();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategory({ name })
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
        placeholder="add category"
        onChange={(e) => setName(e.target.value)}
        onFocus={() => dispatch(setIsEditCat(null))}
        className="border rounded p-1 focus:outline-cyan-500 w-full"
      />
      <button className="border rounded w-10 flex items-center justify-center bg-cyan-500 text-white text-sm hover:opacity-70">
        {isLoading ? <PiSpinner className="animate-spin" /> : <FaPlus />}
      </button>
    </form>
  );
};

export default ShopAdmCatPost;
