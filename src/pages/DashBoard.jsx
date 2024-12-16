import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/Admin/DashSidebar";
import DashProfile from "../components/Admin/DashProfile";
import DashPosts from "../components/Admin/DashPosts";

const Dashboard = () => {
  // Get the tab from the URL query parameters (if any)
  const location = useLocation();

  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex bg-black">
      <div className="md:w-[50]">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      <div className="flex-grow flex justify-center items-center p-4">
        {/* Profile */}
        {(tab === "" && <DashProfile />) ||
          (tab === "profile" && <DashProfile />)}

        {/* Posts */}
        {tab === "posts" && <DashPosts />}
      </div>
    </div>
  );
};

export default Dashboard;
