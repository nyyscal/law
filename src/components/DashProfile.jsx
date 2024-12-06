import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  updateSuccess,
  updateFailure,
  updateStart,
  
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

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

    try {
      dispatch(updateStart());

      //
      console.log(currentUser._id)
      const res = await axiosInstance.put(`api/admin/update/${currentUser._id}`, formData);
      console.log(res.data.message);


      if (res.statusText =="OK") {
        dispatch(updateSuccess(res.data.message));
        // Reset form data
      } else {
        dispatch(updateFailure(res.data.message));
      }
    } catch (error) {
      
      dispatch(updateFailure(error));
    }
  };

 

  return (
    <>
      <div className="max-w-lg mx-auto w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h1 className="text-center text-3xl">Profile</h1>
          <div
            className="w-32 self-center
        h-32"
          >
            <img
              src={currentUser.profilePicture}
              alt="user_profile_picture"
              className="rounded-full border-8"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <TextInput
              type="text"
              id="username"
              placeholder="username"
              defaultValue={currentUser.username}
              onChange={handleChange}
            />
            
            <TextInput
              type="text"
              id="password"
              placeholder="Change your password"
              onChange={handleChange}
            />
            <Button type="submit">Update</Button>
            {currentUser.isAdmin && (
              <Link to={"/createpost"}>
                <Button type="button" className="w-full">
                  Create a Post
                </Button>
              </Link>
            )}
          </div>
        </form>
        {/* <div className="text-red-500 flex justify-between  mt-3">
          <span className="cursor-pointer">Delete</span>
          <span className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </span>
        </div> */}
      </div>
    </>
  );
};
export default DashProfile;
