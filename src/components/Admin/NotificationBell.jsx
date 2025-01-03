import { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setNotifications } from "../../redux/user/userSlice";
import axiosInstance from "../../utils/axiosInstance";

const NotificationBell = () => {
  // console.log(notifications)
  const dispatch = useDispatch();
  const { triggerFetch, notifications } = useSelector((state) => state.user);

  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(notifications?.length);
  const dropdownRef = useRef(null);

  //fetching unread notifications

  const fetchUnreadNotifications = async () => {
    try {
      console.log("Fetching unread notifications");
      const res = await axiosInstance.get(`/api/notificaton/getNotification`);
      console.log(res.data);
      console.log(typeof res.data)
      dispatch(setNotifications(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnreadNotifications();
  }, [triggerFetch]);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    if (unreadCount > 0) setUnreadCount(0); // Reset unread count after displaying
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleNotifications}
        className="relative hover:text-[#FFD700] transition duration-300"
      >
        <FaBell size={20} className="text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-700 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            {unreadCount}
          </span>
        )}
      </button>
      {showNotifications && (
        <NotificationDropdown notifications={notifications} />
      )}
    </div>
  );
};

export default NotificationBell;

// NotificationBell.propTypes = {
//   notification: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
