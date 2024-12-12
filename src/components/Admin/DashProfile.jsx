import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSuccess,
  updateFailure,
  updateStart,
} from "../../redux/user/userSlice";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import "react-toastify/dist/ReactToastify.css";

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
      return;
    }

    if (!formData.old_password) {
      return dispatch(updateFailure("Please enter your old password"));
    }

    if (!formData.new_password) {
      return dispatch(updateFailure("Please enter your new password"));
    }

    try {
      dispatch(updateStart());
      const res = await axiosInstance.put(
        `api/admin/update/${currentUser._id}`,
        formData
      );

      if (res.status === 200) {
        dispatch(updateSuccess(res.data.message));
        toast.success("Password updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      } else {
        dispatch(
          updateFailure(res.data.message || "Failed to update password.")
        );
        toast.error(
          res.data.message || "Failed to update password. Please try again.",
          {
            position: "top-right",
          }
        );
      }
    } catch (error) {
      dispatch(updateFailure(error.response?.data?.message || error.message));
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the password.",
        {
          position: "top-right",
        }
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-lg mx-auto p-4 bg-black border-4 border-[#FFD700] rounded-lg shadow-lg overflow-auto">
        <h1 className="text-3xl text-center text-[#FFD700] mb-6">
          GC Law Chamber Dashboard
        </h1>

        {/* Image Rectangle Between Title and Form */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-gray-300 rounded-md overflow-hidden border-4 border-amber-300">
            <img
              src="/avatar.png" // Replace with your image URL
              alt="Profile"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <Label
              htmlFor="old_username"
              className="mb-2 block text-[#FFD700] font-semibold"
            >
              Current Username
            </Label>
            <TextInput
              type="text"
              id="old_username"
              readOnly
              defaultValue={currentUser.username}
              className="text-black p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <div>
            <Label
              htmlFor="old_password"
              className="mb-2 block text-[#FFD700] font-semibold"
            >
              Old Password
            </Label>
            <TextInput
              type="password"
              id="old_password"
              placeholder="Enter your old password"
              onChange={handleChange}
              className="text-black p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <div>
            <Label
              htmlFor="new_password"
              className="mb-2 block text-[#FFD700] font-semibold"
            >
              New Password
            </Label>
            <TextInput
              type="password"
              id="new_password"
              placeholder="Enter your new password"
              onChange={handleChange}
              className="text-black p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <Button
            type="submit"
            className="bg-[#FFD700] text-black font-semibold py-2 rounded-md w-full hover:bg-yellow-600"
          >
            Update Password
          </Button>
        </form>
      </div>
    </>
  );
};

export default DashProfile;
