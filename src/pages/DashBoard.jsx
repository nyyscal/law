import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";

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
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>

      {/* profile... */}
      {/* <DashProfile/> */}
      {tab === "" && <DashProfile />||tab==="profile" && <DashProfile />}

      {/* posts... */}
      {tab === "posts" && <DashPosts />}
    </div>
  );
};

export default Dashboard;
