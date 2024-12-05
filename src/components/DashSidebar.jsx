import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { HiDocumentText, HiUser } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";

import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { signOutSuccess } from "../redux/user/userSlice.js";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance.js";

const DashSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const location = useLocation();

  const dispatch = useDispatch();

  const [tab, setTabs] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTabs(tabFromUrl);
    }
  }, [location.search]);
  // console.log(tab);

  const handleSignOut = async () => {
    try {
      const res = await axiosInstance.post(`api/admin/signout`);
      if (!res.statusText == "OK") {
        console.log("signout failed");
      } else {
        dispatch(signOutSuccess());
        // Navigate to login page
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  // console.log(currentUser.data);

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
            >
              Profile
            </Sidebar.Item>
          </Link>

          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item active={tab === "posts"} icon={HiDocumentText}>
                Posts
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item
            className="cursor-pointer"
            active={tab === "signout"}
            icon={GoSignOut}
            label="Sign out"
            onClick={handleSignOut}
          >
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
export default DashSidebar;
