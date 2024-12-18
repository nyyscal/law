import { Footer } from "flowbite-react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footers = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId) => {
    navigate(`/services#${sectionId}`);
  };

  const openDocument = (docUrl) => {
    window.open(docUrl, "_blank");
  };

  return (
    <>
      <hr className="border-t-2 border-[#FFD700]" />
      <Footer container className="bg-black p-4 ">
        <div className="w-full h-auto overflow-hidden">
          <div className="grid w-full gap-4 sm:flex sm:justify-between md:grid-cols-3 p-2">
            {/* Left Section */}
            <div className="flex items-center gap-6 pl-6 mb-2 sm:ml-4 sm:flex-col sm:items-center lg:flex-row lg:items-center lg:justify-start">
              <div className="flex flex-col items-center justify-center sm:w-full">
                <img
                  src="/logo/logo2.png"
                  alt="legal firm logo"
                  className="h-[130px] w-[150px] mt-2 sm:h-[120px] sm:w-[120px] object-contain"
                />
                <span className="text-white text-xl font-bold text-center hover:text-[#FFD700] hover:cursor-pointer ">
                  GC Law
                  <br /> Chamber
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-start gap-4 mt-6 ml-2 sm:ml-6 sm:flex-col sm:items-center lg:flex-row lg:items-start lg:justify-start lg:mt-0">
                {/* Social Media Section */}
                <div className="flex flex-col gap-4 mt-4 sm:mt-4 sm:ml-0 text-white lg:flex lg:flex-col lg:gap-4 w-[250px] sm:w-[350px]">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt size={15} />
                    <span className="sm:text-base text-sm truncate">
                      : +977 9846678402
                    </span>
                  </div>
                  <a
                    href="mailto:gclawchamber@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer"
                  >
                    <FaEnvelope size={15} />
                    <span className="sm:text-base text-sm truncate">
                      :&nbsp;gclawchamber@gmail
                    </span>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors duration-300"
                  >
                    <FaFacebook size={20} />
                    <span className="sm:text-base text-sm truncate">
                      :&nbsp;GC Law Chamber
                    </span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors duration-300"
                  >
                    <FaInstagram size={20} />
                    <span className="sm:text-base text-sm truncate">
                      :&nbsp;GC Law Chamber
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Center and Right Sections - Modified for mobile layout */}
            <div className="ml-0 grid grid-cols-2 gap-y-4 gap-x-0 mt-3 px-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-8 lg:mr-4">
              {/* Quick Links Section */}
              <div className="w-[80%]">
                <h3 className="mb-2 text-[#FFD700] text-lg font-semibold">
                  Quick Links
                </h3>
                <ul className="text-white space-y-3 mt-2">
                  <li>
                    <button className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300">
                      <span>Court Marriage</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300">
                      <span>FIR Report</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300">
                      <span>Corporate Law</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300">
                      <span>Foreign Court</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services Section */}
              <div className="w-full">
                <h3 className="mb-2 mr-2 text-[#FFD700] text-lg font-semibold">
                  Services
                </h3>
                <ul className="text-white space-y-3 mt-2">
                  <li>
                    <button
                      onClick={() => handleNavigate("employment-law")}
                      className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <span>Employment Law</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("insurance-claims")}
                      className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <span>Insurance Law</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("immigration-law")}
                      className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <span>Immigration Law</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("tax-law")}
                      className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                    >
                      <span>Taxation Law</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="w-full ">
                {/* Legal Section */}
                <div className="w-full">
                  <h3 className="mb-2 text-[#FFD700] text-lg font-semibold">
                    Legal
                  </h3>
                  <ul className="text-white space-y-3 mt-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                      >
                        <span>Terms &amp; Conditions</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-base cursor-pointer hover:text-[#FFD700] transition-colors duration-300"
                      >
                        <span>Disclaimer</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Footer.Divider className="my-2 lg:my-2" />

          <div className="flex flex-wrap items-center justify-center gap-4 text-center px-1 md:px-8">
            <div className="flex items-center gap-1 text-sm md:text-sm">
              <Footer.Copyright
                href="/"
                by="Law Firm™"
                year={new Date().getFullYear()}
                className="text-gray-400"
              />
              <span className="text-gray-400">| All rights reserved</span>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footers;
