import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});



// Interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response if no errors occur
    return response;
  },
  (error) => {
    // Handle the error response globally
    if (error.response) {
      // Log the error response
      console.error("Global Error Response:", error.response.data);

      // Optionally, you can customize the error message for the frontend
      return Promise.reject(error.response.data); // Send error data directly
    } else if (error.request) {
      // Request was made, but no response was received
      console.error("No Response Received:", error.request);
      return Promise.reject({
        message: "No response from the server. Please try again later.",
      });
    } else {
      // An error occurred during request setup
      console.error("Request Setup Error:", error.message);
      return Promise.reject({
        message: "Something went wrong. Please try again later.",
      });
    }
  }
);

export default axiosInstance;