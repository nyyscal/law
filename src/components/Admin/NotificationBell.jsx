import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";

const NotificationBell = ({ notifications }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const dropdownRef = useRef(null);

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
