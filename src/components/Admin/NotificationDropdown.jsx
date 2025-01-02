const NotificationDropdown = ({ notifications }) => {
  return (
    <div className="absolute left-1/2 -translate-x-2/3 ml-2 md:right-0 mt-2 w-64 bg-gray-300 shadow-lg rounded-lg z-50">
      <h3 className="text-lg font-semibold p-2 border-b">Notifications</h3>
      <ul className="max-h-64 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-600 border-b last:border-none text-sm"
            >
              {notification}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No new notifications</li>
        )}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
