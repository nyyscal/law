import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    // Handle form changes here

    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password || !formData.username) {
      // return dispatch(signInFailure("Please fill in all fields"));
      console.log("Please fill in all fields");
      return;
    }
    // Handle form submission here

    // Perform form validation and API call to sign up the user
    try {
      console.log(formData);
      const res = await axiosInstance.post(`/api/admin/signin`, formData);

      console.log(res);
      // console.log(res.statusText==="OK");

      // if (!res.statusText === "OK") {
      //   console.log("signInFailure");
      // }
      // console.log(res.data)
      
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.response.data.message));
      // console.log(error);
      // console.log(error.response.data.message);
      
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 flex-col max-w-3xl mx-auto md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-teal-600 text-4xl">
            <span className="px-2 py-1 text-teal-600 rounded-lg ">LAW</span>
            NEPAL
          </Link>
          <p className="text-sm mt-5">Sign in to post blogs on your website</p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                placeholder="Username..."
                type="string"
                id="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="password" />
              <TextInput
                placeholder="Your password..."
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            {/* <Oauth /> */}
          </form>
          {error && (
            <Alert className="mt-4" color="failure">
              {error}
            </Alert>
          )}
          <div className="mt-3">
            <span>Don&apos;t have an account?</span>
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
