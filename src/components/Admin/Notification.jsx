// import  { useEffect, useState } from "react";

// const Notification= () => {
//     const [notifications, setNotifications] = useState([]);

//     useEffect(() => {
//         // Establish a connection to the SSE endpoint
//         const eventSource = new EventSource("https://gc-backend-eight.vercel.app/api/notificaton/postNotification");

//         // Listen for messages from the server
//         eventSource.onmessage = (event) => {
//             const data = JSON.parse(event.data);
//             console.log(data);
//             setNotifications((prev) => [...prev, data.message]);
//         };

//         // Handle connection close or error
//         eventSource.onerror = () => {
//             console.error("SSE connection error.");
//             eventSource.close();
//         };

//         // Cleanup on component unmount
//         return () => {
//             eventSource.close();
//         };
//     }, []);

//     return (
//         <div className="relative">
//             <button className="bell-icon">
//                 <i className="fas fa-bell"></i>
//                 {notifications.length > 0 && (
//                     <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                         {notifications.length}
//                     </span>
//                 )}
//             </button>
//             {notifications.length > 0 && (
//                 <div className="notification-popup">
//                     <ul>
//                         {notifications.map((note, index) => (
//                             <li key={index}>{note}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Notification;
