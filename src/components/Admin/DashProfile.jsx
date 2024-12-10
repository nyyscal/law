import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  updateSuccess,
  updateFailure,
  updateStart,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import axiosInstance from "../../utils/axiosInstance";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      toast.warn("No changes made to update!", { position: "top-center" });
      return;
    }

    try {
      dispatch(updateStart());

      const res = await axiosInstance.put(
        `api/admin/update/${currentUser._id}`,
        formData
      );

      // Check for a successful response
      if (res.status === 200) {
        dispatch(updateSuccess(res.data.message));
        toast.success("Profile updated successfully!", {
          position: "top-center",
        });
      } else {
        // This case handles unexpected responses, like non-200 codes.
        dispatch(updateFailure(res.data.message));
        toast.error("Failed to update profile. Try again!", {
          position: "top-center",
        });
      }
    } catch (error) {
      dispatch(updateFailure(error));
      toast.error("An error occurred during the update!", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer /> {/* Toast Container */}
      <div className="flex items-center justify-center min-h-screen w-screen bg-black">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 rounded-lg border border-[#FFD700] shadow-md w-full max-w-md px-8 py-10"
        >
          <h1 className="text-center text-3xl text-[#FFD700]">
            GC Law Chamber Dashboard
          </h1>
          <div className="w-38 h-32">
            <img
              src="/user-4.png"
              alt="user_profile_picture"
              className="rounded-3xl h-36 w-34 border-4 border-[#FFD700]"
            />
          </div>
          <div className="flex flex-col gap-3 mt-5 w-full">
            {/* Username Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-[#FFD700] font-semibold"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></span>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  defaultValue={currentUser.username}
                  onChange={handleChange}
                  className="text-black rounded-md p-2 w-full"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-[#FFD700] font-semibold"
              >
                Password:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <i className="fas fa-key"></i>
                </span>
                <TextInput
                  type="password"
                  id="password"
                  placeholder="Change your password"
                  onChange={handleChange}
                  className="pl-10 text-black rounded-md p-2 w-full"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="bg-[#FFD700] text-black font-semibold py-2 rounded-md w-full"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashProfile;
