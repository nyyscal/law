import { Navbar } from "flowbite-react";
import {
  FaBell,
  FaChevronDown,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { signOutSuccess } from "../../redux/user/userSlice";
import NotificationBell from "../Admin/NotificationBell";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef();
  const servicesRef = useRef();
  const dispatch = useDispatch();

  const [notifications] = useState([
    "ABC has sent you a message.",
    "IJK has sent you a message.",
    "XYZ has sent you a message.",
    "Aez has sent you a message.",
  ]);

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/api/admin/signout");
      if (res.status === 200) {
        toast.success("Logout successful!", { position: "top-right" });
        dispatch(signOutSuccess());
        setTimeout(() => {
          navigate("/admin-portal"); // Navigate to the appropriate page after logout
        }, 2000);
      } else {
        toast.error("Logout failed. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Logout Error: ", error.message);
      toast.error("An error occurred during logout.", {
        position: "top-right",
      });
    }
  };

  // Handle click outside for main menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSetActive = (path) => {
    setActiveLink(path);
    navigate(path);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const handleNavigate = (id) => {
    navigate(`/services#${id}`);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const serviceItems = [
    { id: "real-estate-law", label: "Real Estate Law" },
    { id: "divorce-settlement", label: "Divorce Settlement" },
    { id: "employment-law", label: "Employment Law" },
    { id: "insurance-claims", label: "Insurance Claims" },
    { id: "tax-law", label: "Tax Law" },
    { id: "immigration-law", label: "Immigration Law" },
  ];

  return (
    <Navbar fluid rounded className="bg-black w-full overflow-visible">
      <Navbar.Brand href="/">
        <img
          src="/logo/logo2.png"
          className="ml-4 mt-1"
          alt="lawfirm logo"
          height={95}
          width={70}
        />
      </Navbar.Brand>

      {/* Desktop View */}
      <div className="hidden md:flex items-center md:order-2 gap-4">
        {currentUser?.isAdmin ? (
          <button className="">
            <NotificationBell notifications={notifications} />
          </button>
        ) : (
          <div className="flex items-center gap-3 text-white">
            {/* Social Icons - Same as before */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
          </div>
        )}
        <span className="text-white">|</span>
        <button
          onClick={() =>
            currentUser?.isAdmin ? handleLogout() : navigate("/services")
          }
          className={`${
            currentUser?.isAdmin ? "bg-[#FF2200]" : "bg-[#FFD700]"
          } text-sm text-white px-2 py-2 rounded-[3px] hover:scale-105 transition-all`}
        >
          {currentUser?.isAdmin ? "Logout" : "Free Consultation"}
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center gap-4">
        {currentUser?.isAdmin ? (
          <button className="hover:text-[#FFD700] transition duration-300">
            <FaBell size={20} className="text-white hover:text-[#FFD700]" />
          </button>
        ) : (
          <div className="flex items-center gap-3 text-white">
            {/* Social Icons - Mobile */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
                className="hover:text-[#FFD700] transition duration-300"
                size={20}
              />
            </a>
          </div>
        )}
        <span className="text-white">|</span>
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:text-[#FFD700] transition-colors focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transform transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      <Navbar.Collapse
        ref={menuRef}
        className={`ml-2 px-2 font-bold transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-6">
          {!currentUser?.isAdmin && (
            <>
              <Link
                to="/"
                className={`text-xl relative group ${
                  activeLink === "/"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/")}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>

              <Link
                to="/about"
                className={`text-xl relative group ${
                  activeLink === "/about"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/about")}
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>

              <Link
                to="/team"
                className={`text-xl relative group ${
                  activeLink === "/team"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/team")}
              >
                Team
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative group">
                <button
                  className={`text-xl flex items-center ${
                    activeLink === "/services"
                      ? "text-[#FFD700]"
                      : "text-white hover:text-[#FFD700]"
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleServices();
                    } else {
                      handleSetActive("/services");
                    }
                  }}
                >
                  Services
                  <FaChevronDown
                    size={15}
                    className={`ml-2 transform transition-transform duration-300 group-hover:rotate-180`}
                  />
                </button>

                {/* Desktop Dropdown */}
                <div className="hidden md:group-hover:block absolute left-0 top-full w-80 bg-black text-white border border-[#FFD700] rounded-lg shadow-lg z-50">
                  {serviceItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`block w-full text-left  px-8 py-4 text-base hover:bg-[#FFD700] hover:text-white transition ${
                        index === 0 ? "rounded-t-lg" : ""
                      } ${
                        index !== serviceItems.length - 1
                          ? "border-b border-[#FFD700]"
                          : "rounded-b-lg"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Dropdown */}
                <div
                  className={`md:hidden ${
                    isServicesOpen ? "block" : "hidden"
                  } bg-black border-l-2 border-[#FFD700] ml-4 mt-2`}
                >
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className="block w-full text-left px-6 py-3 text-lg text-white hover:bg-[#FFD700] hover:text-white transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                className={`text-xl relative group ${
                  activeLink === "/blog"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/blog")}
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>

              <Link
                to="/contact"
                className={`text-xl relative group ${
                  activeLink === "/contact"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/contact")}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>
            </>
          )}

          {currentUser?.isAdmin && (
            <>
              <Link
                to="/admin-profile"
                className={`text-xl relative group ${
                  activeLink === "/admin-profile"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/admin-profile")}
              >
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>
              <Link
                to="/admin-post"
                className={`text-xl relative group ${
                  activeLink === "/admin-post"
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => handleSetActive("/admin-post")}
              >
                Post
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Free Consultation/Logout Button */}
        <div className="md:hidden mt-6 border-t border-[#FFD700] pt-4">
          <button
            onClick={() =>
              currentUser?.isAdmin ? handleLogout() : navigate("/services")
            }
            className={`${
              currentUser?.isAdmin ? "bg-[#FF2200]" : "bg-[#FFD700]"
            } text-sm text-white px-2 py-3 rounded-[3px] w-full hover:scale-105 transition-all`}
          >
            {currentUser?.isAdmin ? "Logout" : "Free Consultation"}
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
