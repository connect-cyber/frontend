import { Link, useNavigate } from "react-router-dom";
import { Loader2, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useUserStore from "@/store/useUserStore";
import toast from "react-hot-toast";

function Signup() {
  const { signup, loading } = useUserStore();
  const navigate = useNavigate();

  const [signUpCredentials, setSignUpCredentials] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (signUpCredentials.password !== signUpCredentials.confirmPassword) {
      toast.error("Password and confirm password not match");
      return;
    }
    try {
      const result = await signup(signUpCredentials);
      if (result.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-full max-w-md" onSubmit={submitHandler}>
        <div className="mb-4 flex justify-center">
          <h1 className="font-bold text-2xl">Mindcruize :)</h1>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="text"
              name="fullName"
              value={signUpCredentials.fullName}
              placeholder="Name"
              onChange={changeHandler}
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <User className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="text"
              name="email"
              value={signUpCredentials.email}
              placeholder="Email"
              onChange={changeHandler}
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <Mail className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="password"
              name="password"
              value={signUpCredentials.password}
              onChange={changeHandler}
              placeholder="Password..."
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <Lock className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-5">
          <div className="relative">
            <Input
              type="password"
              name="confirmPassword"
              value={signUpCredentials.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Your Password..."
              className="w-full pl-10 pr-12 py-3 rounded-2xl border border-slate-500 text-lg md:text-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
                   shadow-sm placeholder:text-gray-400 lg:text-2xl lg:py-[20px]"
            />
            <Lock className="absolute top-2 left-3 text-[#004080]" />
          </div>
        </div>

        <div className="mb-11">
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
              className="cursor-pointer w-full text-xl bg-[#00274D] transition-all duration-300 hover:bg-[#004080] text-[17px] lg:text-2xl py-4"
            >
              Sign Up
            </Button>
          )}
        </div>

        <hr className="border-solid border-slate-400 mb-5"></hr>

        <p className="mt-2 text-xl text-center">
          Already have an Account?
          <Link to="/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
