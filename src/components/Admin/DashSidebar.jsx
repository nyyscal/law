import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { HiDocumentText, HiUser } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOutSuccess } from "../../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance.js";

const DashSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTabs] = useState();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // To track the menu state

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTabs(tabFromUrl);
    }

    // Check if the screen is mobile
    const checkMobileView = () => setIsMobile(window.innerWidth < 768);
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await axiosInstance.post(`api/admin/signout`);
      if (res.statusText !== "OK") {
        console.log("signout failed");
      } else {
        dispatch(signOutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {/* Toggle Menu for Mobile View */}
      {isMobile && (
        <div className="bg-gray-800 text-white flex justify-between items-center p-4 relative">
          {/* Toggle Button (+ to X) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 text-2xl"
          >
            {menuOpen ? "X" : "+"}
          </button>

          {/* Conditionally Render Menu Items */}
          {menuOpen && (
            <div
              className={`absolute top-16 right-0 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4 z-50 transition-all ease-in-out duration-300 transform ${
                menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Link to="/dashboard?tab=profile" className="text-yellow-400">
                <HiUser size={24} />
              </Link>

              {currentUser.isAdmin && (
                <Link to="/dashboard?tab=posts" className="text-yellow-400">
                  <HiDocumentText size={24} />
                </Link>
              )}

              <button onClick={handleSignOut} className="text-yellow-400">
                <GoSignOut size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sidebar for Desktop View */}
      {!isMobile && (
        <div className="hidden md:block">
          <div className="w-56 !bg-gray-800 text-white h-screen p-4 overflow-auto">
            <div className="flex flex-col gap-4">
              <Link
                to="/dashboard?tab=profile"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
              >
                <HiUser size={24} className="text-yellow-400" />
                <span className="font-medium">Profile</span>
              </Link>

              {currentUser.isAdmin && (
                <Link
                  to="/dashboard?tab=posts"
                  className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                >
                  <HiDocumentText size={24} className="text-yellow-400" />
                  <span className="font-medium">Posts</span>
                </Link>
              )}

              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-700"
              >
                <GoSignOut size={24} className="text-yellow-400" />
                <span className="font-medium">Log out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashSidebar;
