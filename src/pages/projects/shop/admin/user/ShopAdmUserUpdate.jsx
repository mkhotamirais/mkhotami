import { useEffect, useState } from "react";
import { Input, Label, Select } from "../../../../../components/Tags";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { PiSpinner } from "react-icons/pi";

const ShopAdmUserUpdate = () => {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [editPass, setEditPass] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUsername(data?.username);
      setEmail(data?.email);
      setRole(data?.role);
    }
  }, [data]);

  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = { id, username, email };
    if (role) result = { ...result, role };
    if (password) result = { ...result, password, confPassword };
    updateUser(result)
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
        <Input
          id="username"
          placeholder={"username"}
          autoFocus={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label id="email">email</Label>
        <Input type="email" id="email" placeholder={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="button" onClick={() => setEditPass((prev) => !prev)} className="underline">
          {editPass ? "hide" : "edit"} password
        </button>
        {editPass && (
          <div>
            <Label id="password">password</Label>
            <Input type="password" id="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)} />
            <Label id="confPassword">confirm password</Label>
            <Input
              type="password"
              id="confPassword"
              placeholder={"confirm password"}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
        )}
        <Label id="role">role</Label>
        <Select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={null}>select role</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </Select>
        <button
          type="submit"
          className="bg-cyan-500 text-white p-1 text-sm px-3 rounded hover:opacity-70 flex items-center justify-center"
        >
          {isLoading ? <PiSpinner className="animate-spin text-lg" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ShopAdmUserUpdate;
