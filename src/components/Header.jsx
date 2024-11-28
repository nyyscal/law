import { Button, Navbar } from "flowbite-react";
const Header = () => {
  return (
    <Navbar fluid rounded className="opacity-75">
      <Navbar.Brand href="/">
        <img
          src="/logo.png"
          className="h-[100px] w-[100px] ml-20"
          alt="lawfirm logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Free Consultation</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className="text-lg">
          About
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="/blog" className="text-lg">
          Blog
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
