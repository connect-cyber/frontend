import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useUserStore from "@/store/useUserStore";
import { Loader2, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { login, loading } = useUserStore();
  const navigate = useNavigate();
  const [LoginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await login(LoginCredentials);
      if ((result.success)) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-full max-w-md" onSubmit={submitHandler}>
        <div className="mb-4 flex justify-center">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Input
              type="text"
              name="email"
              value={LoginCredentials.email}
              placeholder="Email"
              onChange={changeHandler}
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <Mail className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Input
              type="password"
              name="password"
              value={LoginCredentials.password}
              onChange={changeHandler}
              placeholder="Password..."
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <Lock className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-3">
          {loading ? (
            <Button
              disabled
              type="submit"
              className="w-full bg-[#00274D] text-[17px] lg:text-2xl"
            >
              <Loader2 className="mr-4 animate-spin text-[17px] lg:text-2xl" />{" "}
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full text-xl bg-[#00274D] transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4"
            >
              Login
            </Button>
          )}
        </div>
        <div className="text-center mb-5">
          <Link
            to="/forgotPassword"
            className="text-blue-700 hover:text-blue-900 font-semibold hover:underline text-xl"
          >
            Forgot Password
          </Link>
        </div>

        <hr className="border-solid border-slate-400 mb-5"></hr>

        <p className="mt-2 text-xl text-center">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-700 hover:text-blue-900 font-semibold hover:underline ml-2"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
