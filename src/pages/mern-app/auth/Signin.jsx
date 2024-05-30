import { useState } from "react";
import AuthLayout from "./AuthLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../../app/api/authApiSlice";
import { Label, Input } from "../../../components/Tags";
import { InputPass } from "../../../components/Components";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useSigninMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        navigate("/mern-app");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };
  return (
    <AuthLayout onSubmit={handleSubmit} title="login" isLoading={isLoading}>
      <Label id="username">username</Label>
      <Input
        id="username"
        autoFocus={"on"}
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Label id="password">password</Label>
      <InputPass id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </AuthLayout>
  );
};

export default Signin;
