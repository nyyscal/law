import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../index.css";
import { IoSend } from "react-icons/io5";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../utils/axiosInstance";

import markerShadow from "leaflet/dist/images/marker-shadow.png";
import NepalFlag from "/nepal-flag.png"; // Add Nepal flag image path
import IndiaFlag from "/india-flag.png"; // Add India flag image path
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import Title from "../components/User/Title";
import { useDispatch } from "react-redux";

// Explicitly set marker icon
const markerIconCustom = new L.Icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41], // Customize the icon size
  iconAnchor: [12, 41], // Anchor the icon on the bottom center
  popupAnchor: [1, -34], // Position the popup relative to the icon
  shadowSize: [41, 41],
});

const ContactPage = () => {
  const [phoneCode, setPhoneCode] = useState("+977"); // Default code for Nepal
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  console.log(formData);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("test successful");
    console.log(formData.name);

    if (!formData.name && !formData.email && !formData.messsage) {
      return dispatch(signInFailure("Please fill in all fields"));
    }
    try {
      console.log("test");
      const res = await axiosInstance.post(`/api/user/email`, formData);
      console.log(res);
      console.log("response");
    } catch (error) {
      return console.log(error.message);
    }
    toast.success("Your response has been successfully submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      className: "custom-toast",
      progressClassName: "custom-progress",
    });
  };

  const handleFlagChange = (code) => {
    setPhoneCode(code);
    setDropdownOpen(false); // Close the dropdown after selecting a flag
  };

  return (
    <>
      <style>
        {`
    .leaflet-popup-tip {
      display: none;
    }
  `}
      </style>

      <div className="main-div flex justify-center items-center min-h-screen bg-black pb-12">
        <ToastContainer />
        <div className="flex flex-col items-center justify-center w-full px-4 sm:w-4/5">
          <div className="mb-8">
            <Title subTitle="Get in Touch" title="Feel free to reach out" />
          </div>
          <div className="w-full sm:w-4/5 bg-black shadow-md rounded-lg p-6 flex flex-col sm:flex-row border border-white">
            <div className="left-div w-full sm:w-1/2 pr-6 flex flex-col justify-between h-full mb-6 sm:mb-0">
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">
                  Get in Touch
                </h2>
                <p className="text-white text-lg">
                  Feel free to reach us.{" "}
                  <span className="text-white text-lg">
                    Call us: +977 9846678402
                  </span>
                </p>
              </div>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium mb-1 text-xl text-[#FFD700]"
                  >
                    Name<span className="text-[#FFD700] ml-1">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="w-full mb-2 bg-black text-white text-xl border border-[#FFD700] rounded-lg px-3 py-4 focus:outline-none focus:border-[#FFD700] focus:border-2"
                    placeholder="John Doe"
                    onChange={handleDataChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium mb-1 text-xl text-[#FFD700]"
                  >
                    Email<span className="text-[#FFD700] ml-1">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="w-full mb-2 bg-black text-white text-xl border border-[#FFD700] rounded-lg px-3 py-4 focus:outline-none focus:border-[#FFD700] focus:border-6"
                    placeholder="info@example.com"
                    onChange={handleDataChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium mb-1 text-xl text-[#FFD700]"
                  >
                    Phone
                  </label>
                  <div className="flex items-center border border-[#FFD700] rounded-lg h-16">
                    {/* Country Code Dropdown */}
                    <div
                      className="bg-black text-white p-2 pl-4 pr-4 rounded-l-lg cursor-pointer flex items-center h-full"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      ref={dropdownRef}
                    >
                      <div className="flex items-center">
                        <img
                          src={phoneCode === "+977" ? NepalFlag : IndiaFlag}
                          alt="Country Flag"
                          className="w-6 h-4 mr-2"
                        />
                        {phoneCode}
                      </div>
                      {dropdownOpen && (
                        <div className="absolute mt-2 bg-black text-white shadow-lg rounded-lg w-32">
                          <div
                            className="flex items-center p-2 cursor-pointer border-2 border-[#FFD700] hover:bg-[#1a1919]  "
                            onClick={() => handleFlagChange("+977")}
                          >
                            <img
                              src={NepalFlag}
                              alt="Nepal Flag"
                              className="w-6 h-4 mr-2"
                            />
                            +977 (Nepal)
                          </div>
                          <div
                            className="flex items-center p-2 cursor-pointer border-2 border-[#FFD700] hover:bg-[#1a1919]"
                            onClick={() => handleFlagChange("+91")}
                          >
                            <img
                              src={IndiaFlag}
                              alt="India Flag"
                              className="w-6 h-4 mr-2"
                            />
                            +91 (India)
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-4 bg-black text-xl text-white border border-[#FFD700] focus:outline-none focus:border-[#FFD700] focus:border-2 rounded-r-lg h-full"
                      placeholder="Phone Number"
                      onChange={handleDataChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium mb-1 text-xl text-[#FFD700]"
                  >
                    Description<span className="text-[#FFD700] ml-1">*</span>
                  </label>
                  <textarea
                    required
                    id="message"
                    className="w-full mb-2 h-40 resize-none text-xl border border-[#FFD700] rounded-lg px-3 py-4 bg-black text-white focus:outline-none focus:border-[#FFD700] focus:border-6"
                    placeholder="Enter your message..."
                    onChange={handleDataChange}
                  ></textarea>
                </div>
                <div className="flex items-center justify-start my-10">
                  <button
                    type="submit"
                    className="border border-white mt-3 flex items-center justify-center text-xl text-white px-8 py-5 rounded-full group hover:scale-105 hover:transition-all hover:text-[#FFD700] hover:border-[#FFD700]"
                  >
                    Submit
                    <IoSend
                      size={20}
                      className="ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                </div>
              </form>
            </div>

            {/* Vertical Separator */}
            <div className="border-l border-[#FFD700] mx-4 sm:mx-8"></div>

            {/* Right Side: Map */}
            <div className="right-div w-full sm:w-1/2">
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">
                  Our Location
                </h2>
                <p className="text-white text-sm">
                  Adda Ghar, M8QF+22X, Swet Binayak Marg, Kathmandu 44600
                </p>
              </div>
              <MapContainer
                className="z-10"
                center={[27.6938374, 85.3239596]}
                zoom={14}
                scrollWheelZoom={false}
                style={{ height: "600px", width: "100%", borderRadius: "8px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[27.7103, 85.3222]} icon={markerIconCustom}>
                  <Popup
                    className="popup-content flex items-center justify-center text-center"
                    autoOpen={true}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <a
                        href="https://maps.app.goo.gl/nmhffJPpiKgFSMcY9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Adda Ghar, M8QF+22X, <br />
                        Swet Binayak Marg, Kathmandu 44600
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD700] transition"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD700] transition"
                >
                  <FaWhatsapp size={25} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD700] transition"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FFD700] transition"
                >
                  <FaLinkedin size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
