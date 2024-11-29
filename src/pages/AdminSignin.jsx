import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../redux/user/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Oauth from "../components/Oauth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const dispatch = useDispatch();

  // if()
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  // const { loading, error: errorMessage } = useSelector((state) => {
  //   return state.user;
  // });

  const navigate = useNavigate();

  const handleChange = (e) => {
    // Handle form changes here

    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password || !formData.email) {
      // return dispatch(signInFailure("Please fill in all fields"));
      console.log("Please fill in all fields");
      return;
    }
    // Handle form submission here

    // Perform form validation and API call to sign up the user
    try {
      // dispatch(signInStart());

      const res = await fetch(`localhost:3000/api/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        // dispatch(signInFailure(data.message));
        console.log("signInFailure");
      }
      if (res.ok) {
        // dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      // dispatch(signInFailure(error).mesage);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 flex-col max-w-3xl mx-auto md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-teal-600 text-4xl">
            <span className="px-2 py-1 text-teal-600 rounded-lg ">
              Builder&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Sign in to post and read the amazing blogs by millions of bloggers
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="email" />
              <TextInput
                placeholder="name@company.com"
                type="email"
                id="email"
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
