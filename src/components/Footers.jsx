import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Footers() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-row gap-2">
            <img
              src="/logo.png"
              alt="legal firm logo"
              className="h-[100px] w-[100px] ml-16"
            />
            <span className="flex items-center justify-center w-80 text-black dark:text-white">
              Dedicated to providing expert legal services with integrity and
              professionalism. Contact us for personalized legal solutions
              tailored to your needs.
            </span>
          </div>

          <div className="ml-4 grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="contact"
                className="mb-2 text-black dark:text-white"
              />
              <Footer.LinkGroup col>
                <span className="text-black dark:text-white">
                  Phone: +977 9801234567,
                  <br />
                  +977 0123456789 <br />
                  Email: company@company.com
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Address"
                className="mb-2 text-black dark:text-white"
              />
              <Footer.LinkGroup col>
                <span className="text-black dark:text-white">
                  Location: 4th floor, Pokhara Center <br /> (Trade Mall),
                  Pokhara-14 <br />
                  Kaski 3300, Nepal
                </span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="mb-2 text-black dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-black dark:text-white hover:underline"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-black dark:text-white hover:underline"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex flex-wrap items-center justify-center gap-4 text-center px-4 md:px-8">
          <div className="flex items-center gap-1 text-sm md:text-base">
            <Footer.Copyright
              href="/"
              by="Law Firm™"
              year={new Date().getFullYear()}
              className="text-black dark:text-white"
            />
            <span className="text-black dark:text-white">
              | All rights reserved
            </span>
          </div>
        </div>
      </div>
    </Footer>
  );
}
