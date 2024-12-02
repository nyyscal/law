import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa"; // Social Media & Email Icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSent, setIsSent] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        e.target,
        "YOUR_USER_ID" // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          setIsSent(true); // Show confirmation after successful submission
        },
        (error) => {
          console.log("Error sending email", error.text);
        }
      );
  };

  return (
    <div className="bg-[url('/background5.jpg')] bg-cover bg-center bg-opacity-30 w-full py-16">
      <div className="flex mt-8 font-serif text-2xl text-white font-semibold items-center justify-center mb-3">
        <p>
          <span className="px-6 flex items-center justify-center">
            Get in touch!
          </span>
          <br />
          <span className="text-sm text-slate-400">
            Have questions? Our team is just a message away!
          </span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-lg p-6 gap-6 bg-white bg-opacity-40 backdrop-blur-md">
        {/* Left Side: Text and List */}
        <div className="md:w-2/3 text-center md:text-left ml-6 max-w-full">
          <h1 className="font-serif text-3xl font-bold mb-4 text-[#212EA0]">
            Feel free to reach out
          </h1>
          <p className="text-gray-900 text-lg mb-6 max-w-[550px]">
            If you have any legal inquiries or require assistance, we are here
            to help! Please feel free to reach out using the contact form.
          </p>
          <ul className="text-lg text-left space-y-4">
            <li>
              <b>Experience:</b> Over a decade of successful legal outcomes.
            </li>
            <li>
              <b>Personalized Service:</b> Tailored legal services for your
              needs.
            </li>
            <li>
              <b>Transparent Pricing:</b> No hidden charges—clear pricing.
            </li>
            <li>
              <b>Award-Winning Team:</b> Recognized by top legal bodies
              globally.
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col items-center md:w-1/3 gap-4">
          <h2 className="text-2xl font-bold mb-4 text-[#212EA0] mr-6">
            Fill the form below!
          </h2>
          {isSent && (
            <div className="text-green-500 mb-4">
              Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212EA0]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="info@example.com"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212EA0]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-lg">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#212EA0]"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#212EA0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#256EA0] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex mt-8 font-serif text-4xl text-white font-semibold items-center justify-center">
        Find us here!
      </div>

      {/* Our Location Section with Map and Contact Info */}
      <div className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Map Section */}
        <div className="w-full md:w-2/3 h-[500px] overflow-hidden mb-6 md:mb-0">
          <div className="relative w-full h-full">
            <MapContainer
              center={[27.7172, 85.324]} // Coordinates for Kathmandu, replace with your location
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full"
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[27.7172, 85.324]}>
                <Popup>Our Location: Kathmandu, Nepal.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Right Side: Contact Information and Social Media Icons */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <div className="text-lg">
            <p>
              <b>Contact Info:</b>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope size={20} /> Email: contact@lawnepal.com
            </p>
            <p className="flex items-center gap-2">
              <FaFacebook size={20} /> Facebook: @LawNepal
            </p>
            <p className="flex items-center gap-2">
              <FaTwitter size={20} /> Twitter: @LawNepal
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin size={20} /> LinkedIn: Law Nepal
            </p>
            <p className="flex items-center gap-2">
              <FaInstagram size={20} /> Instagram: @law_nepal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
