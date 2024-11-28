import { useLocation } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="/logo.png"
        //   className=" mr-3 sm:h-9"
                  alt="lawfirm logo"
                  height={100} width={70}
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Make an appointment</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" >Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/blog">Blog</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
