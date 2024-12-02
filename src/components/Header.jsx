import { Button, Navbar } from "flowbite-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded className="bg-[#161414]">
      <Navbar.Brand href="/">
        <img src="/logo1.png" alt="lawfirm logo" height={100} width={70} />
      </Navbar.Brand>
      <div className="flex items-center md:order-2 gap-4">
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 text-white">
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
        {/* Pipe Separator */}
        <span className="text-white">|</span>
        {/* Free Consultation Button */}
        <button
          onClick={() => navigate("/services")}
          className="bg-[#FFD700] text-black px-2 py-2 rounded-[3px] hover:transition smooth"
        >
          Free Consultation
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="ml-10 font-bold">
        <Navbar.Link
          href="/"
          className="text-white relative group text-xl hover:text-[#FFD700] "
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]"></span>
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="text-white relative group text-xl hover:text-[#FFD700]"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]"></span>
        </Navbar.Link>
        <Navbar.Link
          href="/services"
          className="text-white relative group text-xl hover:text-[#FFD700]"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]"></span>
        </Navbar.Link>
        <Navbar.Link
          href="/blog"
          className="text-white relative group text-xl hover:text-[#FFD700]"
        >
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]"></span>
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          className="text-white relative group text-xl hover:text-[#FFD700]"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-[#FFD700]"></span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
