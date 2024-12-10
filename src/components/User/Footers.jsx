import { Footer } from "flowbite-react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footers = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId) => {
    navigate(`/services#${sectionId}`);
  };

  return (
    <>
      <hr className="border-t-2 border-[#FFD700]" />
      <Footer container className="bg-black">
        <div className="w-full h-auto overflow-hidden">
          <div className="grid w-full gap-4 sm:flex sm:justify-between md:grid-cols-3">
            {/* Left Section */}
            <div className="flex items-center gap-6 mt-2 sm:ml-4 sm:flex-col sm:items-center lg:flex-row lg:items-center lg:justify-start">
              <div className="flex flex-col items-center justify-center sm:w-full">
                <img
                  src="/logo2.png"
                  alt="legal firm logo"
                  className="h-[130px] w-[150px] mt-2 sm:h-[150px] sm:w-[150px] object-contain"
                />
                <span className="text-white text-2xl font-bold text-center ">
                  GC Law
                  <br /> Chamber
                </span>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-start gap-4 mt-6 sm:ml-6 sm:flex-col sm:items-center lg:flex-row lg:items-start lg:justify-start">
                {/* Social Media Section */}
                <div className="flex flex-col gap-4 mt-4 sm:mt-4 sm:ml-0 text-white lg:flex lg:flex-col lg:gap-4 w-[250px] sm:w-[350px]">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt size={15} />
                    <span className="sm:text-xl truncate">
                      : +977 9846678402
                    </span>
                  </div>
                  <a
                    href="mailto:gclawchamber@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer"
                  >
                    <FaEnvelope size={15} />
                    <span className="sm:text-xl truncate">
                      :&nbsp;gclawchamber@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors duration-300"
                  >
                    <FaFacebook size={20} />
                    <span className="sm:text-xl truncate">
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
                    <span className="sm:text-xl truncate">
                      :&nbsp;GC Law Chamber
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Center Section */}
            <div className="ml-4 grid grid-cols-1 gap-8 mt-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-12">
              <div className="w-full">
                <Footer.Title
                  title="Quick Links"
                  className="mb-2 text-[#FFD700] text-lg"
                />
                <Footer.LinkGroup col>
                  <div className="text-white space-y-3 mt-2">
                    <a className="flex items-center gap-2 text-base cursor-pointer">
                      <span>Employment Law</span>
                    </a>
                    <a className="flex items-center gap-2 text-base cursor-pointer">
                      <span>Labour Law</span>
                    </a>
                    <a className="flex items-center gap-2 text-base cursor-pointer">
                      <span>Immigration Law</span>
                    </a>
                    <a className="flex items-center gap-2 text-base cursor-pointer">
                      <span>Taxation Law</span>
                    </a>
                  </div>
                </Footer.LinkGroup>
              </div>

              <div className="w-full">
                <Footer.Title
                  title="Services"
                  className="mb-2 text-[#FFD700] text-lg"
                />
                <Footer.LinkGroup col>
                  <div className="text-white space-y-3 mt-2">
                    <a
                      className="flex items-center gap-2 text-base cursor-pointer"
                      onClick={() => handleNavigate("employment-law")}
                    >
                      <span>Employment Law</span>
                    </a>
                    <a
                      className="flex items-center gap-2 text-base cursor-pointer"
                      onClick={() => handleNavigate("insurance-claims")}
                    >
                      <span>Insurance Law</span>
                    </a>
                    <a
                      className="flex items-center gap-2 text-base cursor-pointer"
                      onClick={() => handleNavigate("immigration-law")}
                    >
                      <span>Immigration Law</span>
                    </a>
                    <a
                      className="flex items-center gap-2 text-base cursor-pointer"
                      onClick={() => handleNavigate("tax-law")}
                    >
                      <span>Taxation Law</span>
                    </a>
                  </div>
                </Footer.LinkGroup>
              </div>

              <div className="w-full">
                <Footer.Title
                  title="Legal"
                  className="mb-2 text-[#FFD700] text-lg"
                />
                <Footer.LinkGroup col>
                  <a
                    href="#"
                    className="text-white text-base no-underline hover:no-underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-white text-base no-underline hover:no-underline"
                  >
                    Terms &amp; Conditions
                  </a>
                  <a
                    href="#"
                    className="text-white text-base no-underline hover:no-underline"
                  >
                    Disclaimer
                  </a>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <Footer.Divider />

          <div className="flex flex-wrap items-center justify-center gap-4 text-center px-1 md:px-8">
            <div className="flex items-center gap-1 text-sm md:text-base">
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
