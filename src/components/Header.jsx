import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-[#161414]">
      <Navbar.Brand href="/">
        <img src="/logo1.png" alt="lawfirm logo" height={100} width={70} />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Make an appointment</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-white relative group">
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-white relative group">
          About
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-white relative group">
          Services
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Navbar.Link>
        <Navbar.Link href="/blog" className="text-white relative group">
          Blog
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-white relative group">
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
