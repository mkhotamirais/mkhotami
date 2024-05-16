import { useState } from "react";
import { Input, Label } from "../../../../components/Tags";
import { useSigninMutation } from "../../../../app/api/userApiSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PiSpinner } from "react-icons/pi";

const ShopSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useSigninMutation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success(res?.message);
        navigate("/projects/shop");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.data?.message);
      });
  };
  return (
    <div>
      <div>Signin</div>
      <form onSubmit={handleSubmit} className="border rounded p-3">
        <Label id="username">username</Label>
        <Input
          id="username"
          autoFocus={true}
          value={username}
          placeholder={"username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label id="password">password</Label>
        <Input
          type="password"
          id="password"
          placeholder={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white p-1 text-sm w-20 rounded hover:opacity-70 flex items-center justify-center"
        >
          {isLoading ? <PiSpinner className="animate-spin text-lg" /> : "Signin"}
        </button>
      </form>
    </div>
  );
};

export default ShopSignin;
