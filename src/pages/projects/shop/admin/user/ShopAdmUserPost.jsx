import { useState } from "react";
import { Input, Label, Select } from "../../../../../components/Tags";
import { usePostUserMutation } from "../../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ShopAdmUserPost = () => {
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
        toast.success(res?.message);
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label id="username">username</Label>
        <Input id="username" placeholder={"username"} autoFocus={true} onChange={handleChange} />
        <Label id="email">email</Label>
        <Input type="email" id="email" placeholder={"email"} onChange={handleChange} />
        <Label id="password">password</Label>
        <Input type="password" id="password" placeholder={"password"} onChange={handleChange} />
        <Label id="confPassword">confirm password</Label>
        <Input type="password" id="confPassword" placeholder={"confirm password"} onChange={handleChange} />
        <Label id="role">role</Label>
        <Select id="role" onChange={handleChange}>
          <option value="user">select role</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </Select>
        <button type="submit" className="bg-cyan-500 text-white p-2 px-3 rounded hover:opacity-70">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShopAdmUserPost;
