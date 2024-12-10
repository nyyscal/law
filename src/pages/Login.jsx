import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
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
    <div className="flex min-h-screen">
      {/* Left Div */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold text-[#FFD700] mb-4">
            GC Law Chamber
          </h1>
          <p className="text-gray-100">
            Sign in to manage your account and post blogs on the website.
          </p>
          <img
            src="logo2.png"
            alt="Law Illustration"
            className="w-3/4 mx-auto mt-6"
          />
        </div>
      </div>

      {/* Vertical Line */}
      <div className="w-px h-[80%] bg-[#FFD700]"></div>

      {/* Right Div */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <form
          className="flex flex-col gap-6 w-3/4 max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-[#FFD700] text-center">
            Sign In
          </h2>

          <div>
            <Label value="Username:" className="text-white text-lg" />
            <TextInput
              placeholder="Enter your username..."
              type="text"
              id="username"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label value="Password:" className="text-white text-lg" />
            <TextInput
              placeholder="Enter your password..."
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>

          <Button type="submit" disabled={loading} className="text-white">
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3 ">Logging In...</span>
              </>
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
