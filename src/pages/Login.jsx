import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { toast, ToastContainer } from "react-toastify";
import { HiEye, HiEyeOff, HiUser, HiKey } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.warn("Please fill in all fields!", { position: "top-right" });
      return dispatch(signInFailure("Please fill in all fields"));
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post(`/api/admin/signin`, formData);

      toast.success("Login successful!", { position: "top-right" });
      dispatch(signInSuccess(res.data));

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      dispatch(signInFailure(error.response?.data?.message || "Login failed"));
      toast.error(error.response?.data?.message || "An error occurred!", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-900">
      {/* Left Div */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#FFD700] mb-6">
            GC Law Chamber
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Sign in to manage your account and post blogs on the website.
          </p>
          <img
            src="logo2.png"
            alt="Law Illustration"
            className="w-3/4 sm:w-2/3 mx-auto"
          />
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-4/5 bg-[#FFD700]"></div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form
          className="flex flex-col gap-6 w-full sm:w-3/4 max-w-md bg-gray-800 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-[#FFD700] text-center mb-4">
            Sign In
          </h2>

          {/* Username Field */}
          <div className="relative">
            <HiUser
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={24}
            />
            <TextInput
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
              className="pl-12 py-3 bg-gray-700 text-white rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <HiKey
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={24}
            />
            <TextInput
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="pl-12 pr-12 py-3 bg-gray-700 text-white rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] placeholder-gray-400"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-white"
            >
              {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
            </span>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="py-3 text-lg bg-[#FFD700] text-black rounded-lg hover:bg-yellow-600 focus:ring focus:ring-yellow-500"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner size="sm" className="mr-2" />
                Logging In...
              </div>
            ) : (
              "Log in"
            )}
          </Button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
