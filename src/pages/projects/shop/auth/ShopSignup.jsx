import { useState } from "react";
import { Input, Label } from "../../../../components/Tags";
import { useSignupMutation } from "../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PiSpinner } from "react-icons/pi";

const ShopSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [register, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, email, password, confPassword })
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        navigate("/projects/shop/signin");
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };
  return (
    <div>
      <div>Signup</div>
      <form onSubmit={handleSubmit} className="border rounded p-3">
        <Label id="username">username</Label>
        <Input
          id="username"
          autoFocus={true}
          value={username}
          placeholder={"username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label id="email">email</Label>
        <Input type="email" id="email" value={email} placeholder={"email"} onChange={(e) => setEmail(e.target.value)} />
        <Label id="password">password</Label>
        <Input
          type="password"
          id="password"
          placeholder={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label id="confPassword">confirm password</Label>
        <Input
          type="password"
          id="confPassword"
          placeholder={"confirm password"}
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white p-1 text-sm w-20 rounded hover:opacity-70 flex items-center justify-center"
        >
          {isLoading ? <PiSpinner className="animate-spin text-lg" /> : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default ShopSignup;
