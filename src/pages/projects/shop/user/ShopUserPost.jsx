import { useState } from "react";
import { usePostUserMutation } from "../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShopUserPost = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();

  const [postUser] = usePostUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(data)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border bg-inherit" id="username" name="username" onChange={handleChange} />
        <input type="email" className="border bg-inherit" id="email" name="email" onChange={handleChange} />
        <input type="password" className="border bg-inherit" id="password" name="password" onChange={handleChange} />
        <input type="password" className="border bg-inherit" id="confPassword" name="confPassword" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShopUserPost;
